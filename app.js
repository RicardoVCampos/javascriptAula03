//OPERADORES

// > >=
// < <=
// === (comprara valor e tipo)
// == (compara somente valor)
// != (Diferente)
// !== (Estritamente diferente)
// % (Resto da divisão)



// let numero1 = Number(prompt("Digite o número 1:"))
// let numero2 = Number(prompt("Digite o número 2:"))

// if (numero1>=0 && numero2>=0) {
//     let mult = numero1 * numero2
//     alert(mult)
// }else{
//     alert("Números inválidos")
// }

//////////////////////////////////////////////////////////////////////////////////////////////

// let nome = prompt("Digite seu nome")

// if(typeof nome === "string"){
//     alert(`Bem vindo, ${nome}.`)
// }

////////////////////////////////////////////////////////////////////////////////////////////////

// let numero1 = 10
// let numero2 = "10"

// if (numero1 === numero2) {
//     console.log("São iguais")
// }else{
//     console.log("São diferentes")
// }

/////////////////////////////////////////////////////////////////////////////////////////

// Exercício 1
// Verificar se é maior ou menor.
// Peça ao usuário para inserir dois números e diga qual é maior.

// let numero1 = Number(prompt("Digite o número 1:"))
// let numero2 = Number(prompt("Digite o número 2:"))

// if (numero1 > numero2){
//     alert("Número 1 é maior que número 2")
// } else{
//     alert("Número 2 é maior que número 1")
// }

///////////////////////////////////////////////////////////////////////////////////////////

// let numero1 = Number(prompt("Digite o número 1:"))

// if (numero1 % 2 === 0) {
//     alert("Número par")
// } else {
//     alert("Número impar")
// }

////////////////////////////////////////////////////////////////////////////////////////////

// let numero1 = Number(prompt("Digite o número 1:"))

// if (numero1 % 3 === 0) {
//     alert("Múltiplo de 3")
// } else {
//     alert("Não é múltiplo")
// }

/////////////////////////////////////////////////////////////////////////////////////////////

// Diga qual o maior time do estado: O sistema receberá quantos anos o Ceará e o Fortaleza passaram na Série C e dirá quem é maior.

// let anoCeara = Number(prompt("O Ceará passou:"))
// let anoFortaleza = Number(prompt("O Fortaleza passou:"))

// if (anoCeara>anoFortaleza) {
//     alert("Ceará maior que Fortaleza")
// } else {
//     alert("Fortaleza maior que Ceará")
// }


///////////////////////////////////////////////////////////////////////////////////////////////

//Exercício 2
// Verificar se é maior de 10.
// Peça ao usuário para inserir um número e diga se ele é maior que 10 ou menor ou igual a 10.

// let numero1 = Number(prompt("Digite o número"))

// if (numero1 > 10) {
//     alert(`O número ${numero1} é maior que 10`)
// } else {
//     alert(`O número ${numero1} é menor ou igual a 10`)
// }

/////////////////////////////////////////////////////////////////////////////////////////////////

//Exercícios

// 1. Verificar se é positivo ou negativo
// Peça ao usuário para inserir um número e diga se ele é positivo ou negativo.

// let numero1 = Number(prompt("Digite um número"))

// if (numero1>=0) {
//     alert(`O número é positivo`)
// } else {
//     alert(`O número é negativo`)
// }

// 2. Verificar se é maior ou menor
// Peça ao usuário para inserir dois números e diga qual é maior ou se são iguais.

// let numero1 = Number(prompt("Digite número 1:"))
// let numero2 = Number(prompt("Digite número 2:"))

// if (numero1>numero2) {
//     alert("Número 1 maior que número 2")
// } else if(numero1===numero2){
//     alert("Números iguais")
// }else{
//     alert("Número 2 maior que o número 1")
// }

// 3. Verificar se é múltiplo de 3
// Peça ao usuário para inserir um número e diga se ele é múltiplo de 3.

// let numero1 = Number(prompt("Digite o número 1:"))

// if (numero1 % 3 === 0) {
//     alert("Múltiplo de 3")
// } else {
//     alert("Não é múltiplo")
// }


// 4. Verificar se é maior de 10
// Peça ao usuário para inserir um número e diga se ele é maior que 10 ou menor ou igual a 10.

// let numero1 = Number(prompt("Digite o número"))

// if (numero1 > 10) {
//     alert(`O número ${numero1} é maior que 10`)
// } else {
//     alert(`O número ${numero1} é menor ou igual a 10`)
// }


// 5. Verificar se é maior que 100
// Peça ao usuário para inserir um número e diga se ele é maior que 100 ou menor ou igual a 100.

// let numero1 = Number(prompt("Digite o número"))

// if (numero1 > 100) {
//     alert(`O número ${numero1} é maior que 100`)
// } else {
//     alert(`O número ${numero1} é menor ou igual a 100`)
// }


// 6. Escolha entre "Sim" e "Não"
// Peça ao usuário para responder "Sim" ou "Não". Se ele responder "Sim", imprima "Você escolheu sim". Caso contrário, imprima "Você escolheu não".

// let resposta = prompt("Digite Sim ou Não" )

// if (resposta === "Sim") {
//     alert(`Você escolheu sim`)
// } else {
//     alert(`Você escolheu não`)    
// }


// 7. Verificar se é divisível por 5
// Peça ao usuário para inserir um número e diga se ele é divisível por 5.

// let numero1 = Number(prompt("Digite o número"))

// if (numero1 > 10) {
//     alert(`O número ${numero1} é maior que 10`)
// } else {
//     alert(`O número ${numero1} é menor ou igual a 10`)
// }


// 8. Verificar idade de entrada
// Peça ao usuário para inserir a idade e diga se ele pode votar (idade >= 16) ou não pode votar (idade < 16).

// let numero1 = Number(prompt("Digite sua idade"))

// if (numero1 >= 16) {
//     alert(`Você esta apto á votar.`)
// } else {
//     alert(`Você não está apto a votar.`)
// }


// 9. Determinar se é um número par
// Peça ao usuário para inserir um número e diga se ele é par ou ímpar.

// let numero1 = Number(prompt("Digite um número"))

// if (numero1 % 2 === 0) {
//     alert(`Número par`)
// } else {
//     alert(`Não é um número par`)
// }


// 10. Verificar se é letra A
// Peça ao usuário para inserir uma letra e diga se ela é a letra A ou não.

// let letra = prompt("Digite uma letra")

// if (letra == "A") {
//     alert(`Você digitou a letra A`)
// } else {
//     alert(`Você não digitou a letra A`)
// }


////////////////////////////////////////////////////////////////////////////////////////////////

// let numeroMacas = Number(prompt("Digite o número de maças"))

// if (numeroMacas>=12) {
//     let valorTotal = numeroMacas*0.25
//     alert(`O valor total é de ${valorTotal}`)
// } else {
//     let valorTotal = numeroMacas*0.30
//     alert(`O valor total é de ${valorTotal}`)
// }


//////////////////////////////////////////////////////////////////////////////////////////////

// 1. Escreva	 um	 programa	 para	 ler	 2	 valores	 (considere	 que	 	 não	 serão	
// informados	valores	iguais)	e	escrever	o	maior	deles.

// let numero1 = Number(prompt("Digite um número 1"))
// let numero2 = Number(prompt("Digite um número 2"))

// if (numero1>numero2) {
//     alert(`O número maior é ${numero1}`)
// } else {
//     alert(`O número maior é ${numero2}`)
// }
    

// 2. Escreva	 um	 programa	 para	 ler	 o	 ano	 de	 nascimento	 de	 uma	 pessoa	 e	
// escrever	 uma	 mensagem	 que	 diga	 se	 ela	 poderá	 ou	 não	 votar	 este	 ano	
// (não	é	necessário	considerar	o	mês	em	que	ela	nasceu).

// let numero1 = Number(prompt("Digite o ano de nascimento"))

// if (numero1 <= 2008) {
//     alert(`Você esta apto á votar.`)
// } else {
//     alert(`Você não está apto a votar.`)
// }

    
// 3. Escreva	 um	 programa	 que	 verifique	 a	 validade	 de	 uma	 senha	 fornecida	
// pelo	 usuário.	 A	 senha	 válida	 é	 o	 número	 1234.	Devem	 ser	impressas	 as	
// seguintes	mensagens:	
// ACESSO	PERMITIDO	caso	a	senha	seja	válida.	
// ACESSO	NEGADO	caso	a	senha	seja	inválida.

// let senha = prompt("Digite sua senha:")

// if (senha==1234) {
//     alert(`ACESSO PERMITIDO`)
// } else {
//     alert(`ACESSO NEGADO`)
// }


// 4. As	maçãs	 custam	 R$	 0,30	 cada	 se	 forem	 compradas	menos	 do	 que	 uma	
// dúzia,	 e	 R$	 0,25	 se	 forem	 compradas	 pelo	 menos	 doze.	 Escreva	 um	
// programa	 que	 leia	 o	 número	 de	 maçãs	 compradas,	 calcule	 e	 escreva	 o	
// valor	total	da	compra.

// let numeroMacas = Number(prompt("Digite o número de maças"))

// if (numeroMacas>=12) {
//     let valorTotal = numeroMacas*0.25
//     alert(`O valor total é de ${valorTotal}`)
// } else {
//     let valorTotal = numeroMacas*0.30
//     alert(`O valor total é de ${valorTotal}`)
// }


// 5. Escreva	 um	 programa	 para	 ler	 3	 valores	 inteiros	 (considere	 que	 	 não	
// serão	lidos	valores	iguais)	e	escrevê-los	em	ordem	crescente. 

// // Função principal para ler, ordenar e exibir os valores
// function ordenarValores() {
//     // Lê os três valores inteiros
//     let valor1 = parseInt(prompt("Digite o primeiro valor inteiro:"));
//     let valor2 = parseInt(prompt("Digite o segundo valor inteiro:"));
//     let valor3 = parseInt(prompt("Digite o terceiro valor inteiro:"));

//     // Verifica se os valores são diferentes
//     if (valor1 === valor2 || valor1 === valor3 || valor2 === valor3) {
//         alert("Os valores devem ser diferentes. Recarregue a página e tente novamente.");
//         return;
//     }

//     // Coloca os valores em um array
//     let valores = [valor1, valor2, valor3]; 

//     // Ordena os valores em ordem crescente
//     valores.sort((a, b) => a - b);

//     // Exibe os valores ordenados
//     alert("Valores em ordem crescente: " + valores.join(", "));
//     console.log("Valores em ordem crescente:", valores);
// }

// // Chama a função principal assim que o arquivo for carregado
// ordenarValores();
 


    
// 6. Tendo	 como	 entrada	 a	 altura	 e	 o	 sexo	 (codificado	 da	 seguinte	 forma:	
// 1:feminino	 	 2:masculino)	 de	 uma	 pessoa,	 construa	 um	 programa	 que	
// calcule	e	imprima	seu	peso	ideal,	utilizando	as	seguintes	
// Fórmulas:	
// - para	homens:	(72.7	*	Altura)	– 58	
// - para	mulheres:	(62.1	*	Altura)	– 44.7	- para	mulheres:	(62.1	*	Altura)	– 44.7	
    
// // Função principal para calcular o peso ideal
// function calcularPesoIdeal() {
//     // Solicita a altura e converte para número decimal
//     let altura = parseFloat(prompt("Digite a sua altura em metros (ex: 1.75):"));

//     // Solicita o sexo (1 para feminino e 2 para masculino)
//     let sexo = parseInt(prompt("Digite o sexo: 1 para Feminino, 2 para Masculino:"));

//     // Validação dos valores
//     if (isNaN(altura) || (sexo !== 1 && sexo !== 2)) {
//         alert("Entrada inválida! Certifique-se de digitar valores corretos.");
//         return;
//     }

//     // Calcula o peso ideal com base no sexo
//     let pesoIdeal;
//     if (sexo === 2) { // Masculino
//         pesoIdeal = (72.7 * altura) - 58;
//     } else if (sexo === 1) { // Feminino
//         pesoIdeal = (62.1 * altura) - 44.7;
//     }

//     // Exibe o peso ideal com duas casas decimais
//     alert(`Seu peso ideal é: ${pesoIdeal.toFixed(2)} kg`);
//     console.log(`Altura: ${altura} m | Sexo: ${sexo === 2 ? "Masculino" : "Feminino"} | Peso Ideal: ${pesoIdeal.toFixed(2)} kg`);
// }

// // Chama a função principal
// calcularPesoIdeal();


// 7. Escreva	um	programa	para	ler	o	número	de	lados	de	um	polígono	regular	
// e	a	medida	do	lado	(em	cm).	Calcular	e	imprimir	o	seguinte:	
// − Se	o	número	de	lados	for	igual	a	3	escrever	TRIÂNGULO	e	o	valor	da	
// área
// − Se	o	número	de	lados	for	igual	a	4	escrever	QUADRADO	e	o	valor	da	
// sua	área.	
// − Se	o	número	de	lados	for	igual	a	5	escrever	PENTÁGONO.
    
// 8. Acrescente	 as	 seguintes	 mensagens	 à	 solução	 do	 exercício	 anterior	
// conforme	o	caso.	
// − Caso	 o	 número	 de	 lados	 seja	 inferior	 a	 3	 escrever	 NÃO	 É	 UM	
// POLÍGONO.	
// − Caso	o	número	de	lados	seja	superior	a	5	escrever	POLÍGONO	NÃO	
// IDENTIFICADO.
    
// 9. Escreva	um	programa	para	ler	3	valores	inteiros	e	escrever	o	maior	deles.	
// Considere	que	o	usuário	não	informará	valores	iguais.
    
// 10. Escreva	 um	 programa que	 leia	 as	 medidas	 dos	 lados	 de	 um	 triângulo	 e	
// escreva	se	ele	é	Equilátero,	Isósceles	ou	Escaleno.	Sendo	que:	
// − Triângulo	Equilátero:	possui	os	3	lados	iguais.	
// − Triângulo	Isóscele:	possui	2	lados	iguais.	
// − Triângulo	Escaleno:	possui	3	lados	diferentes.
    
// 11. Escreva	 um	 programa	 que	 leia	 o	 valor	 de	 3	 ângulos	 de	 um	 triângulo	 e	
// escreva	 se	 o	 triângulo	 é	 Acutângulo,	 Retângulo	 ou	 Obtusângulo.	 Sendo	
// que:	
// − Triângulo	Retângulo:	possui	um	ângulo	reto.	(igual	a	90º)
// − Triângulo	Obtusângulo:	possui	um	ângulo	obtuso.	(maior	que90º)	
// − Triângulo	Acutângulo:	possui	três	ângulos	agudos.	(menor	que	90º)
    