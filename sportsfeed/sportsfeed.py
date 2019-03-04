from ohmysportsfeedspy import MySportsFeeds

Data_query = MySportsFeeds(version='1.0', verbose=True)
Data_query.authenticate('e68cbd5b-6a91-4e66-960a-e2cda3', 'CS5200data')
Output = Data_query.msf_get_data(league='nfl', season='2017-regular', feed='player_gamelogs', format='csv', team='houston-texans', force='true')

print(Output)
