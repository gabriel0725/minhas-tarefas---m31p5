import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Contato {
  id: string
  nome: string
  email: string
  telefone: string
}

interface ContatosState {
  lista: Contato[]
}

const initialState: ContatosState = {
  lista: []
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    adicionarContato: (state, action: PayloadAction<Contato>) => {
      state.lista.push(action.payload)
    },
    removerContato: (state, action: PayloadAction<string>) => {
      state.lista = state.lista.filter((c) => c.id !== action.payload)
    },
    editarContato: (state, action: PayloadAction<Contato>) => {
      const index = state.lista.findIndex((c) => c.id === action.payload.id)
      if (index >= 0) state.lista[index] = action.payload
    }
  }
})

export const { adicionarContato, removerContato, editarContato } =
  contatosSlice.actions
export default contatosSlice.reducer
