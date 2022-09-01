import React, { Component } from 'react'
import "./lotto.css";

export default class Lotto extends Component {
    constructor() {
        super();
        this.state = {
            history: [],
            numbers: [],
            current: "",
            animate: "fadeInRight"
        };
    }

    componentDidMount() {
        let numbers = [];
        Array.from(Array(90).keys()).map(item => {
            numbers.push({ value: item + 1, checked: false });
        })
        this.setState({ numbers });
    }

    getNumber = () => {
        let { numbers, history, current, animate } = this.state;
        if (history.length >= 90) {
            return false;
        }
        const random = Math.floor(Math.random() * numbers.filter(f => !f.checked).length);
        const randomElement = numbers.filter(f => !f.checked)[random];
        numbers.filter(f => !f.checked)[random].checked = true;
        history[history.length] = randomElement.value;
        this.setState({
            current: randomElement.value,
            history,
            numbers,
            animate: animate === "fadeInLeft" ? "fadeInRight" : "fadeInLeft"
        })
    }

    render() {
        const { numbers, history, current, animate } = this.state;
        return (
            <div>
                <h1 className='mt-5'><a className='theext' href='/'>khalili.az</a> <span className='tw-text-gray-500'>-</span> Lotereya</h1>
                <button type="button" id="generate" onClick={() => this.getNumber()}>Qorxmaz Əlili</button>
                {current && <div className='flx-row tw-justify-center'>
                    <div className={`animated ${animate} tw-bg-white tw-w-24 tw-h-24 flx-row tw-justify-center tw-items-center tw-text-6xl tw-font-semibold tw-text-orange-600 tw-rounded-full tw-border-4 tw-border-orange-600`}>{current}</div>
                </div>}
                <div className="position floatfix">
                    <div id="history">
                        <p>{history.join(", ")}</p>
                    </div>
                    <div className="wrapper">
                        {numbers.map((item, key) => <p className={`ball ${item.checked && 'activeBall'}`} key={key}>{item.value}</p>)
                        }
                    </div>
                </div>
            </div>
        )
    }
}
