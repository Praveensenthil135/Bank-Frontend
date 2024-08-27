import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useEffect, useState } from 'react'
import { Createaccount, Findoneuser } from './Connect'

export const Updateform = () => {

    const [account, setAccount] = useState({
        "accountNumber": 0,
        "accountHoldername": "",
        "accountIfsccode": "",
        "accountBalance": 0.0,
        "accountHoldercontactno": 0,
        "accountHolderplace": "",
        "password": ""
    })

    const gettingvalues = async () => {
        const t = await Findoneuser();
        setAccount(t.data);
    };

    useEffect(() => {
        gettingvalues();

    }, [])

    const getinputvalues = (myvalues) => {
        const { name, value } = myvalues.target;
        setAccount((temp) => {
            return {
                ...temp,
                [name]: value,
            }
        })
    }
    const update = async () => {
        const t = await Createaccount(account);
        const credential = account.accountHoldername + ":" + account.password;
        const token = btoa(credential);
        sessionStorage.setItem("loginuser", token);
        sessionStorage.setItem("accountsecurity", account.accountHoldername)
        window.location.assign("/")
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-0 col-sm-12 shadow-lg p-3 ">
                        <h1 className="text-primary text-uppercase fw-bolder text-center ">
                            <br></br>EDIT YOUR ACCOUNT</h1>
                        <p className='text-center text-light fw-bold'>Replace an account  to view and  manage your transaction details</p>
                        <div className='container'>
                            <div className="form group mt-3 text-light fw-bold">
                                <label>ACCOUNT NUMBER</label>
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
                                    value={account.accountHoldername}
                                    onChange={getinputvalues}

                                />
                            </div>
                            <div className="form group mt-3 text-light fw-bold">
                                <label>IFSC CODE</label>
                                <input type="text"
                                    name="accountIfsccode"
                                    className="form-control"
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
                                    <option selected hidden>Select BANK LOCATION</option>
                                    <option>RASIPURAM</option>
                                    <option>NAMAKKAL</option>
                                    <option>TIRCHENGODE</option>
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
                                <button className="btn btn-primary col-3 ms-3"
                                    onClick={update}>UPDATE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}