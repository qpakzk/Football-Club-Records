import React from 'react'
import Club from './Club';
import './Table.css'

function Table({standings}) {
    return (
        <table>
            <TableHeader />
            {standings.map(standing => <Club standing={standing} />)}
        </table>
    )
}

function TableHeader() {
    return (
        <tr>
            <th></th>
            <th>Club</th>
            <th>GP</th>
            <th>PTS</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GF</th>
            <th>GA</th>
            <th>GD</th>
        </tr>
    )
}

export default Table