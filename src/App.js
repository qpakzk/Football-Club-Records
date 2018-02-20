import React, { Component } from 'react'
import './App.css'
import Football from './Football'

class App extends Component {
  state = {}

  componentDidMount() {
    this._getData()
  }

  render() {
    return (
      <div className="App">
        {this.state.data ? <Football data={this.state.data} /> : "Loading..."}
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
    return fetch("https://api.football-data.org/v1/competitions/445/leagueTable", {
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
