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
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading (true);
    fetch("https://api.github.com/users/jdana111")
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);
  if (loading) return <h1>Loading...</h1>;
  if (error) return (<pre>{JSON.stringify(error)}</pre>)
  if (data) return <GitHubUser name={data.name} location={data.location} avatar_url={data.avatar_url} />;
}

export default App;
