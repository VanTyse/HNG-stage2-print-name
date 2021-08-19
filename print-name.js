let name = prompt('Please enter your name', 'Okafor Kingsley Chukwunonso')
let name_h1 = document.querySelector('.name');

if (name===null || name===''){
    let name1 = "You didn't input a name. However, my name is Kingsley Chukwunonso Okafor."
    name_h1.innerHTML = name1;
    console.log(name1)
}
else{
    name_h1.innerHTML = name;
    console.log(name)
}

console.log(name);
