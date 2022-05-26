let result=document.getElementById("inputext");


let calculate =(number)=>{
    result.value = result.value + number;
}

let Result=()=>{
    try {

        result.value = eval(result.value);

    } catch (error) {
        alert("Enter a valid digits");
    }
}

function clr (){
    result.value = " ";
}

function del (){
    result.value = result.value.slice(0,-1);
}

const keyBoard = document.querySelector('.keyboard');

keyBoard.addEventListener('keypress', e=>{

    if (e.key === "/") {
        console.log(e.key);
        result.value = result.value + e.key + result.value.slice(-1,-1);
    }

})

function onlyValidDigits(evt){

    let characters = String.fromCharCode(evt.which);
    if ( (/[a-zA-Z/]/g.test(characters))  ){
        evt.preventDefault();   
    }
}
