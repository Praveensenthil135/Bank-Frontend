import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState } from 'react'
import { Createaccount } from './Connect'

export const Accountform = () => {

    const [account, setAccount] = useState({
        "accountNumber": 0,
        "accountHoldername": "",
        "accountIfsccode": "",
        "accountBalance": 0.0,
        "accountHoldercontactno": 0,
        "accountHolderplace": "",
        "password": ""
    })

    const getinputvalues = (myvalues) => {
        const { name, value } = myvalues.target;
        setAccount((temp) => {
            return {
                ...temp,
                [name]: value,
            }
        })
    }

    const register = async () => {
        alert(JSON.stringify(account))
        const t = await Createaccount(account);
        window.location.assign("/")
    }
    return (
        <>
            <div className="container-fluid mt-2 ">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-0 col-sm-12 shadow-lg p-3 ">
                        <h1 className="text-primary text-uppercase fw-bolder text-center ">
                            <br></br>CREATE YOUR ACCOUNT</h1>
                        <p className='text-center text-light fw-bold'>Create an account to view and manage your transaction details</p>
                        <div className='container'>
                            <div className="form group mt-3">
                                <label className='text-light fw-bold'>ACCOUNT NUMBER</label>
                                <input type="number"
                                    name="accountNumber"
                                    className="form-control"
                                    onChange={getinputvalues}
                                    value={account.accountNumber}
                                />
                            </div>
                            <div className="form group mt-3 text-light fw-bold">
                                <label>ACCOUNT HOLDER NAME</label>
                                <input type="text"
                                    name="accountHoldername"
                                    className="form-control"
                                    placeholder='Enter your name'
                                    value={account.accountHoldername}
                                    onChange={getinputvalues}

                                />
                            </div>
                            <div className="form group mt-3 text-light fw-bold">
                                <label>IFSC CODE</label>
                                <input type="text"
                                    name="accountIfsccode"
                                    className="form-control"
                                    placeholder='Enter your IFSC Code'
                                    onChange={getinputvalues}
                                    value={account.accountIfsccode}
                                />
                            </div>
                            <div className="form group mt-3 text-light fw-bold">
                                <label>ACCOUNT BALANCE</label>
                                <input type="text"
                                    name="accountBalance"
                                    placeholder="0.0"
                                    className="form-control"
                                    onChange={getinputvalues}
                                    value={account.accountBalance}
                                />
                            </div>
                            <div className="form group mt-3 text-light fw-bold">
                                <label>PASSWORD</label>
                                <input type="text"
                                    name="password"
                                    className="form-control"
                                    placeholder='Enter your Password'
                                    onChange={getinputvalues}
                                    value={account.password}
                                />
                            </div>
                            <div className="form-group mt-3 text-light fw-bold">
                                <label>ACCOUNT HOLDER PLACE</label>
                                <select name="accountHolderplace"
                                    className="form-select mt-1"
                                    onChange={getinputvalues}
                                    value={account.accountHolderplace}>
                                    <option selected hidden>Select Bank Location</option>
                                    <option>RASIPURAM</option>
                                    <option>NAMAKKAL</option>
                                    <option>TIRUCHENGODE</option>
                                    <option>ELACHIPALAYAM</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="form group mt-3 text-light fw-bold">
                                <label>CONTACT NO</label>
                                <input type="text"
                                    name="accountHoldercontactno"
                                    className="form-control"
                                    onChange={getinputvalues}
                                    value={account.accountHoldercontactno}
                                />
                            </div>
                            <div className="row justify-content-around mt-4">
                                <button className="btn btn-outline-primary col-3 ms-3"
                                    onClick={register}  >SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}