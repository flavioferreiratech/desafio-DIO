//Diga seu nome
let SeuNome = "Flavio"
//Escolhas disponiveis 
let Numeros = [ 1,2,3,4,5,6,7,8,9,10]
let Cor = ["Amarelo", "Azul", "Vermelho", "Preto", "Branco"]
let Vogais = ["A", "E", "I", "O", "U"]
let Signos = ["Áries", "Touro", "Gêmeos", "Câncer", "Leão", "Virgem", "Libra", "Escorpião", "Sagitário", "Capricórnio", "Aquário", "Peixes"]
// Preencha aqui as variaveis escolhidas dentro das caixas
let NumeroEscolhido = 3
let CorEscolhida = "Amarelo"
let VogalEscolhida = "E"
let SignoEscolhido = "Aries"
// Criando função de sortear aleatoriamente
function sortear(array) {
    return array[Math.floor(Math.random() * array.length)]
}
//sorteamdo respostas aleatorias 
 let corSorteada = sortear(Cor)
 let vogalSorteada = sortear(Vogais)
let signoSorteado = sortear(Signos)
let numeroSorteado = sortear(Numeros)
//Normalizando texto para ter correspondencia entre respostas e respostas aleatorias.
function normalizar(texto) {
  return String(texto)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
}
//Somando pontuação final
let PontuacaoFinal = 0
PontuacaoFinal += (numeroSorteado === NumeroEscolhido)
PontuacaoFinal += (normalizar(corSorteada) === normalizar(CorEscolhida))
PontuacaoFinal += (normalizar(vogalSorteada) === normalizar(VogalEscolhida))
PontuacaoFinal += (normalizar(signoSorteado) === normalizar(SignoEscolhido))
//Instruções ao Jogador


console.log(`
Olá ${SeuNome}, agora vamos atribuir pontos as suas escolhas e verificar se você tem boa intuição.
\n ----- RESULTADO -----
\n Cor escolhida: ${CorEscolhida} | Sorteada: ${corSorteada}
Vogal escolhida: ${VogalEscolhida} | Sorteada: ${vogalSorteada}
Signo escolhido: ${SignoEscolhido} | Sorteado: ${signoSorteado}
Número escolhido: ${NumeroEscolhido} | Sorteado: ${numeroSorteado}
Sua intuição está no nível: ${PontuacaoFinal}
`)
//Feedback da pontuação
 if (PontuacaoFinal===0) 
    {console.log("O único despertar que você conhece é do celular. :( \n")    
} 
else if (PontuacaoFinal===1) 
    {console.log("Parece que foi sorte, e das pequenas!\n")    
} 
else if (PontuacaoFinal===2) 
    {console.log("Algo em você quer despertar!\n")
}    
else if (PontuacaoFinal===3) 
    {console.log("Parece que você pode confiar na sua intuição!\n")
}
else if (PontuacaoFinal===4) 
    {console.log("Acho que temos aqui um raro caso de mediunidade!\n")        
    }   
else if (PontuacaoFinal===5) 
{console.log("Você praticamente pode prever o futuro!\n")        
    }   