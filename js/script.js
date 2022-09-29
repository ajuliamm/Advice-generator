let Advice = document.getElementById('advice-texto')
let id = document.getElementById('advice-numero')
let button = document.getElementById('advice-botao')

var dados 

fetch('https://api.adviceslip.com/advice')
.then(response=> response.json())
.then(function(data){
    dados = data
    console.log(dados.slip)

})

button.addEventListener('click', (callback)=>{
    Advice.innerHTML = `"${dados.slip.advice}"`
    id.innerHTML = dados.slip.id
    
    callback(dados)

})




