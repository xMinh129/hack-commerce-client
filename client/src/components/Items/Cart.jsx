import React, {PropTypes} from 'react';

class Cart extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            balance: 0,
            cartSize: 0

        };
    }

    render(){
        return (
            <div>
                <p style={{width: '100px', marginRight: '5px', float: 'right', display: 'block'}}>
                    Your account Balance <bold>{this.props.balance}</bold>
                </p>

                <p style={{width: '100px', marginRight: '5px', float: 'right', display: 'block'}}>
                    Items in the Cart <bold>{this.props.cartSize}</bold>
                </p>
            </div>

        )
    }


}

export default Cart;
