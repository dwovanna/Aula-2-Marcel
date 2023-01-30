/******************************************************
 * Objetivo: Calcular a média de 4 notas escolares
 * Autor: Dwovanna Santos
 * Data: 27/01/2023
 * Versão: 1.0
*****************************************************/

//import da biblioteca readline
var readline = require('readline');
const { Console } = require('console');

//Cria o objeto para ser especialista em entrada de dados pelo teclado
var entradaDados = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

/**
 * Criação de Variáveis
    *Var - cria em espaço memória de escopo global para o projeto, ou seja,
    essa variável podera ser utilizada em qualquer parte do arquivo(várias funções)

    *let - cria em espaço memória de escopo local para o projeto, ou seja,
    essa variável somente podera ser utilizada dentro da função que foi criada.

    *const - cria em espaço memória de escopo local ou global para o projeto, ou seja,
    essa constante podera ser utilizada em qualquer parte do projeto e nunca sofrera alteração
 * 
 * 
 * 
 */

 //Função de CallBack para entrar nome do aluno
entradaDados.question('Digite seu nome: \n', function(nome){
    // Recebe o valor digitado pelo teclado
    let nomeAluno = nome;

    //Função de CallBack para entrar a nota1
    entradaDados.question('Digite a nota1: \n', function(nota1){
        let valor1 = nota1;
        
        //Função de CallBack para entrar nota2
        entradaDados.question('Digite a nota2: \n', function(nota2){
            let valor2 = nota2;

            //Função de CallBack para entrar nota3
            entradaDados.question('Digite a nota3: \n', function(nota3){
                let valor3 = nota3;

                 //Função de CallBack para entrar nota4
                entradaDados.question('Digite a nota4: \n', function(nota4){
                    let valor4 = nota4;
                    let media;

                    /**
                        Conersão de Tipos de dados
                     
                         parseInt() - Converte uma string em inteiro
                         parseFloat() - Converte uma string em real
                         Number() - converte uma string para número, conforme a entrada do valor o JS define se será inteiro ou real

                         Operadores de comparação
                            == (verifica a igualdade entre conteudos)
                            != (verifica a diferença entre conteúdos)
                            !== (verifica a diferença entre conteudos e igualdade de tipo de dados)
                            ==! (verifica a igualdade entre conteudos e diferença de tipos de dados)
                            === (verifica a igualdade entre contúdos e tipos de dados)

                            0 = conteúdo
                            '' = dados
                        
                                Ex:
                                0 === 0 v
                                0 === '0' F
                                '0' === 0 F
                                0 == 0 v
                                0 == '0' v
                                '0' == 0 v

                            < (menor)
                            > (maior)
                            <= (menor ou igual)
                            >= (maior ou igual)
                      
                            Operadores Lógicos 

                            E        &&    AND 
                            OU       ||    OR 
                            NEGAÇÃO  !     NOT

                     */

                    // validação para entrada vazia
                     if(valor1 =='' || valor2 == '' || valor3 == '' || valor4 == '')
                    {
                        console.log('ERRO: Voce deixou de entrar com algum valor.')

                    // validação para entrada de texto
                    }else if(isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4))
                    {
                        console.log('ERRO: Voce não digitou um número válido.')
                    // validação para entrada de dados entre 0 e 10
                    }else if( valor1 < 0 || valor2 < 0 || valor3 < 0 || valor4 < 0)
                    {
                        console.log('ERRO: Número minímo é 0')
                    } else if (valor1 > 10 || valor2 > 10 || valor3 > 10 || valor4 > 10)
                    {
                        console.log('ERRO: Número máximo é 10')
                    }
                    else
                    {
                        media = (parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3) + parseFloat(valor4))/4;
                        if(media < 7)
                        {
                            console.log('Status do Aluno: REPROVADO!');
                        }else 
                        {
                            console.log('Statatus do Aluno: APROVADO!');
                        }
                        console.log('Média do Aluno: ' + media.toFixed(1));
                    }

                });
            });

        });
    });
});