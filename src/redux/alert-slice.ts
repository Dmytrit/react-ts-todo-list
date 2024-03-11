import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

interface AlertState {
  messages: string
}

const initialState: AlertState = {
  'messages': '',
}

export const alertSlice = createSlice({
  'name': 'alert',
  initialState,
  'reducers': {
    'setDeleteAlert': (state, action: PayloadAction<string>) => {
      state.messages = action.payload
    },
    'setSuccessAlert': (state, action: PayloadAction<string>) => {
      state.messages = action.payload
    },
    'discardAlert': (state) => {
      state.messages = ''
    },
  },
})

export const {
  setDeleteAlert, setSuccessAlert, discardAlert,
} = alertSlice.actions

export default alertSlice.reducer
