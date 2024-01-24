import type { RootState } from '../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { generate } from '../assets/quoteGenerator/quoteGeneratorSlice';

function Card(){
    const dispatch = useDispatch();
    
    return(
        <div className="w-1/2 mx-auto bg-white p-10 rounded text-blue">
            <p className=" ">É a vida!</p>
            <p className="text-right">É a vida!</p>
            <button type="button" className="p-1 rounded bg-green text-white">Generate</button>
        </div>
    );
};

export default Card;