import React from 'react';
import CardList from "./CardList";
import {printServices} from "./printServices";
import Footer from "./Footer";

const App = () => {
    return(
        <div className='tc'>
            <h1>Печать в "Я - романтик"</h1>
            <CardList printServices={printServices} />
            {/*<Counter id={currentId}/>*/}
            <Footer/>

        </div>
    )
}

export default App;
