import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space, Avatar } from 'antd';
const App = () => {
    return (
        <div className='app'>
            <div className='navbar'>
                <Avatar src />
                <Typography.Title level={2} className='logo'>
                    <Link to="/">
                        Cryptoverse
                    </Link>
                </Typography.Title>

                {/* <Button className='menu-control-container'>

                </Button> */}
            </div>
            <div className='main'>

            </div>
            <div className='footer'>

            </div>
        </div>
    )
}

export default App