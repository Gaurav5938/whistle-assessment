import styles from './styles.module.scss';

interface RadioProps {
    checked: boolean;
    onChange: () => void;
}

const Radio = ({ checked, onChange }: RadioProps) => {
    return (
        <div
            className={styles.radio}
            onClick={onChange}
            onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    onChange();
                }
            }}
            role='radio'
            aria-checked={checked}
            tabIndex={0}
        >
            <input type='radio' checked={checked} onChange={onChange} />

            <div className={styles.circle} />
        </div>
    );
};

export default Radio;
