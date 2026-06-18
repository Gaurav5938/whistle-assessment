import { useState } from 'react';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Radio from '../../components/Radio';
import Checkbox from '../../components/Checkbox';

import Logo from '../../assets/svg/logo-icon.svg';
import CallIcon from '../../assets/svg/call-icon.svg';
import CloveLogo from '../../assets/svg/clove-icon.svg';
import HeroBanner from '../../assets/svg/hero-icon.svg';
import ArrowIcon from '../../assets/svg/arrow-icon.svg';

import { HERO_TEXT as text } from './constant';

import styles from './styles.module.scss';

const HeroSection = () => {
    const [selectedOption, setSelectedOption] = useState<'yes' | 'no' | ''>('');
    const [consent, setConsent] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
    });

    const handleRadioChange = (value: 'yes' | 'no') => {
        setSelectedOption(value);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        if (name === 'name') {
            if (!/^[a-zA-Z ]*$/.test(value)) {
                return;
            }
        }

        if (name === 'mobile') {
            if (value.length > 10) {
                return;
            }

            if (value && !/^\d*$/.test(value)) {
                return;
            }
        }

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleCheckboxChange = () => {
        setConsent((prev) => !prev);
    };

    const isFormValid = formData.name.trim().length >= 3 && formData.mobile.length === 10;

    return (
        <section className={styles['hero-section']}>
            <div className={styles.header}>
                <img src={Logo} alt='Whistle logo' />

                <div className={styles['call-button']}>
                    <img src={CallIcon} alt='Call' />
                </div>
            </div>

            <div className={styles['offer-strip']}>
                <span>{text.startingAt} </span>
                <span className={styles['old-price']}>{text.oldPrice}</span>
                <span className={styles['new-price']}>{text.newPrice}</span>
                <span> {text.offerText}</span>
            </div>

            <div className={styles.banner}>
                <img src={HeroBanner} alt='Invisible Aligners' />
            </div>

            <div className={styles['form-section']}>
                <div className={styles.question}>{text.doYouHave}</div>

                <div className={styles['radio-wrapper']}>
                    <div className={styles['radio-item']}>
                        <Radio
                            checked={selectedOption === 'yes'}
                            onChange={() => handleRadioChange('yes')}
                        />
                        <span>{text.yes}</span>
                    </div>

                    <div className={styles['radio-item']}>
                        <Radio
                            checked={selectedOption === 'no'}
                            onChange={() => handleRadioChange('no')}
                        />
                        <span>{text.no}</span>
                    </div>
                </div>

                <div className={styles['input-wrapper']}>
                    <Input
                        name='name'
                        label='Full Name'
                        value={formData.name}
                        placeholder='Ajay Kumar'
                        onChange={handleInputChange}
                        required
                    />

                    <Input
                        name='mobile'
                        type='tel'
                        value={formData.mobile}
                        placeholder='+91 Mobile number*'
                        onChange={handleInputChange}
                    />

                    <Button label={text.bookFreeScan} disabled={!isFormValid} />
                </div>

                <div className={styles['checkbox-wrapper']}>
                    <Checkbox checked={consent} onChange={handleCheckboxChange} color='#8F62D4' />
                    <div className={styles['consent-text']}>{text.consent}</div>
                </div>

                <div className={styles['clinic-card']}>
                    <div className={styles['clinic-copy']}>
                        <div>{text.bookFree}</div>
                    </div>

                    <div className={styles['clinic-right']}>
                        <img src={CloveLogo} alt='Clove Dental' />

                        <button type='button'>
                            {text.findClinic}
                            <img src={ArrowIcon} alt='arrow' />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
