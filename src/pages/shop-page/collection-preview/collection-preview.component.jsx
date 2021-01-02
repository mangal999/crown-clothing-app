import React from 'react'

import './collection-preview.style.css'

import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({ title, items }) => {
    console.log(items, "items")

    return (
        <div className="collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {items
                    .filter(({}, idx) => {
                        return idx < 4
                    })
                    .map(({ id, ...otherProps }) => {
                        return (
                            <CollectionItem key={id} {...otherProps} />
                        )
                    })}
            </div>

        </div>
    )
}

export default CollectionPreview