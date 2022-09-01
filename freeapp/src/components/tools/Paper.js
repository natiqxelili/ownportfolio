import React, { Component } from 'react';
import "./paper.css";

export default class Paper extends Component {
    render() {
        return (
            <div>
                <h1 className='mt-5'><a className='theext' href='/'>khalili.az</a> <span className='tw-text-gray-500'>-</span> Paper</h1>
                <div className="paper" style={{ height: "calc(100vh - 150px)" }}>
                    <div className="paper-content">
                        <textarea autoFocus></textarea>
                    </div>
                </div>
            </div>
        )
    }
}
