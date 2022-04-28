import React from 'react'

function Profile(props) {

const imgLink = "http://ddragon.leagueoflegends.com/cdn/12.5.1/img/profileicon/"
const playerProfile = {
    summonerName: props.playerData.name,
    summonerLevel: props.playerData.summonerLevel,
    profileIcon: props.playerData.profileIconId,
}

  return (
    <div className="SummonerProfile"> {props.playerData.length !== 0 ? // Preventing displaying nothing
    <>

    <h3>
        <b>{playerProfile.summonerName}</b>
    </h3>

    <img width="150" height="150" alt="SummonerIcon" src={imgLink + playerProfile.profileIcon + ".png"}></img>
    
    <h4>
        <b>Summoner Level: </b> {playerProfile.summonerLevel}
    </h4>

    </>:<></>}

    </div>
  )
}

export default Profile