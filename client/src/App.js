import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import {Route, Link, Router, Routes, useLocation} from 'react-router-dom';

//Components
import Home from "./Home";
import Test from './Test';

function App() {
  const [searchText, setSearchText] = useState("");
  const [gameList, setGameList] = useState([]);
  const [playerData, setPlayerData] = useState([]);
  const [leagueData, setLeagueData] = useState([]);
  const [rankLeagues, setRankLeague] = useState([]);

  function getPlayerGames(event) {
    axios.get("http://localhost:4000/past5Games", { params: { username: data}})
    .then(function (response) {
      setGameList(response.data);
      console.log(response)
    }).catch(function (error){
      console.log(error);
    })
  }

  function getPlayerData(event) {
    axios.get("http://localhost:4000/summonerData", { params: { username: data}})
    .then(function (response) {
      setPlayerData(response.data[0]);
      console.log(response.data[0])
    }).catch(function (error){
      console.log(error);
    })
  }

  function getLeagueData(event) {
    axios.get("http://localhost:4000/leagueData", { params: { id: playerData.id}})
    .then(function (response){
      setLeagueData(response.data[0])
      console.log(response.data[0])
    }).catch(function (error){
      console.log(error);
    })
  }
  
  const dataFunction = async () => { 
    getPlayerData();
    getPlayerGames();
  }



  return (
    <>
    <div className="Container"  style={divStyle}>
      <Routes>
        <Route exact path="/" element={<Home searchInput={searchInfo} dataFunction={dataFunction} />} />
        <Route exact path="/Test" element={<Test playerData={playerData} leagueData={leagueData} gameList={gameList} getLeague={getLeagueData} />} />
      </Routes>
    </div>
    </>
  );
}

/*
      <div className='Background' style={divStyle}>
      </div>

    <Profile playerData={playerData}/>
    <League leagueData={leagueData} playerData={playerData}/>
    <Matches gameList={gameList} summonerName={searchText} />
*/

export default App;
/*
    <div className="Container">
        <h2>Search For a Player!</h2>
        <input type="text" onChange={e => setSearchText(e.target.value)}></input>
        <button class="button" onClick={(e) => {getPlayerData(e)}}>Search for Player</button>
          <Profile playerData={playerData}/>
          <button class="button" onClick={(e) => {getLeagueData(e)}}>Show Rank Info</button>
          <League leagueData={leagueData} playerData={playerData}/>
          <button class="button" onClick={(e) => {getPlayerGames(e)}}>See Match History</button>
          <Matches gameList={gameList} summonerName={searchText} />
    </div>


        <>
    <div className="Container" style={divStyle}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Test" element={<Test />} />
      </Routes>
    </div>
    </>


        <>
    <div className="Container"  style={divStyle}>
      <Routes>
        <Route exact path="/" element={<Home test={inputData}/>} />
        <Route exact path="/Test" element={<Test test={inputData}/>} />
      </Routes>
          <input type="text" class="input-text" onChange={e => setSearchText(e.target.value)} placeholder="Enter a Summoner Name"></input>   
          <Profile playerData={playerData}/>
          <League leagueData={leagueData} playerData={playerData}/>
          <Matches gameList={gameList} summonerName={searchText} />
    </div>
    </>


*/

/// Temporary way of loading a random background.

const imgUrl = "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/"
const championList = [
  "Aatrox","Ahri","Akali","Alistar","Amumu","Anivia","Annie","Aphelios","Ashe","AurelionSol","Azir",
  "Bard","Blitzcrank","Brand","Braum","Caitlyn","Camille","Cassiopeia","Chogath","Corki","Darius","Diana",
  "DrMundo","Draven","Ekko","Elise","Evelynn","Ezreal","Fiddlesticks","Fiora","Fizz","Galio","Gangplank","Garen",
  "Gnar","Gragas","Graves","Hecarim","Heimerdinger","Illaoi","Irelia","Ivern","Janna","JarvanIV","Jax","Jayce","Jhin",
  "Jinx","Kaisa","Kalista","Karma","Karthus","Kassadin","Katarina","Kayle","Kayn","Kennen","Khazix","Kindred","Kled","KogMaw",
  "Leblanc","LeeSin","Leona","Lillia","Lissandra","Lucian","Lulu","Lux","Malphite","Malzahar","Maokai","MasterYi","MissFortune",
  "Mordekaiser","Morgana","Nami","Nasus","Nautilus","Neeko","Nidalee","Nocturne","Nunu","Olaf","Orianna","Ornn",
  "Pantheon","Poppy","Pyke","Qiyana","Quinn","Rakan","Rammus","RekSai","Rell","Renekton","Rengar","Riven","Rumble","Ryze",
  "Samira","Sejuani","Senna","Seraphine","Sett","Shaco","Shen","Shyvana","Singed","Sion","Sivir","Skarner","Sona","Soraka",
  "Swain","Sylas","Syndra","TahmKench","Taliyah","Talon","Taric","Teemo","Thresh","Tristana","Trundle","Tryndamere","TwistedFate",
  "Twitch","Udyr","Urgot","Varus","Vayne","Veigar","Velkoz","Vi","Viktor","Vladimir","Volibear","Warwick","MonkeyKing","Xayah","Xerath",
  "XinZhao","Yasuo","Yone","Yorick","Yuumi","Zac","Zed","Ziggs","Zilean","Zoe","Zyra"
]
const randomChampion = Math.floor(Math.random()* championList.length);

let backgroundImg = imgUrl + championList[randomChampion] + "_0.jpg";
console.log(backgroundImg)
const divStyle = {
  backgroundImage: 'url(' + backgroundImg + ')',
}

