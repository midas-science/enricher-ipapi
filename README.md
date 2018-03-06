# enricher-ipapi

An ipapi.co enricher for midas. ipapi gives you a geo location information to a given ip-address.


#### Example

Enrich any CSV, XLSX or JSON file with data from ipapi.co

###### Source file

```csv
ip_address
132.66.7.104	
125.161.131.190	
123.160.204.40	
114.125.212.164	
113.162.119.60
```	

###### Enriched target result

```csv
ip_address,city,region,country_name, ...
132.66.7.104,Ramat HaSharon,Tel Aviv,Israel, ...
125.161.131.190,Jakarta,Jakarta,Indonesia, ...
123.160.204.40,Zhengzhou,Henan,China, ...
114.125.212.164,Jakarta,Jakarta,Indonesia, ...
113.162.119.60,Hanoi,Thanh Pho Ha Noi,Vietnam, ...
```	

The ipapi.co API returns more information then shown here. To see full response visit: https://ipapi.co/api/#location-of-a-specific-ip
