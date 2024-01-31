import type { RootState } from '../app/store';
import { useSelector, useDispatch } from 'react-redux';

import Card from "../components/card";
import Nome from "../components/nome";

function Screen(){
    const color = useSelector((state: RootState) => state.generator.color);

    return (
        <div className={'w-full h-screen pt-20  bg-'+color} id="screen">
            <Card />
            <Nome />
        </div>
    );
};

export default Screen;