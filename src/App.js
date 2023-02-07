import "./App.css";
import { useState, useEffect } from "react";

const query = `
query {
  allLifts {
    name, 
    elevationGain, 
    status
  }
}`;

const ops = { 
  method: "POST", 
  headers: { "Content-Type": "application/json"}, 
  body: JSON.stringify({query})
};

function SkiLift({ name, elevationGain, status }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>
        {elevationGain} {status}
      </p>
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch(`https://snowtooth.moonhighway.com/`, ops)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error)}</pre>;
  if (data)
    return (
      <div>
        {data.data.allLifts.map((lift, i) => (
          <SkiLift
            key={i}
            name={lift.name}
            elevationGain={lift.elevationGain}
            status={lift.status}
          />
        ))}
      </div>
    );
}

export default App;
