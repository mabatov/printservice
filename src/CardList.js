import React from 'react';
import Card from "./Card";
import imgprint from "./img/printer200.png";
import imgcopy from "./img/copier200.png";
import imgscan from "./img/scanner200.png";

const CardList = ({printServices}) => {
    return (
        <div>
            <Card id={printServices[0].id} name={printServices[0].name} price={printServices[0].price} img={imgprint}/>
            <Card id={printServices[1].id} name={printServices[1].name} price={printServices[1].price} img={imgcopy}/>
            <Card id={printServices[2].id} name={printServices[2].name} price={printServices[2].price} img={imgscan}/>

            <div>
                <input
                    id='input1'
                    className='pa3 ba b--light-blue br3 ma3 bg-lightest-blue shadow-5'
                    type='number' max='500'
                    placeholder='Укажите количество страниц'
                />
            </div>

            <button id='b1' className='tc b--light-blue bg-light-blue ba dib br3 pa3 ma2 grow shadow-5'
                    onClick={(a) => Click(a)}>Рассчитать
            </button>

            <p id='result'></p>
            <p id='pricedesc'></p>



        </div>
    );

}

const Click = (a) => {

    //disabled='true' выше

    let service = document.getElementsByName("selected")
    let pageCount = document.getElementById('input1').value
    let result = document.getElementById('result')
    let pricedesc = document.getElementById('pricedesc')

    let selectFactor1 = service.length
    let selectFactor2 = pageCount

    if (selectFactor1 === 0) {
        alert('Выберите услугу')
    }

    if (selectFactor1 !== 0 && selectFactor2 === '') {
        alert('Введите количество листов')
    }

    if (selectFactor1 !== 0 && selectFactor2 !== '') {

        //main logic
        /*
        * 🖨 Печать и копирование:
        📄1-10 страниц - 5 руб/лист,
        📄11-50 страниц - 4 руб/лист,
        📄51+ страниц - 3 руб/лист.

        📇 Скан:
        📄1-20 страниц - 12 руб/лист,
        📄21-50 страниц - 10 руб/лист,
        📄51+ страниц - 8 руб/лист.
        * */

        if (service[0].id == 1 || service[0].id == 2) {

            console.log(pageCount)

            if (pageCount >= 1 && pageCount <= 20) {
                result.innerHTML = 'Ваша цена составила: ' + (pageCount * 5) + ' руб.'
                pricedesc.innerHTML = '📄1-10 страниц - 5 руб/лист\n' +
                    '        📄11-50 страниц - 4 руб/лист,\n' +
                    '        📄51+ страниц - 3 руб/лист.'
            }
            if (pageCount >= 21 && pageCount <= 40) {
                result.innerHTML = 'Ваша цена составила: ' + (pageCount * 4) + ' руб.'
                pricedesc.innerHTML = '📄1-10 страниц - 5 руб/лист\n' +
                    '        📄11-50 страниц - 4 руб/лист,\n' +
                    '        📄51+ страниц - 3 руб/лист.'
            }
            if (pageCount >= 41 && pageCount <= 500) {
                result.innerHTML = 'Ваша цена составила: ' + (pageCount * 3) + ' руб.'
                pricedesc.innerHTML = '📄1-10 страниц - 5 руб/лист\n' +
                    '        📄11-50 страниц - 4 руб/лист,\n' +
                    '        📄51+ страниц - 3 руб/лист.'
            }
            if (pageCount < 1 || pageCount > 500) {
                result.innerHTML = ''
                alert('Выберите число страниц от 1 до 500')
                pricedesc.innerHTML = '📄1-20 страниц - 12 руб/лист,\n' +
                    '        📄21-50 страниц - 10 руб/лист,\n' +
                    '        📄51+ страниц - 8 руб/лист.'
            }
        }

        if (service[0].id == 3) {
            if (pageCount >= 1 && pageCount <= 5) {
                result.innerHTML = 'Ваша цена составила: ' + (pageCount * 12) + ' руб.'
                pricedesc.innerHTML = '📄1-20 страниц - 12 руб/лист,\n' +
                    '        📄21-50 страниц - 10 руб/лист,\n' +
                    '        📄51+ страниц - 8 руб/лист.'
            }
            if (pageCount >= 6 && pageCount <= 10) {
                result.innerHTML = 'Ваша цена составила: ' + (pageCount * 10) + ' руб.'
                pricedesc.innerHTML = '📄1-20 страниц - 12 руб/лист,\n' +
                    '        📄21-50 страниц - 10 руб/лист,\n' +
                    '        📄51+ страниц - 8 руб/лист.'
            }
            if (pageCount >= 11 && pageCount <= 500) {
                result.innerHTML = 'Ваша цена составила: ' + (pageCount * 8) + ' руб.'
                pricedesc.innerHTML = '📄1-20 страниц - 12 руб/лист,\n' +
                    '        📄21-50 страниц - 10 руб/лист,\n' +
                    '        📄51+ страниц - 8 руб/лист.'
            }
            if (pageCount < 1 || pageCount > 500) {
                result.innerHTML = ''
                alert('Выберите число страниц от 1 до 500')
                pricedesc.innerHTML = '📄1-20 страниц - 12 руб/лист,\n' +
                    '        📄21-50 страниц - 10 руб/лист,\n' +
                    '        📄51+ страниц - 8 руб/лист.'
            }
        }
    }
}


export default CardList;
