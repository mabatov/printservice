import React from 'react';

let selectedId;

const Price = ({currentId, Counter}) => {

let price = 199;

    if (currentId == 1) {
        price = 22
    }
    if (currentId == 2) {
        price = 33
    }
    if (currentId == 3) {
        price = 44
    }


    return (
        <div>
            <p>{price}</p>
        </div>
    )
}

export default Price;
