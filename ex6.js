let carro = {
    marca: 'Ford',
    modelo: 'Fiesta',
    cor: 'prata',
}

for (propriedade in carro) {
    console.log(propriedade +":"+carro[propriedade]);
}