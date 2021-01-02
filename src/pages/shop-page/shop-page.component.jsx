import React from 'react'

import './shop-page.style.css'

import SHOP_DATA from './shop-data'

import CollectionPreview from './collection-preview/collection-preview.component'

class ShopPage extends React.Component{
    constructor(){
        super()
        this.state = {
            SHOP_DATA: SHOP_DATA
        }
    }

    render() {
        // console.log(SHOP_DATA)
        const {SHOP_DATA} = this.state
        // console.log(SHOP_DATA)

        return (
            <div className="shop-page">
                {SHOP_DATA.map(({id, ...otherProps})=>(
                    <CollectionPreview
                        key={id}
                        {...otherProps}
                    />
                ))}
            </div>
        )
    }
}

export default ShopPage