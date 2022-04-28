import React from 'react'
import './App.css'

import Profile from './components/Profile'
import League from './components/League'
import Matches from './components/Matches'
import Home from './Home'

import Games from './components/Games'

import { useState } from 'react';
import axios from 'axios';


const tempIcon = "http://ddragon.leagueoflegends.com/cdn/12.7.1/img/champion/Lux.png"
const tempLink = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/764bbd9c-6d80-481d-8136-96848f01e843/ddx6pds-5e57f5b2-b882-40b0-bd6b-9ac99210d3b3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc2NGJiZDljLTZkODAtNDgxZC04MTM2LTk2ODQ4ZjAxZTg0M1wvZGR4NnBkcy01ZTU3ZjViMi1iODgyLTQwYjAtYmQ2Yi05YWM5OTIxMGQzYjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.QtgPRudew5dAuq71UPJNz4_sQ1E7v-KHz7-BETdRWuw"
const png = ".png"
const champion_img_link = "http://ddragon.leagueoflegends.com/cdn/12.7.1/img/champion/"
const item_img_link = "http://ddragon.leagueoflegends.com/cdn/12.7.1/img/item/"
const imgLink = "http://ddragon.leagueoflegends.com/cdn/12.5.1/img/profileicon/"


export default function Test({playerData, leagueData, gameList, getLeague}) {
  
  const leagueInfo = {
    Tier: leagueData.tier,
    Rank: leagueData.rank,
    LP: leagueData.leaguePoints,
    Wins: leagueData.wins,
    Losses: leagueData.losses,
    leagueId: leagueData.leagueId,
}


  const winRate = Math.round((leagueInfo.Wins /(leagueInfo.Wins + leagueInfo.Losses)) * 100)
  const summonerProfile = {
  summonerName: playerData.name,
  summonerLevel: playerData.summonerLevel,
  profileIcon: playerData.profileIconId,
}
  function detectLeagueData(){if (leagueData.length !== 0){
    return <img src={require('./base-icons/'+ leagueInfo.Tier +'.png')} className='RankedIcon'></img>
  }};
  return (
    <>
    {/*Summoner Profile*/}
    <div className='SummonerProfile'>
    <div className='SummonerName'>{summonerProfile.summonerName}</div>
    <div className='LevelBox'> </div>
    <div className='SummonerLevel'>Lv. {summonerProfile.summonerLevel}</div>
    <img className='SummonerIcon' src={imgLink + summonerProfile.profileIcon + ".png"}></img>
    </div>

    {/*Ranked Profile*/}
    <div className='RankedProfile'>

    <button className='RankButton' onClick={(e) => {getLeague(e)}}>Load Ranked Info</button>
    {detectLeagueData()}
    <div className="Rank">{leagueInfo.Tier} {leagueInfo.Rank}</div>
    <div className='LeaguePoints'>{leagueInfo.LP} LP</div>
    <div className='WinLoss'><p>{leagueInfo.Wins} Wins<br></br>{leagueInfo.Losses} Losses</p></div>
    <div className='WinRate'>{winRate}% Win Rate</div>
    </div>

    <div className='MatchesContainer'>
        <Games gameList={gameList} searchedName={summonerProfile.summonerName} />
      </div>
    </>
  )
}
