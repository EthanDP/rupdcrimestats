from bs4 import BeautifulSoup
import requests
import pandas as pd
import numpy as np
import re
from datetime import datetime
import html

class CrimeDataParser:

    def __init__(self):
        pass

    def get_crime_data_html(self, url):
        crime_log_request = requests.get(url)
        return BeautifulSoup(crime_log_request.text, 'lxml')

    def remove_parentheses(self, string):
        return re.sub(r'\([^)]*\)', '', string)
    
    def create_df(self, crime_html_data):
        case_number = [td.text for td in crime_html_data.find_all('td',{'class':'case_number'})]
        crime_type = [self.remove_parentheses(td.text).strip().replace("  ", " ").lower() for td in crime_html_data.find_all('td',{'class':'classification'})]
        location = [html.unescape(td.text).replace("#","") for td in crime_html_data.find_all('td',{'class':'location'})]
        time_reported = [td.text for td in crime_html_data.find_all('td',{'class':'datetime_reported'})]
        status = [td.text for td in crime_html_data.find_all('td',{'class':'disposition'})]

        data = {
            'case_number': case_number,
            'crime_type': crime_type,
            'location': location,
            'time_reported': time_reported,
            'status': status
        }

        df = pd.DataFrame(data = data, columns = data.keys())

        time_format_replacements = {
            'a.m.':'AM',
            'p.m.':'PM',
            'noon':'12:00 PM',
            'midnight':'12:00 AM'
        }

        df = df[df['time_reported'].apply(lambda x: len(x) > 18)]
        df['time_reported'] = df['time_reported'].replace(time_format_replacements, regex=True)

        df['time_reported'] = pd.to_datetime(df['time_reported'], format='%m/%d/%Y %I:%M %p')

        return df
    
