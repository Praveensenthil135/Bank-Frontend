import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState } from 'react'
import { Loginprocess } from './Connect';
import { Accountform } from './CreateAccount';

export const Loginpage = () => {

    const [createpage, setCreatepage] = useState(false);
    const [loginuser, setLoginuser] = useState({
        "accountHoldername": "",
        "password": ""
    })
    const getinputvalues = (myvalues) => {
        const { name, value } = myvalues.target;
        setLoginuser((temp) => {
            return {
                ...temp,
                [name]: value,
            }
        })
    }

    const open = async () => {
        // alert(JSON.stringify(loginuser));
        await Loginprocess(loginuser)
        window.location.assign("/")
    }
    
    return (
        <>
            {
                (createpage) ?
                    <>
                        <Accountform />
                    </>
                    :
                    <>
                       <div className='row justify-content-center mt-5' style={{width:'1350px'}}>
                            <div className='col-4 mt-5'>
                                <div className='card mt-4' style={{ 
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                    borderRadius: '10px', 
                                    backdropFilter: 'blur(10px)',
                                    
                                    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)' }}>
                                    <h4 className='text-center mt-5  fw-bold text-light'>
                                        WELCOME TO ZEALOUS BANK</h4>
                                    <div className='form-group ms-4 mt-2 me-3'>
                                        <label className='form-label'>Username</label>
                                        <input className='form-control'
                                            type='text'
                                            name="accountHoldername"
                                            onChange={getinputvalues}
                                            value={loginuser.accountHoldername} />
                                    </div>
                                    <div className='form-group ms-4 mt-2 me-3'>
                                        <label className='form-label'>Password</label>
                                        <input className='form-control'
                                            type='password'
                                            name="password"
                                            onChange={getinputvalues}
                                            value={loginuser.password} />
                                    </div>
                                    <div className='row justify-content-center mt-4 mb-1'>
                                        <button className='btn btn-primary col-5 '
                                            onClick={open}>
                                            LOGIN
                                        </button>
                                    </div>
                                    <div class="d-flex justify-content-around align-items-center mb-4 mt-3">
                                      <p> Don't have an account? <a className='ms-2 fw-bold text-light'
                                            onClick={() => {
                                                setCreatepage(true);
                                            }
                                            }>New user</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </>
    )
}