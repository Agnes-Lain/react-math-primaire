import EquationRow from "./EquationRow";
import Button from "./Button"
import {useState} from "react"


export default function Equations({data, showCorrections}) {

  let equationList = []
  for (let i=0; i < data.length ;i++) {
    let equationData = data[i]
    let element = <EquationRow equationData={equationData} showCorrections={showCorrections}key={i} />
    equationList.push(element)
  }
  // console.log(equationList)

  return (
    <>
      <h2>Voilà les exercices pour toi :)</h2>
      {equationList}
    </>
  )
}
