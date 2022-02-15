import { Component } from "react";
import { connect } from "react-redux";
import axiosInstance from "../../api/axiosInstance";
import { Button } from "../../components/General/Button";
import { signup } from "../../redux/actions/actionsAuth";
import "./style.css";

class SignupPage extends Component {
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

    signup = () => {
        const user = {
            userName: this.state.userName,
            password: this.state.password,
        };
        this.props.signup(user);
    };

    render() {
        return (
            <div>
                <h1>SignupPage</h1>
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
        isAuth: reducerAuth.signupPage.isAuth,
    };
};

const mapDispatchToProp = (dispatch) => {
    return {
        signup: (loginForm) => dispatch(signup(loginForm)),
    };
};

export default connect(mapStateToProp, mapDispatchToProp)(SignupPage);
