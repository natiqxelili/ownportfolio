import React from "react";
import { connect } from "react-redux";
import * as Common from "../../redux/actions/Common";
import * as userActions from "../../redux/actions/User";
import { withRouter } from "react-router-dom";
import * as Icon from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
// import Axios from "../../utils/axios";

class Header extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    topElements = () => {
        const elements = [
            {
                icon: Icon.FiLayout,
                label: "Şəkillər",
                name: "pictures",
                url: "/pictures",
                hidden: true
            }
        ]
        return elements.map((data, i) => {
            if (data.html) return data.html;
            return (
                <div className={`${data.hidden ? 'tw-hidden' : 'tw-relative tw-text-primary tw-p-2'}`} key={i}>
                    <span
                        name={data.name}
                        className={`headericons tw-h-12 b-shadow-b-gray tw-inline-block tw-flex tw-items-center tw-justify-center tw-relative  tw-cursor-pointer ${data.active ? "tw-bg-indigo-500 tw-text-white" : ""}`}
                        onClick={!data.disabled ? data.onClick : () => { }}
                    >
                        <Link to={data.url} className="flx-row tw-items-center txt-decoration-none p-0 m-0 tw-text-gray-700 tw-font-semibold">
                            <data.icon size={18} className='tw-pr-1 mt-1' />{data.label}</Link>

                    </span>
                </div>
            );
        });
    }

    handleLogout = () => {
        this.props.logout();
    };

    render() {
        const { user: { me } } = this.props.state;
        return (
            <div className="tw-flex tw-bg-orange-100 tw-border-b tw-border-gray-700 tw-h-screen-7">
                {/* Left */}
                <div className="tw-px-5 tw-w-25rem tw-flex tw-items-center tw-bg-primary">
                    <img src='logo' alt="" width="100%" />
                </div>
                <div className="tw-flex tw-flex-col tw-flex-1">
                    <div className="tw-flex tw-bg-primary tw-items-center tw-justify-center tw-text-lg">
                        <div className='flx-row tw-flex-1 tw-justify-center'>
                            {this.topElements()}
                        </div>
                        <div className="tw-cursor-default tw-flex tw-items-center tw-mr-3 tw-text-primary">

                            <button className="flx-row drop-button" type="button" data-toggle="dropdown">
                                <span className="tw-text-sm tw-font-semibold tw-mr-2">
                                    User base info
                                </span>
                                <FaUserCircle className="tw-cursor-pointer" data-tip="İstifadəçi paneli" size="22" className="mr-2" />
                            </button>
                            <div className="tw-cursor-pointer tw-text-lg tw-font-semibold tw-m-2"
                                onClick={this.handleLogout}
                            >
                                Çıxış &nbsp;
                                <Icon.FiLogOut
                                    size={15}
                                    strokeWidth="2.6"
                                    data-tip="Sistemdən çıxış"
                                    data-place="left"
                                    className="tw-text-sm tw-inline-block tw-text-primary"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default withRouter(
    connect(({ ...state }) => ({ state }), {
        ...Common,
        ...userActions
    })(Header)
);
