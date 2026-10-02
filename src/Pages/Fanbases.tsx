const fanbases = [
  { nome: 'ARMY São Paulo', pais: 'Brasil', descricao: 'Fanbase demonstrativa — em breve informações reais.' },
  { nome: 'ARMY Rio de Janeiro', pais: 'Brasil', descricao: 'Fanbase demonstrativa — em breve informações reais.' },
]

function Fanbases() {
  return (
    <section className="pagina-lista">
      <h1>Rede de Fanbases</h1>
      <p className="pagina-intro">
        Fanbases poderão se cadastrar para divulgar desafios e conectar
        comunidades de diferentes regiões.
      </p>
      <p className="demo-notice">Dados demonstrativos — em breve conectados de verdade.</p>
      <div className="lista-grid">
        {fanbases.map((fanbase) => (
          <div className="lista-card" key={fanbase.nome}>
            <span className="lista-categoria">{fanbase.pais}</span>
            <h3>{fanbase.nome}</h3>
            <p>{fanbase.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Fanbases