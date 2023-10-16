import{ useState } from "react";


function App() {
const [result, setResult] = useState(0);
const [Oppa, setOppa] = useState(0);



function addRatio(){
  setResult(result + 1);
  console.log("Funkcija izsaukta")
  console.log("result ir" + result)
}

  return (
    <div className="App">
      <button onClick={addRatio}>Gang +1 + ratio</button>
      <h1>{result}</h1>
    </div>
    
  );
}

export default App;
