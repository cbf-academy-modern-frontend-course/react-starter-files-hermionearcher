import './App.css';
import Greeting from './Greeting';

function App() {
  return (
    <div className="App">
      <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required /><br /><br />
        <label for="bio">Bio:</label>
        <input type="text" id="bio" name="bio" required /><br /><br />
        <input type="submit" value="Submit" />
      </form>
      <Greeting name="" bio="" />
    </div>
  );
}

export default App;
