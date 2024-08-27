import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Findoneuser, Listalltransactions } from './Connect'
import { useEffect, useState } from 'react'

export const AllTransactions = () => {

    const [account, setAccount] = useState({
        "accountNumber": 0,
        "accountHoldername": "",
        "accountIfsccode": "",
        "accountBalance": 0.0,
        "accountHoldercontactno": 0,
        "accountHolderplace": "",
        "password": ""
    })
    const setaccount = async () => {
        const t = await Findoneuser();
        setAccount(t.data);

    }
    useEffect(() => {
        setaccount();

    }, [])

    const [alltransactions, setAlltransactions] = useState([{}]);

    const mytransactiondetails = async () => {
        const t = await Listalltransactions(account.accountNumber);
        setAlltransactions(t.data);
        alert(JSON.stringify(t.data));
    }

    return (
        <>
            <div className="container mt-2" >
                <div className="row justify-content-center">
                    <button className='col-5 btn btn-dark fw-bold'
                        onClick={() => {
                            mytransactiondetails();
                        }
                        }>SHOW TRANSACTIONS</button><br/>
                    <div className="table-responsive-md mt-2" style={{ overflowX: 'auto' }}>
                        <table className=" table table-striped table-primary">
                            <thead>
                                <tr>
                                    <th>TRANSACTION NO</th>
                                    <th>TRANSACTION TYPE</th>
                                    <th>CURRENT BALANCE</th>
                                    <th>TRANSACTION AMOUNT</th>
                                    <th>TRANSACTION HOLDER A/C NUMBER</th>
                                    <th>TRANSACTION DATE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    alltransactions.map((datas) => (
                                        <tr>
                                            <td>{datas.transactionNumber}</td>
                                            <td>{datas.transactionType}</td>
                                            <td>{datas.currentBalance}</td>
                                            <td>{datas.transactionAmount}</td>
                                            <td>{datas.transactionHolderNumber}</td>
                                            <td>{datas.transactionDate}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}