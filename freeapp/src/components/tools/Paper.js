import React, { Component } from 'react';
import "./paper.css";

export default class Paper extends Component {
    render() {
        return (
            <div>
                <div className='mt-3 tw-text-6xl tw-text-center'><a className='theext' href='/'>khalili.az</a> <span className='tw-text-gray-500'>-</span> Paper</div>
                <div className="paper" style={{ height: "calc(100vh - 150px)" }}>
                    <div className="paper-content">
                        <textarea autoFocus></textarea>
                    </div>
                </div>
            </div>
        )
    }
}
