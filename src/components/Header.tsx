import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <h1>ARMY em Movimento</h1>
      <p>Movimento e bem-estar para toda a fandom</p>
     
      <nav>
  <Link to="/">Início</Link>
  <Link to="/sobre">Sobre</Link>
  <Link to="/desafios">Desafios</Link>
  <Link to="/fanbases">Fanbases</Link>
<Link to="/teste-de-nivel">Teste de nível</Link>
<Link to="/recursos">Recursos</Link>
</nav>
    </header>
  )
}

export default Header