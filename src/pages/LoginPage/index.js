import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import { Button } from "../../components/General/Button";
import { login } from "../../redux/actions/actionsAuth";
import "./style.css";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }

    onEmailChange = (e) => {
        this.setState({ email: e.target.value });
    };

    onPasswordChange = (e) => {
        this.setState({ password: e.target.value });
    };

    login = () => {
        const user = {
            email: this.state.email,
            password: this.state.password,
        };
        this.props.login(user);
    };

    render() {
        return (
            <div>
                {this.props.isAuth && <Redirect to={"/orders"} />}
                <h1>LoginPage</h1>
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
                    {this.props.error && <p>{this.props.error}</p>}

                    <Button name="Login" clicked={this.login} />
                </div>
            </div>
        );
    }
}

const mapStateToProp = ({ reducerAuth }) => {
    return {
        isAuth: reducerAuth.isAuth,
        isLoading: reducerAuth.loginPage.isLoading,
        error: reducerAuth.loginPage.error,
    };
};

const mapDispatchToProp = (dispatch) => {
    return {
        login: (loginForm) => dispatch(login(loginForm)),
    };
};

export default connect(mapStateToProp, mapDispatchToProp)(LoginPage);
