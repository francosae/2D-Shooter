import React from 'react'
import Matches from './Matches'


const tempIcon = "http://ddragon.leagueoflegends.com/cdn/12.7.1/img/champion/Lux.png"
const tempLink = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/764bbd9c-6d80-481d-8136-96848f01e843/ddx6pds-5e57f5b2-b882-40b0-bd6b-9ac99210d3b3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc2NGJiZDljLTZkODAtNDgxZC04MTM2LTk2ODQ4ZjAxZTg0M1wvZGR4NnBkcy01ZTU3ZjViMi1iODgyLTQwYjAtYmQ2Yi05YWM5OTIxMGQzYjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.QtgPRudew5dAuq71UPJNz4_sQ1E7v-KHz7-BETdRWuw"
const png = ".png"
const champion_img_link = "http://ddragon.leagueoflegends.com/cdn/12.7.1/img/champion/"
const item_img_link = "http://ddragon.leagueoflegends.com/cdn/12.7.1/img/item/"
const imgLink = "http://ddragon.leagueoflegends.com/cdn/12.5.1/img/profileicon/"

const position_img_link = "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-"

function winLoss(status){
  if (status == false){
    return <div className='LossStatus'>Defeat</div>
  } else {
    return <div className='VictoryStatus'>Victory</div>
  }
}
export default function Games({gameList, searchedName}) {
  return (
    <>
    {gameList.length !== 0 ?
        <>
        {gameList.map((gameData, index) => 
        <>
        {gameData.info.participants.map((data, participantIndex) => {if (data.summonerName == searchedName) {
            return (
                <div className={"Matches"+data.win} key={participantIndex} >
                    <div className='GameTime'>Duration: {Math.floor(gameData.info.gameDuration / 60)} minutes</div>
                    <div className={data.win+"bar"}  ></div>
                    <img className='PlayerIcon' src={champion_img_link + data.championName + png}></img>
                    <div className='ChampionName'>{data.championName}</div>
                    <div className='PlayerKDA'>{data.kills}/{data.deaths}/{data.assists} <i>{data.challengeskda}</i></div>
                    <div className='PlayerLevel'>Level {data.champLevel}</div>
                    <img className='Item0' alt="Item0" width='55' height='55' src={item_img_link + data.item0 + png}></img>
                    <img className='Item1' alt="Item1" width='55' height='55' src={item_img_link + data.item1 + png}></img>
                    <img className='Item2' alt="Item2" width='55' height='55' src={item_img_link + data.item2 + png}></img>
                    <img className='Item3' alt="Item3" width='55' height='55' src={item_img_link + data.item3 + png}></img>
                    <img className='Item4' alt="Item4" width='55' height='55' src={item_img_link + data.item4 + png}></img>
                    <img className='Item5' alt="Item5" width='55' height='55' src={item_img_link + data.item5 + png}></img>
                    <img className='Item6' alt="Item5" width='55' height='55' src={item_img_link + data.item6 + png}></img>
                    <img className='Player1' width='40' height='40' alt="ChampionImg" src={champion_img_link + gameData.info.participants[0].championName + png}></img>
                    <img className='Player2' width='40' height='40'alt="ChampionImg"  src={champion_img_link + gameData.info.participants[1].championName + png}></img>
                    <img className='Player3' width='40' height='40'alt="ChampionImg"  src={champion_img_link + gameData.info.participants[2].championName + png}></img>
                    <img className='Player4' width='40' height='40'alt="ChampionImg"  src={champion_img_link + gameData.info.participants[3].championName + png}></img>
                    <img className='Player5' width='40' height='40'alt="ChampionImg"  src={champion_img_link + gameData.info.participants[4].championName + png}></img>
                    <img className='Player6' width='40' height='40'alt="ChampionImg"  src={champion_img_link + gameData.info.participants[5].championName + png}></img>
                    <img className='Player7' width='40' height='40'alt="ChampionImg"  src={champion_img_link + gameData.info.participants[5].championName + png}></img>
                    <img className='Player8' width='40' height='40'alt="ChampionImg"  src={champion_img_link + gameData.info.participants[6].championName + png}></img>
                    <img className='Player9' width='40' height='40'alt="ChampionImg"  src={champion_img_link + gameData.info.participants[7].championName + png}></img>
                    <img className='Player10'width='40' height='40'alt="ChampionImg"  src={champion_img_link + gameData.info.participants[9].championName + png}></img>
                    <div className='Player1Name'>{gameData.info.participants[0].summonerName}</div>
                    <div className='Player2Name'>{gameData.info.participants[1].summonerName}</div>
                    <div className='Player3Name'>{gameData.info.participants[2].summonerName}</div>
                    <div className='Player4Name'>{gameData.info.participants[3].summonerName}</div>
                    <div className='Player5Name'>{gameData.info.participants[4].summonerName}</div>
                    <div className='Player6Name'>{gameData.info.participants[5].summonerName}</div>
                    <div className='Player7Name'>{gameData.info.participants[6].summonerName}</div>
                    <div className='Player8Name'>{gameData.info.participants[7].summonerName}</div>
                    <div className='Player9Name'>{gameData.info.participants[8].summonerName}</div>
                    <div className='Player10Name'>{gameData.info.participants[9].summonerName}</div>
                    {winLoss(data.win)}
                    <img className='RoleIcon' width='45' height='45' alt='RoleIcon' src={position_img_link + data.teamPosition.toLowerCase() + ".png"}></img>
                    <img className='Mastery' width='45' height='45' alt='Mastery' src={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/7200_domination.png"}></img>
                    <img className='Keystone' width='55' height='55' alt='Keystone' src={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/precision/conqueror/conqueror.png"}></img>
                  </div>
                    
            )

        }
        })}</>)}</>:<></>}

    </>
  )
}
