const escola = "Cod3r"

console.log("1",escola.charAt(4)) //Nesta situação ele retorna o item na posição especificada
console.log("2-",escola.charAt(5)) // Em js, quando ele não escontra, é retornado um valor em branco
console.log("3-",escola.charCodeAt(3)) //Retorna o valor especificado na tabela unicode
console.log("4-",escola.indexOf('3'))// Verifica se na string possui o caracter especificado
console.log("5-",escola.substring(1)) //Retorna o valor do index inicial, incluindo ele até o final
console.log("6-",escola.substring(0,3)) //Retorna o valor da string com index inicial, incluindo ele
                                   // e vai até o segundo parametro excluindo ele
console.log("7-",'Escola '.concat(escola).concat("!")) //Retorna o valor concatenado, independente se
                                                  //uma variavel ou se escrevemos uma string
console.log("8-",escola.replace(3, 'e'))/*Retorna o valor, substituindo o primeiro parametro 
                                    pelo segundo parametro */
console.log("9 -",'Ana, Maria, Pedro'.split(',')) //Transforma a string em um array
