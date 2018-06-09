import React, {PropTypes} from 'react';
import Auth from "../../modules/Auth";
import LoadingBox from '../Utilities/LoadingBox.jsx';
import Button from '@material-ui/core/Button';

class Checkout extends React.Component {

     constructor(props) {
        super(props);
        this.state = {
            data: false
        };
        this.loadCart = this.loadCart.bind(this);

    }

    loadCart(){
        var payload = "";
        if (Auth.getCartCookie()){
            const cartCookie = Auth.getCartCookie();
            console.log(cartCookie);
            payload = `cartCookie=${cartCookie}`;
        }

         // create an AJAX request
        const xhr = new XMLHttpRequest();
        xhr.open('post', 'http://localhost:5010/api/getCart');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {


               this.setState({
                   data: xhr.response.cart.d.Items
               })
                console.log(this.state.data);


                // // change the current URL to /
                // this.context.router.replace('/');
            } else {
                // failure

                // change the component state
                const errors = xhr.response.errors ? xhr.response.errors : {};
                errors.summary = xhr.response.message;

            }
        });

        xhr.send(payload);
    }
    componentDidMount(){
         this.loadCart()
    }


    render() {

        if (this.state.data) {
            return (
                <div>
                    <div>
                        <div className="table100 ver1 m-b-110">
                            <div className="table100-head">
                                <table>
                                    <thead>
                                    <tr className="row100 head">
                                        <th className="cell100 column1">Product Id</th>
                                        <th className="cell100 column2">Quantity</th>
                                        <th className="cell100 column3">Unit price</th>
                                        <th className="cell100 column4">Total</th>
                                    </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>

                       <div className="table100-body js-pscroll">
                            <table>
                                <tbody>
                                {this.state.data.map(item =>
                                    <tr className="row100 body">
                                        <td className="cell100 column1">{item.ProductId}</td>
                                        <td className="cell100 column2">{item.Quantity}</td>
                                        <td className="cell100 column3">{item.Price}</td>
                                        <td className="cell100 column4">{item.Total}</td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Button size="small" color="primary" >
                        Verify
                    </Button>
                </div>

            )
        } else {
            return (
                <LoadingBox/>
            )
        }
    }
}

export default Checkout