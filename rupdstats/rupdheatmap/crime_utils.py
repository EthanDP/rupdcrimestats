import pandas as pd
import numpy as np
import json
import seaborn as sns
from datetime import datetime, time
from .data_collection.data_handler import CrimeDataParser

residential_colleges = [
    'Brown College',
    'Duncan College',
    'Martel College',
    'Jones College',
    'McMurtry College',
    'Hanszen College',
    'Wiess College',
    'Sid Richardson College',
    'Baker College',
    'Lovett College',
    'Will Rice College'
]

filter_strings = {
    'time': ['morning', 'afternoon', 'evening', 'night'],
    'status': ['active', 'inactive', 'unfounded', 'arrested'],
    'crime_types': ['assault', 'theft', 'harassment']

}

class CrimeUtils:
    def __init__(self) -> None:
        pass

    def get_frame(self):
        CRIME_DATA_URL = 'https://rupdadmin.rice.edu/crimelog/unskinned/'
        cp = CrimeDataParser()
        data_html = cp.get_crime_data_html(CRIME_DATA_URL)
        return cp.create_df(data_html)

    def format_location_names(self, string):
        return string.lower().replace(" ", "")

    def get_counts(self, df):
        grouped = df.groupby(['location']).size().reset_index()
        grouped.columns = ["location", "count"]
        grouped["location"] = grouped["location"].apply(self.format_location_names)
        return grouped

    def find_unique_locations(self, df):
        return np.unique(df['location'])

    def find_unique_locations(self, df):
        return np.unique(df['crime_type'])

    def find_most_common_crime(self, df):
        crime_counts_zip = list(zip(df['crime_type'].value_counts().sort_index(ascending=True), np.unique(df['crime_type'])))
        crime_counts_zip.sort(key = lambda x: x[0])
        crime_type_ascending = [i[1] for i in crime_counts_zip]
        return crime_type_ascending[-1]
    
    def find_most_dangerous_place(self, df):
        grouped = df.groupby(['location']).size().reset_index()
        print(grouped)
        return grouped.iloc[grouped[0].idxmax()]['location']
    
    def find_crimes_per_day(self, df):
        days = (df.iloc[0]['time_reported'] - df.iloc[-1]['time_reported']).days
        return round(df.shape[0] / days, 2)

    def find_crimes_per_week(self, df):
        return round(self.find_crimes_per_day(df) * 7, 1)

    def crimes_by_location(self, df, location):
        grouped = df.groupby(['location']).size().reset_index()
        grouped.columns = ["location", "count"]
        return grouped.loc[grouped["location"] == location, 'count'].iloc[0]

    def most_common_crime_by_loc(self, df, location):
        grouped = df.groupby(["location", "crime_type"]).count().reset_index()[['location', 'crime_type', 'time_reported']]
        grouped.columns = ['location', 'crime_type', 'count']
        location_df = grouped[grouped["location"] == location].reset_index()
        return location_df.iloc[location_df['count'].idxmax()]['crime_type']
    
    def filter_location(self, df, location):
        return df[df['location'] == location]
    
    def filter_location_group(self, df, cfg='none'):
        if cfg == 'rc':
            return df[df['location'].isin(residential_colleges)]
        elif cfg == 'nrc':
            return df[~df['location'].isin(residential_colleges)]
        else:
            return df
    
    def filter_times(self, df, cfg='none'):
        if cfg == "morning":
            return df[(df["time_reported"].dt.time >= time(hour=5, minute=00)) & (df["time_reported"].dt.time <= time(hour=12, minute=00))]
        elif cfg == "afternoon":
            return df[(df["time_reported"].dt.time >= time(hour=12, minute=00)) & ((df["time_reported"].dt.time <= time(hour=17, minute=00)))]
        elif cfg == "evening":
            return df[(df["time_reported"].dt.time >= time(hour=17, minute=00)) & ((df["time_reported"].dt.time <= time(hour=22, minute=00)))]
        elif cfg == "night":
            return df[(df["time_reported"].dt.time >= time(hour=22, minute=00)) | ((df["time_reported"].dt.time <= time(hour=5, minute=00)))]
        else:
            return df
    
    def filter_status(self, df, cfg='none'):
        if cfg == "active":
            return df[df["status"] == 'Active']
        elif cfg == "arrested":
            return df[df["status"] == 'Criminal ArrestCounty Citiation']
        elif cfg == "unfounded":
            return df[df["status"] == 'Unfounded']
        elif cfg == "inactive":
            return df[df["status"] == 'Inactive']
        else:
            return df
    
    def filter_crime_types(self, df, crime_type=""):
        try:
            return df[df["crime_type"] == crime_type]
        except:
            return df
    
    def create_time_histogram(self, df):
        grouped = df.groupby([df["time_reported"].dt.hour]).count()[["status"]].reset_index()
        plot = sns.barplot(data=grouped, x="time_reported", y="status")
        plot.set(title="Crime Incidents by Hour",xlabel="Hour", ylabel="Incidents Reported")
        fig = plot.get_figure()
        fig.savefig('output.png')
        return open("output.png", "r")


    def create_location_histogram(self, df):
        plt.figure(figsize=(30,10))
        plt.xticks(rotation=75)
        u, inv = np.unique(df['location'], return_inverse=True)
        counts = np.bincount(inv)

        loc_data = {
            "location": u,
            "count": counts
        }

        loc_df = pd.DataFrame(data=loc_data, columns=loc_data.keys())
        sorted_loc_df = loc_df.sort_values('count', ascending=False)
        plot = sns.barplot(data=sorted_loc_df, x="location", y="count",dodge=False)
        plot.set(title="Crime Incidents by Location",xlabel="Location", ylabel="Incidents Reported")
        fig = plot.get_figure()
        fig.savefig('output_bar.png')
        return open("output_bar.png", "r")
    
    def get_location_json(self, df):
        locs = self.get_counts(df)
        location_dict = dict()
        for i, _ in locs.iterrows():
            location_dict[str(locs.iloc[i]['location'])] = int(locs.iloc[i]['count'])
        result = json.dumps(location_dict)
        print(result)
        return result
    
    def generate_report(self, df, location):
        loc_df = self.filter_location(df, location).reset_index()
        print(
            f'Report for {location}:\nTotal Crimes: {self.crimes_by_location(df, location)}\nMost Common Crime: {self.most_common_crime_by_loc(df, location)}\nMost Recent Incident: {loc_df.iloc[0]["crime_type"]} at {loc_df.iloc[0]["time_reported"]}'
            )
    
    def get_filtered_dict(self, df, string_filter):
        if string_filter in filter_strings['time']:
            return self.filter_times(df, string_filter)
        elif string_filter in filter_strings['status']:
            return self.filter_status(df, string_filter)
        elif string_filter in filter_strings['crime_types']:
            return self.filter_crime_types(df, string_filter)
        else:
            return df

if __name__ == '__main__':
    CRIME_DATA_URL = 'https://rupdadmin.rice.edu/crimelog/unskinned/'
    cp = CrimeDataParser()
    cdp = CrimeUtils()
    data_html = cp.get_crime_data_html(CRIME_DATA_URL)
    df = cp.create_df(data_html)
    print(cdp.get_location_json(df))