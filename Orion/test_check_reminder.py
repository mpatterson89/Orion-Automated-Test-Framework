

from urllib.error import HTTPError
import urllib.request
import requests

from Tools.helpers.read_json_file import ReadJSONFile

rjs = ReadJSONFile(**{'path':'/Users/mpatterson/WorkProjects/head/Orion/Orion/orion_config.json'})
sub_node = rjs._json['sub_node_1']['host']
url = "http://" + sub_node + ":"+str(rjs._json['sub_node_1']['port'])+"/"+rjs._json['data_urls']['in_use']
request = urllib.request.Request(url)
result = urllib.request.urlopen(request)

x = result.read()
if str(x) == "b\'false\'":
    print("True!")
else:
    print(str(x)+" != "+"b\'false\'")
    print("False!!")