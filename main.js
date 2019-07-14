function calc() {
  let a = parseInt(document.querySelector('#value1').value);  // parseInt converts a string into a decimal
  let b = parseInt(document.querySelector('#value2').value);
  let op = document.querySelector('#operator').value;
  let calculate;


  if (op == "add") {
    calculate = (a + b);
  } else if (op === "sub") {
    calculate = (a - b);
  } else if (op === "div") {
    calculate = (a / b)
  } else if (op === "mul") {
    calculate = (a * b);
  };

  const final = document.querySelector('#result').innerHTML = calculate;
  // document.querySelector('#result').innerHTML = calculate;
  return final;

}





























function calc2() {
  let a = parseInt(document.querySelector('#value1').value);
  let b = parseInt(document.querySelector('#value2').value);
  let op = document.querySelector('#operator').value;

  let calculate;

  if (op == "add") {
    calculate = (a + b);
  } else if (op == "sub") {
    calculate = (a - b);
  } else if (op == "div") {
    calculate = (a / b)
  } else if (op == "mul") {
    calculate = (a * b);
  };

  const final = document.querySelector('#result').innerHTML = calculate
  // document.querySelector('#result').innerHTML = calculate;
  return final;
}