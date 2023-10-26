const aulas = [
    {
        Identificador: 1,
        Nome_da_aula: 'Introdução a programação'
    },
    {
        Identificador: 2,
        Nome_da_aula: 'Variáveis'
    },
    {
        Identificador: 3,
        Nome_da_aula: 'Condicionais'
    },
    {
        Identificador: 4,
        Nome_da_aula: 'Arrays'
    }
];

const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas: []
}

for (let id = 0; id < aulas.length; id++) {
    aulas[id] = { id: aulas[id].Identificador, nome: aulas[id].Nome_da_aula }
    curso.aulas.push(aulas[id])

}

console.log(curso); 