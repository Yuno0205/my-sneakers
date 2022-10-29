import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';

import images from '../../assets/images';

const Image = forwardRef(({ src, alt, ...props }, ref) => {
    const [fallback, setFallBack] = useState('');
    const handleError = () => {
        setFallBack(images.noImage);
    };
    return <img src={fallback || src} alt={alt} ref={ref} {...props} onError={handleError} />;
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
