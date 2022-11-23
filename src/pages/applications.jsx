import '../styles/home.css';
import '../styles/application.css';
import TopBar from '../components/topbar';
import Side from '../components/side';
import { Link } from 'react-router-dom';
import { FaBeer, FaCheck, FaCheckCircle, FaSpinner, FaTimes, FaTimesCircle } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Applications() {

  const accessToken = JSON.parse(localStorage.getItem("API_TOKEN")).access_token;
  const [requests, setRequests] = useState([]);
  const [gnd, setGnd] = useState('gnd');

  function updateStatus(status){
    console.log(status);
  }

  useEffect(()=>{

    const getUserDetails = ()=>{
      return axios.get('',{
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        }
      })
    }

    const getRequestDetails = ()=>{
      return axios.get('https://7fa2c1a4-2bfc-4c58-899f-9569c112150b-prod.e1-us-east-azure.choreoapis.dev/ddrq/gramaconnect/1.0.0/getrequests?',{
        params: {
          'gnd': `${gnd}`
        },
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        }
      })
    }

    Promise.all([getUserDetails(),getRequestDetails()]).then(res=>{
      console.log(res)
      let requestdetails = res[1].data;
      console.log(requestdetails);
      setRequests(requestdetails);
    }).catch(err=>{
      console.log(err)
    })

  }
  ,[])

  return (
    <>
    <TopBar />
    <div className="app">
      <div className='content'>
        <div className='contentOne'>
          <div className='app-content'>
            <h2>Pending Applications</h2>
            {console.log(requests)}
              {(requests.length == 0) && ('No application requests found.')}
              {(requests.length != 0) && (
                <table border="1">
                <thead>
                <th>NIC or Passport No</th>
                <th>Name</th>
                <th>Address</th>
                <th>Address Proof</th>
                {/* <th>Identity Check</th>
                <th>Police Check</th> */}
                <th>Address Check</th>
                <th>Action</th>
              </thead>
                <tbody>
                  {requests.forEach(r=>(
                    <tr key={r.nic}>
                      <td>{r.nic}</td>
                      <td>{r.fullName}</td>
                      <td>{r.address}</td>
                      <td><Link to={r.image} target='_blank'>View</Link></td>
                      {/* <td>({r.idCheck})?<FaCheckCircle color='green'/> : <FaTimesCircle color='red'/></td>
                      <td>({r.policeCheck})?<FaCheckCircle color='green'/> : <FaTimesCircle color='red'/></td> */}
                      <td>
                        {(r.status === 'Accepted') && <FaCheckCircle color='green'/>}
                        {(r.status === 'Rejected') && <FaTimesCircle color='red'/>}
                        {(r.status === 'Pending') && <FaSpinner color='blue'/>}
                      </td>
                      <td className='action'>
                        <Link to="#" onClick={updateStatus('Accepted')}><FaCheck/></Link>
                        <Link to="#" onClick={updateStatus('Rejected')}><FaTimes/></Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
                </table>
              )}
              {/* <tr>
                <td>997682521V</td>
                <td>J.P.M.Thushari</td>
                <td>317, Carmel Mw, Palliyawatha, Wattala</td>
                <td><a href='/coverimg.jpg' target='_blank' className='viewButton'>View</a></td>
                <td><FaCheckCircle color='green'/></td>
                <td><FaTimesCircle color='red'/></td>
                <td><FaSpinner color='blue'/></td>
                <td className='action'><a><FaCheck/></a><a><FaTimes/></a></td>
              </tr>
              {/* <tr>
                <td>997682521V</td>
                <td>J.P.M.Thushari</td>
                <td>317, Carmel Mw, Palliyawatha, Wattala</td>
                <td><a href='https://res.cloudinary.com/dwb3ufwzf/image/upload/v1668753481/grama-app/Grama_app_g18lmj.png' target='_blank'>View</a></td>
                <td><FaCheckCircle color='green'/></td>
                <td><FaCheckCircle color='green'/></td>
                <td><FaSpinner color='blue'/></td>
                <td className='action'><a><FaCheck/></a><a><FaTimes/></a></td>
              </tr> */}
          </div>
          <Link to={"/"}>Back</Link>
        </div>
        {/* <div className='contentTwo'>
          <Side />
        </div> */}
      </div>
    </div>
    </>
  );
}