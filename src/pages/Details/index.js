import styles from './Details.module.css';
import Button from '../../components/Button';
import SizeGroup from '../../components/SizeGroup/SizeGroup';
import SizeItem from '../../components/SizeGroup/SizeItem/SizeItem';

import ColorWayImage from '../../components/ColorWayImage/ColorWayImage';
function Details() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.items}>
                        <div className={styles.item}>
                            <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0448e779-4c0c-4627-84f3-08c7eb3e7978/air-max-270-mens-shoe-KkLcGR.png" />
                        </div>
                        <div className={styles.item}>
                            <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0448e779-4c0c-4627-84f3-08c7eb3e7978/air-max-270-mens-shoe-KkLcGR.png" />
                        </div>
                        <div className={styles.item}>
                            <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0448e779-4c0c-4627-84f3-08c7eb3e7978/air-max-270-mens-shoe-KkLcGR.png" />
                        </div>
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.infoWrapper}>
                        <div className={styles.infoContent}>
                            <div className={styles.productInfo}>
                                <h1>Nike Air Force 1</h1>
                                <h2>Men's Shoes</h2>
                                <p>160$</p>
                            </div>
                            <ColorWayImage />
                            <SizeGroup>
                                <SizeItem>38</SizeItem>
                                <SizeItem>39</SizeItem>
                                <SizeItem>40</SizeItem>
                                <SizeItem>41</SizeItem>
                                <SizeItem>42</SizeItem>
                            </SizeGroup>
                            <div className={styles.descriptions}>
                                <p>
                                    Nike’s 1st lifestyle Air Max brings you style, comfort and big attitude. With a
                                    design that draws inspiration from past Air Max icons, the Nike Air Max 270
                                    showcases one of our greatest innovations yet with its large Air window. Deep red
                                    accents pop against the lightweight black knit upper for a look that's striking and
                                    versatile.
                                </p>
                            </div>
                            <div className={styles.action}>
                                <Button primary large>
                                    <span>Add to bag</span>
                                </Button>
                            </div>
                            <div className={styles.action}>
                                <Button primary large>
                                    <span> Favourite</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;
