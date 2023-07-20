// useUserToken.js (Custom Hook)
import { useSelector } from 'react-redux';

const useUserToken = () => {
    const currentUser = useSelector((state) => state.user.currentUser);
    return currentUser?.token;
};

export default useUserToken;
