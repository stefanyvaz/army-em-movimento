import { useState } from 'react'

type Props = {
  onSugerir: (tag: string) => void
}

function PontoDePartida({ onSugerir }: Props) {
  const [frequencia, setFrequencia] = useState('')
  const [preferencia, setPreferencia] = useState('')
  const [sugestao, setSugestao] = useState('')

  function sugerir() {
    let tag = preferencia
    if (frequencia === 'quase-nunca' && preferencia === 'esporte') {
      tag = 'sem impacto'
    }
    setSugestao(tag)
    onSugerir(tag)
  }

  return (
    <div className="ponto-partida">
      <h3>Ache seu ponto de partida</h3>
      <p>Não existe resposta certa. É só uma sugestão para você começar no seu ritmo.</p>

      <label>
        Com que frequência você se movimenta hoje?
        <select value={frequencia} onChange={(e) => setFrequencia(e.target.value)}>
          <option value="">Escolha...</option>
          <option value="quase-nunca">Quase nunca</option>
          <option value="as-vezes">1 a 2 vezes por semana</option>
          <option value="sempre">3 ou mais vezes por semana</option>
        </select>
      </label>

      <label>
        Que tipo de movimento combina mais com você?
        <select value={preferencia} onChange={(e) => setPreferencia(e.target.value)}>
          <option value="">Escolha...</option>
          <option value="sem impacto">Algo leve, sem impacto</option>
          <option value="dança">Dança e música</option>
          <option value="esporte">Esporte ou desafio</option>
          <option value="adaptável">Opções adaptadas (cadeira, parede...)</option>
          <option value="para idosos">Pensadas para pessoas idosas</option>
        </select>
      </label>

      <button className="quiz-btn" onClick={sugerir} disabled={!frequencia || !preferencia}>
        Ver sugestões
      </button>

      {sugestao && (
        <p className="ponto-resultado">
          Mostrando atividades "{sugestao}" abaixo.
          {frequencia === 'quase-nunca' && ' Começar devagar já conta: poucos minutos valem!'}
        </p>
      )}
    </div>
  )
}

export default PontoDePartida