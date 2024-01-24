import type { RootState } from '../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { generate } from '../assets/quoteGenerator/quoteGeneratorSlice';

function Card(){
    const quote = useSelector((state: RootState) => state.generator.quote);
    const author = useSelector((state: RootState) => state.generator.author);
    const color = useSelector((state: RootState) => state.generator.color);

    const dispatch = useDispatch();

    return(
        <div className={"w-1/2 mx-auto bg-white p-10 rounded text-"+color}>
            <p className=" ">{quote}</p>
            <p className="text-right">{author}</p>
            <button type="button" className="p-1 rounded bg-green text-white" onClick={() => dispatch(generate())}>Generate</button>
        </div>
    );
};

export default Card;