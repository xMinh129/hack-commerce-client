import React from 'react';
import {Link} from 'react-router';
import {Card} from 'material-ui/Card';
import LoadingBox from '../Utilities/LoadingBox.jsx';
import MediaCard from '../Items/MediaCard.jsx'
import Item from '../Items/Item.jsx'

// import apiRequest from '../../api_methods.jsx';

class ItemList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: false
        };
        this.loadItems = this.loadItems.bind(this)
        this.renderItems = this.renderItems.bind(this)
    }

    loadItems() {
        // create an AJAX request
        console.log('Loading Items')
        const xhr = new XMLHttpRequest();
        xhr.open('post', 'http://localhost:5010/api/getItems');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {
                this.setState({
                    data: xhr.response.items.d
                });
                console.log(this.state.data)
            }

        });
        xhr.send()
    }

    renderItems() {
        return this.state.data.map( product =>
            <MediaCard
                name={product.Name}
                image={product.ImageURL}
                price={product.Price}
                productId={product.ID}
            />
        )
    }

    componentDidMount() {

    }

    componentWillMount() {
        this.loadItems()
    }

    componentDidUpdate() {

    }

    render() {

        if (this.state.data) {
            console.log('there is data')
            return (
                <Card>
                    {this.renderItems()}
                </Card>

            )
        } else {
            return (
                <LoadingBox/>
            )
        }

    }
}

export default ItemList;


