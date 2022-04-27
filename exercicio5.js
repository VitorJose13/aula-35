let usuarios = [
    {
        nome:"Vitor",
        sobrenome:"Silva",
        idade:"18",
        email:"vitor@gmail.com",
    },
    {
        nome:"Cassiano",
        sobrenome:"Peres",
        idade:"32",
        emmail: "dio@gmail.com",
    },
    {
        nome:"Arthur",
        sobrenome:"Da DIO",
        idade:"22",
        email:"arthur@tranformatec.com"
    }
];

//pega um indice do objeto "usuário" dentro de um array de objetos
for (const usuario of usuarios.entries()) {

    console.log(usuario[1])

}
