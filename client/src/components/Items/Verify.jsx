import React, {PropTypes} from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router';

class Verification extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: false,
            loadData: false,
            numberOfVerification: 0
        };
        this.verifyAccount = this.verifyAccount.bind(this);


    }

    verifyAccount() {

        if (this.state.numberOfVerification < 3){
            const xhr = new XMLHttpRequest();
            xhr.open('post', 'http://localhost:5010/api/verifyAccount');
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
            xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
            xhr.responseType = 'json';
            xhr.addEventListener('load', () => {
                if (xhr.status === 200) {


                    this.setState({
                        data: xhr.response.success,
                        name: xhr.response.name
                    });
                    if(this.state.data){
                        this.setState({
                            numberOfVerification: this.state.numberOfVerification + 1
                        })
                    }
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

            xhr.send();

        }
        // create an AJAX request

    }




    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        if (this.state.data) {
            return (
                <div>
                    <Button size="small" color="primary" >Verified</Button>
                    <Button size="small" color="primary"><Link to="/processPayment">Pay</Link></Button>
                </div>
            )

        } else {
            return (
                <div>
                    <Button size="small" color="primary"  onClick={this.verifyAccount} >Please verify with your image</Button>
                    <p>Unverified</p>

                </div>
            )
        }
    }

}

export default Verification;