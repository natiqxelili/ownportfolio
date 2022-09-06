import React, { Component } from 'react';
import "./domino.css";
import { HiOutlineUserAdd } from "react-icons/hi"
import { FiEdit3, FiTrash2, FiSave } from "react-icons/fi"
import { ImUndo2 } from "react-icons/im"
import { toast } from 'react-toastify';


export default class Domino extends Component {
    constructor() {
        super();
        this.state = {
            playerCount: 2,
            players: [
                {
                    name: "Player 1",
                    point: 0,
                    edit: false,
                    pointHistory: []
                },
                {
                    name: "Player 2",
                    point: 0,
                    edit: false,
                    pointHistory: []
                }
            ]
        };
    }

    editPlayer = (player) => {
        let { players } = this.state;
        const index = players.indexOf(player);
        if (index > -1) {
            players[index].edit = true;
            this.setState({
                players
            })
        }
    }

    savePlayer = (player) => {
        let { players } = this.state;
        const index = players.indexOf(player);
        if (index > -1) {
            players[index].edit = false;
            this.setState({
                players
            })
        }
    }

    changePlayerCount = (num, player) => {
        let { playerCount, players } = this.state;
        const result = playerCount + num;
        if (result < 2 || result > 4) {
            toast.error("Oyunçu sayı ən az 2, maksimum 4 nəfər olmalıdır!")
            return false;
        }
        if (num == 1) {
            players[playerCount] = {
                name: "New Player",
                point: 0,
                edit: false,
                pointHistory: []
            }
        }
        if (num == -1) {
            const index = players.indexOf(player);
            if (index > -1) {
                players.splice(index, 1);
            }
        }
        this.setState({
            playerCount: result,
            players
        })
    }

    handleChange = (e, index) => {
        e.preventDefault();
        let { players } = this.state;
        players[index] = {
            ...players[index],
            name: e.target.value
        }
        this.setState({
            players
        })
    }

    addPoint = (index, newPoint) => {
        let { players } = this.state;
        players[index] = {
            ...players[index],
            point: players[index].point + Number(newPoint),
            pointHistory: [...players[index].pointHistory, Number(newPoint)]
        }
        this.setState({
            players
        })
    }

    undoPoint = (index) => {
        let { players } = this.state;
        if (players[index].pointHistory.length <= 0) {
            return false;
        }
        let lastPoint = players[index].pointHistory.pop();
        players[index] = {
            ...players[index],
            point: players[index].point - lastPoint
        }
        this.setState({
            players
        })
    }

    renderPlayer = (index) => {
        const { playerCount, players } = this.state;
        return <div className={`col-${12 / playerCount}`}>
            <div className='flx-column'>
                {players[index].edit ? <div className='flx-row tw-items-center'>
                    <form className='tw-w-full flx-row tw-items-center' onSubmit={() => { this.savePlayer(players[index]) }}>
                        <input className='form-control form-control-sm text-center tw-border-0 border-ol' onChange={e => this.handleChange(e, index)} value={players[index].name}></input><button className='tw-bg-white py-1 px-2 border-or' type='submit' ><FiSave size={23} className="tw-text-green-600" /></button>
                    </form>
                </div>
                    : <div className='row mx-0 tw-bg-white tw-rounded py-1'>
                        <div className='col-md-auto tw-overflow-y-auto'>{players[index].name || "New Player"}</div>
                        <div className='col flx-row tw-justify-end tw-items-center my-1'>
                            <FiEdit3 size={20} className="tw-text-orange-600 mx-1 tw-cursor-pointer svgIcon" onClick={() => this.editPlayer(players[index])} />
                            <FiTrash2 size={20} className="tw-text-red-600 mx-1 tw-cursor-pointer svgIcon" onClick={() => this.changePlayerCount(-1, players[index])} />
                        </div>
                    </div>
                    // <div className='flx-column tw-justify-center tw-bg-white px-2 py-1 tw-rounded tw-border tw-border-gray-300'>
                    //     <div className='row mx-0 tw-justify-center tw-overflow-y-auto'>{players[index].name || "Player 1"}</div>
                    //     <div className='row mx-0 tw-m-auto mt-2 tw-justify-center'>
                    //         <FiEdit3 size={20} className="tw-text-orange-600 mx-1 tw-cursor-pointer svgIcon" onClick={() => this.editPlayer(players[index])} />
                    //         <FiTrash2 size={20} className="tw-text-red-600 mx-1 tw-cursor-pointer svgIcon" onClick={() => this.changePlayerCount(-1, players[index])} />
                    //     </div>
                    // </div>
                }
                <div className='row mt-2 mx-0'>
                    <div className={`col-${playerCount == 2 ? '2 pl-0 pr-1' : playerCount == 3 ? '4 pl-0 pr-1' : '6 pl-0 pr-1'} mt-1 flx-row`}><span className='tw-flex-1 py-1 tw-bg-yellow-300 tw-border tw-border-red-700 tw-text-red-700 tw-font-bold tw-rounded tw-text-2xl tw-cursor-pointer' onClick={() => this.addPoint(index, 5)}>+5</span></div>
                    <div className={`col-${playerCount == 2 ? '2 px-1' : playerCount == 3 ? '4 px-1' : '6 pr-0 pl-1'} mt-1 flx-row`}><span className='tw-flex-1 py-1 tw-bg-yellow-300 tw-border tw-border-red-700 tw-text-red-700 tw-font-bold tw-rounded tw-text-2xl tw-cursor-pointer' onClick={() => this.addPoint(index, 10)}>+10</span></div>
                    <div className={`col-${playerCount == 2 ? '2 px-1' : playerCount == 3 ? '4 pr-0 pl-1' : '6 pl-0 pr-1'} mt-1 flx-row`}><span className='tw-flex-1 py-1 tw-bg-yellow-300 tw-border tw-border-red-700 tw-text-red-700 tw-font-bold tw-rounded tw-text-2xl tw-cursor-pointer' onClick={() => this.addPoint(index, 15)}>+15</span></div>
                    <div className={`col-${playerCount == 2 ? '2 px-1' : playerCount == 3 ? '4 pl-0 pr-1' : '6 pr-0 pl-1'} mt-1 flx-row`}><span className='tw-flex-1 py-1 tw-bg-yellow-300 tw-border tw-border-red-700 tw-text-red-700 tw-font-bold tw-rounded tw-text-2xl tw-cursor-pointer' onClick={() => this.addPoint(index, 20)}>+20</span></div>
                    <div className={`col-${playerCount == 2 ? '2 px-1' : playerCount == 3 ? '4 px-1' : '6 pl-0 pr-1'} mt-1 flx-row`}><span className='tw-flex-1 py-1 tw-bg-yellow-300 tw-border tw-border-red-700 tw-text-red-700 tw-font-bold tw-rounded tw-text-2xl tw-cursor-pointer' onClick={() => this.addPoint(index, 25)}>+25</span></div>
                    <div className={`col-${playerCount == 2 ? '2 pr-0 pl-1' : playerCount == 3 ? '4 pr-0 pl-1' : '6 pr-0 pl-1'} mt-1 flx-row`}><span className='tw-flex-1 py-1 tw-bg-blue-100 tw-border-2 tw-border-blue-700 tw-text-blue-700 tw-font-bold tw-rounded flx-row tw-justify-center tw-items-center tw-cursor-pointer' onClick={() => this.undoPoint(index)}><ImUndo2 size={20} /></span></div>
                </div>
                <div className='flx-row tw-justify-center tw-items-center mt-3 mx-0'>
                    <div className={`${players[index].point < 225 ? 'tw-bg-red-300' : players[index].point >= 365 ? 'tw-bg-green-300' : 'tw-bg-blue-100'} tw-text-6xl min-vw-40 px-2 py-1 tw-border-2 tw-border-dashed tw-border-blue-700 tw-text-blue-700 tw-font-semibold tw-select-none`}>{players[index].point}</div>
                </div>
                <label className='tw-text-left mt-2 mb-1 tw-text-blue-900 tw-font-bold tw-text-2xl'>Tarixçə</label>
                <div className='paperArea px-3 py-2 tw-text-red-700 tw-font-bold'>{players[index].pointHistory.join(", ")}</div>
            </div>
        </div>
    }

    render() {
        const { playerCount } = this.state;
        return (
            <div>
                <div className='mt-3 tw-text-6xl tw-text-center'><a className='theext' href='/'>khalili.az</a> <span className='tw-text-gray-500'>-</span> Domino</div>
                <div className='flx-row'>
                    <button className='flx-row tw-items-center tw-text-lg tw-bg-orange-500 tw-text-white px-2 py-2px tw-border tw-border-white tw-rounded mx-4 hover:tw-bg-orange-300 hover:tw-text-gray-900 tw-cursor-pointer' onClick={() => this.changePlayerCount(1)}><HiOutlineUserAdd size={20} className="mr-1" />Oyunçu əlavə et</button>
                </div>
                <div className='row mt-3 mx-2 tw-text-center'>
                    {this.renderPlayer(0)}
                    {this.renderPlayer(1)}
                    {playerCount > 2 && this.renderPlayer(2)}
                    {playerCount > 3 && this.renderPlayer(3)}
                </div>
            </div >
        )
    }
}
