//Track Element
let input = document.getElementById('number');
let btn = document.getElementById('submit-btn');
let binaryField = document.getElementById('binary');
let octalField = document.getElementById('octal');
let hexadecimalField = document.getElementById('hexadecimal');

//Converting function
function action(event){
    event.preventDefault();
    let strNumber = input.value;
    if(!strNumber){
        //appen child and clear div
        append(binaryField,'');
        append(octalField,'');
        append(hexadecimalField,'');
        //alert
        alert('Please Provide Number');
    }else{
        let number = Number(strNumber);
        //convert function
        let binary = convert(number,2);
        let octal = convert(number,8);
        let hexa = convert(number,16)
        
        //append child
        append(binaryField,binary);
        append(octalField,octal);
        append(hexadecimalField,hexa);
    }
}

//add even listener
btn.addEventListener('click',action);

//converting funciton
function convert(number,base){
    return number.toString(base);
}

//append function
function append(parent,number){
    let p = document.createElement('p');
    p.innerHTML = number;
    parent.innerHTML = '';
    parent.appendChild(p);
}