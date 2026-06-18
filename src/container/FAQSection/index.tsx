import { useEffect, useState } from 'react';

import Accordion from '../../components/Accordion';

import { getFaqs } from './utils.api';

import type { FAQ } from './type';

import { FAQ_TEXT as text } from './constant';

import styles from './styles.module.scss';

const FAQSection = () => {
    const [faqs, setFaqs] = useState<FAQ[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [openId, setOpenId] = useState<number | null>(null);

    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                setLoading(true);

                const data = await getFaqs();

                setFaqs(data.slice(0, 5));
            } catch {
                setError(text.error);
            } finally {
                setLoading(false);
            }
        };

        fetchFaqs();
    }, []);

    if (loading) {
        return <div>{text.loading}</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <section className={styles['faq-section']}>
            <div className={styles.heading}>
                <div className={styles.primary}>{text.titlePrimary}</div>{' '}
                <div className={styles.secondary}>{text.titleSecondary}</div>
            </div>

            <div className={styles['accordion-wrapper']}>
                {faqs?.map((faq) => (
                    <Accordion
                        key={faq?.id}
                        question={faq?.title}
                        answer={faq?.body}
                        isOpen={openId === faq?.id}
                        onToggle={() => setOpenId((prev) => (prev === faq.id ? null : faq.id))}
                    />
                ))}
            </div>
        </section>
    );
};

export default FAQSection;
