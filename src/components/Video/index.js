import React from 'react';
import 'video-react/dist/video-react.css'; // import css
import styles from './VideoCustom.module.css';

import { Player } from 'video-react';
import ReactPlayer from 'react-player';

const VideoCustom = () => {
    return (
        <div className={styles.wrapper}>
            <ReactPlayer
                url="https://www.youtube.com/watch?v=Sp3Xkbnvz50"
                playing={true}
                controls={true}
                width="100%"
                height="100%"
                muted
            />
        </div>
    );
};

export default VideoCustom;
