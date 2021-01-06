import React from 'react'

const SongCreate = () => {
  // const [title, setTitle] = useState("")
  // handleChange=(event)=>{
  //   console.log(
  //  event.target.value
  //   )
  // }
  return (
    <div>
      <h3>Create A New Song</h3>
      <form action="">
        <label htmlFor="title">Song Title:</label>
        <input 
        // onChange={handleChange}
        type="text" 
        name="title"
        placeholder="Song"/>
      </form>
      
    </div>
  )
}
export default SongCreate