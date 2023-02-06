import "./App.css";
import { useState, useEffect } from "react";

function GitHubUser({ name, location, avatar_url }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <img src={avatar_url} height="150" />
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://api.github.com/users/jdana111")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  if (data) return <GitHubUser name={data.name} location={data.location} avatar_url={data.avatar_url} />;
}

export default App;
