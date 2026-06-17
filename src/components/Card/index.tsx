import styles from './styles.module.scss';

interface CardProps {
    image: string;
    title: string;
    description: string;
}

const Card = ({ image, title, description }: CardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles['image-wrapper']}>
                <img src={image} alt={title} className={styles.image} />
            </div>

            <div className={styles.content}>
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>{description}</div>
            </div>
        </div>
    );
};

export default Card;
