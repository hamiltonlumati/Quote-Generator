import { createSlice } from "@reduxjs/toolkit";

const quotes: { quote: string, author: string, color: string }[] = [
    { 
        //0
        "quote": 'Time is money',
        "author": "Hamilton",
        "color": "blue" 
    },
    { 
        //1
        "quote": 'Time is money',
        "author": "Hamilton",
        "color": "purple" },
    { 
        //2
        "quote": 'Time is money',
        "author": "Hamilton",
        "color": "pink" 
    }
];

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

            var newIndex: number = Math.floor(Math.random() * (max - min + 1)) + min;
            var rootID: string = document.getElementById("root").className;
            rootID = 'w-full h-screen pt-52 absolute p-1 bg-'+quotes[newIndex].color;
            state.quote = quotes[newIndex].quote;
            state.author = quotes[newIndex].author;
            state.color = quotes[newIndex].color;
        }
    }
})

export const { generate } = generatorSlice.actions;
export default generatorSlice.reducer;