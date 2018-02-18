import React from 'react'
import Table from './Table'
import './Football.css'

function Football({data}) {
    return (
        <div className="Football">
            <header className="Football__Header">
            <h1 className="Football__Title">{data.leagueCaption}</h1>
            </header>
            <div className="Records">
                <Table standings={data.standing} />
            </div>
        </div>    
    )
}

export default Football