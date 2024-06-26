import './Contact.css'
import { motion } from 'framer-motion';


export default function Contact() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="contact-container"
        >
            <h1>Как связаться со мной?</h1>
            <div className="contact-item">
                <img src="https://i.ibb.co/Nxs4gwd/free-icon-telegram-3670070.png" alt="Telegram" />
                <span>Телеграм: </span> <a href="https://t.me/venyapopov" target="_blank" rel="noopener noreferrer">t.me/venyapopov</a>
            </div>
            <div className="contact-item">
                <img src="https://i.ibb.co/0FZVw43/free-icon-email-envelope-12439085.png" alt="Email" />
                <span>Email: </span> <a href="mailto:ve.po2014@yandex.ru">ve.po2014@yandex.ru</a>
            </div>
            <div className="contact-item">
                <img src="https://i.ibb.co/Yb7DXsx/free-icon-vkontakte-4494517-1.png" alt="VK" />
                <span>VK: </span> <a href="https://vk.com/venya.popov" target="_blank" rel="noopener noreferrer">vk.com/venya.popov</a>
            </div>
            <div className="contact-item">
                <img src="https://i.ibb.co/rQVfNWJ/free-icon-github-733553.png" alt="GitHub" />
                <span>GitHub: </span> <a href="https://vk.cc/cvwRUs" target="_blank" rel="noopener noreferrer">https://vk.cc/cvwRUs</a>
            </div>
        </motion.div>
    )
}