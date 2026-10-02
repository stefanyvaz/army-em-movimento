import runArmyImg from '../assets/run-army.jpg'

function CorridaSection() {
  return (
    <section className="corrida-section" id="corrida">
<img src={runArmyImg} alt="Ilustração de pessoas correndo juntas" className="corrida-img" />      <p className="corrida-legenda">
        Corra, caminhe ou se mova no seu ritmo — sozinha ou em comunidade.
      </p>
    </section>
  )
}

export default CorridaSection