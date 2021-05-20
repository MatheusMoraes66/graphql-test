# GraphQL

### Esse repositorio contem exemplos coletados do site oficial do GraphQL.

## O que é GraphQL?

O GraphQL seria uma nova forma do front-end consumir dados de forma tipada e facil. Em poucas palavras é isso que o GraphQL vem trazer para as aplicações uma facilidade na hora de consumir. Lembrando que consumir de forma facil não quer dizer melhora de performace e sim uma melhora na forma da escrita da consulta do dado.

## Schema

Acho que essa é a chave para o GraphQL, de forma rapida os Schemas são contratos em nossas buscas aos dados.

## Projetos

### Simples

Na pasta Simples, temos uma aplicação simples que apenas consulta em um mock .

### Running-Express

Aqui temos algo um mais interesante quando usamos express podemos usar uma interface de consulta para trazer os dados da nossa FakeApi.

# Indo Além com Apollo

Pesquisando um pouco mais sobre GraphQL eu acabei achando um projeto bem legal chamado Apollo, parecendo uma solução mais moderna para usar o GraphQL.

Em sua documentação eles trazem um conceito interesante que é o "Schema-first", o que ocorre é o seguinte com o Schema bem definido no inicio do projeto o time de Front-end e Back-end podem trabalhar sem depender um do outro, pois o GraphQL nos permite realizar um Mock para o Front-end e serve como base para a construção da API no Back-end.

### Então por onde eu poderia tirar a ideia para gerar os meus Schemas?

Isso é algo bem simples, do nosso Design toda equipe possui uma mente criativa para criar Mockups que são aquelas telas de amostra de como o produto pode ser. Apos uma analise rapida já é possivel enchergar alguns components que vão receber os dados do nosso Back-end.

Temos tambem nosso "The data graph", esse é o nome que damos para a forma que criamos um tipo de pesquisa dentro do GraphQL.

Exemplo:

Temos a seguinte compoente com os seguintes dados.

* Title
* Thumbnail image
* Length (estimated duration)
* Module count
* Author name
* Author picture

Aqui podemos pensar em nessa estrutura como um objeto e cada ponto como uma Track que pode ser usada para criar um nó com o objeto todo que queremos trazer. Essa relação é chamada de Data Graph.

### SDL (Schema Definition Language)

Temos aqui basicamente nosso Schema:

```javascript
type SpaceCat {
  age: Int
  missions: [Mission]
}
```

Essa é a carinha do nosso Schema, ele possui tipagem e segue em seu atributos o padrão Camel Case.