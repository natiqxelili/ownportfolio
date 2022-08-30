import React from 'react';
import "./lotto.css";

export default function Lotto() {
    return (
        <div>
            <h1 className='mt-5'>---</h1>

            <div className="position floatfix">
                <div id="history"></div>
                <div className="wrapper">
                    {Array.from(Array(90).keys()).map((item, key) => <p className="ball" key={key}>{item + 1}</p>)
                    }
                </div>
            </div>
            <button type="button" id="generate" className="clearfix">Generate</button>
        </div>
    )
}
