import styles from './CheckOutItem.module.css';
function CheckOutItem() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.image}>
                    <img src="https://secure-images.nike.com/is/image/DotCom/DQ4686_300?wid=80&hei=80&align=0,1&cropN=0,0,0,0&fmt=png-alpha&resMode=sharp&defaultImage=DotCom/SEARCH_002" />
                </div>
                <div className={styles.info}>
                    <div className={styles.name}>
                        <span>Nike Air Max 270 Men's Shoes</span>
                    </div>
                    <div className={styles.details}>
                        <span>Style #: DQ4686-300</span>
                        <span>Size: 7</span>
                        <span>Color: Rough</span>
                        <span>Green/Sequoia/Hot Curry/Dark Russet</span>
                        <span>Price : 1,500,000đ</span>
                        <span>Quantity: 2 </span>
                        <span> 3,000,000đ</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckOutItem;
