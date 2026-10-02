import { useState } from 'react'

const perguntas = [
  { pergunta: 'Qual é o nome do fandom do BTS?', opcoes: ['BLINK', 'ARMY', 'ONCE', 'CARAT'], correta: 1 },
  { pergunta: 'O que significa a sigla ARMY?', opcoes: ['Always Ready to Make You happy', 'Amazing Rhythm and Music for Youth', 'Adorable Representative M.C. for Youth', 'Artists Ready to Move Youth'], correta: 2 },
  { pergunta: 'Em que ano o BTS estreou?', opcoes: ['2011', '2013', '2015', '2017'], correta: 1 },
  { pergunta: 'O que significa "borahae"?', opcoes: ['Boa noite', 'Muito obrigado', 'Até logo', 'Eu te roxo (I purple you)'], correta: 3 },
  { pergunta: 'Qual foi o primeiro single do BTS totalmente em inglês?', opcoes: ['Butter', 'Permission to Dance', 'Dynamite', 'Life Goes On'], correta: 2 },
  { pergunta: 'Quantos membros tem o BTS?', opcoes: ['5', '6', '7', '8'], correta: 2 },
  { pergunta: 'Qual programa de variedades do BTS tem jogos, missões e desafios?', opcoes: ['Idol Running', 'Run BTS', 'Runway ARMY', 'BTS Marathon'], correta: 1 },
  { pergunta: 'O que é o ARMY Bomb?', opcoes: ['O álbum de estreia', 'O lightstick oficial', 'Uma coreografia', 'Um prêmio de música'], correta: 1 },
  { pergunta: 'Por qual empresa o BTS estreou?', opcoes: ['SM Entertainment', 'JYP Entertainment', 'Big Hit Entertainment', 'YG Entertainment'], correta: 2 },
  { pergunta: 'Qual álbum trouxe o single "No More Dream", de 2013?', opcoes: ['Dark & Wild', '2 Cool 4 Skool', 'Skool Luv Affair', 'O!RUL8,2?'], correta: 1 },
]

const niveis = [
  { nome: 'Baby ARMY', minAcertos: 0, descricao: 'Você está começando a jornada. Bem-vinda! 💜' },
  { nome: 'True ARMY', minAcertos: 3, descricao: 'Você já conhece bastante do universo ARMY.' },
  { nome: 'Legendary ARMY', minAcertos: 5, descricao: 'Sua bagagem de fã é sólida!' },
  { nome: 'Sênior ARMY', minAcertos: 7, descricao: 'Você é uma referência para outras ARMYs.' },
  { nome: 'Ancião ARMY', minAcertos: 9, descricao: 'Sabedoria máxima do fandom! 👑' },
]

function calcularNivel(acertos: number) {
  return [...niveis].reverse().find((n) => acertos >= n.minAcertos) ?? niveis[0]
}

function TesteDeNivel() {
  const [indice, setIndice] = useState(0)
  const [acertos, setAcertos] = useState(0)
  const [terminou, setTerminou] = useState(false)

  function responder(opcao: number) {
    const novoAcertos = opcao === perguntas[indice].correta ? acertos + 1 : acertos
    setAcertos(novoAcertos)

    if (indice + 1 < perguntas.length) {
      setIndice(indice + 1)
    } else {
      localStorage.setItem('nivel-army', calcularNivel(novoAcertos).nome)
      setTerminou(true)
    }
  }

  function refazer() {
    setIndice(0)
    setAcertos(0)
    setTerminou(false)
  }

  if (terminou) {
    const nivel = calcularNivel(acertos)
    return (
      <section className="pagina-lista">
        <h1>Seu nível: {nivel.nome}</h1>
        <p className="pagina-intro">
          Você acertou {acertos} de {perguntas.length}. {nivel.descricao}
        </p>
        <button className="quiz-btn" onClick={refazer}>Refazer o teste</button>
      </section>
    )
  }

  const atual = perguntas[indice]

  return (
    <section className="pagina-lista">
      <h1>Teste de nível</h1>
      <p className="pagina-intro">Pergunta {indice + 1} de {perguntas.length}</p>
      <h2 className="quiz-pergunta">{atual.pergunta}</h2>
      <div className="quiz-opcoes">
        {atual.opcoes.map((opcao, i) => (
          <button className="quiz-btn" key={opcao} onClick={() => responder(i)}>
            {opcao}
          </button>
        ))}
      </div>
    </section>
  )
}

export default TesteDeNivel