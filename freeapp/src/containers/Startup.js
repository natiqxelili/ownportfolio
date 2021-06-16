import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setState } from "../redux/actions/Common";
import { me } from "../redux/actions/User";

class Startup extends Component {

    componentDidMount() {
        this.getUser();
    }

    getUser = async () => {
        //await this.props.me();
        this.props.setState('startup', false);
    }


    render() {
        const { common } = this.props.state;
        return (
            <div className='tw-flex h-100 tw-items-center tw-justify-center tw-bg-gray-300'>
                <div className='tw-flex tw-items-center tw-border tw-border-gray-900 p-5 tw-rounded-lg tw-bg-blue-100 tw-shadow-2xl'>
                    <div className="spinner-border mr-3" role="status">
                        <span className="sr-only">Zəhmət olmasa biraz gözləyin...</span>
                    </div>
                    Zəhmət olmasa biraz gözləyin...
                </div>
            </div>
        )
    }
}

export default withRouter(
    connect(({ ...state }) => ({ state }), { setState, me })(Startup)
);
