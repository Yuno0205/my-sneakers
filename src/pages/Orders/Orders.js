import { Link, useNavigate } from 'react-router-dom';
import styles from './Orders.module.css';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import OrderItem from '../../components/Orders/OrderItem';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrders } from '../../redux/orderSlice';
import { selectUserToken } from '../../redux/userSlice';

function Orders() {
    const [selectedRow, setSelectedRow] = useState(null);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const token = useSelector(selectUserToken);
    const userId = useSelector((state) => state.user.currentUser?.user?._id);
    const orders = useSelector((state) => state.order.orders);

    const navigate = useNavigate();

    console.log(token);

    const dispatch = useDispatch();

    useEffect(() => {
        // if (!token) {
        //     // navigate('/login');
        //     return;
        // }
        dispatch(getUserOrders({ token, userId }));
    }, [dispatch]);

    const handleRadioChange = (id) => {
        setSelectedRow(id);

        const order = orders.find((order) => order._id === id);
        setSelectedOrder(order);
    };

    return (
        <div className={styles.wrapper}>
            <h1>My orders</h1>
            <div className={styles.container}>
                <div className={styles.sidebar}>
                    <div className={styles.tableContainer}>
                        {orders.map((item) => (
                            <div
                                key={item._id}
                                className={clsx(styles.tableRow, {
                                    [styles.checked]: selectedRow === item._id,
                                })}
                                onClick={() => handleRadioChange(item._id)}
                            >
                                <input
                                    className={styles.inputRadio}
                                    type="radio"
                                    name="orderItem"
                                    checked={selectedRow === item._id}
                                    // onChange={() => handleRadioChange(item.id)}
                                />
                                <div className={styles.tableCell}>
                                    <div className={styles.block}>
                                        <div className={styles.orderId}>
                                            <h3 className={selectedRow === item._id ? styles.selected : ''}>
                                                {item._id}
                                            </h3>
                                        </div>
                                        <div>{item.price}</div>
                                        <div>{item.items.length} items</div>
                                    </div>
                                </div>
                                <div className={styles.tableCell}>
                                    <div className={styles.block}>
                                        <p>{item.status}</p>
                                        <p>{item.updatedAt}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.mainContent}>
                    {/* Chỉ hiển thị OrderItem khi đã chọn một order trong sidebar */}
                    {selectedOrder && (
                        <div className={styles.listItem}>
                            <h2>Order #{selectedOrder._id}</h2>
                            <OrderItem data={selectedOrder.items} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Orders;
