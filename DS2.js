let NomeDoHeroi = "Herói de teste"
console.log("Bem-vindo ao Ginásio " + NomeDoHeroi)
let nivel = saldo (99,0)
console.log("o Seu numero de vitórias é " + nivel)
function saldo (Vitorias, Derrotas){
    let resultado = Vitorias - Derrotas  
    return resultado  
}
if (nivel<10) 
    {console.log("O nível do seu herói é Ferro")    
} 
else if (nivel <= 20) 
    {console.log("O nível do seu herói é Bronze")
    
} 
else if (nivel<=50) 
    {console.log("O nível do seu herói é Prata")
    
} 
else if (nivel>=51 && nivel <=80) 
    {console.log("O nível do seu herói é Ouro")
}
else if (nivel>=81 && nivel <=90) 
    {console.log("O nível do seu herói é Diamante")
}      
else if (nivel>=91 && nivel <=100) 
    {console.log("O nível do seu herói é Lendário")
}    
else if (nivel>=101) 
    {console.log("O nível do seu herói é Imortal")
}
else {console.log("Seu herói é um perdedor")}
