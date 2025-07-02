// ListaContatos.tsx
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Contato, removerContato } from '../../store/contatosSlice'
import FormularioContato from '../FormularioContato'
import { Botao, Item, Lista } from './styles'

export default function ListaContatos() {
  const contatos = useSelector((state: RootState) => state.contatos.lista)
  const dispatch = useDispatch()
  const [editando, setEditando] = useState<Contato | null>(null)

  return (
    <>
      {editando && (
        <FormularioContato
          contatoEditando={editando}
          aoFinalizar={() => setEditando(null)}
        />
      )}
      <Lista>
        {contatos.map((contato) => (
          <Item key={contato.id}>
            <span>
              <strong>{contato.nome}</strong> — {contato.email} —{' '}
              {contato.telefone}
            </span>
            <span>
              <Botao onClick={() => setEditando(contato)}>Editar</Botao>
              <Botao onClick={() => dispatch(removerContato(contato.id))}>
                Remover
              </Botao>
            </span>
          </Item>
        ))}
      </Lista>
    </>
  )
}
