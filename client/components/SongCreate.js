
// import React, { useState } from 'react';

import React, {Component}  from 'react'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import {Link, hashHistory} from 'react-router'
import query from '../queries/fetchSongs'

class SongCreate extends Component{

  constructor(props){
    super(props);
    this.state={title:''}
  }
onSubmit(event){
  event.preventDefault();
  this.props.mutate({
  variables: {
    title: this.state.title
  },
  refetchQueries:[{query:query}]
  }).then(()=> hashHistory.push('/'))
  .catch((err) => console.log(err))
  }
  render(){
  return (
    <div>
      <Link to="/">
          Back
      </Link>
      <h3>Create A New Song</h3>
      <form onSubmit={this.onSubmit.bind(this)}>
        <label htmlFor="title">Song Title:</label>
        <input 
        onChange={(e)=>this.setState({title: e.target.value})}
        value={this.state.title}
        />
      </form>
    </div>
  )
}}
const mutation = gql `
mutation AddSong($title: String){ 
addSong(title:$title) {
  id
  title
	}
}
`
export default graphql(mutation)(SongCreate);

// function SongCreate () {

//   const [title, setTitle] = useState("");

//   return (
//     <div>
//       <h3>Create A New Song</h3>
//       <form>
//         <label htmlFor="title">Song Title:</label>
//         <input 
//         onChange={(e)=>{setTitle(e.target.value)}}
//         // type="text" 
//         // name="title"
//         // placeholder="Enter Song Title"
//         value={title}
//         />
//       </form>
//     </div>
//   )
// }
// export default SongCreate;