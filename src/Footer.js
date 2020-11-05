import React from "react";
import VK from './img/social/vk32.png'
import TG from './img/social/tg32.png'
import ML from './img/social/ml32.png'

const Footer = () => (
    <div className="footer">
        {/*Связаться:
        <a href="https://vk.com/print_romantic" target="_blank" rel="noreferrer" title="VK"> VK </a>
        <a href="https://t.me/print_romantic" target="_blank" rel="noreferrer" title="Telegram">TG </a>
        <a href="mailto:print_romantic@mail.ru" title="Написать письмо"> ✉️</a>*/}


        Напишите нам:
        <p>
        <a if='img_footer' class='tc ma1' href="https://vk.com/print_romantic" target="_blank" rel="noreferrer"><img src={VK} alt='Написать ВК' title='Написать ВК'/></a>
        <a if='img_footer' class='tc ma1' href="https://t.me/print_romantic" target="_blank" rel="noreferrer"><img src={TG} alt='Написать в телеграм' title='Написать в телеграм'/></a>
        <a if='img_footer' class='tc ma1' href="https://vk.com/print_romantic" target="_blank" rel="noreferrer"><img src={ML} alt='Написать на почту' title='Написать на почту'/></a>
        </p>

    </div>
);

export default Footer;
