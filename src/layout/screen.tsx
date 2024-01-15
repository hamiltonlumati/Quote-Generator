import Card from "../components/card";
import Nome from "../components/nome";

function Screen(){
    return (
        <div className='w-full h-screen bg-blue pt-20'>
            <Card />
            <Nome />
        </div>
    );
};

export default Screen;