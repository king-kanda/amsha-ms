import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface propertyState {
  value: []
}

const initialState: propertyState = {
  value: [],
}

export const propertySlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {
    selectProperty: (state ,action: PayloadAction<[]>) => {
      state.value = action.payload
    },

  },
})

// Action creators are generated for each case reducer function
export const { selectProperty } = propertySlice.actions

export default propertySlice.reducer
