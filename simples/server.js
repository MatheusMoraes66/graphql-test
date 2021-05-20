var {graphql, buildSchema} = require('graphql');

// Criação do Esquema de dados que sera devolvido
var schema = buildSchema(
	`
		type Query{
			hello: String
		}
	`
)

// Fake API
var root = {
		hello: ()=> {
			return 'Hello World!';
		},
};

// Consumo da API
graphql(schema, '{ hello }', root).then((response)=> {
	console.log(response);
});


