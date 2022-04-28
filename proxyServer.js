var express = require('express');
var cors = require('cors');
const axios = require('axios');
const { match } = require('assert');

var app = express();

app.use(cors());



const API_KEY = "RGAPI-978980e2-84f3-41b3-8363-4235aa90b8d6";
function getPlayerPUUID(playerName){
    return axios.get("https://na1.api.riotgames.com" + "/lol/summoner/v4/summoners/by-name/" + playerName + "?api_key=" + API_KEY)
    .then(response => {
        return response.data.puuid
    }).catch(err => err);
}


function getPlayerData(playerName){
    return axios.get("https://na1.api.riotgames.com" + "/lol/summoner/v4/summoners/by-name/" + playerName + "?api_key=" + API_KEY)
    .then(response => {
        return response.data
    }).catch(err => err);
    
}

function getLeagueData(playerID){
    return axios.get("https://na1.api.riotgames.com" + "/lol/league/v4/entries/by-summoner/" + playerID + "?api_key=" + API_KEY)
    .then(response => {
        console.log(response)
        leagueID = response.data[0].leagueId 
        return response.data[0]
    }).catch(err => err);
}
/*

Attemping to retrieve name for the actual rank league and displaying it 


function getRankleague(leagueID){
    return axios.get("https://na1.api.riotgames.com/lol/league/v4/leagues/" + leagueID + "?api_key=" + API_KEY)
    .then(response => {
        console.log("BREAK"+ response.data.name)
        return response.data.name
    }).catch(err => err);
}

/*
app.get('/rankLeague', async (req, res) => {
    const rankLeagues = await getRankleague(leagueID)
    var rankLeaguesArray = [];
    rankLeaguesArray.push(rankLeagues);
    res.json(rankLeaguesArray)
})
*/

app.get('/past5Games', async (req, res) => {
    const playerName = req.query.username;
    const PUUID = await getPlayerPUUID(playerName);
    const API_CALL = "https://americas.api.riotgames.com" + "/lol/match/v5/matches/by-puuid/"+ PUUID + "/ids" + "?api_key=" + API_KEY

    const gameIDs = await axios.get(API_CALL)
    .then(response => response.data)
    .catch(err => err)
    console.log(gameIDs);

    var matchDataArray = [];
    for(var i = 0; i < gameIDs.length - 15; i++) {
        const matchID = gameIDs[i];
        const matchData = await axios.get("https://americas.api.riotgames.com" + "/lol/match/v5/matches/" + matchID + "?api_key=" + API_KEY)
        .then(response => response.data)
        .catch(err => err)
        matchDataArray.push(matchData);

    }
    res.json(matchDataArray)

})

app.get('/summonerData', async (req, res) => {
    const playerName = req.query.username;
    const playerData = await getPlayerData(playerName)
    var playerDataArray = [];
    playerDataArray.push(playerData);
    res.json(playerDataArray)
})

app.get('/leagueData', async (req, res) => {
    const playerID = req.query.id;
    const leagueData = await getLeagueData(playerID)
    console.log(leagueData)
    var leagueDataArray = [];
    leagueDataArray.push(leagueData);
    res.json(leagueDataArray)
})

app.listen(4000, function () {
    console.log("Server started on port 4000");

});
