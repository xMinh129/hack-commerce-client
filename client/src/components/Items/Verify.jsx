import React, {PropTypes} from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router';

let divStyle = {
  color: "#fd072c"
};


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
        if (this.state.numberOfVerification < 3) {
            const xhr = new XMLHttpRequest();
            xhr.open('post', 'http://localhost:5010/api/verifyAccount');
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
            xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
            xhr.responseType = 'json';
            xhr.addEventListener('load', () => {
                if (xhr.status === 200 && xhr.response.success) {


                    this.setState({
                        data: xhr.response.success,
                        name: xhr.response.name
                    });
                    alert('User verified');
                    if (this.state.data) {
                        this.setState({
                            numberOfVerification: this.state.numberOfVerification + 1
                        })
                    }
                    console.log(this.state.data);


                    // // change the current URL to /
                    // this.context.router.replace('/');
                } else if (xhr.status === 200 && !xhr.response.success) {
                    alert('User unidentified');
                }
                else {
                    // failure
                    alert('Failing to authenticate');

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
                    <Button size="small" color="#14c27f"><i className="fa fa-check-circle"></i>Welcome
                        back {this.state.name}</Button>
                    <Button size="small" color="primary"><Link to="/processPayment">Pay</Link></Button>
                </div>
            )

        } else {
            return (
                <div>
                    <Button size="small" color="primary" onClick={this.verifyAccount}>Please verify with your
                        image</Button>
                    <p style={divStyle}><i className="fa fa-times-circle"></i>Unverified</p>

                </div>
            )
        }
    }

}

export default Verification;