# Shop Happy

## Landing Page criada com base no desafio para Vaga de Estágio Front-End da Linx Impulse
 - Página: Shop Happy (https://marilzon.github.io/shop-happy/)

## Como executar
- > Instale a ferramenta de controle de versão git:
  ``` (https://git-scm.com/) ```
- > Instale o gerenciador de pacote NPM:
  ``` (https://www.npmjs.com/) ```
- > Execute o comando:
  ```git clone https://github.com/Marilzon/shop-happy```
- > Instale o *live-server*, e acesse a pasta do projeto:
  ``` npm install -g live-server ```
- > Execute o comando:
  ``` live-server ```

- ### :blush: Ou simplesmente se não quer instalar nada, acesse o github page do projeto (https://marilzon.github.io/shop-happy/).

## Sobre desenvolvimento do projeto

### Projeto contem as Stacks

 - *HTML5*
 - CSS3 (FlexBox e Grid Layout)
 - JavaScript.

 - Padrões chave de COMMITS:
  - Update: Codificação, refatoração e edição de codigo já existente.
  - Feature: Código com nova função dentro do projeto ou ferramenta nova.
  - Delete: Removendo parte do codigo, ou arquivos.

 ### Linha do tempo de criação

* Branch MAIN
 - 1º Fase:
  Iniciei a montagem da estruturas de marcaçoes, focando em manter a maior semantica dentro do escopo do projeto, e definindo os padroes de pastas e conectando JS e CSS com o HTML.
 - 2º Fase:
  Testando o algumas formas de replicar o Background proposto no MOCK, acabei conseguindo de certa forma, mas acabei tendo dificuldades com CSS e excesso de codigo, acabei apagando e deixando apenas regras CSS *HOVER*.

* Branch API
 - 1º Fase:
 Apos o as marcaçoes e estilizacoes iniciais, começa a jornada para manipular DOM e consumir o API, testei varias formas, acessei videos e tutorials para definir a melhor maneira para implementar.

- 2º Fase:
Foi criado uma manipulação que acessa o ID da div que quero enviar os dados da APi usando o ```document.querySelector```.

- 3º Fase:
Consegui com base em conhecimento anteriores de projetos meus, criar uma funcão que acessa a api pela URL, para manipular a paginação ela foi muito efetiva e conseguiu resolver minha dificuldade.

* Branch CSS
- 1º Fase:
Definindo variaveis de cores CSS e padrões de margin e padding.

- 2º Fase:
Após ter sucesso com a API, volto a parte do CSS que considerava bastante desafiadora, o background com uma leve rotação, estudei sobre os pseudos elementos *::before* e *::after* e consegui implementar o background.
- 3º Fase: Trabalher em remover o maximo possivel de declarações repetidas nos seletores.
- 4º Fase:
Criação do arquivo *mobile.css* arquivo que contem regras de CSS para seguir o padrão de layout em dispositivos moveis.

*Fiquem a vontade para conferir todo projeto*

```
Atenciosamente: Marilzon de Sousa
Desenvolvedor Front End Iniciante
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
