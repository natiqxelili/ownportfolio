import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as commonActions from "../redux/actions/Common";
import * as userActions from "../redux/actions/User";
import * as Icon from "react-icons/fi";

//Images
import dashPhoto from "../assets/img/dashPhoto.jpg";
import backPhoto from "../assets/img/bg-techno.png";
import adnsu from "../assets/img/logos/adnsu-logo-new.png";
import unec from "../assets/img/logos/UNEC_1.png";
import school15 from "../assets/img/logos/school_15.jfif";
import school44 from "../assets/img/logos/school_44.jfif";
import itmim from "../assets/img/logos/itmim.png";
import dsx from "../assets/img/logos/dsx.png";
import flag_eng from "../assets/icons/british-flag.jpg";
import flag_aze from "../assets/icons/azerbaijan-flag.ico";

class Portfolio extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            timeline: "education"
        };
    }

    componentDidMount() {
        this.getAllData();
    }

    getAllData = () => {
        let date = new Date();
        let year = date.getFullYear();
        let myAge = year - 1995;
        this.setState({
            myAge
        })
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
        let { timeline, myAge } = this.state;
        return (
            <div
                className="tw-w-screen tw-h-auto tw-bg-cover tw-bg-no-repeat bg-img-overlay"
                style={{ backgroundImage: `url(${backPhoto})` }}
            >
                <div className="tw-justify-end tw-pt-4 tw-pb-2 tw-pr-10 tw-fixed tw-z-20 tw-right-0">
                    <div className="brdr-b tw-px-2 tw-bg-gray-400">AZE<img src={flag_aze} className="tw-ml-1" width={20} alt="aze" /></div>
                    <div className="brdr-b tw-px-2 tw-bg-gray-400">ENG<img src={flag_eng} className="tw-ml-1" width={20} alt="eng" /></div>
                </div>
                <div className="flx-row">
                    <div className="tw-w-full tw-flex tw-flex-col tw-overflow-y-auto tw-h-full">
                        <div className="flx-row tw-bg-white tw-mx-32 tw-mb-20 tw-mt-10 tw-rounded tw-border tw-border-gray-600 p-3 tw-z-10">
                            <div className="tw-flex-1 tw-text-left tw-align-middle tw-m-auto tw-pl-40">
                                <div className="tw-text-6xl tw-font-serif tw-text-gray-900 tw-font-bold">Natig Khalili</div>
                                <div className="tw-text-2xl tw-text-gray-700">Middle Full-Stack Web Developer (Node, React, Asp.net)</div>
                                <div className="tw-text-lg tw-text-gray-700 flx-row tw-items-center tw-justify-start"><Icon.FiCalendar className="tw-text-blue-700 mr-2" /> 7 May 1995</div>
                                <div className="tw-text-lg tw-text-gray-700 flx-row tw-items-center tw-justify-start"><Icon.FiPhoneCall className="tw-text-blue-700 mr-2" /> +994 70 533 62 22</div>
                                <div className="tw-text-lg tw-text-gray-700 flx-row tw-items-center tw-justify-start"><Icon.FiMail className="tw-text-blue-700 mr-2" /> xelilinatiq@gmail.com</div>
                                <div className="tw-text-lg tw-text-gray-700 flx-row tw-items-center tw-justify-start"><Icon.FiHome className="tw-text-blue-700 mr-2" /> Ganja, Azerbaijan</div>
                                {/* Social medias */}
                                <div className="tw-text-lg tw-text-gray-700 flx-row tw-items-center tw-justify-start tw-mt-4">
                                    <a href="https://www.facebook.com/natiq.xelili/" target="blank"><Icon.FiFacebook className="tw-text-blue-700 ml-0 mr-2 brdr-b tw-bg-gray-200 tw-px-2 tw-cursor-pointer" size={40} /></a>
                                    <a href="https://www.linkedin.com/in/natiq-x%C9%99lili-611b99115/" target="blank"><Icon.FiLinkedin className="tw-text-blue-700 ml-0 mr-2 brdr-b tw-bg-gray-200 tw-px-2 tw-cursor-pointer" size={40} /></a>
                                    <a href="https://www.instagram.com/natiqxelili/" target="blank"><Icon.FiInstagram className="tw-text-red-700 ml-0 mr-2 brdr-b tw-bg-gray-200 tw-px-2 tw-cursor-pointer" size={40} /></a>
                                </div>
                            </div>
                            <img alt="" src={dashPhoto} className="tw-w-1/4 tw-rounded" />
                        </div>
                        <div className="tw-bg-blue-400 tw-opacity-75 tw--mt-64 tw-pt-40 tw-border-t-2 tw-border-t-lg tw-border-white tw-border-dashed">
                            <div className="flx-row tw-justify-center">
                                <div className="col-sm-8 flx-row tw-text-lg tw-text-center tw-font-bold tw-text-white tw-text-shadow">
                                    <div className="col-sm-6 tw-pb-10">Hi, I'm Natig Khalili. I am {myAge} years old and I was born in Ganja but now I live in Baku.
                                        I started my education on information technologies and systems and finished my education life until master degree.
                                        I'm the frontend-based web-developer. But I also have experiences in backend. Writing new projects or developing applications using different languages.
                                        I have high experience in the sector of Geographic Information System.</div>
                                    <div className="col-sm-6 tw-pb-10 tw-h-fit-content  tw-px-4">
                                        <label className="tw-text-2xl">Frequently used</label>
                                        <div className="row tw-justify-center">
                                            <div className="animated fadeInLeftBig brdr-b tw-px-2 tw-bg-red-700">HTML</div>
                                            <div className="animated fadeInLeft brdr-b tw-px-2 tw-bg-red-400">CSS</div>
                                            <div className="animated flipInX brdr-b tw-px-2 tw-bg-indigo-600">ReactJS</div>
                                            <div className="animated flipInY brdr-b tw-px-2 tw-bg-orange-900">NodeJS</div>
                                            <div className="animated fadeInUp brdr-b tw-px-2 tw-bg-yellow-500">ArcGisJS</div>
                                            <div className="animated fadeInDownBig brdr-b tw-px-2 tw-bg-blue-700">Asp.Net</div>
                                            <div className="animated fadeInRight brdr-b tw-px-2 tw-bg-blue-900">C#</div>
                                            <div className="animated fadeInRightBig brdr-b tw-px-2 tw-bg-black">GIT</div>
                                            <div className="animated fadeInDown brdr-b tw-px-2 tw-bg-red-600">NPM</div>
                                            <div className="animated fadeInUpBig brdr-b tw-px-2 tw-bg-red-600">Oracle</div>
                                        </div>
                                        <label className="tw-text-2xl tw-pt-2">Sometimes used</label>
                                        <div className="row tw-justify-center">
                                            <div className="animated fadeInLeft brdr-b tw-px-2 tw-bg-orange-600">jQuery</div>
                                            <div className="animated fadeInUp brdr-b tw-px-2 tw-bg-red-400">SASS</div>
                                            <div className="animated fadeInDown brdr-b tw-px-2 tw-bg-red-600">MS-SQL</div>
                                            <div className="animated fadeInRight brdr-b tw-px-2 tw-bg-blue-800">Photoshop</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-5" style={{
                            backgroundImage: '-webkit-linear-gradient(0deg,#766dff 0%,#88f3ff 100%)'
                        }}>
                            <div className="flx-row tw-justify-center tw-py-20">
                                <button type="button" className={`btn btn-lg ${timeline === 'education' ? 'btn-light' : 'tw-bg-blue-300 tw-text-white'} tw-text-lg mx-1 tw-px-20 tw-py-4`} onClick={() => { this.setState({ timeline: 'education' }) }}>Education</button>
                                <button type="button" className={`btn btn-lg ${timeline === 'work' ? 'btn-light' : 'tw-bg-blue-300 tw-text-white'} tw-text-lg mx-1 tw-px-20 tw-py-4`} onClick={() => { this.setState({ timeline: 'work' }) }}>Work experience</button>
                            </div>
                            {timeline === "education" &&
                                <div className="timeline tw-mb-20">
                                    <div className="timeline-container timeline-left">
                                        <div className="timeline-content">
                                            <div className="tw-flex">
                                                <div className="tw-flex-1">
                                                    <h5>2001-2006</h5>
                                                    <p>Azerbaijan, Ganja, Secondary school number 15</p>
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
                                                    <p>Azerbaijan, Ganja, Secondary school number 44</p>
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
                                                    <p>Azerbaijan, Ganja, Secondary school number 15</p>
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
                                                    <p>Azerbaijan State Economic University</p>
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
                                                    <p>Azerbaijan State Oil and Industry University</p>
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
                                                    <p>Information technologies and Data Management Center</p>
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
                                                    <p>Military Service</p>
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
                                                    <p>Information technologies and Data Management Center</p>
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
