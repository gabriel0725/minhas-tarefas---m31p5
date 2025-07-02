import React from 'react'
import { Container } from './styles'
import ListaContatos from './components/ListaContatos'
import FormularioContato from './components/FormularioContato'

function App() {
  return (
    <Container>
      <h1>Lista de Contatos</h1>
      <FormularioContato />
      <ListaContatos />
    </Container>
  )
}

export default App
