import { createSlice } from "@reduxjs/toolkit";

export interface GeneratorState {
    value: number
}

var max: number = 2;
var min: number = 0;

const initialState: GeneratorState = {
    value: Math.random() * (max - min) + min
}

export const generatorSlice = createSlice({
    name: 'generator',
    initialState,
    reducers : {
        generate: (state) => {
            state.value = Math.random() * (max - min) + min
        }
    }
})

export const { generate } = generatorSlice.actions;
export default generatorSlice.reducer;