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
            <p className="text-2xl">{quote}</p>
            <p className="text-right text-lg">{author}</p>
            <div className='flex flex-row mt-5'>
                <button type='button' className={'basis-1/4 rounded mx-2 text-white p-1 bg-'+color}>
                    <a href={"https://twitter.com/intent/tweet?text="+quote+" -"+author}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi m-auto hover:text-gray-light bi-twitter-x" viewBox="0 0 16 16">
                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                        </svg>
                    </a>
                </button>
                <button type="button" className="basis-2/4  p-1 rounded bg-green hover:bg-green-dark text-white text-lg justify-self-end" onClick={() => dispatch(generate())}>Generate</button>
            </div>
        </div>
    );
};

export default Card;