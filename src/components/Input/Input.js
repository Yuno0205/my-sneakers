import styles from './Input.module.css';

function Input({ value = '', type = 'text' }) {
    return (
        <div className={styles.wrapper}>
            <input type={type} required></input>

            <span>{value} </span>
        </div>
    );
}

export default Input;
