import React from 'react'
import './App.css'

import Profile from './components/Profile'
import League from './components/League'
import Matches from './components/Matches'
import Home from './Home'


const tempIcon = "http://ddragon.leagueoflegends.com/cdn/12.7.1/img/champion/Lux.png"
const tempLink = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/764bbd9c-6d80-481d-8136-96848f01e843/ddx6pds-5e57f5b2-b882-40b0-bd6b-9ac99210d3b3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc2NGJiZDljLTZkODAtNDgxZC04MTM2LTk2ODQ4ZjAxZTg0M1wvZGR4NnBkcy01ZTU3ZjViMi1iODgyLTQwYjAtYmQ2Yi05YWM5OTIxMGQzYjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.QtgPRudew5dAuq71UPJNz4_sQ1E7v-KHz7-BETdRWuw"
function OldTest(props) {
  return (
    <>
    {/*Summoner Profile*/}
    <div className='SummonerProfile'>
    <img src="http://ddragon.leagueoflegends.com/cdn/12.7.1/img/profileicon/588.png" className='SummonerIcon'></img>
    <div className='SummonerName'>Doublelift</div>
    <div className='LevelBox'> </div>
    <div className='SummonerLevel'>Lv. 30</div>
    </div>

    {/*Ranked Profile*/}
    <div className='RankedProfile'>
    <img src={tempLink} className='RankedIcon'></img>
    <div className="Rank">Diamond IV</div>
    <div className='LeaguePoints'>63 LP</div>
    <div className='WinLoss'><p>123 Wins<br></br>200 Losses</p></div>
    <div className='WinRate'>53% Win Rate</div>
    </div>
    {/*Matches*/}
    <div className='MatchesContainer'>
    <div className='Matches'>
      <img src={tempIcon} className='PlayerIcon'></img>
      <div className='ChampionName'>Lux</div>
      <div className='PlayerKDA'>3 / 0 / 1</div>
      <div className='PlayerLevel'>Level 15</div>

      <div className='SummonerSpell1'></div>
      <div className='SummonerSpell2'></div>
      <div className='Keystone'></div>
      <div className='Mastery'></div>
      
      <div className='Item0'></div>
      <div className='Item1'></div>
      <div className='Item2'></div>
      <div className='Item3'></div>
      <div className='Item4'></div>
      <div className='Item5'></div>
      <div className='Item6'></div>

      <div className='Player1'>PLAYER</div>
      <div className='Player2'>PLAYER</div>
      <div className='Player3'>PLAYER</div>
      <div className='Player4'>PLAYER</div>
      <div className='Player5'>PLAYER</div>
      <div className='Player6'>PLAYER</div>
      <div className='Player7'>PLAYER</div>
      <div className='Player8'>PLAYER</div>
      <div className='Player9'>PLAYER</div>
      <div className='Player10'>PLAYER</div>
      
      <div className='Player1Name'>TEST</div>
      <div className='Player2Name'>TEST</div>
      <div className='Player3Name'>TEST</div>
      <div className='Player4Name'>TEST</div>
      <div className='Player5Name'>TEST</div>
      <div className='Player6Name'>TEST</div>
      <div className='Player7Name'>TEST</div>
      <div className='Player8Name'>TEST</div>
      <div className='Player9Name'>TEST</div>
      <div className='Player10Name'>TEST</div>

    </div>
    </div>
    </>
  )
}

export default OldTest