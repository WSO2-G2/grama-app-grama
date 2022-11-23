import '../styles/home.css';
import TopBar from '../components/topbar';
import Side from '../components/side';
import { Link } from "react-router-dom";
import { useEffect } from 'react';

import axios from 'axios';

export default function Home() {

  return (
    <>
    <TopBar />
    <div className="home">
      <div className='content'>
        <div className='contentOne'>
          <p>Welcome!, Manage & Approve the Grama Certificate applications in a flash</p>
          {/* <a href="/options">Go &rarr;</a> */}
          <Link to={"/applications"}>Get Started &rarr;</Link>
        </div>
        <div className='contentTwo'>
          <Side />
        </div>
      </div>
    </div>
    </>

   
  );
}