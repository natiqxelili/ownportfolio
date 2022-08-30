//onClick={() => this.props.rightbar("pageName", false)}
//onClick={() => this.props.modal("pageName", false)}

import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

// Components
import Dashboard from "../components/pages/dashboard";
import Error from "../components/error/Index";

//Pages
//import Any from "../components/pages/Any";

//CSS
import 'react-confirm-alert/src/react-confirm-alert.css';

//Modals
import PasswordReset from "../components/modals/PasswordReset";



class Main extends React.Component {
    render() {
        const { modals } = this.props.state.common;
        return (
            <React.Fragment>
                <div className="tw-flex tw-flex-col tw-bg-primary tw-overflow-hidden tw-w-full tw-font-proxima-nova">
                    <div className="tw-relative tw-h-full">
                        <div className="tw-w-full tw-h-full">
                            <Switch>
                                <Route exact path="/" component={Dashboard} />
                                <Route path="/dashboard" component={Dashboard} />
                                <Route path="/*" component={Error} />
                            </Switch>

                        </div>
                    </div>
                </div>
                {modals?.passwordReset?.visible && <PasswordReset {...modals.passwordReset} />}

            </React.Fragment>
        );
    }
}
export default withRouter(connect(({ ...state }) => ({ state }))(Main));
