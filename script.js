const symbols=document.getElementsByClassName('symbol')
const buttons = document.getElementsByClassName('figSym')
const displayTray= document.getElementById('display');

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
                displayTray.value += button.innerText;
                break;
            case "2":
                displayTray.value +=button.innerText;
                break; 
            case "3":
                displayTray.value +=button.innerText;
                break; 
            case "(":
                displayTray.value +=button.innerText;
                break; 
            case "4":
                displayTray.value +=button.innerText;
                break; 
            case "5":
                displayTray.value +=button.innerText;
                break; 
            case "6":
                displayTray.value +=button.innerText;
                break;
              case "7":
                displayTray.value +=button.innerText;
             break;
             case "8":
                displayTray.value +=button.innerText;
             break;
             case "9":
                displayTray.value +=button.innerText;
             break;
             case "0":
                displayTray.value +=button.innerText;
             break;
             case "00":
                displayTray.value +=button.innerText;
             break;
            default:
            displayTray +=button.innerText;
                break;
        }
    })
}


function factorial(screen){
    var num, f;
    f=1
    num = screen.value;
    for(var i=1; i<=num; i++){
        f = f*i;
    }
    i=i-1;
    screen.value=f;
}



function operators(element, dis){
    let elem= document.getElementById(element);
    let attr= elem.getAttribute('value');
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