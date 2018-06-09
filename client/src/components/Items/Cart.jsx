import React, {PropTypes} from 'react';

class Cart extends React.Component {

    render() {
        const { cartSize } = this.props;
        console.log(cartSize);
        return (
            <p>
                Cart {cartSize}
            </p>
        )
    }
}

export default Cart
