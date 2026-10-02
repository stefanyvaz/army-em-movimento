const desafios = [
  {
    titulo: 'Move Together',
    descricao: 'Escolha uma forma de movimento que você goste e participe no seu próprio ritmo.',
    categoria: 'Comunidade',
  },
  {
    titulo: 'Dance Challenge',
    descricao: 'Aprenda uma coreografia e compartilhe sua versão, do seu jeito.',
    categoria: 'Dança',
  },
  {
    titulo: 'Purple Week',
    descricao: 'Uma semana inteira dedicada a se movimentar todos os dias, mesmo que por poucos minutos.',
    categoria: 'Comunidade',
  },
]

function Desafios() {
  return (
    <section className="pagina-lista">
      <h1>Desafios</h1>
      <p className="pagina-intro">
        Escolha um desafio e participe no seu ritmo. Sem competição de corpos,
        só celebração de movimento.
      </p>
      <div className="lista-grid">
        {desafios.map((desafio) => (
          <div className="lista-card" key={desafio.titulo}>
            <span className="lista-categoria">{desafio.categoria}</span>
            <h3>{desafio.titulo}</h3>
            <p>{desafio.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Desafios