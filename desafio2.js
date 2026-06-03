const alunos = [
  { nome: "Ana", notas: [8, 7, 9] },
  { nome: "Bruno", notas: [5, 6, 5] },
  { nome: "Carla", notas: [9, 9, 10] },
  { nome: "Diego", notas: [6, 7, 8] },
];

const medias = alunos.map(aluno => {
    const somaNota = aluno.notas.reduce((somaNotas, notas)=> somaNotas + notas, 0);
    const media=somaNota/aluno.notas.length;
    return { nome: aluno.nome, media: media };
});
const mediasAprovados = medias.filter(aluno => aluno.media >= 7);
mediasAprovados.sort((a, b) => b.media - a.media);
// Questao 1
console.log(mediasAprovados);

const filmes = [
  { titulo: "O Senhor dos Anéis", ano: 2001, genero: "fantasia" },
  { titulo: "Matrix", ano: 1999, genero: "ficção" },
  { titulo: "Interestelar", ano: 2014, genero: "ficção" },
  { titulo: "Divertida Mente", ano: 2015, genero: "animação" },
];

function filtrarFilmes(genero,ordem) {
    if (ordem==="ano"){
        const resultado = filmes.filter((filme)=> filme.genero === genero)
        .sort((a,b)=>b.ano - a.ano);

        return resultado.map((filme)=>`${filme.titulo} (${filme.ano}) - ${filme.genero}`);
    }
    if (ordem==="titulo"){
        const resultado = filmes.filter((filme)=> filme.genero === genero)
        .sort((a,b)=>(a.titulo > b.titulo) - (a.titulo < b.titulo));

        return resultado.map((filme)=>`${filme.titulo} (${filme.ano}) - ${filme.genero}`);
    }
};

console.log(filtrarFilmes("ficção","titulo"));