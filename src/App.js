import React from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Cryptocurrencies, CryptoDetails, Homepage, News, Exchanges } from './components';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <div className="navbar">
              <Navbar />
            </div>
            <div className="main">
              <Layout>
                <div className="routes">
                  <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/Cryptocurrencies" element={<Cryptocurrencies />} />
                    <Route path="/Exchanges" element={<Exchanges />} />
                    <Route path="/crypto/:coinId" element={ <CryptoDetails /> } />
                    <Route path="/News" element={<News />} />
                  </Routes>
                </div>
              </Layout>
    
             <div className="footer" >
              <Typography.Title level={5} style={{ color: 'white', textAlign: 'center'}}>
                CryptoCurrency Market Tracker <br />
                @All Rights Reserved
              </Typography.Title>
              <Space>
                <Link to="/">Home</Link>
                <Link to="/">Cryptocurrencies</Link>
              </Space>
             </div>
           </div>
        </div>
    )
}

export default App
