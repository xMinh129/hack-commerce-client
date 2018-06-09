import React, {PropTypes} from 'react';

class Cart extends React.Component {

    render() {
        const { cartSize } = this.props;
        console.log(cartSize);
        return (
            <p style={{width: '50px', marginRight: '5px', float: 'right'}}>
                Cart {cartSize}
            </p>
        )
    }
}

export default Cart
