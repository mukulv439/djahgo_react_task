import React, { useEffect } from 'react'
import useAuth from '../hooks/useAuth'
import useUser from '../hooks/useUser';

export default function Home() {
    const { user } = useAuth();
    const getUser = useUser()

    useEffect(() => {
        getUser()
    }, [])
 
    return (
        <div className='container mt-3'>
            <h2>
                <div className='row'>
                    <div className="mb-12">
                        {user?.user_data?.email !== undefined ? 'List user Ethereum balance' : 'Please login first'}
                    </div>
                    {user?.user_data ? (
                <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Wallet</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{user.user_data.first_name || 'N/A'}</td>
                                <td>{user.user_data.email || 'N/A'}</td>
                                <td>{user.wallet?.eth_balance ?? '0.00'}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-muted">No user data available.</p>
            )}
                </div>
            </h2>
        </div>
    )
}
