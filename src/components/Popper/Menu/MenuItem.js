import Button from '../../Button';
import styles from './Menu.module.css';

function MenuItem({ data }) {
    return (
        <Button onClick={data.onClick} className={styles.menuItem} icon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
