import './App.css';
import Greeting from './Greeting';
import { useState } from 'react'

function App() {
  const handleSubmit = (e) => { 
    e.preventDefault();
    // alert(`The name you entered was: ${name}`)
    console.log(name)
    console.log(bio)
  }
  const [name, setName] = useState();
  const [bio, setBio] = useState();

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Name:
        <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} required /><br /><br />
        </label>
        <label>Bio:
        <textarea type="text" id="bio" name="bio" onChange={(e) => setBio(e.target.value)} required /><br /><br />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <Greeting name={name} bio={bio} />
    </div>
  );
}

export default App;
