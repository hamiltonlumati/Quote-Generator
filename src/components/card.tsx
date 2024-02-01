import type { RootState } from '../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { generate } from '../assets/quoteGenerator/quoteGeneratorSlice';

function Card(){
    const quote = useSelector((state: RootState) => state.generator.quote);
    const author = useSelector((state: RootState) => state.generator.author);
    const color = useSelector((state: RootState) => state.generator.color);

    const dispatch = useDispatch();

    return(
        <div id='quote-box' className={"w-1/2 mx-auto bg-white p-10 rounded text-"+color}>
            <p id='text' className="text-3xl font-medium">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="size-16" viewBox="0 0 16 16">
                        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
                    </svg>    
                </span>{quote}
            </p>
            <p id='author' className="text-right text-lg">{author}</p>
            <div className='grid grid-cols-5 gap-4 mt-5'>
                <button type='button' className={' col-start-1 justify-self-start col-span-1 rounded text-white p-4 bg-'+color}>
                    <a href={"https://twitter.com/intent/tweet?text="+quote+" -"+author}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="size-5 hover:text-gray-light" viewBox="0 0 16 16">
                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                        </svg>
                    </a>
                </button>
                <button type="button" id='new-quote' className="col-start-3 col-span-3  p-3 rounded bg-green hover:bg-green-dark text-white text-lg justify-self-end" onClick={() => dispatch(generate())}>
                    New Quote
                </button>
            </div>
        </div>
    );
};

export default Card;