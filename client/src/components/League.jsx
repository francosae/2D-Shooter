import React from 'react'

function League(props) {
const leagueInfo = {
    Tier: props.leagueData.tier,
    Rank: props.leagueData.rank,
    LP: props.leagueData.leaguePoints,
    Wins: props.leagueData.wins,
    Losses: props.leagueData.losses,
    leagueId: props.leagueData.leagueId,
}
const summonerId = {
  ID: props.playerData.id
}
const winRate = Math.round((leagueInfo.Wins /(leagueInfo.Wins + leagueInfo.Losses)) * 100)

  return (
    <div className="RankData"> {props.leagueData.length !== 0 ? // Preventing displaying nothing
    
        <>
        <p><b>RANK:</b> {leagueInfo.Tier} {leagueInfo.Rank} <b>LP: </b> {leagueInfo.LP}</p>
        <p><b>WINS:</b> {leagueInfo.Wins} <b>LOSSES:</b> {leagueInfo.Losses}</p> <p><b>WIN RATE:</b> {winRate}%</p>
        
        </>:<></>}
    </div>
  )
}

export default League