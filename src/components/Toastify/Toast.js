import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toast({ props }) {
    console.log(props);
    const notify = () => toast('Wow so easy!');
    return notify;
}

export default Toast;
