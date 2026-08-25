import { useParams } from 'react-router';
import styles from '../Site.module.css';
import { v1 } from 'uuid';
import pumaPalermo from '../../assets/puma_1.webp';
import pumaSpeed from '../../assets/puma_speed.webp';
import pumaSued from '../../assets/puma_sued.webp';
import adidasModel1 from '../../assets/AdiFOM_TRXN_Shoes_Black_IG7453_01_standard.webp';
import adidasModel2 from '../../assets/PostMove_Mid_Cloudfoam_Super_Lifestyle_Basketball_Mid_Classic_Shoes_Black_GY7163_01_standard.webp';
import adidasModel3 from '../../assets/Superstar_XLG_Shoes_Black_IG9777_01_standard.webp';
type Model = {
    id: string;
    model: string;
    collection: string;
    price: string;
    picture: string;
};
type ModelState = Record<string, Array<Model>>;
export const allModels: ModelState = {
    adidas: [
        {
            id: v1(),
            model: 'ADIDAS ADIFOM TRXN',
            collection: 'new collection1',
            price: '100200$',
            picture: adidasModel1,
        },
        {
            id: v1(),
            model: 'ADIDAS ADIFOM SUPER',
            collection: 'new collection22',
            price: '200300$',
            picture: adidasModel2,
        },
        {
            id: v1(),
            model: 'ADIDAS SUPER SUPERSKI',
            collection: 'new collection333',
            price: '300400$',
            picture: adidasModel3,
        },
    ],
    puma: [
        {
            id: v1(),
            model: 'PUMA PALERMO',
            collection: 'new collection1',
            price: '100200$',
            picture: pumaPalermo,
        },
        {
            id: v1(),
            model: 'PUMA SPEEDYCAT',
            collection: 'new collection22',
            price: '200300$',
            picture: pumaSpeed,
        },
        {
            id: v1(),
            model: 'PUMA SUSU',
            collection: 'new collection333',
            price: '300400$',
            picture: pumaSued,
        },
    ],
};

export function SneakerModel() {
    const params = useParams();
    console.log(params.model, params.id);

    if (!params.model) {
        return;
    }

    const currentItem = allModels[params.model].find(
        (item) => item.id === params.id,
    );
    return (
        <div>
            {currentItem ? (
                <>
                    <h2>{currentItem.model}</h2>
                    <h3>{currentItem.collection}</h3>
                    <div>
                        <img
                            className={styles.image}
                            src={currentItem.picture}
                            alt={currentItem.model}
                        />
                    </div>
                    <span>{currentItem?.price}</span>
                    <p>Add description</p>
                </>
            ) : (
                'Not available'
            )}
        </div>
    );
}
