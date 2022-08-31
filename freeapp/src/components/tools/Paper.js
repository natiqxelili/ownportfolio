import React, { Component } from 'react';
import "./paper.css";

export default class Paper extends Component {
    render() {
        return (
            <div>
                <h1 className='mt-5'><a className='theext' href='/'>khalili.az</a> - Paper</h1>
                <div className="paper">
                    <div className="paper-content">
                        <textarea autofocus>Hello world !&#10;Here's a paper textarea tag.</textarea>
                    </div>
                </div>
            </div>
        )
    }
}
