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
import arin from "../assets/img/logos/iqtnazirlik.png";
import dsx from "../assets/img/logos/dsx.png";
import flag_eng from "../assets/icons/british-flag.jpg";
import flag_aze from "../assets/icons/azerbaijan-flag.ico";
import flag_rus from "../assets/icons/flag_rus.png";

import { Translation } from "react-i18next";
import i18n from "../utils/i18n";
import Particles from "react-particles-js";

const particlesoptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    color: {
      value: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"],
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#b6b2b2",
      },
    },
    opacity: {
      value: 0.5211089197812949,
      random: false,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 8.017060304327615,
      random: true,
      anim: {
        enable: true,
        speed: 15.181158184520175,
        size_min: 0.1,
        sync: true,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#808080",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 5,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "bounce",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 1,
      },
    },
  },
  retina_detect: true,
};

class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      timeline: "education",
      currLang: "eng",
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
      myAge,
    });
  };

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

  changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    this.setState({
      currLang: lang,
    });
  };

  render() {
    let { timeline, myAge, currLang } = this.state;
    let langs = {
      aze: flag_aze,
      rus: flag_rus,
      eng: flag_eng,
    };
    return (
      <Translation>
        {(t) => (
          <div
            className="tw-w-screen tw-h-auto tw-bg-cover tw-bg-no-repeat bg-img-overlay"
            style={{ backgroundImage: `url(${backPhoto})` }}
          >
            <div className="tw-justify-end tw-pt-4 tw-pb-2 tw-pr-10 tw-fixed tw-z-20 tw-right-0">
              <div className="dropdown">
                <button
                  className="tw-text-2xl tw-outline-none tw-text-white dropdown-toggle flx-row tw-items-center tw-bg-transparent tw-border-0 tw-shadow-none"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {currLang.slice(0, 2).toUpperCase()}
                  <img
                    className="tw-pr-1 tw-ml-2"
                    alt={currLang}
                    src={langs[currLang]}
                    width={20}
                  />
                </button>
                <div
                  className="dropdown-menu tw-min-w-0 tw-bg-transparent tw-border-0 tw-mt-0 tw-pt-0"
                  aria-labelledby="dropdownMenu2"
                >
                  <button
                    onClick={() => this.changeLanguage("aze")}
                    className={`dropdown-item tw-shadow-none tw-outline-none brdr-b tw-px-2 tw-text-white tw-bg-${
                      currLang === "aze" ? "red-400" : "gray-700"
                    } tw-cursor-pointer`}
                    type="button"
                  >
                    AZ
                    <img
                      alt="aze"
                      src={flag_aze}
                      className="tw-ml-2"
                      width={20}
                    />
                  </button>
                  <button
                    onClick={() => this.changeLanguage("eng")}
                    className={`dropdown-item tw-shadow-none tw-outline-none brdr-b tw-px-2 tw-text-white tw-bg-${
                      currLang === "eng" ? "red-400" : "gray-700"
                    } tw-cursor-pointer`}
                    type="button"
                  >
                    EN
                    <img
                      alt="eng"
                      src={flag_eng}
                      className="tw-ml-2"
                      width={20}
                    />
                  </button>
                  <button
                    onClick={() => this.changeLanguage("rus")}
                    className={`dropdown-item tw-shadow-none tw-outline-none brdr-b tw-px-2 tw-text-white tw-bg-${
                      currLang === "rus" ? "red-400" : "gray-700"
                    } tw-cursor-pointer`}
                    type="button"
                  >
                    RU
                    <img
                      alt="rus"
                      src={flag_rus}
                      className="tw-ml-2"
                      width={20}
                    />
                  </button>
                </div>
              </div>
              {/* <div className={`brdr-b tw-px-2 tw-bg-${currLang === 'aze' ? 'red' : 'gray'}-400 tw-cursor-pointer`} onClick={() => this.changeLanguage("aze")}>AZ<img src={flag_aze} className="tw-ml-1" width={20} alt="aze" /></div>
                            <div className={`brdr-b tw-px-2 tw-bg-${currLang === 'eng' ? 'red' : 'gray'}-400 tw-cursor-pointer`} onClick={() => this.changeLanguage("eng")}>EN<img src={flag_eng} className="tw-ml-1" width={20} alt="eng" /></div>
                        <div className={`brdr-b tw-px-2 tw-bg-${currLang === 'rus' ? 'red' : 'gray'}-400 tw-cursor-pointer`} onClick={() => this.changeLanguage("rus")}>RU<img src={flag_rus} className="tw-ml-1" width={20} alt="rus" /></div> */}
            </div>

            <div className="flx-row">
              <div className="tw-w-full tw-flex tw-flex-col tw-overflow-y-auto tw-h-full">
                <div className="animated slideInDown flx-row tw-items-center tw-bg-azure tw-mx-32 tw-mb-20 tw-mt-10 tw-rounded tw-border tw-border-gray-600 p-3 tw-z-10">
                  <div className="tw-flex-1 tw-text-left tw-align-middle tw-m-auto tw-pl-40">
                    <Particles
                      className="particles"
                      params={particlesoptions}
                    />
                    <div className="tw-text-6xl tw-font-serif tw-text-gray-900 tw-font-bold typewriter">
                      {t("nameAndSurname")}
                    </div>
                    <div className="tw-text-2xl tw-text-gray-700">
                      {t("personProfession")}
                    </div>
                    <div className="tw-text-lg tw-text-gray-700 flx-row tw-items-center tw-justify-start">
                      <Icon.FiCalendar className="tw-text-blue-700 mr-2" /> 7
                      May 1995
                    </div>
                    <div className="tw-text-lg tw-text-gray-700 flx-row tw-items-center tw-justify-start">
                      <Icon.FiPhoneCall className="tw-text-blue-700 mr-2" />{" "}
                      +994 70 533 62 22
                    </div>
                    <div className="tw-text-lg tw-text-gray-700 flx-row tw-items-center tw-justify-start">
                      <Icon.FiMail className="tw-text-blue-700 mr-2" />{" "}
                      xelilinatiq@gmail.com
                    </div>
                    <div className="tw-text-lg tw-text-gray-700 flx-row tw-items-center tw-justify-start">
                      <Icon.FiHome className="tw-text-blue-700 mr-2" />{" "}
                      {t("personPlace")}
                    </div>
                    {/* Social medias */}
                    <div className="tw-text-lg tw-text-gray-700 flx-row tw-items-center tw-justify-start tw-mt-4">
                      <a
                        href="https://www.facebook.com/natiq.xelili/"
                        target="blank"
                      >
                        <Icon.FiFacebook
                          className="tw-text-blue-700 ml-0 mr-2 brdr-b tw-bg-gray-200 tw-px-2 tw-cursor-pointer"
                          size={40}
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/natiq-x%C9%99lili-611b99115/"
                        target="blank"
                      >
                        <Icon.FiLinkedin
                          className="tw-text-blue-700 ml-0 mr-2 brdr-b tw-bg-gray-200 tw-px-2 tw-cursor-pointer"
                          size={40}
                        />
                      </a>
                      <a
                        href="https://www.instagram.com/natiqxelili/"
                        target="blank"
                      >
                        <Icon.FiInstagram
                          className="tw-text-red-700 ml-0 mr-2 brdr-b tw-bg-gray-200 tw-px-2 tw-cursor-pointer"
                          size={40}
                        />
                      </a>
                    </div>
                  </div>
                  <img
                    alt=""
                    src={dashPhoto}
                    className="tw-w-1/4 tw-rounded tw-h-min-content"
                  />
                </div>
                <div className="tw-bg-colorfull tw-opacity-75 tw--mt-64 tw-pt-40 tw-border-t-2 tw-border-t-lg tw-border-white tw-border-dashed">
                  <div className="flx-row tw-justify-center">
                    <div className="col-sm-8 flx-row tw-text-lg tw-text-center tw-font-bold tw-text-white tw-text-shadow">
                      <div className="col-sm-6 tw-pb-10">
                        {t("personDescription", { personAge: myAge })}
                      </div>
                      <div className="col-sm-6 tw-pb-10 tw-h-fit-content  tw-px-4">
                        <label className="tw-text-2xl">{t("frequently")}</label>
                        <div className="row tw-justify-center">
                          <div className="animated fadeInLeftBig brdr-b tw-px-2 tw-bg-red-700">
                            HTML
                          </div>
                          <div className="animated fadeInLeft brdr-b tw-px-2 tw-bg-red-400">
                            CSS
                          </div>
                          <div className="animated bounce brdr-b tw-px-2 tw-bg-indigo-600">
                            ReactJS
                          </div>
                          <div className="animated flipInY brdr-b tw-px-2 tw-bg-orange-900">
                            NodeJS
                          </div>
                          <div className="animated fadeInUp brdr-b tw-px-2 tw-bg-yellow-500">
                            ArcGisJS
                          </div>
                          <div className="animated fadeInDownBig brdr-b tw-px-2 tw-bg-blue-700">
                            Asp.Net
                          </div>
                          <div className="animated fadeInRight brdr-b tw-px-2 tw-bg-blue-900">
                            C#
                          </div>
                          <div className="animated fadeInRightBig brdr-b tw-px-2 tw-bg-black">
                            GIT
                          </div>
                          <div className="animated fadeInDown brdr-b tw-px-2 tw-bg-red-600">
                            NPM
                          </div>
                          <div className="animated fadeInUpBig brdr-b tw-px-2 tw-bg-red-600">
                            Oracle
                          </div>
                        </div>
                        <label className="tw-text-2xl tw-pt-2">
                          {t("sometimes")}
                        </label>
                        <div className="row tw-justify-center">
                          <div className="animated fadeInLeft brdr-b tw-px-2 tw-bg-orange-600">
                            jQuery
                          </div>
                          <div className="animated fadeInUp brdr-b tw-px-2 tw-bg-red-400">
                            SASS
                          </div>
                          <div className="animated fadeInDown brdr-b tw-px-2 tw-bg-red-600">
                            MS-SQL
                          </div>
                          <div className="animated fadeInRight brdr-b tw-px-2 tw-bg-blue-800">
                            Photoshop
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className=""
                  style={{
                    backgroundImage:
                      "-webkit-linear-gradient(0deg,#766dff 0%,#88f3ff 100%)",
                  }}
                >
                  <div className="flx-row tw-justify-center tw-py-20">
                    <button
                      type="button"
                      className={`btn btn-lg ${
                        timeline === "education"
                          ? "btn-light"
                          : "tw-bg-blue-300 tw-text-white"
                      } tw-text-lg mx-1 tw-px-20 tw-py-4`}
                      onClick={() => {
                        this.setState({ timeline: "education" });
                      }}
                    >
                      {t("edu")}
                    </button>
                    <button
                      type="button"
                      className={`btn btn-lg ${
                        timeline === "work"
                          ? "btn-light"
                          : "tw-bg-blue-300 tw-text-white"
                      } tw-text-lg mx-1 tw-px-20 tw-py-4`}
                      onClick={() => {
                        this.setState({ timeline: "work" });
                      }}
                    >
                      {t("work")}
                    </button>
                  </div>
                  {timeline === "education" && (
                    <div className="timeline tw-mb-20">
                      <div className="timeline-container timeline-left">
                        <div className="timeline-content">
                          <div className="tw-flex tw-items-center">
                            <div className="tw-flex-1">
                              <h5>2001-2006</h5>
                              <p className="tw-m-0">{t("school_15")}</p>
                            </div>
                            <img
                              src={school15}
                              alt=""
                              className="tw-w-14 tw-h-14 tw-rounded tw-ml-2"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="timeline-container timeline-right">
                        <div className="timeline-content">
                          <div className="tw-flex tw-items-center">
                            <div className="tw-flex-1">
                              <h5>2006-2009</h5>
                              <p className="tw-m-0">{t("school_44")}</p>
                            </div>
                            <img
                              src={school44}
                              alt=""
                              className="tw-w-14 tw-h-14 tw-rounded tw-ml-2"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="timeline-container timeline-left">
                        <div className="timeline-content">
                          <div className="tw-flex tw-items-center">
                            <div className="tw-flex-1">
                              <h5>2009-2012</h5>
                              <p className="tw-m-0">{t("school_15")}</p>
                            </div>
                            <img
                              src={school15}
                              alt=""
                              className="tw-w-14 tw-h-14 tw-rounded tw-ml-2"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="timeline-container timeline-right">
                        <div className="timeline-content">
                          <div className="tw-flex tw-items-center">
                            <div className="tw-flex-1">
                              <h5>2012-2016</h5>
                              <p className="tw-m-0">{t("unec")}</p>
                            </div>
                            <img
                              src={unec}
                              alt=""
                              className="tw-w-14 tw-h-14 tw-rounded tw-ml-2"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="timeline-container timeline-left">
                        <div className="timeline-content">
                          <div className="tw-flex tw-items-center">
                            <div className="tw-flex-1">
                              <h5>2016-2018</h5>
                              <p className="tw-m-0">{t("adnsu")}</p>
                            </div>
                            <img
                              src={adnsu}
                              alt=""
                              className="tw-w-14 tw-h-12 tw-rounded tw-ml-2"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {timeline === "work" && (
                    <div className="timeline tw-mb-20">
                      <div className="timeline-container timeline-left">
                        <div className="timeline-content">
                          <div className="tw-flex tw-items-center">
                            <div className="tw-flex-1">
                              <h5>2017-2019</h5>
                              <p className="tw-m-0">{t("itmim")}</p>
                            </div>
                            <img
                              src={itmim}
                              alt=""
                              className="tw-w-14 tw-h-14 tw-rounded tw-ml-2"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="timeline-container timeline-right">
                        <div className="timeline-content">
                          <div className="tw-flex tw-items-center">
                            <div className="tw-flex-1">
                              <h5>2019-2020</h5>
                              <p className="tw-m-0">{t("army")}</p>
                            </div>
                            <img
                              src={dsx}
                              alt=""
                              className="tw-w-14 tw-h-14 tw-rounded tw-ml-2"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="timeline-container timeline-left">
                        <div className="timeline-content">
                          <div className="tw-flex tw-items-center">
                            <div className="tw-flex-1">
                              <h5>2020-2022</h5>
                              <p className="tw-m-0">{t("itmim")}</p>
                            </div>
                            <img
                              src={itmim}
                              alt=""
                              className="tw-w-14 tw-h-14 tw-rounded tw-ml-2"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="timeline-container timeline-right">
                        <div className="timeline-content">
                          <div className="tw-flex tw-items-center">
                            <div className="tw-flex-1">
                              <h5>2022-{t("now")}</h5>
                              <p className="tw-m-0">{t("arin")}</p>
                            </div>
                            <img
                              src={arin}
                              alt=""
                              className="tw-w-14 tw-h-14 tw-rounded tw-ml-2"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="tw-w-full tw-bg-colorfull tw-text-white tw-opacity-75">
              <div className="row tw-px-8 tw-py-2 tw-border-t-2 tw-border-t-lg tw-border-white tw-border-dashed">
                <div className="col-sm-4 tw-justify-center flx-row tw-items-center">
                  <label className="tw-font-bold tw-text-2xl tw-border-b tw-border-white">
                    {t("contact")}
                  </label>
                  <div className="tw-px-2 tw-mx-2">
                    <div>{t("mail")}: xelilinatiq@gmail.com</div>
                    <div>{t("phoneNumber")}: +994 70 533 62 22</div>
                  </div>
                </div>
                <div className="col-sm-4 tw-text-center flx-row tw-justify-center tw-items-center">
                  <div className="tw-border-b tw-border-white">
                    {t("createdBy")}
                  </div>
                  <div className="tw-mx-2 tw-text-2xl tw-font-bold tw-text-white tw-text-shadow">
                    {t("nameAndSurname")}
                  </div>
                </div>
                <div className="col-sm-4 tw-justify-center flx-row tw-items-center">
                  <label className="tw-font-bold tw-text-2xl tw-border-b tw-border-white">
                    {t("socialMedias")}
                  </label>
                  <div className="tw-text-lg tw-ml-3 tw-text-gray-700 flx-row tw-items-center tw-justify-center">
                    <a
                      href="https://www.facebook.com/natiq.xelili/"
                      target="blank"
                    >
                      <Icon.FiFacebook
                        className="tw-text-blue-700 ml-0 mr-2 brdr-b tw-bg-gray-200 tw-px-2 tw-cursor-pointer"
                        size={40}
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/natiq-x%C9%99lili-611b99115/"
                      target="blank"
                    >
                      <Icon.FiLinkedin
                        className="tw-text-blue-700 ml-0 mr-2 brdr-b tw-bg-gray-200 tw-px-2 tw-cursor-pointer"
                        size={40}
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/natiqxelili/"
                      target="blank"
                    >
                      <Icon.FiInstagram
                        className="tw-text-red-700 ml-0 mr-2 brdr-b tw-bg-gray-200 tw-px-2 tw-cursor-pointer"
                        size={40}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Translation>
    );
  }
}

export default withRouter(
  connect(({ ...state }) => ({ state }), {
    ...commonActions,
    ...userActions,
  })(Portfolio)
);
