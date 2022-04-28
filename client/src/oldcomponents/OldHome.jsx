import React from 'react'
import {Route, Link, Router, Routes} from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import axios from 'axios';
import Profile from './components/Profile';


function Home() {
const [searchText, setSearchText] = useState("");
const [playerData, setPlayerData] = useState([]);

function getPlayerData(event) {
  axios.get("http://localhost:4000/summonerData", { params: { username: searchText}})
  .then(function (response) {
    setPlayerData(response.data[0]);
    console.log(response.data[0])
  }).catch(function (error){
    console.log(error);
  })
}

/* function lplayerData(event){
    getLeagueData();
    getPlayerData();
    getPlayerGames();
  }
  */
  return (
    <>
    <div className="Title">Summoner Recap</div>
    <div className="Subtitle">League of Legends Account Searcher</div>
    <div className="InputBox">
   {/*  <input type="text" class="input-text" placeholder="Enter a Summoner Name"></input>   */}
      <Link to="/Test"><button class="button" >Go!</button></Link>                            {/*onClick={(e) => {lplayerData(e)        onChange={e => setSearchText(e.target.value)*/ }
    </div>
    </>
  )

}

export default Home