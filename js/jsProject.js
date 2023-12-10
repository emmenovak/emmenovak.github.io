const buttons = document.querySelectorAll('.button');
let indexArray = [0,1,2,3,4,5,6,7,8,9]

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', () => {
        //let random = Math.floor(Math.random() * 9);
        let random = Math.floor(Math.random() * indexArray.length);
        let randomIndex = indexArray[random];
        let location = document.getElementById(`loc${randomIndex}`);
        //let location = document.getElementById(`loc${random}`);
        indexArray.splice(random, 1);
        if(i == 9){
            location.textContent = 0;
        } else {
            location.textContent = i + 1;
        }
    });
}

/** 
let numbers = new Array(11);
numbers[0] = "1";
numbers[1] = "2";
numbers[2] = "3";
numbers[3] = "4";
numbers[4] = "5";
numbers[5] = "6";
numbers[6] = "7";
numbers[7] = "8";
numbers[8] = "9";
numbers[9] = "-";
numbers[10] = "0";
numbers[11] = "Enter";

// array of position
let position = new Array(9);

let text = "";
let counter = 0;
let clicked = false;

// function to create the 12 div ( keypad buttons ). In the div I put the onclick function run() and I assign them a class and Id to style it in CSS.
// also every 3 div, the next div will appear in the second line to create a keypad style.

function start()
{
    
    let div_content ="";
    
    for (i=0; i<=11; i++)
    {
        let element = "number" + i;
        div_content = div_content + '<div class="pos" onclick="run('+i+')" id="'+element+'">'+numbers[i]+'<br>'+'</div>';
        if ((i+1) % 3 ==0) div_content = div_content + '<div style="clear:both;"></div>';
    }
    
    document.getElementById("position").innerHTML = div_content;
    

}

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }
counter = Math.floor(Math.random(0,location.length));
//////////////////////////////////////////////////////////////////////Operating Script//////////////////////////////////////////////////

//function run will be activated when any of the div-button will be pressed, nr function argument will indicate which of the button has been pressed.

function run(nr) {

//for loop to assign addEventListener onmouseleave to all the buttons. it will activate the choiseAndReset function that will show the result on
//the display and will go to the next position in a way to choise another letter.

    for (i=0; i<=11; i++) 
    {
        let element = "number" + i;
        document.getElementById(element).addEventListener("mouseleave", choiseAndReset);
    }

//switch will check which div button has been pressed and will display the correct letter. Inside the cases there are two if.
//one to check the counter ( to check which letter need to be displayed )
//the second one is to check if the capital letter button is clicked, if yes, all the next letters will be Capital letter till will not be deactivated.

switch (nr) {

  case 0:
    counter = Math.floor(Math.random(0,position.length));
    text += "1";
    //in HTML make 10 locations, splitting "screen" into different spots
    document.getElementById(`loc${counter}`).value = text;
    break;
    
  case 1:
    counter = Math.floor(Math.random(0,position.length));
    text += "2";
    document.getElementById("loc1").value = text;
    break;

  case 2:
    counter = Math.floor(Math.random(0,position.length));
    text += "3";
    document.getElementById("loc2").value = text;
    break;

  case 3:
    counter = Math.floor(Math.random(0,position.length));
    text += "4";
    document.getElementById("loc3").value = text;
    break;

  case 4:
    counter = Math.floor(Math.random(0,position.length));
    text += "5";
    document.getElementById("loc4").value = text;
    break;

  case 5:
    counter = Math.floor(Math.random(0,position.length));
    text += "6";
    document.getElementById("loc5").value = text;
    break;

  case 6:
    counter = Math.floor(Math.random(0,position.length));
    text += "7";
    document.getElementById("loc6").value = text;
    break;

  case 7:
    counter = Math.floor(Math.random(0,position.length));
    text += "8";
    document.getElementById("loc7").value = text;
    break;

  case 8:
    counter = Math.floor(Math.random(0,position.length));
    text += "9";
    document.getElementById("loc8").value = text;
    break;
  case 9:
    text += " - ";
    document.getElementById("space").value = text;
    break;

  case 10:
    counter = Math.floor(Math.random(0,position.length));
    text += "0";
    document.getElementById("loc9").value = text;
    break;
    
  case 11:
    text = "Your Phone Number is Incorrect";
    document.getElementById("screen").value = text;

    break;
    
    
}


function choiseAndReset() {
    
    document.getElementById("screen").value = text;
    counter = 0;
    return counter;
    
    
}


//console.log(counter);
//console.log(clicked);
}

// Get help on:
// how to make location array in the screen input box
// deletes postion each time?
// what to do after they press enter? reset */