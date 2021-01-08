
// import React, { useState } from 'react';

import React, {Component}  from 'react'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
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
  }
})
}
  render(){
  return (
    <div>
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