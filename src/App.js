import "./App.css";

let cars = [
  {
    "color": "purple",
    "type": "minivan",
    "registration": new Date('2017-01-03'),
    "capacity": 7
  },
  {
    "color": "red",
    "type": "station wagon",
    "registration": new Date('2018-03-03'),
    "capacity": 5
  }
]

function List({data, renderItem, renderEmpty}) {
  return !data.length ? renderEmpty : 
  <ul>{
    data.map((e, i) => (<li key={i}>{renderItem(e)}</li>))
  }</ul>
}

function App() { return (
  <List 
    data={cars} 
    renderEmpty={<p>This list is empty.</p>} 
    renderItem={(e) => (
      <>
        {e.color} {e.type}, capacity: {e.capacity}
      </>
    )}
  />
)  
}

export default App;
