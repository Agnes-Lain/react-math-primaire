import {useState, useEffect} from "react";
import './App.css';
import { Button, Equations } from './components';
import equationsGenerator from "./tools/equationsGenerator";

function App() {
  const [formula, setFormula] = useState(null);
  const [equations, setEquations]= useState(null);
  const [showCorrections, setShowCorrections] = useState(false);
  const [hasInput, setHasInput] = useState(false)
  const [answers, setAnswers] = useState(new Array(10).fill(null))

  useEffect(() => {
    setEquations(null)
    let data = equationsGenerator(10, formula);
    setEquations(data);
  }, [formula]);

  function handleFormulaClick(newFormula) {
    setFormula(newFormula);
    setShowCorrections(false);
    if (hasInput){
      document.getElementById("form").reset();
      setHasInput(false);
    }
  }

  function renderEquations() {
    if (!formula) return null;
    return (
      <>
        <Equations data={equations} showCorrections={showCorrections} answers={answers} />
        <Button type="submit" title={"soumettre tes réponses"}/>
      </>
    )
  }

  function handleSubmit(event){
    if (event) {setHasInput(true)}
    event.preventDefault();
    setShowCorrections(true);
    let submitResults = event.target
    let check_answers = []
    for (let i=0; i < equations.length ;i++) {
      // console.log(submitResults[i].value)
      check_answers.push(equations[i].answer === Number(submitResults[i].value))
      // console.log(equations[i])
    }
    setAnswers(check_answers)
  }

  return (
    <div className="App">
      {/* {console.log("in rendering")} */}
      <header className="App-header">
        <h1>♥️ Exercices de Math pour Paul ♥️ </h1>
        <h3>Choisis tes exercices de CE2</h3>
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
