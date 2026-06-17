import { useState } from 'react';

import PlusIcon from '../../assets/svg/plus-icon.svg';
import MinusIcon from '../../assets/svg/minus-icon.svg';

import styles from './styles.module.scss';

interface AccordionProps {
    question: string;
    answer: string;
}

const Accordion = ({ question, answer }: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className={styles['accordion-container']}>
            <div className={styles['header-wrapper']} onClick={handleToggle}>
                <div className={styles['question-part']}>{question}</div>

                <span className={styles.icon}>
                    <img src={isOpen ? MinusIcon : PlusIcon} alt='toggle' />
                </span>
            </div>

            {isOpen && ( 
                <div className={styles['content-part']}>
                    <div className={styles['answer-part']}>{answer}</div>
                </div>
            )}
        </div>
    );
};

export default Accordion;
