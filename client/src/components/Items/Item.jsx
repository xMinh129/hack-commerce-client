import React, {PropTypes} from 'react';

class Item extends React.Component {

    render() {
        const { name, image, price } = this.props
        console.log('Item component rendering')
        return (
            <div>
                <p>
                    {name}
                </p>
                <img
                    key={name}
                    src={image}
                />
                <p>
                    {price}
                </p>
            </div>
        )
    }
}

export default Item;