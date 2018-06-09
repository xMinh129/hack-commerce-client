import React, {PropTypes} from 'react';

const Cart = (props) => {

    return (
        <p style={{width: '100px', marginRight: '5px', float: 'right'}}>
            Items in the Cart {props.cartSize}
        </p>
    )

}

export default Cart
