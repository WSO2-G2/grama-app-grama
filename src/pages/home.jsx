import '../styles/home.css';
import TopBar from '../components/topbar';
import Side from '../components/side';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import axios from 'axios'
export default function Home() {

  useEffect(()=>{
    const try1 = ()=>{
      return axios.get('https://ir-example.mir.prod.reco.microsoft.com/Reco/V1.0/New?modeling=adw&Count=5');
    }

    const try2 = ()=>{
      return axios.get('https://ir-example.mir.prod.reco.microsoft.com/Reco/V1.0/New?modeling=adw&Count=5');
    }

    try{
      Promise.all([try1,try2]).then(res=>{
        // console.log(accessToken);
        console.log(res);
      });
    }catch(err){
      // console.log(accessToken);
      console.log(err);
    }
  },[])

  return (
    <>
    <TopBar />
    <div className="home">
      <div className='content'>
        <div className='contentOne'>
          <p>Welcome!, Manage & Approve the Grama Certificate applications in a flash</p>
          {/* <a href="/options">Go &rarr;</a> */}
          <Link to={"/applications"}>Go &rarr;</Link>
        </div>
        <div className='contentTwo'>
          <Side />
        </div>
      </div>
    </div>
    </>
  );
}