function Hero() {
  return (
    <section className="hero">
      <h2>Mova-se com a ARMY</h2>
      <p>
        Um espaço para celebrar o movimento, o esporte e o bem-estar,
        inspirado no BTS — sem julgamentos, só motivação.
      </p>
      <button onClick={() => {
  document.getElementById('atividades')?.scrollIntoView({ behavior: 'smooth' })
}}>
  Começar agora
</button>
    </section>
  )
}

export default Hero