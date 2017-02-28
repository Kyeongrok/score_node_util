//schedule은 utc이다.
//month는 0부터이므로 -1해줄 것

const scheduleList = [
    {"eventId":"1643377", "sYear":"2017", "sMonth":"2", "sDate":"11"
        , "sHour":"23"  ,"sMinute":"0"  ,"sSecond":"0"
        , "eYear":"2017", "eMonth":"2", "eDate":"12"
        , "eHour":"3"  ,"eMinute":"0"  ,"eSecond":"0"
    },
    {"eventId":"1643371", "sYear":"2017", "sMonth":"2", "sDate":"13"
        , "sHour":"20"  ,"sMinute":"0"  ,"sSecond":"0"
        , "eYear":"2017", "eMonth":"2", "eDate":"13"
        , "eHour":"23"  ,"eMinute":"0"  ,"eSecond":"0"
    },
    {"eventId":"1705947", "sYear":"2017", "sMonth":"2", "sDate":"24"
        , "sHour":"18"  ,"sMinute":"5"  ,"sSecond":"0"
        , "eYear":"2017", "eMonth":"2", "eDate":"24"
        , "eHour":"22"  ,"eMinute":"0"  ,"eSecond":"0"
        , "league":"mlb", "home_team_name":"boston", "away_team_name":"newyork"
    },
    {"eventId":"1724739", "sYear":"2017", "sMonth":"3", "sDate":"1"
        , "sHour":"9"  ,"sMinute":"0"  ,"sSecond":"0"
        , "eYear":"2017", "eMonth":"3", "eDate":"1"
        , "eHour":"12"  ,"eMinute":"0"  ,"eSecond":"0"
        , "league":"npb", "home_team_name":"boston", "away_team_name":"newyork"
    },
    {"eventId":"1724740", "sYear":"2017", "sMonth":"3", "sDate":"2"
        , "sHour":"9"  ,"sMinute":"0"  ,"sSecond":"0"
        , "eYear":"2017", "eMonth":"3", "eDate":"0"
        , "eHour":"12"  ,"eMinute":"0"  ,"eSecond":"0"
        , "league":"npb", "home_team_name":"boston", "away_team_name":"newyork"
    },

]
exports.scheduleList = scheduleList;
