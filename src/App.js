import React, { Component } from 'react'
import './App.css'
import Club from './Club'

class App extends Component {
  state = {}

  componentDidMount() {
    this._getData()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.data ? this.state.data.leagueCaption : "Loading..."}</h1>
        </header>
        <div className="Records">
          <table>
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
            {this.state.data ? this.state.data.standing.map(club => <Club club={club} />) : ""}
          </table>
        </div>
      </div>
    )
  }
  _getData = async () => {
    const data = await this._callAPI()
    this.setState({
      data
    })
  }

  _callAPI = () => {
    return fetch("http://api.football-data.org/v1/competitions/445/leagueTable", {
      method: 'GET',
      headers: {
        "X-Auth-Token": "e05f3a96051c4b88844c04b134ed8c82",
        "Content-Type": "text/plain"
      }
    })
    .then(res => res.json())
    .catch(err => console.log(err))
  }
}

export default App
