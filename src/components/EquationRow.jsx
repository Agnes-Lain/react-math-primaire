import Icon from "./Icon"


export default function EquationRow ({equationData, showCorrections, answer}) {

  function renderIcon () {
    if (showCorrections){
      return(
        <>
          <Icon isCorrect={answer}/>
        </>
      )
    } else {
      return null
    }
  }

  return (
    <>
    <div className="equation-row">
      <label htmlFor={equationData.answer}>{equationData.a} {equationData.formula} {equationData.b} = </label>
      <input className="answer-input right" type="text" id={equationData.answer} name="equation"></input>
      {renderIcon()}
    </div>
    </>
  )
}
