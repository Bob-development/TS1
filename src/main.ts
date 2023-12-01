import './style.css'

const sumInp = document.querySelector('.inputSum') as HTMLInputElement;
const selectorFrom = document.querySelector("#selector-from") as HTMLSelectElement;
const selectorTo = document.querySelector("#selector-to") as HTMLSelectElement;
const outputSumInp = document.querySelector('.outputSum') as HTMLInputElement;
const applyBtn = document.querySelector('.apply') as HTMLInputElement;

//TABLE ELEMENTS
const table = document.querySelector('.table') as HTMLTableElement;
const tableCurrency1 = document.querySelector('.currency1') as HTMLTableColElement;
const tableCurrency2 = document.querySelector('.currency2') as HTMLTableColElement;
const tableCurrency3 = document.querySelector('.currency3') as HTMLTableColElement;
const tableCurrencyValue1 = document.querySelector('.value1') as HTMLTableColElement;
const tableCurrencyValue2 = document.querySelector('.value2') as HTMLTableColElement;
const tableCurrencyValue3 = document.querySelector('.value3') as HTMLTableColElement;

let sumInpValue : number;
sumInp.addEventListener('keyup', (e : any)=>{
  sumInpValue = e.target.value;
})

selectorFrom.addEventListener('click', ()=>{
  Selectors(selectorFrom.value, selectorFrom, selectorTo);
})

applyBtn.addEventListener('click', ()=>{
  if(!sumInpValue) return

  switch (selectorFrom.value) {
    case '$':
      if(selectorTo.value === '€'){
        return outputSumInp.value = sumInpValue * 0.9;

      } else if(selectorTo.value = '₴'){
        return outputSumInp.value = sumInpValue * 38;

      }else if(selectorTo.value = '£'){
        return outputSumInp.value = sumInpValue * 0.79;

      }else if(selectorTo.value = '¥'){
        return outputSumInp.value = sumInpValue * 246;

      }
      break;

    case '€':
      if(selectorTo.value === '$'){
        return outputSumInp.value = sumInpValue * 1.2;

      } else if(selectorTo.value = '₴'){
        return outputSumInp.value = sumInpValue * 42;

      }else if(selectorTo.value = '£'){
        return outputSumInp.value = sumInpValue * 0.85;

      }else if(selectorTo.value = '¥'){
        return outputSumInp.value = sumInpValue * 346;

      }
      break;
  
    case '₴':
      if(selectorTo.value === '€'){
        return outputSumInp.value = sumInpValue * 0.25;

      } else if(selectorTo.value = '$'){
        return outputSumInp.value = sumInpValue * 0.027;

      }else if(selectorTo.value = '£'){
        return outputSumInp.value = sumInpValue * 0.022;

      }else if(selectorTo.value = '¥'){
        return outputSumInp.value = sumInpValue * 4;

      }
      break;
  
    default:
      break;
  } 
  
  table.style.display = 'block';
})

function Selectors(currentCurrency: string, selectorFrom:HTMLSelectElement, selectorTo:HTMLSelectElement) {
  const valuesSelectorFrom = [];

  for(let i = 0; i < 5; i++){
    valuesSelectorFrom.push(selectorFrom.options[i].value);
  }
  
  switch (currentCurrency) {
    case '$':      
      curencyActions(currentCurrency, valuesSelectorFrom, selectorTo);
      break;

    case '€':
      curencyActions(currentCurrency, valuesSelectorFrom, selectorTo);
      break;
  
    case '₴':
      curencyActions(currentCurrency, valuesSelectorFrom, selectorTo);
      break;

    case '£':
      curencyActions(currentCurrency, valuesSelectorFrom, selectorTo);
      break;

    case '¥':
      curencyActions(currentCurrency, valuesSelectorFrom, selectorTo);
      break;

    default:
      break;
  }
}

function curencyActions(currentCurrency: string, arrValuesSelectorFrom: string[], selectorTo:HTMLSelectElement) {
  let valuesSelectorToArray = [];

  arrValuesSelectorFrom.forEach((currency)=>{    
    if(currency !== currentCurrency){
      valuesSelectorToArray.push(currency)
    }
  })

  for(let i = 0; i < valuesSelectorToArray.length; i++){
    selectorTo.options[i].textContent = valuesSelectorToArray[i];
  }  
}

function tableFill(currency1:HTMLTableColElement, currency2:HTMLTableColElement, currency3:HTMLTableColElement, value1:HTMLTableColElement, value2:HTMLTableColElement, value3:HTMLTableColElement) {
  
}