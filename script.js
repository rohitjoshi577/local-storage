let counter = localStorage.getItem('counter') ?  Number(JSON.parse(localStorage.getItem('counter'))) :Number( 0) ;


let content = document.getElementById('root');
content.innerHTML = counter;

function increase(){
    counter=counter+1;
    content.innerHTML = counter;
    localStorage.setItem("counter" , JSON.stringify(counter));
}

let button = document.getElementById('btn');
button.addEventListener("click" , increase);