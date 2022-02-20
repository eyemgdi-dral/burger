import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Button } from "../../components/General/Button";
import { Spinner } from "../../components/General/Spinner";

import {
    signup,
    signupError,
    clearError,
} from "../../redux/actions/actionsAuth";
import "./style.css";

class SignupPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            passwordConfirm: "",
        };
    }

    onEmailChange = (e) => {
        this.setState({ email: e.target.value });
    };

    onPasswordChange = (e) => {
        this.setState({ password: e.target.value });
    };

    onPasswordConfirmChange = (e) => {
        this.setState({ passwordConfirm: e.target.value });
    };

    signup = () => {
        this.props.clearError();
        if (this.state.password != this.state.passwordConfirm) {
            // this.setState({ error: "not same." });
            this.props.signupError({ message: "not same: internal error." });
            return;
        }
        const user = {
            email: this.state.email,
            password: this.state.password,
        };
        this.props.signup(user);
    };

    render() {
        return (
            <div>
                {this.props.isAuth && <Redirect to={"/"} />}
                <h1>SignupPage - isAuth = {this.props.isAuth + ""}</h1>
                <div>
                    <input
                        className="control"
                        onChange={this.onEmailChange}
                        type="text"
                        placeholder="user name"
                    />
                    <br />
                    <input
                        className="control"
                        onChange={this.onPasswordChange}
                        type="password"
                        placeholder="password"
                    />
                    <br />
                    <input
                        className="control"
                        onChange={this.onPasswordConfirmChange}
                        type="password"
                        placeholder="password"
                    />
                    {this.props.error && <p>{this.props.error.message}</p>}

                    {(this.props.isLoading && <Spinner />) || (
                        <Button name="Signup" clicked={this.signup} />
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProp = ({ reducerAuth }) => {
    return {
        isAuth: reducerAuth.isAuth,
        error: reducerAuth.signupPage.error,
        isLoading: reducerAuth.signupPage.isLoading,
    };
};

const mapDispatchToProp = (dispatch) => {
    return {
        signup: (loginForm) => dispatch(signup(loginForm)),
        signupError: (error) => dispatch(signupError(error)),
        clearError: () => dispatch(clearError()),
    };
};

export default connect(mapStateToProp, mapDispatchToProp)(SignupPage);
