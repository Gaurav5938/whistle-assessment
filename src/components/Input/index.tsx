import type { InputHTMLAttributes } from 'react';

import styles from './styles.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    required?: boolean;
    error?: string;
}

const Input = ({ label, required, error, ...props }: InputProps) => {
    return (
        <div className={styles.wrapper}>
            {label && (
                <label className={styles.label}>
                    {label}
                    {required && '*'}
                </label>
            )}

            <input className={`${styles.input} ${error ? styles.error : ''}`} {...props} />

            {error && <div className={styles['error-text']}>{error}</div>}
        </div>
    );
};

export default Input;
