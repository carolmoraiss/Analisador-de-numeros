let num = document.getElementById("fnum")
let lista = document.getElementById("espaco")
let res = document.getElementById("resposta")


let valores= []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else{
    return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1 ){
        return true
    }else{
        return false 
    }
}



function adicionar(){
    if(isNumero(num.value) && !inLista(num.value , valores)){
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text = ` Valor ${num.value} Adicionado.`
        lista.appendChild(item)
        res.innerHTML = ""
        

    }else {
        valores.splice(num.value)
        window.alert("Valor inválido ou já encontrado na lista")
    }
    num.value = ""
    num.focus()
}

let soma = 0

function finalizar(){
    if(valores.length == 0){
        window.alert("Adicione valores antes de finalizar!")

    }else{
    for(let contador = 0; contador < valores.length; contador++){
            soma += Number(valores[contador])
        }

        const valorMax = valores.reduce(function(prev, current) { 
            return prev > current ? prev : current; 
        });

        const valorMin = valores.reduce(function(prev, current) { 
            return prev < current ? prev : current; 
        });

        let media = soma/valores.length

        res.innerHTML += ` <p>Ao todo, temos ${valores.length} número cadastrados</p>` 
        res.innerHTML += `<p> O maior valor informado foi ${valorMax}</p>` 
        res.innerHTML += `<p> O menor valor informado foi ${valorMin} </p>` 
        res.innerHTML += `<p> A média dos valores digitados foi ${media}</p> ` 
        res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
    }
}

