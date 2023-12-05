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
  showCurrenyWithoutCurrent(selectorFrom.value, selectorFrom, selectorTo);
})

applyBtn.addEventListener('click', ()=>{
  if(!sumInpValue) return

  showCurrenyWithoutCurrent(selectorFrom.value, selectorFrom, selectorTo);

  table.style.display = 'block'; 
  
  

  switch (selectorFrom.value) {
    case '$':
      if(selectorTo.value === '€'){
        return outputSumInp.value = `${sumInpValue * 0.9}`

      } else if(selectorTo.value === '₴'){
        return outputSumInp.value = `${sumInpValue * 38}`;

      } else if(selectorTo.value === '£'){        
        return outputSumInp.value = `${sumInpValue * 0.79}`;

      } else if(selectorTo.value === '¥'){
        return outputSumInp.value = `${sumInpValue * 246}`;

      }
      break;

    case '€':
      if(selectorTo.value === '$'){
        return outputSumInp.value = `${sumInpValue * 1.2}`;

      } else if(selectorTo.value === '₴'){
        return outputSumInp.value = `${sumInpValue * 42}`;

      }else if(selectorTo.value === '£'){
        return outputSumInp.value = `${sumInpValue * 0.85}`;

      }else if(selectorTo.value === '¥'){
        return outputSumInp.value = `${sumInpValue * 346}`;

      }
      break;
  
    case '₴':
      if(selectorTo.value === '€'){
        return outputSumInp.value = `${sumInpValue * 0.25}`;

      } else if(selectorTo.value === '$'){
        return outputSumInp.value = `${sumInpValue * 0.027}`;

      }else if(selectorTo.value === '£'){
        return outputSumInp.value = `${sumInpValue * 0.022}`;

      }else if(selectorTo.value === '¥'){
        return outputSumInp.value = `${sumInpValue * 4}`;

      }
      break;

    case '£':
      if(selectorTo.value === '€'){
        return outputSumInp.value = `${sumInpValue * 1.17}`;

      } else if(selectorTo.value === '$'){
        return outputSumInp.value = `${sumInpValue * 1.26}`;

      }else if(selectorTo.value === '₴'){
        return outputSumInp.value = `${sumInpValue * 46}`;

      }else if(selectorTo.value === '¥'){
        return outputSumInp.value = `${sumInpValue * 185}`;

      }
      break;

    case '¥':
        if(selectorTo.value === '€'){
          return outputSumInp.value = `${sumInpValue * 0.0063}`;
  
        } else if(selectorTo.value === '$'){
          return outputSumInp.value = `${sumInpValue * 0.0068}`;
  
        }else if(selectorTo.value === '₴'){
          return outputSumInp.value = `${sumInpValue * 0.25}`;
  
        }else if(selectorTo.value === '£'){
          return outputSumInp.value = `${sumInpValue * 0.0054}`;
  
        }
        break;
  
    default:
      break;
  } 
})

function showCurrenyWithoutCurrent(currentCurrency: string, selectorFrom:HTMLSelectElement, selectorTo:HTMLSelectElement) {
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
  
  let allSelectorCurrnecyArray = [];
  let valuesSelectorToArray = [];

  arrValuesSelectorFrom.forEach((currency)=>{
    allSelectorCurrnecyArray.push(currency);

    if(currency !== currentCurrency){
      valuesSelectorToArray.push(currency)
    }
  })

  for(let i = 0; i < valuesSelectorToArray.length; i++){    
    selectorTo.options[i].textContent = valuesSelectorToArray[i];
  }  

  const allCurrencyToShowInTable = [...allSelectorCurrnecyArray];
  
  tableFill(allCurrencyToShowInTable, selectorTo, selectorFrom, tableCurrency1, tableCurrency2, tableCurrency3, tableCurrencyValue1, tableCurrencyValue2, tableCurrencyValue3);
}

function tableFill(allCurrency: string[], selectorTo: HTMLSelectElement, selectorFrom: HTMLSelectElement, currency1:HTMLTableColElement, currency2:HTMLTableColElement, currency3:HTMLTableColElement, value1:HTMLTableColElement, value2:HTMLTableColElement, value3:HTMLTableColElement) {
  findCurrentCurrency(allCurrency, selectorFrom);
  findCurrentCurrency(allCurrency, selectorTo);

  tableCurrency1.textContent = allCurrency[0];
  tableCurrency2.textContent = allCurrency[1];
  tableCurrency3.textContent = allCurrency[2];

  currencyRate(tableCurrency1, tableCurrency2, tableCurrency3, tableCurrencyValue1, tableCurrencyValue2, tableCurrencyValue3, selectorFrom.value)
}

function findCurrentCurrency(allCurrency:string[], selector: HTMLSelectElement) {
  allCurrency.find((currency)=>{    
    if(currency === selector.value){
      const currencyIndex = allCurrency.indexOf(currency);

      allCurrency.splice(currencyIndex, 1);
    }
  })
}

function currencyRate(tableCurrency1: HTMLTableColElement, tableCurrency2: HTMLTableColElement, tableCurrency3: HTMLTableColElement, tableValue1: HTMLTableColElement, tableValue2: HTMLTableColElement, tableValue3: HTMLTableColElement, currentCurrency: string) {
  const tableCurrency = [tableCurrency1, tableCurrency2, tableCurrency3];
  const tableCurrencyValues = [tableCurrencyValue1, tableCurrencyValue2, tableCurrencyValue3];

  let i = -1;

  tableCurrency.forEach((currency)=>{
    i += 1;
    
    switch (currency.textContent) {
      case '$':
        if(currentCurrency === '€'){
          return tableCurrencyValues[i].textContent = `${sumInpValue * 1.2}`;
  
        } else if(currentCurrency = '₴'){
          return tableCurrencyValues[i].textContent = `${sumInpValue * 0.027}`;
  
        }else if(currentCurrency = '£'){
          return tableCurrencyValues[i].textContent = `${sumInpValue * 1.26}`;
  
        }else if(currentCurrency = '¥'){
          return tableCurrencyValues[i].textContent = `${sumInpValue * 0.0068}`;
  
        }
        break;

      case '€':
        if(currentCurrency === '$'){
          return tableCurrencyValues[i].textContent = `${sumInpValue * 0.9}`
  
        } else if(currentCurrency === '₴'){
          return tableCurrencyValues[i].textContent = `${sumInpValue * 0.25}`;
  
        }else if(currentCurrency === '£'){
          return tableCurrencyValues[i].textContent = `${sumInpValue * 1.17}`;
  
        }else if(currentCurrency === '¥'){
          return tableCurrencyValues[i].textContent = `${sumInpValue * 0.0063}`;
  
        }
        break;

      case '₴':
        if(currentCurrency === '€'){
          return tableCurrencyValues[i].textContent = `${sumInpValue * 42}`;
  
        } else if(currentCurrency === '$'){
          return tableCurrencyValues[i].textContent = `${sumInpValue * 38}`;
            
        }else if(currentCurrency === '£'){
          return tableCurrencyValues[i].textContent = `${sumInpValue * 46}`;
  
        }else if(currentCurrency === '¥'){
          return tableCurrencyValues[i].textContent = `${sumInpValue * 0.25}`;
  
        }
        break;

      case '£':
        if(currentCurrency === '€'){
          return tableCurrencyValues[i].textContent = `${sumInpValue * 0.85}`;
  
        } else if(currentCurrency === '$'){
          return tableCurrencyValues[i].textContent = `${sumInpValue * 0.79}`;
  
        }else if(currentCurrency === '₴'){
          return tableCurrencyValues[i].textContent = `${sumInpValue * 0.022}`;
  
        }else if(currentCurrency === '¥'){
          return tableCurrencyValues[i].textContent = `${sumInpValue * 0.0054}`;
  
        }
        break;

      case '¥':
        if(currentCurrency === '€'){
          return tableCurrencyValues[i].textContent = `${sumInpValue * 346}`;
  
        } else if(currentCurrency === '$'){
          return tableCurrencyValues[i].textContent = `${sumInpValue * 246}`;
  
        }else if(currentCurrency === '₴'){
          return tableCurrencyValues[i].textContent = `${sumInpValue * 4}`;
  
        }else if(currentCurrency === '£'){
          return tableCurrencyValues[i].textContent = `${sumInpValue * 185}`;
  
        }
        break;
    
      default:
        break;
    } 
  })  
}
