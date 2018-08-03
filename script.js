let cache, initialState, operand;
clearCache();
document.getElementById('result').value = '0';

function toInput(inputParameter) {
  let temp = document.getElementById('result').value;
  if (initialState) {
    clearValue();
    initialState = false;
  }
  if ( temp.includes('.') && inputParameter === '.' ) return;
  if (temp === '0') document.getElementById('result').value = inputParameter;
  else document.getElementById('result').value += inputParameter;
}

function toInputClean(id){
  clearValue();
  toInput(id);
}

function fromInput(){
  return document.getElementById('result').value;
}

function fromInputClean(){
  let result = document.getElementById('result').value;
  clearValue();
  return result;
}

function initAction(inputParam){
  initialState = true;
  if (operand === null){
    cache =  +fromInput();
    operand = inputParam;
  }
  else{
    operand = inputParam;
    switchOperand();
    toInput(cache.toString());
    initialState = true;
  }
}

function switchOperand(){
  switch(operand){
    case '-': cache -= +fromInputClean();
      break;
    case '+': cache += +fromInputClean();
      break;
    case '*': cache *= +fromInputClean();
      break;
    case '/': (+fromInput()) === 0 ? clearToInitialState() : cache=(cache/(+fromInputClean()));
      break;
  }
}

function getResult(){
  switchOperand();
  toInputClean(cache.toString());
  clearCache();
}

function clearValue() {
  document.getElementById('result').value = '';
}

function clearToInitialState(){
  clearValue();
  clearCache();
}

function clearCache(){
  cache = 0;
  initialState = true;
  operand = null;
}
