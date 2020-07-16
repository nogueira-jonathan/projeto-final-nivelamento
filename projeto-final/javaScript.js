/* 6.1 variáveis   e   constantes,   quero   exemplos.
Variaveis e Constantes são objetos da programação ao qual você pode atribuir determinados valores, porem uma variavel pode "variar", ou seja,
você pode atribuir determinado valor a ela e mais a frente caso seja necessário mudar seu valor. Ja a constante é fixa uma vez atribuido seu valor 
não poderá ser mudado.
Ex variavel:
var numero = 20

ex constante
const nome = Jonathan

6.2   comandos   de   decisão,   quero   exemplos.
Comandos de decisões são comandos utilizados para tomar determinadas decisões dentro de um código, se utiliza if, else if e else, caso determinada situação
aconteça faça (if) isso ou então (else) faça essa outra coisa.
Ex: 

var numero1 = 10
var numero2 = 20

if (numero1< numero2){
document.write ("primeiro numero é maior")
}else{
    document.write ("segundo numero é maior")
} 

6.3loops,   quero   exemplos

Loops são unidades de repetições utilizados para que varias situações sejam repetidas ate chegar a determinado resultado

Ex:   alert("Olá, esse é o multiplicador online")
        var m1 = parseInt(prompt("Digite o número a ser multiplicado"));
        var ate= parseInt(prompt("Digite o número máximo que deseja multiplicar"));

        for(var i = 0; i <= ate; i++)
        {
            document.write(m1 + "X" + i + "=" + i * m1 + "<br>");
        }

6.4  funções,   quero   exemplos:

Função são instruções que fazem uma tarefa ou calcula determinado valor, podem ser com parametro ou não
Ex:
    var numPares = 1;
    function pares(x, y) {
        for (var i = x; i <= y; i++) {
            if (i % 2 == 0) {
                numPares++;
            };
        };

    };

    pares(32, 321);

6.5 escopos,   quero   exemplos

Escopos é o que determina qual parte do código será acessada e onde, são eles escopos globais e de bloco.
No escopo global o código fica "fora da caixa" servindo de maneira global ou seja para o código inteiro, o local fica "dentro da caixa" que
significa que aquele código só sera acessado dentro daquele local.

Ex: 
<script> Isso é um escopo global

var nome = Jonathan

Isso é um escopo local

functio (par){
    
}

</script>

6.6 inputs   e   outputs,   quero   exemplos

Inputs são entradas de dados e Outputs são saidas de dados

Ex: Prompt e alert

6.7 array,   quero   exemplos:

Array é uma lista usada para armazenar varios valores dentro de uma variavel

Ex:

var nomes = [Jonathan, João, Paloma...]

6.8 objetos,   quero   exemplos.

Objetos é algo criado onde pode se atribuir varias propriedades a ele, Exemplo:

var pessoa = {
    nome:Jonathan
    preferencias: [musica, filmes...]

6.9 (camelCase,   PascalCase,   kibab-case,   snake_case)

camelCase - modo de escrita utilizada em algumas linguagens onde se digita com a primeira letra minuscula e a primeira letra das 
proximas palavras maiusculas EX: meuNomeTodo

PascalCase - modo de escrita utilizada em algumas linguagens onde se digita com a primeira letra das palavras maiusculas EX: MeuNomeTodo

kibab-case - modo de escrita utilizada em algumas linguagens onde se digita com hifen entre as palavras e a primeira letra sempre
minuscula Ex: meu-nome-todo

snake_case - modo de escrita utilizada em algumas linguagens onde se digita com underline entre as palavras e a primeira letra sempre
minuscula Ex: meu_nome_todo

6.10  Diferença   entre   caminho   absoluto   e   caminho   relativo.

Caminho absoluto é um caminho para um diretorio fixo
caminho relativo é um link ou a pasta a qual estou trabalhando no momento

6.11 Diferença   entre   os   operadores   &&,   ||,   ==   e   != 

&& retorna se é verdadeiro ou falso apenas se todas forem falsas ou verdadeiras
|| retorna se é verdadeiro ou falso apenas se todas forem falsas ou verdadeiras
== igual
!= diferente

6.12  O   que   é   EPER,   e   para   que   serve.

Entender, Planejar, Executar, Revisar
Entender - Entender o que está sendo proposto
Planejar - Planejar como fazer o que foi proposto
Executar - Executar o que foi planejado
Revisar - Revisar o que foi feito para confirmar se está tudo funcionando

6.13 Explique   o   que   é   Pilha   e   Fila,   quero   exemplos.

Fila primeiro que entra primeiro que sai
pilha primeiro que entra ultimo que sai

Ex: 
Fila: 

fila.enqueue = inserir na primeira posição
fila.dequeue = retira da ultima posição

Pilha:
pilha.push = Inserir na primeira posição
pilha.pop = retira da primeira posição

6.14 Explique   com   suas   palavras   qual   a   diferença   entre   html,   javascript   e   css.

HTML - é uma linguagem onde se cria textos, botões e etc. é uma linguagem de marcação para diferenciar elementos em um texto.
Javascript - é uma linguagem de programação onde vc pode atribuir funções ou "criar" coisas, que auxiliam em uma pagina web por exemplo.
CSS - é uma linguagem que se utiliza para modificar a aparencia da página, mudar cores e etc.