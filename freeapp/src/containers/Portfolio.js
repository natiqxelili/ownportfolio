import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as commonActions from "../redux/actions/Common";
import * as userActions from "../redux/actions/User";
import dashPhoto from "../assets/img/dashPhoto.jpg";
import backPhoto from "../assets/img/bg-techno.png";
import adnsu from "../assets/img/logos/adnsu-logo-new.png";
import unec from "../assets/img/logos/UNEC_1.png";
import school15 from "../assets/img/logos/school_15.jfif";
import school44 from "../assets/img/logos/school_44.jfif";
import itmim from "../assets/img/logos/itmim.png";
import dsx from "../assets/img/logos/dsx.png";
import * as Icon from "react-icons/fi"

class Portfolio extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            timeline: "education"
        };
    }

    handleChange = (e) => {
        e.target.value && e.target.setCustomValidity("");
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = this.state;
        this.props.loading("login", true);
        this.props.login(username, password);
    };

    render() {
        let { timeline } = this.state;
        return (
            <div
                className="tw-w-screen tw-h-screen tw-bg-cover tw-bg-no-repeat bg-img-overlay"
                style={{ backgroundImage: `url(${backPhoto})` }}
            >
                <div className="flx-row">
                    <div className="tw-w-full tw-flex tw-flex-col tw-overflow-y-auto tw-h-full">
                        <div className="flx-row tw-bg-white tw-m-32 tw-rounded tw-border tw-border-gray-600 p-3">
                            <div className="tw-flex-1 tw-text-left tw-align-middle tw-m-auto tw-pl-40">
                                <div className="tw-text-6xl tw-font-serif tw-text-gray-900 tw-font-bold">Natig Khalili</div>
                                <div className="tw-text-2xl tw-text-gray-700">Middle Full-Stack Web Developer (Node, React, Asp.net)</div>
                                <div className="tw-text-lg tw-text-gray-700 flx-row tw-items-center tw-justify-start"><Icon.FiCalendar className="tw-text-blue-700 mr-2" /> 7 May 1995</div>
                                <div className="tw-text-lg tw-text-gray-700 flx-row tw-items-center tw-justify-start"><Icon.FiPhoneCall className="tw-text-blue-700 mr-2" /> +994 70 533 62 22</div>
                                <div className="tw-text-lg tw-text-gray-700 flx-row tw-items-center tw-justify-start"><Icon.FiMail className="tw-text-blue-700 mr-2" /> xelilinatiq@gmail.com</div>
                                <div className="tw-text-lg tw-text-gray-700 flx-row tw-items-center tw-justify-start"><Icon.FiHome className="tw-text-blue-700 mr-2" /> Gandja, Azerbaijan</div>
                                {/* Social medias */}
                                <div className="tw-text-lg tw-text-gray-700 flx-row tw-items-center tw-justify-start tw-mt-4">
                                    <a href="https://www.facebook.com/natiq.xelili/" target="blank"><Icon.FiFacebook className="tw-text-blue-700 ml-0 mr-2 brdr-b tw-bg-gray-200 tw-px-2 tw-cursor-pointer" size={40} /></a>
                                    <a href="https://www.linkedin.com/in/natiq-x%C9%99lili-611b99115/" target="blank"><Icon.FiLinkedin className="tw-text-blue-700 ml-0 mr-2 brdr-b tw-bg-gray-200 tw-px-2 tw-cursor-pointer" size={40} /></a>
                                    <a href="https://www.instagram.com/natiqxelili/" target="blank"><Icon.FiInstagram className="tw-text-red-700 ml-0 mr-2 brdr-b tw-bg-gray-200 tw-px-2 tw-cursor-pointer" size={40} /></a>
                                </div>
                            </div>
                            <img alt="" src={dashPhoto} className="tw-w-1/4 tw-rounded" />
                        </div>
                        <div className="mb-5" style={{
                            backgroundImage: '-webkit-linear-gradient(0deg,#766dff 0%,#88f3ff 100%)'
                        }}>
                            <div className="flx-row tw-justify-center tw-py-20">
                                <button type="button" className={`btn btn-lg ${timeline === 'education' ? 'btn-light' : 'tw-bg-blue-300 tw-text-white'} tw-text-lg mx-1 tw-px-20 tw-py-4`} onClick={() => { this.setState({ timeline: 'education' }) }}>Təhsil</button>
                                <button type="button" className={`btn btn-lg ${timeline === 'work' ? 'btn-light' : 'tw-bg-blue-300 tw-text-white'} tw-text-lg mx-1 tw-px-20 tw-py-4`} onClick={() => { this.setState({ timeline: 'work' }) }}>İş təcrübəsi</button>
                            </div>
                            {timeline === "education" &&
                                <div className="timeline tw-mb-20">
                                    <div className="timeline-container timeline-left">
                                        <div className="timeline-content">
                                            <div className="tw-flex">
                                                <div className="tw-flex-1">
                                                    <h5>2001-2006</h5>
                                                    <p>Gəncə şəhəri, 15 nömrəli tam orta məktəb</p>
                                                </div>
                                                <img src={school15} alt="" className="tw-w-1/5 tw-rounded tw-ml-2" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="timeline-container timeline-right">
                                        <div className="timeline-content">
                                            <div className="tw-flex">
                                                <div className="tw-flex-1">
                                                    <h5>2006-2009</h5>
                                                    <p>Gəncə şəhəri, 44 saylı Bağça məktəb lisey kompleksi</p>
                                                </div>
                                                <img src={school44} alt="" className="tw-w-1/5 tw-rounded tw-ml-2" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="timeline-container timeline-left">
                                        <div className="timeline-content">
                                            <div className="tw-flex">
                                                <div className="tw-flex-1">
                                                    <h5>2009-2012</h5>
                                                    <p>Gəncə şəhəri, 15 nömrəli tam orta məktəb</p>
                                                </div>
                                                <img src={school15} alt="" className="tw-w-1/5 tw-rounded tw-ml-2" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="timeline-container timeline-right">
                                        <div className="timeline-content">
                                            <div className="tw-flex">
                                                <div className="tw-flex-1">
                                                    <h5>2012-2016</h5>
                                                    <p>Azərbaycan Dövlət İqtisad Universiteti</p>
                                                </div>
                                                <img src={unec} alt="" className="tw-w-1/5 tw-rounded tw-ml-2" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="timeline-container timeline-left">
                                        <div className="timeline-content">
                                            <div className="tw-flex">
                                                <div className="tw-flex-1">
                                                    <h5>2016-2018</h5>
                                                    <p>Azərbaycan Dövlət Neft və Sənaye Universiteti</p>
                                                </div>
                                                <img src={adnsu} alt="" className="tw-w-1/5 tw-rounded tw-ml-2" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                            {timeline === "work" &&
                                <div className="timeline tw-mb-20">
                                    <div className="timeline-container timeline-left">
                                        <div className="timeline-content">
                                            <div className="tw-flex">
                                                <div className="tw-flex-1">
                                                    <h5>2017-2019</h5>
                                                    <p>İnformasiya texnologiyaları və məlumat idarəetmə mərkəzi</p>
                                                </div>
                                                <img src={itmim} alt="" className="tw-w-1/5 tw-rounded tw-ml-2" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="timeline-container timeline-right">
                                        <div className="timeline-content">
                                            <div className="tw-flex">
                                                <div className="tw-flex-1">
                                                    <h5>2019-2020</h5>
                                                    <p>Hərbi xidmət</p>
                                                </div>
                                                <img src={dsx} alt="" className="tw-w-1/5 tw-rounded tw-ml-2" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="timeline-container timeline-left">
                                        <div className="timeline-content">
                                            <div className="tw-flex">
                                                <div className="tw-flex-1">
                                                    <h5>2020-NOW</h5>
                                                    <p>İnformasiya texnologiyaları və məlumat idarəetmə mərkəzi</p>
                                                </div>
                                                <img src={itmim} alt="" className="tw-w-1/5 tw-rounded tw-ml-2" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(
    connect(({ ...state }) => ({ state }), {
        ...commonActions,
        ...userActions,
    })(Portfolio)
);
