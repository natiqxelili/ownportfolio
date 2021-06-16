import React from "react";
import { Link } from "react-router-dom";

class Index extends React.Component {
    render() {
        return (
            <div className="tw-flex tw-justify-center tw-items-center">
                <div className="tw-my-40 tw-text-center">
                    <h1 className="tw-text-4xl tw-font-bold tw-text-gray-700">Oops!</h1>
                    <h1 className="tw-text-3xl tw-font-bold tw-text-gray-500">
                        404 TAPILMADI
                    </h1>
                    <span className="tw-font-light tw-block tw-mb-2 tw-text-gray-500">
                        Axtardığınız səhifə tapılmadı.
                    </span>
                    <Link
                        to="/"
                        className="tw-uppercase tw-text-white tw-bg-blue-500 tw-py-3 tw-px-10 tw-mt-6 tw-inline-block tw-rounded-sm focus:tw-shadow-none tw-font-medium tw-text-xs"
                    >
                        ANA SƏHİFƏ
                    </Link>
                </div>
            </div>
        );
    }
}

export default Index;
