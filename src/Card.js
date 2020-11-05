import React from 'react';
import ReactDOM from 'react-dom';


const Card = ({id, name, price, img}) => {
    //const { name, price, img } = props
    return (

        <button id={id} name={currentId}
                className='tc b--lightest-blue bg-lightest-blue ba dib br3 pa3 ma2 grow shadow-5'
                onClick={(a) => Click({id})}>
            <img alt='print' src={img}/>
            <div>
                <h2>{name}</h2>
                <p>{price}</p>
            </div>

        </button>

    )
}

//let isClicked;
let currentId;

const Click = (a) => {

    //isClicked = true;


    if (a.id == 3) {
        document.getElementById("deliveryCheck").disabled = true
        document.getElementById("deliveryCheck").checked = false;
        document.getElementById("deliveryText").style.color = '#868686'
    } else {
        document.getElementById("deliveryCheck").disabled = false
        document.getElementById("deliveryText").style.color = '#000000'
    }


    ReactDOM.findDOMNode(document.getElementById('b1')).disabled = false;


    let element = document.getElementById(a.id)

    if (currentId == null) currentId = a.id;
    if (a.id === currentId) {
        ReactDOM.findDOMNode(element).style.backgroundColor = '#5abdff';
        ReactDOM.findDOMNode(element).style.borderColor = '#5abdff';
        ReactDOM.findDOMNode(element).setAttribute("name", "selected");
    }
    if (a.id !== currentId) {
        ReactDOM.findDOMNode(document.getElementById(currentId)).style.backgroundColor = '#cdecff';
        ReactDOM.findDOMNode(document.getElementById(currentId)).style.borderColor = '#cdecff';
        ReactDOM.findDOMNode(document.getElementById(currentId)).removeAttribute("name");
        ReactDOM.findDOMNode(element).style.backgroundColor = '#5abdff';
        ReactDOM.findDOMNode(element).style.borderColor = '#5abdff';
        ReactDOM.findDOMNode(element).setAttribute("name", "selected");

        currentId = a.id;
    }

    if(currentId != null) document.getElementById("input1").focus();

    //console.log(currentId)
}

export default Card;
