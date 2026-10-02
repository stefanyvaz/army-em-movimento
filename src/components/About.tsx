const values = [
  'Respeito e inclusão',
  'Participação, não competição',
  'Movimento no seu próprio ritmo',
  'Comunidade acima de comparação',
]

function About() {
  return (
    <section className="about" id="sobre">
      <h2>Sobre o projeto</h2>
      <p className="about-mission">
        Incentivar movimento, bem-estar e comunidade entre ARMYs de todas as
        idades e condições físicas — sem comparação de corpos, sem pressão,
        no ritmo de cada pessoa.
      </p>
      <ul className="about-values">
        {values.map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
      <p className="about-not">
        Este projeto <strong>não é</strong> um programa de emagrecimento nem
        substitui orientação médica ou profissional.
      </p>
    </section>
  )
}

export default About