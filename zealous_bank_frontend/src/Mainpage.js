import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Button, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Deleteaccount, Findoneuser } from './Connect';
import { useEffect, useState } from 'react';

export let Homepage = () => {
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

    return (
        <>
            <Navbar className='container-fluid' expand='lg' variant='dark' bg='dark'>
                <div className='container'>
                    <Navbar.Brand className='fw-bold'>ZEAL<span className='text-primary'>OUS</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse >
                        <Nav >
                            <Nav.Link href="/yourinfo">ACCOUNT  DETAILS</Nav.Link>
                            <Nav.Link href="/updateprofile">EDIT PROFILE</Nav.Link>
                            <NavDropdown title="TRANSACTION DETAILS" >
                                <NavDropdown.Item href="/createtransaction">NEW TRANSACTION</NavDropdown.Item>
                                <NavDropdown.Item href="/yourtransactiondetails">
                                    LIST ALL TRANSACTION
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav className="ms-auto d-flex align-items-center">
                            <Button className="btn btn-primary ms-2"
                                onClick={() => {
                                    sessionStorage.removeItem("loginuser");
                                    sessionStorage.removeItem("accountsecurity");
                                    window.location.assign("/");
                                }
                                }> PLUG OUT </Button>
                            <Button className="btn btn-danger ms-2"
                                onClick={
                                    async () => {
                                        const t = await Deleteaccount(account.accountNumber);
                                        sessionStorage.removeItem("loginuser");
                                        sessionStorage.removeItem("accountsecurity");
                                        window.location.assign("/");
                                    }
                                }>REMOVE ACCOUNT</Button>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </>
    );
}