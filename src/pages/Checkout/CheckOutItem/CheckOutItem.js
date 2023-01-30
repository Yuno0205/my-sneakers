import { NumericFormat } from 'react-number-format';
import { useSelector } from 'react-redux';
import styles from './CheckOutItem.module.css';
function CheckOutItem() {
    const cart = useSelector((state) => state.cart);
    console.log(cart);
    return (
        <>
            {cart.items?.map((item, index) => (
                <div key={index} className={styles.wrapper}>
                    <div className={styles.content}>
                        <div className={styles.image}>
                            <img alt="" src={item.imageMain[0]} />
                        </div>
                        <div className={styles.info}>
                            <div className={styles.name}>
                                <span>{item.title}</span>
                            </div>
                            <div className={styles.details}>
                                <span>Feature : {item.feature}</span>
                                <span>Size: {item.size}</span>
                                <span>Color: {item.color}</span>

                                <span>
                                    <NumericFormat
                                        thousandSeparator={true}
                                        prefix="Price : "
                                        value={item.fullPrice ? item.fullPrice : item.currentPrice}
                                        suffix="  VND"
                                        displayType="text"
                                    />
                                </span>
                                <span>Quantity: {item.quantity} </span>
                                <span>
                                    <NumericFormat
                                        thousandSeparator={true}
                                        value={(item.fullPrice ? item.fullPrice : item.currentPrice) * item.quantity}
                                        suffix="  VND"
                                        displayType="text"
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default CheckOutItem;
