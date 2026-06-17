import type { ButtonHTMLAttributes } from 'react';

import styles from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

const Button = ({ label, onClick, disabled = false, type = 'button' }: ButtonProps) => {
    return (
        <button className={styles.button} type={type} onClick={onClick} disabled={disabled}>
            {label}
        </button>
    );
};

export default Button;
