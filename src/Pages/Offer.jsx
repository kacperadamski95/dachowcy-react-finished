import React from 'react';
import MaterialTile from '../components/MaterialTile'
import materialData from '../data/materialData'


const Offer = () => {
    return (
        <section id="offer" className="section--background">
            <h1>Kompleksowa budowa dachów</h1>
            <div className="offer__tiles">
                {
                    materialData.map((material, index) => {
                        return (
                            <MaterialTile
                                key={index}
                                materialClass={material.materialClass}
                                materialIconSrc={material.materialIcon}
                                materialIconAlt={material.materialAlt}
                                materialTitle={material.materialTitle}
                            >
                                {material.materialDescription}
                            </MaterialTile>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Offer;