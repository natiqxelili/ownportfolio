import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as commonActions from "../redux/actions/Common";
import * as userActions from "../redux/actions/User";
import dashPhoto from "../assets/img/dashPhoto.jpg";

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
            <div className="flx-row">
                <div className="tw-w-full tw-flex tw-flex-col tw-overflow-y-auto tw-h-screen-93">
                    <div className='row tw-bg-white m-2 tw-border tw-border-gray-600 py-3'>
                        <div className='col-sm-12 px-3'>
                            <img src={dashPhoto} className="tw-w-1/4 tw-float-right tw-rounded" />
                        </div>
                    </div>
                </div>

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
