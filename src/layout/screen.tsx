import Card from "../components/card";
import Nome from "../components/nome";

function Screen(){
    return (
        <div className='w-full h-screen pt-20  bg-purple' id="screen">
            <Card />
            <Nome />
        </div>
    );
};

export default Screen;