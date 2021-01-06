import React, { Component } from 'react'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'

class SongList extends Component {
  renderSongs() {
    console.log(this.props.data)
    return this.props.data.songs.map(song => {
      return (
        <li className="collection-item" key={song.id}>{song.title}</li>
      )
    })
  }
  render() {
    if (this.props.data.loading) { return <div>Loading...</div>}
    return (
      <div className="collection">
        {this.renderSongs()}
      </div>
    )
  }
}


const query = gql`
{ songs {
  id
  title
}}
`

export default graphql(query)(SongList);