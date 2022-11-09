import CollectionsGroup from '../../components/CollectionsGroup';
import CollectionsItem from '../../components/CollectionsGroup/CollectionsItem/CollectionsItem';

import styles from './Collections.module.css';
function Collections() {
    return (
        <CollectionsGroup>
            <CollectionsItem favorite />
            <CollectionsItem />
            <CollectionsItem />
            <CollectionsItem />
            <CollectionsItem />
            <CollectionsItem />
            <CollectionsItem />
            <CollectionsItem />
        </CollectionsGroup>
    );
}

export default Collections;
