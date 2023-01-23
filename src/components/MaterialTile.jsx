import React from 'react';

const MaterialTile = (props) => {

    return (
        <article className={props.materialClass}>
            <header className="tile__title">
                <img
                    src={props.materialIconSrc}
                    alt={props.materialIconAlt}>
                </img>
                <h2><strong>{props.materialTitle}</strong></h2>
            </header>
            {props.children}
        </article>
    )
}

export default MaterialTile;