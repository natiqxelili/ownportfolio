import React from "react";
import { connect } from "react-redux";
import { modal } from "../../redux/actions/Common";
import Modal from "react-modal";
import * as Icon from "react-icons/fi";
import axios from "../../utils/axios";
import { confirmAlert } from 'react-confirm-alert';
import { toast } from "react-toastify";


class PasswordReset extends React.Component {

    state = {
        data: {}
    }

    async componentDidMount() { }

    handleChange = e => {
        const { value, name } = e.target;
        if (value) {
            if ((name === "password" || name === "repassword") && value.length < 5) {
                e.target.setCustomValidity('Şifrə minimum 5 xanadan ibarət olmalıdır!');

            }
            else {
                e.target.setCustomValidity('')
            }
        }

        this.setState({
            data: {
                ...this.state.data,
                [name]: value
            }
        });
    };

    updatePassword = (e) => {
        e.preventDefault();
        const { data } = this.state;
        if (data.password !== data.repassword) {
            toast.error('Şifrələr bir-birini təkrarlamır!');
            return;
        }
        const postData = {
            "userId": this.props.userID,
            "password": data.password,
            "confirmPassword": data.repassword
        }

        axios.patch('/User/resetPassword', postData)
            .then(async res => {
                toast.success("Şifrə yeniləndi!");
                this.props.modal("passwordReset", false)
            })
            .catch((error) => {
                toast.error(error.response.data)
            });
    }

    render() {
        const { data } = this.state;
        return <Modal
            isOpen={true}
            overlayClassName="tw-h-screen tw-flex tw-absolute tw-left-0 tw-top-0 tw-bg-modaloverlayDark tw-z-10 tw-w-full overflow-hidden py-5"
            className="animated zoomIn tw-m-auto tw-w-20rem tw-max-h-full tw-bg-white tw-outline-none tw-shadow-lg tw-relative tw-pb-2 tw-rounded-lg tw-overflow-y-auto px-3"
            onRequestClose={() => this.props.modal("passwordReset", false)}
        >
            <div className="tw-flex tw-items-center tw-justify-between tw-pt-2">
                <span className="tw-text-lg tw-block tw-font-medium tw-px-1 tw-flex tw-items-center tw-tracking-wide tw-rounded-t-sm tw-text-gray-600">
                    Şifrə yenilənməsi
                </span>
                <Icon.FiX
                    size={24}
                    className="tw-cursor-pointer tw-text-gray-600 hover:tw-text-gray-700"
                    onClick={() => this.props.modal("passwordReset", false)}
                />
            </div>
            <hr className='my-1 pb-2' />
            <form onSubmit={e => this.updatePassword(e)} className="tw-pb-3 tw-text-gray-700 tw-font-medium">
                <div className='form-group'>
                    <label>Şifrə</label>
                    <input type='password' className='form-control input-required' name='password'
                        value={data.password || ''} placeholder='********' onChange={e => this.handleChange(e)}
                        minLength={5}
                        required
                        onInvalid={e => e.target.setCustomValidity(!data.password ? 'Şifrə daxil edin!' : data.password.length < 5 ? 'Şifrə minimum 5 xanadan ibarət olmalıdır!' : '')}
                    />
                </div>
                <div className='form-group'>
                    <label>Şifrənin təkrarı</label>
                    <input type='password' className='form-control input-required' name='repassword' value={data.repassword || ''} placeholder='********' onChange={e => this.handleChange(e)}
                        minLength={5}
                        required
                        onInvalid={e => e.target.setCustomValidity(!data.repassword ? 'Şifrəni təkrar daxil edin!' : data.repassword.length < 5 ? 'Şifrə minimum 5 xanadan ibarət olmalıdır!' : '')}
                    />
                </div>
                <button type="submit" className="btn btn-success tw-w-full mt-2">Şifrəni yenilə</button>
            </form>
        </Modal>
    }
};

export default connect(
    ({ ...state }) => ({ state }),
    { modal }
)(PasswordReset);
