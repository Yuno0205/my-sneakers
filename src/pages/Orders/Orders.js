import { Link } from 'react-router-dom';
import styles from './Orders.module.css';
import { useState } from 'react';
import clsx from 'clsx';
import OrderItem from '../../components/Orders/OrderItem';

function Orders() {
    const [selectedRow, setSelectedRow] = useState(null); // Trạng thái lưu thông tin của tableRow được chọn

    const tableRows = [
        {
            id: 1,
            orderNumber: '#524775',
            price: '20,000,000 VND',
            items: '8 items',
            status: 'Pending',
            date: 'July 2',
        },
        {
            id: 2,
            orderNumber: '#524776',
            price: '10,000,000 VND',
            items: '5 items',
            status: 'Pending',
            date: 'July 2',
        },
        // Thêm các thông tin cho các tableRow khác (nếu có)
    ];

    const handleRadioChange = (id) => {
        setSelectedRow(id);
    };

    console.log(selectedRow);

    return (
        <div className={styles.wrapper}>
            <h1>My orders</h1>
            <div className={styles.container}>
                <div className={styles.sidebar}>
                    <div className={styles.tableContainer}>
                        {tableRows.map((row) => (
                            <div
                                key={row.id}
                                className={clsx(styles.tableRow, {
                                    [styles.checked]: selectedRow === row.id,
                                })}
                                onClick={() => handleRadioChange(row.id)}
                            >
                                <input
                                    className={styles.inputRadio}
                                    type="radio"
                                    name="orderItem"
                                    checked={selectedRow === row.id}
                                    // onChange={() => handleRadioChange(row.id)}
                                />
                                <div className={styles.tableCell}>
                                    <div className={styles.block}>
                                        <div>
                                            <h3 className={selectedRow === row.id ? styles.selected : ''}>
                                                {row.orderNumber}
                                            </h3>
                                        </div>
                                        <div>{row.price}</div>
                                        <div>{row.items}</div>
                                    </div>
                                </div>
                                <div className={styles.tableCell}>
                                    <div className={styles.block}>
                                        <p>{row.status}</p>
                                        <p>{row.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.mainContent}>
                    <h2>Order #47847</h2>
                    <OrderItem />
                    <OrderItem />
                </div>
            </div>
        </div>
    );
}

export default Orders;
