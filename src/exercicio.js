const alunos = [
    pernalonga = {
        nome: 'Pernalonga',
        nota: 10,
    },
    batman = {
        nome: 'Batman',
        nota: 8,
    },
    patodonald = {
        nome: 'Patodonald',
        nota: 3,
    },
    
    patolino = {
        nome: 'Patolino',
        nota: 6,
    }
]

//utilizei o metodo filter para criar um novo array para colocar apenas os alunos que atingiram a nota 6 ou acima.
const passou = alunos.filter(aluno => aluno.nota >= 6);
//utilizei o metodo foreach para repetir o array acima e exibilo no console.
passou.forEach(aluno => {
    console.log(`O aluno ${aluno.nome} passoou com nota ${aluno.nota}.`);
});


