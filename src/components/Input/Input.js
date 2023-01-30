import { useField } from 'formik';
import styles from './Input.module.css';

function Input({ content = '', ...props }) {
    const [field, meta] = useField(props);

    console.log(meta);

    return (
        <div className={styles.wrapper}>
            <input
                {...field}
                {...props}
                className={meta.touched && meta.error ? styles.inputError : styles.normal}
            ></input>

            <span>{content} </span>
            {meta.touched && meta.error && <div className={styles.error}>{meta.error}</div>}
        </div>
    );
}

export default Input;
