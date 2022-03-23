import React from 'react';
import styles from './main.module.scss';

const Main = () => {
    return (
        <main className={styles.container}>
            <h1>오늘 <span>뭐</span> 먹지</h1>
            <div className={styles.hand}>
                <img src="images/main_hand.svg" alt=""/>
                <img src="images/main_chopstick.svg" alt="" className={styles.chopstick} />
            </div>
        </main>
    );
};

export default Main;