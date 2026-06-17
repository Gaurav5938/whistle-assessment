import { useEffect, useState } from 'react';

import Card from '../../components/Card';

import type { Product } from './type';

import { getProducts } from './utils.api';

import { WHY_WHISTLE_TEXT as text } from './constant';

import styles from './styles.module.scss';

const WhyWhistleSection = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);

                const data = await getProducts();

                setProducts(data.slice(0, 4));
            } catch (err) {
                console.error(err);
                setError('Failed to load products');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div>{text.loading}</div>;
    }

    if (error) {
        return <div>{text.error}</div>;
    }

    return (
        <section className={styles.section}>
            <div className={styles['title-text']}>{text.title}</div>

            <div className={styles.grid}>
                {products?.map((item) => (
                    <Card
                        key={item?.id}
                        image={item?.image}
                        title={item?.title}
                        description={item?.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default WhyWhistleSection;
