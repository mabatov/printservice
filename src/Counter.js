import React from 'react';

const Counter = (id) => {
    return (
        <div>
            <input
                id='input1'
                className='pa3 ba b--light-blue br3 ma3 bg-lightest-blue shadow-5'
                type='number' max='500'
                placeholder='Укажите количество страниц'
            />
        </div>
    )


}

export default Counter;
