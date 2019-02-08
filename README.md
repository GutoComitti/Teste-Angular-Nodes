# Desafio Front-End Treasy

## Aplicativo de criação e gerenciamento de árvore de nós

Este aplicativo foi gerado através do framework Angular (https://github.com/angular/angular-cli) versão 7.1.2.

## Para rodar o aplicativo, siga os passos abaixo:

Abra a linha de comando na pasta atual;
Rode o comando `ng serve`, e mantenha a linha de comando aberta.
Ao compilar com sucesso, uma mensagem deverá aparecer e o aplicativo estará pronto para uso. 
Navegue até a página `http://localhost:4200/`.

## Instruções para uso do aplicativo:

Para criar um nó, clique no ícone de criar e preencha os campos. O código e descrição dos nós são obrigatórios e a observação é opcional.
Para selecionar um nó, clique no nó desejado. Os nós serão criados abaixo do nó que estiver selecionado.
Para editar um nó, selecione no nó desejado, clique no ícone de editar e preencha os campos.
Para excluir um nó, selecione o nó desejado e clique no ícone de excluir.
Para expandir ou retrair todos os nós, clique nas setas acima do filtro, no lado direito.
Para filtrar os nós, digite parte ou o nome inteiro do nó desejado.
Para expandir ou retrair os nós filhos de um nó, clique na seta ao lado do nó desejado.

## Decisões de projeto:

### Uso de Angular ao invés de AngularJS:

*Angular é uma versão mais nova, o que o torna o framework mais atraente para novos desenvolvedores. Apesar de haver o custo de migração
 de código legado e de haver uma comunidade	de desenvolvedores de AngularJS, ao longo prazo isso poderá se tornar um problema.

*Por se tratar de uma versão mais nova, é natural que a equipe do Angular dê maior atenção ao Angular do que ao AngularJS.

*A CLI do angular facilita bastante na criação de código. Apesar de ser apenas o template inicial de código (o código inicial do projeto, components, directives, services, pipes, etc), há também a possibilidade de erro humano e perda de tempo para achar bugs causados pelo mesmo.

*Angular possui mais compatibilidades com novos padrões da web, como Service Workers.

*Forte tipagem do typescript, interface mais limpa e suporte ao mobile também são fatores a favor do Angular.

*Apesar de todos os pontos acima, fazer a transição do AngularJS pra Angular não uma tarefa simples, e certamente há muito o que se avaliar.

### Uso do Bower

*Nos ultimos anos, a comunidade tem migrado do bower para outras ferramentas. Até mesmo o time de desenvolvimento do Bower está recomendando
 que se use NPM e webpack ao invés de Bower para novos projetos. Por se tratar de um novo projeto, o uso do bower não é o mais adequado.

### Uso do Gulp

*As novas versões do Angular já vem com a CLI que possibilita automatizar muitas coisas. Junto com o projeto gerado pela CLI, vem também o 
webpack pre-configurado. Por se tratar de uma ótima ferramenta de bundle e de ter um hot reload, o desenvolvimento com o webpack pre-configurado
do Angular fica bastante otimizado, não sendo necessário utilizar Gulp.