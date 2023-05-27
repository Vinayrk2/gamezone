const data = 
    [
        {
            "id":"1",
            "name":"bgmi",
            "image":"/PUBG.jpg",
            "description":"Nothing Special",
            "owner":"tencent",
            "type":"battleground",
            "os":"Android",
            "size":"4GB"
        },
        {
            "id":"2",
            "name":"call of duty",
            "image":"/CALL OF DUTY.jpg",
            "description":"Nothing Special",
            "owner":"Infinity Ward",
            "type":"battleground - multiplayer",
            "os":"Android",
            "size":"2.5GB"
        },
        {
            "id":"3",
            "name":"free fire",
            "image":"/FREE-FIRE.jpg",
            "description":"Nothing Special",
            "owner":"Garena",
            "type":"battleroyale",
            "os":"Android",
            "size":"650MB"
        },
        {
            "id":"4",
            "name":"valorant",
            "image":"/VALORANT.jpg",
            "description":"Nothing Special",
            "owner":"Riot Games",
            "type":"battleroyale - arena",
            "os":"Windows",
            "size":"10GB"
        },
        {
            "id":"5",
            "name":"gta-5",
            "image":"/GTA-5.jpg",
            "description":"Nothing Special",
            "owner":"Rockstar Games",
            "type":"openworld - multiplayer also",
            "os":"PlayStation 5, Xbox 360, Microsoft Windows",
            "size":"20GB"
        },
        {
            "id":"6",
            "name":"stumble guys",
            "image":"/STUMBLE.jpg",
            "description":"Nothing Special",
            "owner":"Kitka Games",
            "type":"Casual multiplayer",
            "os":"Android, iOS, Microsoft Windows",
            "size":"156MB"
        }
        ,
        {
            "id":"7",
            "name":"stumble guys",
            "image":"/STUMBLE.jpg",
            "description":"Nothing Special",
            "owner":"tencent",
            "type":"Casual multiplayer",
            "os":"Android",
            "size":"2gb"
        }
    ];

    function getGame(gameId){
        return data[gameId-1];
    }

export default data;
export {getGame};
