import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Modal from "react-modal";
import { me } from "../redux/actions/User";

//alert
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import 'react-confirm-alert/src/react-confirm-alert.css';

//containers
import Main from "./Main"
import Header from "../components/partials/Header";

import Portfolio from "./Portfolio";
import Startup from "./Startup";


Modal.setAppElement("#root");

class App extends React.Component {

    render() {
        const { user, common } = this.props.state;
        return (
            <div className='tw-w-full tw-overflow-hidden tw-h-screen' style={{ backgroundColor: '#9bcdd9' }}>

                {user?.login ? (common.startup ?
                    <Startup /> :
                    <div className="tw-flex tw-flex-col tw-h-full">
                        <Header />
                        <div className="tw-flex tw-flex-1 tw-bg-gray-300">
                            <Main />
                        </div>
                    </div>)
                    : <Portfolio />
                }
                <ToastContainer
                    toastClassName="tw-px-5 tw-text-sm"
                    position="bottom-right"
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange={false}
                    draggable={false}
                    autoClose={2500}
                />
            </div>
        );
    }
}

export default withRouter(
    connect(({ ...state }) => ({ state }), { me })(App)
);
