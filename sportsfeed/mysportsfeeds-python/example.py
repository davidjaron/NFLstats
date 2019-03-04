from ohmysportsfeedspy import MySportsFeeds

Data_query = MySportsFeeds('1.2',verbose=True)
Data_query.authenticate('YOUR_API_KEY', 'YOUR_ACCOUNT_PASSWORD')
Output = Data_query.msf_get_data(league='nba',season='2016-2017-regular',feed='player_gamelogs',format='json',player='stephen-curry',force='true')

print(Output)

Data_query = MySportsFeeds('2.0',verbose=True)
Data_query.authenticate('YOUR_API_KEY', 'MYSPORTSFEEDS')
Output = Data_query.msf_get_data(league='nfl',season='2017-regular',feed='seasonal_standings',format='json',force='true')

print(Output)

