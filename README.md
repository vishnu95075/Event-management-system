# Event management system (GyanGrove)
## RESTful API Node Express MySQL 

The project builds RESTful APIs using Node.js, Express and MySQL, ...

### Manual Installation

Clone the repo:

```bash
git clone https://github.com/vishnu95075/Event-management-system.git

cd Event-management-system

```

Install the dependencies:

```bash
npm install
```

### Commands

Running in development:

```bash
npm start
# or
npm run dev
```

### Environment Variables

The environment variables can be found and modified in the `.env` file in root directory.

```bash
# Port
PORT = # default 4000
PORT=4000
WEATHER_API_CODE=KfQnTWHJbg1giyB_Q9Ih3Xu3L9QOBDTuU5zwqVikZepCAzFut3rqsg
DISTANCE_API_CODE=IAKvV2EvJa6Z6dEIUqqd7yGAu7IZ8gaH-a0QO6btjRc1AzFu8Y3IcQ

# MySQL 

MYSQL_ADDON_HOST=
MYSQL_ADDON_DB=
MYSQL_ADDON_USER=
MYSQL_ADDON_PORT=
MYSQL_ADDON_PASSWORD=
```
### API Endpoints

Data creation API:

`POST API   http://localhost:4000/event`


Row data json


```
{
        "event_name": "Road campaign Ranchi ",
        "city_name": "Ranchi Jhakhand",
        "date":  "2014-06-02",
        "time": "03:30:00",
        "latitude": 1.2837563284758176,
        "longitude": 116.19056603588348
}
```


Event Finder API:



`GET API  http://localhost:4000/events/find?page=1`

Row data json


```
{
       
    "user_latitude":40.7128, // This User Latitude
    "user_longitude": -74.0060 //This User Longitude

}
```



### Live API Test Demo

https://github.com/vishnu95075/Event-management-system/assets/75454756/653aa9a6-9364-4ad6-be96-866d546b21d6

