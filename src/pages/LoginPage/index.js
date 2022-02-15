import { Component } from "react";
import { connect } from "react-redux";
import axiosInstance from "../../api/axiosInstance";
import { Button } from "../../components/General/Button";
import { login } from "../../redux/actions/actionsAuth";
import "./style.css";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
        };
    }

    onUserNameChange = (e) => {
        this.setState({ userName: e.target.value });
    };

    onPasswordChange = (e) => {
        this.setState({ password: e.target.value });
    };

    login = () => {
        const user = {
            userName: this.state.userName,
            password: this.state.password,
        };
        this.props.login(user);
    };

    render() {
        return (
            <div>
                <h1>LoginPage</h1>
                <div>
                    <input
                        className="control"
                        onChange={this.onUserNameChange}
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
                    <Button name="Login" action={this.login} />
                </div>
            </div>
        );
    }
}

const mapStateToProp = ({ reducerAuth }) => {
    return {
        isAuth: reducerAuth.loginPage.isAuth,
    };
};

const mapDispatchToProp = (dispatch) => {
    return {
        login: (loginForm) => dispatch(login(loginForm)),
    };
};

export default connect(mapStateToProp, mapDispatchToProp)(LoginPage);
