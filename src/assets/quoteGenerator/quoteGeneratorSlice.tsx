import { createSlice } from "@reduxjs/toolkit";

const quotes: { quote: string, author: string, color: string }[] = [
    { 
        //0
        "quote": 'Time is money',
        "author": "Hamilton",
        "color": "000fff" 
    },
    { 
        //1
        "quote": 'Time is money',
        "author": "Hamilton",
        "color": "000fff" },
    { 
        //2
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
    quote: string,
    author: string,
    color: string
}

var max: number = 2;
var min: number = 0;

min = Math.ceil(min);
max = Math.floor(max);

var initialIndex = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(initialIndex);

const initialState: GeneratorState = {
    quote: quotes[initialIndex].quote,
    author: quotes[initialIndex].author,
    color: quotes[initialIndex].color
}

export const generatorSlice = createSlice({
    name: 'generator',
    initialState,
    reducers : {
        generate: (state) => {
            var newIndex: number = Math.random() * (max - min) + min;

            state.quote = quotes[newIndex].quote;
            state.author = quotes[newIndex].author;
            state.color = quotes[newIndex].color;
        }
    }
})

export const { generate } = generatorSlice.actions;
export default generatorSlice.reducer;