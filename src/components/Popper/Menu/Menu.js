import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../Popper';
import MenuItem from './MenuItem';
import styles from './Menu.module.css';

function Menu({ children, items = [], trigger = 'mouseenter focus' }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };

    return (
        <Tippy
            trigger={trigger}
            interactive
            delay={[0, 500]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={styles.menuList} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={styles.menuPopper}>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
