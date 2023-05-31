const data = 
    [
        {
            "id":"1",
            "name":"bgmi",
            "image":"/PUBG.jpg",
            "description":"Nothing Special",
            "owner":"tencent",
            "type":"battleground",
            "device": "mobile",
            "os":"Android",
            "size":"4GB",
                link: "https://gsf-sp.softonic.com/44f/d47/6c13dd82280a963c5d749538ac5c37db03/Garena_Free_Fire_v1.98.1.apk?signature=8f689f672221ca37beacc094b6eb5732&expires=1685223201&url=https%3A%2F%2Ffree-fire-battlegrounds.en.softonic.com%2Fandroid&filename=Garena_Free_Fire_v1.98.1.apk"
        },
        {
            "id":"2",
            "name":"call of duty",
            "image":"/CALL OF DUTY.jpg",
            "description":"Nothing Special",
            "owner":"Infinity Ward",
            "type":"battleground - multiplayer",
            "device": "mobile pc",
            "os":"Android",
            "size":"2.5GB",
            link: "https://gsf-sp.softonic.com/44f/d47/6c13dd82280a963c5d749538ac5c37db03/Garena_Free_Fire_v1.98.1.apk?signature=8f689f672221ca37beacc094b6eb5732&expires=1685223201&url=https%3A%2F%2Ffree-fire-battlegrounds.en.softonic.com%2Fandroid&filename=Garena_Free_Fire_v1.98.1.apk"
        },
        {
            "id":"3",
            "name":"free fire",
            "image":"/FREE-FIRE.jpg",
            "description":"Nothing Special",
            "owner":"Garena",
            "type":"battleroyale",
            "device": "mobile",
            "os":"Android",
            "size":"650MB",
            link: "https://gsf-sp.softonic.com/44f/d47/6c13dd82280a963c5d749538ac5c37db03/Garena_Free_Fire_v1.98.1.apk?signature=8f689f672221ca37beacc094b6eb5732&expires=1685223201&url=https%3A%2F%2Ffree-fire-battlegrounds.en.softonic.com%2Fandroid&filename=Garena_Free_Fire_v1.98.1.apk"
        },
        {
            "id":"4",
            "name":"valorant",
            "image":"/VALORANT.jpg",
            "description":"Nothing Special",
            "owner":"Riot Games",
            "type":"battleroyale - arena",
            "device": "pc",
            "os":"Windows",
            "size":"10GB",
                link: "https://gsf-sp.softonic.com/44f/d47/6c13dd82280a963c5d749538ac5c37db03/Garena_Free_Fire_v1.98.1.apk?signature=8f689f672221ca37beacc094b6eb5732&expires=1685223201&url=https%3A%2F%2Ffree-fire-battlegrounds.en.softonic.com%2Fandroid&filename=Garena_Free_Fire_v1.98.1.apk"

        },
        {
            "id":"5",
            "name":"gta-5",
            "image":"/GTA-5.jpg",
            "description":"Nothing Special",
            "owner":"Rockstar Games",
            "type":"openworld - multiplayer also",
            "device": "pc",
            "os":"PlayStation 5, Xbox 360,  Windows",
            "size":"20GB",
            
                link: "https://gsf-sp.softonic.com/44f/d47/6c13dd82280a963c5d749538ac5c37db03/Garena_Free_Fire_v1.98.1.apk?signature=8f689f672221ca37beacc094b6eb5732&expires=1685223201&url=https%3A%2F%2Ffree-fire-battlegrounds.en.softonic.com%2Fandroid&filename=Garena_Free_Fire_v1.98.1.apk"
            
        },
        {
            "id":"6",
            "name":"stumble guys",
            "image":"/STUMBLE.jpg",
            "description":"Nothing Special",
            "owner":"Kitka Games",
            "type":"Casual multiplayer",
            "device": "mobile",
            "os":"Android, iOS, Windows",
            "size":"156MB",
            
                link: "https://gsf-sp.softonic.com/44f/d47/6c13dd82280a963c5d749538ac5c37db03/Garena_Free_Fire_v1.98.1.apk?signature=8f689f672221ca37beacc094b6eb5732&expires=1685223201&url=https%3A%2F%2Ffree-fire-battlegrounds.en.softonic.com%2Fandroid&filename=Garena_Free_Fire_v1.98.1.apk"
            
        }
        ,
        {
            "id":"7",
            "name":"stumble guys",
            "image":"/STUMBLE.jpg",
            "description":"Nothing Special",
            "owner":"tencent",
            "type":"Casual multiplayer",
            "device": "pc",
            "os":"Android",
            "size":"2gb",
            
                link: "https://gsf-sp.softonic.com/44f/d47/6c13dd82280a963c5d749538ac5c37db03/Garena_Free_Fire_v1.98.1.apk?signature=8f689f672221ca37beacc094b6eb5732&expires=1685223201&url=https%3A%2F%2Ffree-fire-battlegrounds.en.softonic.com%2Fandroid&filename=Garena_Free_Fire_v1.98.1.apk"
            
        }
    ];

    function getGame(gameId){
        return data[gameId-1];
    }

export default data;
export {getGame};
