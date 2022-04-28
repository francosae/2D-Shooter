import React from 'react'
import {Route, Link, Router, Routes} from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import axios from 'axios';
import Profile from './components/Profile';


export default function Home({ searchInput, summProfile, dataFunction }) {
const [playerName, setPlayerName] = useState("");
const [playerData, setPlayerData] = useState([]);


function setName(e){
  setPlayerName(e.target.value)
  searchInput(e.target.value)
}

  return (
    <div>
      <div className="Title">Summoner Recap</div>
      <div className="Subtitle">League of Legends Account Searcher</div>
      <input type="text" placeholder="Enter Summoner Name" onChange={e => setName(e)}></input>
      <Link to="/Test"><button class="button" onClick={(e) => {dataFunction(e)}}>Go!</button></Link>   
    </div>
  )
}
