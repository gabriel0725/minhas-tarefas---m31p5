import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  adicionarContato,
  editarContato,
  Contato
} from '../../store/contatosSlice'
import { v4 as uuidv4 } from 'uuid'
import { Button, Form, Input } from './styles'

interface Props {
  contatoEditando?: Contato
  aoFinalizar?: () => void
}

export default function FormularioContato({
  contatoEditando,
  aoFinalizar
}: Props) {
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    if (contatoEditando) {
      setNome(contatoEditando.nome)
      setEmail(contatoEditando.email)
      setTelefone(contatoEditando.telefone)
    }
  }, [contatoEditando])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const novoContato: Contato = {
      id: contatoEditando?.id || uuidv4(),
      nome,
      email,
      telefone
    }

    if (contatoEditando) {
      dispatch(editarContato(novoContato))
    } else {
      dispatch(adicionarContato(novoContato))
    }

    setNome('')
    setEmail('')
    setTelefone('')
    aoFinalizar?.()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Nome completo"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <Input
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Telefone"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      />
      <Button type="submit">{contatoEditando ? 'Salvar' : 'Adicionar'}</Button>
    </Form>
  )
}
