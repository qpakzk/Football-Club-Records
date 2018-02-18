import React from 'react'
import './Club.css'

function Club({club}) {
    return (
        <tr>
            <th>{club.position}</th>
            <th id="teamName"><img src={club.crestURI} height="20" width="20" alt={club.teamName} align="left" />{club.teamName}</th>
            <th>{club.playedGames}</th>
            <th>{club.points}</th>
            <th>{club.wins}</th>
            <th>{club.draws}</th>
            <th>{club.losses}</th>
            <th>{club.goals}</th>
            <th>{club.goalsAgainst}</th>
            <th>{club.goalDifference}</th>
        </tr>
    )
}

export default Club