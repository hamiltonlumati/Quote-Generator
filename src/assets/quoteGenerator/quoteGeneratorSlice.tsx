import { createSlice } from "@reduxjs/toolkit";

const quotes: { quote: string, author: string, color: string }[] = [
    { 
        "quote": 'Time is money',
        "author": "Hamilton",
        "color": "000fff" 
    },
    { 
        "quote": 'Time is money',
        "author": "Hamilton",
        "color": "000fff" },
    { 
        "quote": 'Time is money',
        "author": "Hamilton",
        "color": "000fff" 
    }
];


quotes[0] = {
    quote: 'Time is Money',
    author: 'Love',
    color: '000000'
};

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