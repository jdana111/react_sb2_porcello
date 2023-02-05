import './App.css';
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");
  const submit = (e) => {
    e.preventDefault();
    alert(`title = ${title}, color=${color}`)
    setTitle("");
    setColor("");
  }
  return (
    <form onSubmit={submit}>
      <input type="text" 
        value={title} 
        onChange={event => setTitle(event.target.value)} 
        placeholder='Input a color...' 
      />
      <input 
        type="color" 
        value={color} 
        onChange={event => setColor(event.target.value)} 
      />
      <button>ADD</button>
    </form>
  );
}

export default App;