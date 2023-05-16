const specialOps=document.getElementsByClassName('specialOps')
const buttons = document.getElementsByClassName('figSym')
const displayTray= document.getElementById('display');
const operator=document.getElementsByClassName('operator');
var equaltoClicked = false;
let oper=['*','+','/','.','-']


// to iterate the buttons 
for(let button of buttons){
    button.addEventListener('click', () => {
        switch (button.innerText) {
            case "AC":
                 displayTray.value ="";
                break;
                case ")":
                 displayTray.value += button.innerText;
                break;
            case "1":
                if(equaltoClicked == false) displayTray.value += button.innerText;

                else reset(button.innerText);
                break;
            case "2":
                if(equaltoClicked == false) displayTray.value += button.innerText;

                else reset(button.innerText);
                break; 
            case "3":
                if(equaltoClicked == false) displayTray.value += button.innerText;

                else reset(button.innerText);
                break; 
            case "(":
                displayTray.value +=button.innerText;
                break; 
            case "4":
                if(equaltoClicked == false) displayTray.value += button.innerText;

                else reset(button.innerText);
                break; 
            case "5":
                if(equaltoClicked == false) displayTray.value += button.innerText;

                else reset(button.innerText);
                break; 
            case "6":
                if(equaltoClicked == false) displayTray.value += button.innerText;

                else reset(button.innerText);
                break;
              case "7":
                if(equaltoClicked == false) displayTray.value += button.innerText;

                else reset(button.innerText);
             break;
             case "8":
                if(equaltoClicked == false) displayTray.value += button.innerText;

                else reset(button.innerText);
             break;
             case "9":
                if(equaltoClicked == false) displayTray.value += button.innerText;

                else reset(button.innerText);
             break;
             case "0":
                if(equaltoClicked == false) displayTray.value += button.innerText;

                else reset(button.innerText);
             break;
             case "00":
                if(equaltoClicked == false) displayTray.value += button.innerText;

                else reset(button.innerText);
             break;
            default:
            displayTray +=button.innerText;
                break;
        }
    })
}


function factorial(input){
    var num, f;
    f=1
    num = input.value;
    for(var i=1; i<=num; i++){
        f = f*i;
    }
    i=i-1;
    input.value=f;
}

// iterating the special buttons 
    for(let spacialsButton of specialOps){
        $(spacialsButton).click(()=>{
            switch (spacialsButton.innerText) {
                case 'cos':
                    displayTray.value = eval(Math.cos(displayTray.value).toFixed(4));
                    break;
                case 'sin':
                    displayTray.value = eval(Math.sin(displayTray.value).toFixed(4));
                    break;
                case 'tan':
                    displayTray.value = eval(Math.tan(displayTray.value).toFixed(4));
                    break;
                case 'log':
                    displayTray.value = eval(Math.log(displayTray.value).toFixed(4));
                    break;
                case '√':
                    displayTray.value = eval(Math.sqrt(displayTray.value).toFixed(4));
                    break;
                case '%':
                    displayTray.value = eval(displayTray.value / 100);
                    break;
                case 'C':
                    displayTray.value = displayTray.value.toString().slice(0,-1);
                    break;
                case 'π':
                    displayTray.value = eval((Math.PI * displayTray.value).toFixed(4));
                    break;
                case 'x!':
                    displayTray.value = factorial(displayTray.value);
                    break;
                case 'xy':
                    displayTray.value = eval(Math.pow(displayTray.value,2).toFixed(4));
                    break;
                case '=':
                        displayTray.value = eval(displayTray.value);
                        equaltoClicked =true;                   
                    break;
                default:
                    break;
            }
        })
    }

//  to iterate over the array objects of  operators buttons
       for(let opps of operator){
            $(opps).click(()=>{
                operators(opps,displayTray);
            })
       }

function operators(element, dis){
    // let elem= document.getElementById(element);
    let attr= element.getAttribute('value');
    let displayValue= dis.value

     
    if(displayValue[displayValue.length-1] == "*"){
             displayValue = displayValue.replace(/.$/, attr);
             dis.value=displayValue;
         }
     else if(displayValue[displayValue.length-1] == "+"){
        displayValue = displayValue.replace(/.$/, attr);
        dis.value=displayValue;
       }
       else if(displayValue[displayValue.length-1] == "/"){
        displayValue = displayValue.replace(/.$/, attr);
        dis.value=displayValue;
       }
       else if(displayValue[displayValue.length-1] == "."){
        displayValue = displayValue.replace(/.$/, attr);
        dis.value=displayValue;
       }
       else if(displayValue[displayValue.length-1] == "-"){
        displayValue = displayValue.replace(/.$/, attr);
        dis.value=displayValue;
       }

    else {
        dis.value += attr;
    }
}

function reset(input){
    let displayValue = displayTray.value;
    (oper.includes(displayValue[displayValue.length-1]))?displayTray.value += input : displayTray.value = input;
    equaltoClicked = false;
}