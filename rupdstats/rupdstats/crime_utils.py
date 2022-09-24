import pandas as pd
import numpy as np
from datetime import datetime

class CrimeUtils:
    def __init__(self) -> None:
        pass
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