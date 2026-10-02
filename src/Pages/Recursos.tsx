const recursos = [
  {
    titulo: 'Como começar',
    texto: 'Escolha uma atividade que combine com você na página de Atividades, ou use o "Ponto de partida" para receber uma sugestão.',
  },
  {
    titulo: 'Segurança em primeiro lugar',
    texto: 'Comece devagar, respeite os sinais do seu corpo e pare se sentir dor. Em caso de dúvida sobre uma condição de saúde, converse com um profissional antes de começar algo novo.',
  },
  {
    titulo: 'Acessibilidade',
    texto: 'Atividades marcadas como "adaptável" ou "sem impacto" podem ser feitas sentada, na cadeira, ou com apoio. Procure sempre a versão que funciona para você.',
  },
  {
    titulo: 'Materiais para fanbases',
    texto: 'Em breve: kit de divulgação, templates e calendário de campanhas para fanbases parceiras.',
  },
]

const perguntasFrequentes = [
  { pergunta: 'Preciso pagar para participar?', resposta: 'Não. O ARMY em Movimento é gratuito e feito por fãs.' },
  { pergunta: 'Preciso mostrar meu peso ou corpo?', resposta: 'Nunca. O foco é participação, não comparação.' },
  { pergunta: 'Este projeto é oficial do BTS?', resposta: 'Não. É um projeto independente, sem vínculo com BTS, BIGHIT MUSIC ou HYBE.' },
]

function Recursos() {
  return (
    <section className="pagina-lista">
      <h1>Recursos</h1>
      <p className="pagina-intro">
        Materiais educativos para começar com segurança e tirar dúvidas comuns.
      </p>

      <div className="lista-grid">
        {recursos.map((recurso) => (
          <div className="lista-card" key={recurso.titulo}>
            <h3>{recurso.titulo}</h3>
            <p>{recurso.texto}</p>
          </div>
        ))}
      </div>

      <h2 className="recursos-faq-title">Perguntas frequentes</h2>
      <div className="lista-grid">
        {perguntasFrequentes.map((item) => (
          <div className="lista-card" key={item.pergunta}>
            <h3>{item.pergunta}</h3>
            <p>{item.resposta}</p>
          </div>
        ))}
      </div>

      <p className="pagina-aviso">
        Os materiais são educativos e não substituem orientação profissional individualizada.
      </p>
    </section>
  )
}

export default Recursos