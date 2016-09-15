from urllib.error import HTTPError
import urllib.request
import requests

from Tools.helpers.read_json_file import ReadJSONFile

rjs = ReadJSONFile(**{'path':'/Users/mpatterson/WorkProjects/head/Orion/Orion/orion_config.json'})
sub_node = rjs._json['sub_node_1']['host']
url = "http://" + sub_node + ":6437/test_completed_notification"
request = urllib.request.Request(url)
result = urllib.request.urlopen(request)

print(result.read())