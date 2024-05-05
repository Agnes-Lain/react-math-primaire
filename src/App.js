import {useState, useEffect} from "react";
import './App.css';
import { Button, Equations } from './components';
import equationsGenerator from "./tools/equationsGenerator";

function App() {
  const [formula, setFormula] = useState(null);
  const [equations, setEquations]= useState(null);
  const [showCorrections, setShowCorrections] = useState(false);
  const [hasInput, setHasInput] = useState(false)

  useEffect(() => {
    setEquations(null)
    let data = equationsGenerator(10, formula);
    setEquations(data);
  }, [formula]);

  function handleFormulaClick(newFormula) {
    setFormula(newFormula);
    setShowCorrections(false);
    if (hasInput){
      // console.log(document.getElementById("form"))
      document.getElementById("form").reset();
      setHasInput(false);
    }
  }

  function renderEquations() {
    if (!formula) return null;
    return (
      <>
        <Equations data={equations} showCorrections={showCorrections} />
        <Button type="submit" title={"soumettre tes réponses"}/>
      </>
    )
  }

  function handleSubmit(event){
    if (event) {setHasInput(true)}
    event.preventDefault();
    setShowCorrections(true);
    let submitResults = event.target
    for (let i=0; i < equations.length ;i++) {
      // console.log(submitResults[i].value)
      equations[i].input = Number(submitResults[i].value)
      // console.log(equations[i])
    }
  }

  return (
    <div className="App">
      {/* {console.log("in rendering")} */}
      <header className="App-header">
        <h1>♥️ Exercices de Math pour Paul ♥️ </h1>
        <h2>Choisis tes exercices de CE2</h2>
        <div className="mat-config">
          <nav>
            <Button title={"Addition"} onClick={()=>handleFormulaClick("+")}/>
            <Button title={"Soustraction"} onClick={()=>handleFormulaClick("-")}/>
            <Button title={"Multiplication"} onClick={()=>handleFormulaClick("*")}/>
            <Button title={"Division"} onClick={()=>handleFormulaClick("/")}/>
            <Button title={"Mélangés"} onClick={()=>handleFormulaClick("mixed")}/>
          </nav>
        </div>
        <div className="mat-equations">
          <form id="form" autoComplete="off" onSubmit={handleSubmit}>
            {renderEquations()}
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
