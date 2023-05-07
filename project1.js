let screen= document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
      console.log('Button text is', buttonText);
      if(buttonText=='X'){
          buttonText = '*';
          screenValue += buttonText;
          screen.value = screenValue;

      }
      else if (buttonText =='c'){
          screenValue = "";
          screen.value = screenValue;
      }
else if (buttonText == '='){
screen.value = eval(screenValue);
}
else{
    screenValue += buttonText;
    screen.value = screenValue;
}
    })
}
// function backspace
//var temp1 = "";
//var temp2 = "";
//if(equal To === 1){
//clearButton();
//}
//if(flag === 0){
    //temp1 = num1.substring(0, num1.length-1);
  //  display.innerHTML = temp1;
//}