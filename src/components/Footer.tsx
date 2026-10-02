function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>ARMY em Movimento — feito por fãs, para fãs.</p>
      <p>&copy; {year} Todos os direitos reservados.</p>
      <p className="disclaimer">
        Este é um projeto independente e não oficial. Não possui vínculo,
        patrocínio ou aprovação de BTS, BIGHIT MUSIC ou HYBE.
      </p>
    </footer>
  )
}

export default Footer