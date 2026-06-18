import styles from './styles.module.scss';

interface CheckboxProps {
    checked: boolean;
    onChange: () => void;
    color?: string;
}

const Checkbox = ({ checked, onChange, color = '#181c1c' }: CheckboxProps) => {
    return (
        <label className={styles.checkbox}>
            <input type='checkbox' checked={checked} onChange={onChange} />

            <div
                className={styles.box}
                style={{ borderColor: color, backgroundColor: checked ? color : '#fff' }}
            >
                {checked && <div className={styles.tick}>✓</div>}
            </div>
        </label>
    );
};

export default Checkbox;
