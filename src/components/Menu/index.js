import React from "react";
import { connect } from "react-redux";
import { MenuItem } from "../MenuItem";
import { Component } from "react";
import "./style.css";
import { Fragment } from "react";
const Menu = (props) => {
    //TIP: Gurvalsan func-r render hiihdee Fragment tag-g olon component-n gaduur hiih ystoi
    return (
        <div>
            <ul className="Menu">
                {/* TIP: when passing boolean */}
                {/* <MenuItem exact name="Home" link="/" />
                <MenuItem exact name="Checkout" link="/checkout" /> */}

                {props.isAuth ? (
                    <Fragment>
                        <MenuItem exact name="Burger" link="/" />
                        <MenuItem exact name="Order" link="/orders" />
                        <MenuItem exact name="Logout" link="/logout" />
                    </Fragment>
                ) : (
                    <Fragment>
                        <MenuItem exact name="Login" link="/login" />
                        <MenuItem exact name="Sign Up" link="/signup" />
                    </Fragment>
                )}
            </ul>
        </div>
    );
};
const a = ({ reducerAuth }) => {
    return {
        isAuth: reducerAuth.isAuth,
    };
};

export default connect(a)(Menu);
