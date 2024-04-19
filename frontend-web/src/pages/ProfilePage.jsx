import React from 'react'
import { useSelector } from 'react-redux'
import COLORS from '../components/colors';


const Dashboard = () => {

    const { userInfo } = useSelector((state) => state.auth)


    return (
        <div className="header-container">
            <h1 className="header-message">Welcome, {userInfo.first_name}</h1>
                <div className="image-container">
                    <img src="https://i.pinimg.com/originals/45/98/a5/4598a55e2ed5c0f8a0d7680695f6c7a1.gif" alt="GIF" className="gif-image" />
                </div>
        </div>
    )
}

export default Dashboard