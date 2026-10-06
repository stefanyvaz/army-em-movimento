import { useState, useEffect } from 'react'
import PontoDePartida from './PontoDePartida'
import { Link } from 'react-router-dom'
import { temNaEnciclopedia, termoDoEsporte } from '../data/busca'

const activities = [
  { title: 'Caminhada', description: 'Comece com passos leves, no seu ritmo.', points: 10, tags: ['sem impacto', 'adaptável'] },
  { title: 'Dança', description: 'Solte o corpo com as coreografias do BTS.', points: 20, tags: ['dança'] },
  { title: 'Alongamento', description: 'Cuide do corpo antes e depois de se mover.', points: 5, tags: ['sem impacto', 'adaptável'] },
  { title: 'Futebol', description: 'Chute uma bola com amigos ou sozinho.', points: 20, tags: ['esporte'] },
  { title: 'Vôlei', description: 'Um clássico pra jogar em grupo.', points: 20, tags: ['esporte'] },
  { title: 'Natação', description: 'Movimento leve e completo na água.', points: 25, tags: ['sem impacto'] },
  { title: 'Ciclismo', description: 'Pedale no seu ritmo, ao ar livre ou na bike ergométrica.', points: 20, tags: ['esporte'] },
  { title: 'Corrida', description: 'Para quem já pratica e quer seguir em movimento.', points: 25, tags: ['esporte'] },
  { title: 'Yoga', description: 'Respiração, equilíbrio e alongamento profundo.', points: 15, tags: ['sem impacto', 'adaptável'] },
  { title: 'Escalada', description: 'Desafie o corpo em uma parede de escalada indoor.', points: 25, tags: ['esporte'] },
  { title: 'Tênis ou Ping Pong', description: 'Reflexo e diversão com raquete.', points: 20, tags: ['esporte'] },
  { title: 'Artes marciais', description: 'Disciplina e movimento, no seu nível.', points: 20, tags: ['esporte'] },
  { title: 'Patinação no gelo', description: 'Equilíbrio e diversão sobre o gelo.', points: 20, tags: ['esporte'] },
  { title: 'Exercícios na cadeira', description: 'Movimento adaptado, sentado, no seu ritmo.', points: 10, tags: ['adaptável', 'sem impacto'] },
  { title: 'Exercícios na parede', description: 'Apoio e resistência leve usando a parede.', points: 10, tags: ['adaptável', 'sem impacto'] },
  { title: 'Movimento em casa', description: 'Qualquer atividade dentro de casa já conta.', points: 10
    , tags: ['adaptável'] },
      { title: 'CrossFit', description: 'Treino funcional variado. Comece leve e vá no seu ritmo.', points: 25, tags: ['alta intensidade', 'esporte'] },
  { title: 'Aeróbica / AeroHIIT', description: 'Aula de aeróbica ou intervalos curtos de movimento com pausas.', points: 25, tags: ['alta intensidade'] },
  { title: 'HIIT leve', description: 'Intervalos curtos com descanso. Escolha movimentos que sejam confortáveis.', points: 20, tags: ['alta intensidade', 'adaptável'] },
  { title: 'Funcional', description: 'Movimentos do dia a dia para ganhar força e mobilidade.', points: 20, tags: ['adaptável'] },
  { title: 'Pilates', description: 'Controle, postura e fortalecimento com foco na respiração.', points: 15, tags: ['sem impacto', 'adaptável'] },
  { title: 'Zumba', description: 'Dança animada ao som de ritmos latinos.', points: 20, tags: ['dança'] },
  { title: 'Dança contemporânea', description: 'Aprenda movimentos expressivos e criativos.', points: 20, tags: ['dança'] },
  { title: 'Dança aleatória (Random Play Dance)', description: 'Toque uma música e dance o que vier na cabeça.', points: 15, tags: ['dança', 'adaptável'] },
  { title: 'Ginástica rítmica', description: 'Flexibilidade, coordenação e graça com fita, bola ou arco.', points: 20, tags: ['esporte'] },
  { title: 'Yoga aéreo', description: 'Yoga com tecido suspenso. Procure sempre um instrutor habilitado.', points: 25, tags: ['esporte'] },
  { title: 'Boxe', description: 'Golpes, ritmo e coordenação, no seu nível.', points: 20, tags: ['esporte'] },
  { title: 'Musculação', description: 'Fortalecimento com pesos ou o peso do próprio corpo.', points: 20, tags: ['esporte', 'adaptável'] },
  { title: 'Calistenia', description: 'Exercícios com o peso do próprio corpo, sem equipamentos.', points: 20, tags: ['adaptável'] },
  { title: 'Spinning', description: 'Pedalada em grupo ao som de música.', points: 20, tags: ['esporte'] },
  { title: 'Basquete', description: 'Quadra, bola e time.', points: 20, tags: ['esporte'] },
  { title: 'Beisebol', description: 'Rebatida, corrida e estratégia.', points: 20, tags: ['esporte'] },
  { title: 'Badminton', description: 'Rápido, leve e muito divertido.', points: 20, tags: ['esporte'] },
  { title: 'Sepak takraw', description: 'Uma espécie de vôlei com os pés, popular no sudeste asiático.', points: 25, tags: ['esporte'] },
  { title: 'Críquete', description: 'Esporte tradicional com taco e bola.', points: 20, tags: ['esporte'] },
  { title: 'Boliche', description: 'Diversão e pontaria em grupo.', points: 10, tags: ['sem impacto', 'adaptável'] },
  { title: 'Lacrosse', description: 'Esporte de equipe com bastões e rede.', points: 20, tags: ['esporte'] },
  { title: 'Hóquei no gelo', description: 'Velocidade e equipe sobre o gelo.', points: 25, tags: ['esporte'] },
  { title: 'Futebol americano', description: 'Estratégia e esporte de equipe. Sempre com equipamento de proteção.', points: 25, tags: ['esporte'] },
  { title: 'Golfe', description: 'Precisão e caminhada ao ar livre.', points: 15, tags: ['sem impacto', 'esporte'] },
  { title: 'Esqui', description: 'Deslize na neve, com instrutor e equipamento adequado.', points: 25, tags: ['esporte'] },
  { title: 'Pesca', description: 'Calma, paciência e contato com a natureza.', points: 10, tags: ['sem impacto', 'adaptável'] },
  { title: 'Equitação', description: 'Aprenda a montar e conviver com cavalos, com instrutor.', points: 20, tags: ['esporte'] },
  { title: 'Paraquedismo', description: 'Só com escola e instrutor certificados. Muita segurança primeiro.', points: 30, tags: ['radical'] },
  { title: 'Pintura', description: 'Atividade criativa e relaxante. Também conta como movimento!', points: 10, tags: ['criativo', 'adaptável'] },
  { title: 'Visitar exposições', description: 'Caminhe por museus e galerias.', points: 10, tags: ['criativo', 'sem impacto'] },
    { title: 'Treino de coreografia (fase Antes)', description: 'Aquecimento e repetição de passos em blocos curtos, no seu ritmo.', points: 20, tags: ['dança', 'inspirado no BTS'] },
  { title: 'Marcha em ritmo (fase Durante)', description: 'Caminhada em ritmo constante, inspirada na marcha do treinamento básico.', points: 10, tags: ['sem impacto', 'adaptável', 'inspirado no BTS'] },
  { title: 'Circuito de calistenia (fase Durante)', description: 'Agachamento, prancha e flexão (na parede ou com joelhos apoiados, se preferir).', points: 20, tags: ['adaptável', 'inspirado no BTS'] },
  { title: 'Corrida leve + força (fase Depois)', description: 'Corrida ou caminhada rápida e depois um treino de força leve.', points: 25, tags: ['esporte', 'inspirado no BTS'] },
    { title: 'Alongamento na cadeira', description: 'Movimentos suaves de braços, pescoço e pernas, sentada.', points: 10, tags: ['para idosos', 'sem impacto', 'adaptável'] },
  { title: 'Equilíbrio com apoio', description: 'Fique em pé segurando numa bancada ou cadeira firme e transfira o peso de uma perna para a outra.', points: 10, tags: ['para idosos', 'sem impacto', 'adaptável'] },
  { title: 'Dança sentada', description: 'Dance ao som da sua música favorita, movendo braços e pés sentada.', points: 10, tags: ['para idosos', 'dança', 'adaptável'] },
  { title: 'Caminhada leve na praça', description: 'Passeio tranquilo, com pausas para descansar.', points: 10, tags: ['para idosos', 'sem impacto'] },
  { title: 'Hidroginástica', description: 'Exercícios na água, que amortece o impacto nas articulações.', points: 15, tags: ['para idosos', 'sem impacto'] },
  { title: 'Tai Chi / Qigong', description: 'Movimentos lentos e respirados, de origem chinesa.', points: 15, tags: ['para idosos', 'sem impacto', 'adaptável'] },
    { title: 'Exercícios de força', description: 'Fortalecimento progressivo com pesos, elásticos ou o peso do corpo.', points: 20, tags: ['adaptável'] },
  { title: 'Agachamento livre (cócoras)', description: 'Alongamento e mobilidade de quadril, no seu ritmo e amplitude.', points: 10, tags: ['sem impacto', 'adaptável'] },
  { title: 'Sumô (treino recreativo)', description: 'Força, equilíbrio e técnica, sempre com instrutor e em ambiente seguro.', points: 25, tags: ['esporte'] },
]
  


const badges = [
  { title: 'Primeiro Movimento', description: 'Concluiu sua primeira atividade.', minCompleted: 1 },
  { title: 'Comecei Minha Jornada', description: '3 atividades diferentes concluídas.', minCompleted: 3 },
{ title: 'Move Together', description: '10 atividades diferentes concluídas.', minCompleted: 10 },  { title: 'Bronze ARMY', description: 'Alcançou 30 pontos.', minPoints: 30 },
  { title: 'Purple ARMY', description: 'Alcançou 80 pontos.', minPoints: 80 },
]
const levels = [
  { name: 'Baby ARMY', minPoints: 0 },
  { name: 'True ARMY', minPoints: 60 },
  { name: 'Legendary ARMY', minPoints: 200 },
  { name: 'Sênior ARMY', minPoints: 400 },
  { name: 'Ancião ARMY', minPoints: 700 },
]

function Activities() {
  const [completed, setCompleted] = useState<string[]>(() => {
    const saved = localStorage.getItem('atividades-concluidas')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('atividades-concluidas', JSON.stringify(completed))
  }, [completed])
  const [filtro, setFiltro] = useState('todas')

const allTags = ['todas', ...Array.from(new Set(activities.flatMap((a) => a.tags)))]

const visible =
  filtro === 'todas' ? activities : activities.filter((a) => a.tags.includes(filtro))

  function toggleActivity(title: string) {
    if (completed.includes(title)) {
      setCompleted(completed.filter((item) => item !== title))
    } else {
      setCompleted([...completed, title])
    }
  }

  const totalPoints = activities
    .filter((activity) => completed.includes(activity.title))
    .reduce((sum, activity) => sum + activity.points, 0)
    const currentLevelIndex = levels.reduce(
  (found, level, index) => (totalPoints >= level.minPoints ? index : found),
  0
)
const currentLevel = levels[currentLevelIndex]
const nextLevel = levels[currentLevelIndex + 1]
const progress = nextLevel
  ? ((totalPoints - currentLevel.minPoints) / (nextLevel.minPoints - currentLevel.minPoints)) * 100
  : 100

  return (
    <section className="activities" id="atividades">
      <h2>Atividades</h2>
      <p className="points-total">✨ {totalPoints} pontos</p>
      <PontoDePartida onSugerir={setFiltro} />

<div className="tag-filters">
  {allTags.map((tag) => (
    <button
      key={tag}
      className={`tag-filter ${filtro === tag ? 'active' : ''}`}
      onClick={() => setFiltro(tag)}
    >
      {tag}
    </button>
  ))}
</div>
      <p className="level-name">🎖️ {currentLevel.name}</p>
<div className="level-bar" aria-label="Progresso até o próximo nível">
  <div className="level-bar-fill" style={{ width: `${progress}%` }} />
</div>
<p className="level-next">
  {nextLevel
    ? `Faltam ${nextLevel.minPoints - totalPoints} pontos para ${nextLevel.name}`
    : 'Você chegou ao nível máximo! 💜'}
</p>
      <div className="activities-grid">
       {visible.map((activity) => (
          <div
            className={`activity-card ${completed.includes(activity.title) ? 'done' : ''}`}
            key={activity.title}
            onClick={() => toggleActivity(activity.title)}
          >
            <h3>{activity.title}</h3>
            <p>{activity.description}</p>
            <div className="activity-tags">
  {activity.tags.map((tag) => (
    <span className="tag" key={tag}>{tag}</span>
  ))}
</div>
{temNaEnciclopedia(activity.title) && (
  <Link
    to={`/esportes?busca=${encodeURIComponent(termoDoEsporte(activity.title))}`}
    className="ver-enciclopedia"
    onClick={(e) => e.stopPropagation()}
  >
    📖 Ver na Enciclopédia
  </Link>
)}
            <span className="status">
              {completed.includes(activity.title)
                ? '✓ Concluído'
                : `Clique para marcar · +${activity.points} pts`}
            </span>
          </div>
        ))}
      </div>

      <h3 className="badges-title">Conquistas</h3>
      <div className="badges-grid">
        {badges.map((badge) => {
          const earned = badge.minPoints
            ? totalPoints >= badge.minPoints
            : completed.length >= (badge.minCompleted ?? 0)

          return (
            <div className={`badge-card ${earned ? 'earned' : 'locked'}`} key={badge.title}>
              <span className="badge-icon">{earned ? '🏅' : '🔒'}</span>
              <h4>{badge.title}</h4>
              <p>{badge.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Activities