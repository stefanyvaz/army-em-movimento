import { useState } from 'react'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [enviado, setEnviado] = useState(false)

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    console.log('E-mail cadastrado:', email)
    setEnviado(true)
  }

  return (
    <section className="newsletter">
      <h2>Fique por dentro</h2>
      <p>Receba novidades sobre o ARMY em Movimento.</p>

      {enviado ? (
        <p className="confirmacao">Obrigada por se inscrever! 💜</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <button type="submit">Inscrever-se</button>
        </form>
      )}
    </section>
  )
}

export default Newsletter