import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { logout } from "../../redux/actions/actionsAuth";

class Logout extends Component {
    componentDidMount = () => {
        this.props.logout();
    };
    render() {
        return <Redirect to={"/"} />;
    }
}
const b = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
    };
};
export default connect(null, b)(Logout);
