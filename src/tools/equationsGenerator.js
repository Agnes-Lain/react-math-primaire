export default function equationsGenerator (quantity, calFormula) {
  let data = [];
  // console.log(formula)
  for (let i=0; i < quantity ;i++) {
    let numMax = 0;
    let equation = {}
    let formula = calFormula
    const formula_arr = ["+", "-", "*", "/"];
    if (formula === "mixed") {
      formula = formula_arr[Math.floor(Math.random() * formula_arr.length)];
    };
    if (formula === "+" || formula === "-") {numMax = 100} else { numMax = 10}
    let a = Math.floor(Math.random() * numMax);
    let b = Math.floor(Math.random() * numMax);
    let answer = 0;
    switch(formula) {
      case "+":
        answer = a + b;
        break
      case '-':
        if (a >= b){
          answer = a - b;
        } else {
          answer = b - a
          a = b
          b = a - answer;
        }
        break
      case '*':
        answer = a * b;
        break
      case "/":
        answer = a;
        a = answer * b;
        break
      default:
        console.log("missing formula")
        break
    }
    equation["a"] = a;
    equation["b"] = b;
    equation["formula"] = formula;
    equation["answer"] = answer;
    equation["input"] = null;
    equation["index"] = i
    data.push(equation)
  }
  // console.log(data)
  return data
}
