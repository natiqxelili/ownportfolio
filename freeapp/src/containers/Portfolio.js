import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as commonActions from "../redux/actions/Common";
import * as userActions from "../redux/actions/User";

class Portfolio extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        };
    }

    handleChange = e => {
        e.target.value && e.target.setCustomValidity('');
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { username, password } = this.state;
        this.props.loading("login", true);
        this.props.login(username, password);
    };

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default withRouter(
    connect(({ ...state }) => ({ state }), {
        ...commonActions,
        ...userActions
    })(Portfolio)
);
