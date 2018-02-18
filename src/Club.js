import React from 'react'
import './Club.css'

function Club({standing}) {
    return (
        <tr>
            <td>{standing.position}</td>
            <td id="teamName"><img src={standing.crestURI} height="20" width="20" alt={standing.teamName} align="left" />{standing.teamName}</td>
            <td>{standing.playedGames}</td>
            <td>{standing.points}</td>
            <td>{standing.wins}</td>
            <td>{standing.draws}</td>
            <td>{standing.losses}</td>
            <td>{standing.goalsAgainst}</td>
            <td>{standing.goals}</td>
            <td>{standing.goalDifference}</td>
        </tr>
    )
}

export default Club