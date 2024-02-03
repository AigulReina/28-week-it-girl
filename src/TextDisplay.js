import React, { useState } from 'react';
import styles from './TextDisplay.module.css';

const TextDisplay = () => {
    const [inputText, setInputText] = useState('');
    const [displayedText, setDisplayedText] = useState('');

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleDisplayClick = () => {
        const formattedText = inputText.toUpperCase();
        setDisplayedText(formattedText);
        setInputText('');
    };

    return (
        <div className={styles.container}>
            <h2>My 28 -week React</h2>
            <input
                type="text"
                className={styles.inputField}
                value={inputText}
                onChange={handleInputChange}
                placeholder="Введите текст"
            />
            <button className={styles.displayButton} onClick={handleDisplayClick}>
                Показать текст
            </button>
            {displayedText && <p className={styles.displayText}>{displayedText}</p>}
        </div>
    );
};

export default TextDisplay;