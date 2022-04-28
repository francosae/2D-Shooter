import React from 'react'

function Matches(props) {

const png = ".png"
const champion_img_link = "http://ddragon.leagueoflegends.com/cdn/12.7.1/img/champion/"
const item_img_link = "http://ddragon.leagueoflegends.com/cdn/12.7.1/img/item/"
const Summoner = props.summonerName
  return (
    <div className='MatchHistory'>  {props.gameList.length !== 0 ? // Preventing displaying nothing
        <>
        {props.gameList.map((gameData, index) => 
        <>
        <div></div>
        
        {gameData.info.participants.map((data, participantIndex) => <>
        <table>
            <tr>
                <td>{data.win === true ? <><p>Win</p></>:<>Loss</>}</td>  
                <td>{data.summonerName.toLowerCase() == Summoner.toLowerCase() ? <><b>{data.summonerName}</b></>:<>{data.summonerName}</>}</td>   {/* Making the summoner name bold */}
                <td>{data.kills}/{data.deaths}/{data.assists} <b>{data.challenges.kda.toFixed(2)}</b></td>
                <td><img width="50" height="50" alt="ChampionImg" src={champion_img_link + data.championName + png}></img>{data.lane}</td>
                <td>
                <img width='25' height='25' alt="Item0" src={item_img_link + data.item0 + png}></img>
                <img width='25' height='25' alt="Item1" src={item_img_link + data.item1 + png}></img>
                <img width='25' height='25' alt="Item2" src={item_img_link + data.item2 + png}></img>
                <img width='25' height='25' alt="Item3" src={item_img_link + data.item3 + png}></img>
                <img width='25' height='25' alt="Item4" src={item_img_link + data.item4 + png}></img>
                <img width='25' height='25' alt="Item5" src={item_img_link + data.item5 + png}></img>
                </td>
            </tr>
        </table>
               
                </>)}</>)}</>:<></>}
    </div>
  )
}

export default Matches