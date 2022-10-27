import { Triangle } from 'react-loader-spinner';

const Loading = () => {
    return (
        <Triangle
            height="100%"
            width="100%"
            color="#4fa94d"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
    );
};

export default Loading;
