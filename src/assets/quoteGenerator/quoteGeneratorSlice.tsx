import { createSlice } from "@reduxjs/toolkit";

const quotes: { quote: string, author: string, color: string }[] = [
    { 
        //0
        "quote": 'Technique without art is shallow and doomed. Art without technique is insulting.',
        "author": "- Dorthy Alexander",
        "color": "blue" 
    },
    { 
        //1
        "quote": 'Anything that was in the world when you were born is normal and natural. Anything invented between when you were 15 and 35 is new and revolutionary and exciting, and you will probably get a career in it. Anything invented after you are 35 is against the natural order of things. ',
        "author": "- Douglas Adams",
        "color": "purple" },
    { 
        //2
        "quote": 'Science and technology multiply around us. To an increasing extent they dictate the languages in which we speak and think. Either we use those languages, or we remain mute. ',
        "author": "- J. G. Ballard",
        "color": "amber" 
    },
    {
        //3
        "quote": 'Engineering or Technology is the making of things that did not previously exist, whereas science is the discovering of things that have long existed.',
        "author": '- David Billington',
        "color": 'orange',
    },
    {
        //4
        "quote": 'The goal of the future is full unemployment, so we can play. That’s why we have to destroy the present politico-economic system.',
        "author": '- Arthur C. Clarke',
        "color": 'cyan'
    },
    {
        //5
        "quote": 'Technological progress has merely provided us with more efficient means for going backwards. ',
        "author": '- Aldous Huxley',
        "color": 'yellow'
    },
    {
        //6
        "quote": 'Curiosity and the urge to solve problems are the emotional hallmarks of our species; and the most characteristically human activities are mathematics, science, technology, music and the arts.',
        "author": '- Carl Sagan',
        "color": 'gray'
    },
    {
        //7
        "quote": 'We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology. ',
        "author": '- Carl Sagan',
        "color": 'amber'
    }
];

export interface GeneratorState {
    quote: string,
    author: string,
    color: string
}

var max: number = 7;
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
            var rootID: HTMLElement = document.getElementById("body")!;
            rootID.className = 'bg-'+quotes[newIndex].color;
            state.quote = quotes[newIndex].quote;
            state.author = quotes[newIndex].author;
            state.color = quotes[newIndex].color;
        }
    }
})

export const { generate } = generatorSlice.actions;
export default generatorSlice.reducer;