// import '../styles/home.css';
import '../styles/application.css';
import TopBar from '../components/topbar';
import Side from '../components/side';
import { Link, useHistory } from 'react-router-dom';
import { FaBeer, FaCheck, FaCheckCircle, FaSpinner, FaTimes, FaTimesCircle } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
const FormData = require('form-data');

export default function Applications() {

  const accessToken = JSON.parse(localStorage.getItem("API_TOKEN")).access_token;
  const [requests, setRequests] = useState([]);
  const [gnd, setGnd] = useState('gnd');
  const history = useHistory();

  if(!localStorage.getItem('state')){
    history.push('/');
  }

  const updateStatus = (data, status)=>{
    console.log(data)
    console.log(status);
    const phone = '+94717754881'

    const form = new FormData();
    form.append('status', status);

    // try{
    //   axios.post(
    //     'https://7fa2c1a4-2bfc-4c58-899f-9569c112150b-prod.e1-us-east-azure.choreoapis.dev/ddrq/gramaconnect/1.0.0/',
    //     form,
    //     {
    //       params: {
    //           'nic': `${r.nic}`,
    //           'phone': '+94717754881'
    //       },
    //       headers: {
    //         'Authorization': `Bearer ${accessToken}`,
    //       },
    //       body: {
    //         'status' : `${status}`
    //       }
    //     }
    //   ).then((res)=>{
    //     console.log(res);
    //     Swal.fire({
    //       icon: 'success',
    //       title: `${status} Successfully`,
    //       text: 'Request status updated succesfully.',
    //     }).then(() => {
    //       window.location.href = "/applications"
    //     })
    //   })
    // }catch(err){
    //   console.log(err)
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Try Again',
    //     text: 'Error in updating the Request status.',
    //   }).then(() => {
    //     window.location.href = "/applications"
    //   })
    // }

    // const response = axios.post(
    //   'https://7fa2c1a4-2bfc-4c58-899f-9569c112150b-prod.e1-us-east-azure.choreoapis.dev/ddrq/gramaconnect/1.0.0/',
    //   form,
    //   {
    //     params: {
    //         'nic': 'nic',
    //         'phone': ' 94717754881'
    //     },
    //     headers: {
    //         ...form.getHeaders(),
    //         'API-Key': 'eyJraWQiOiJnYXRld2F5X2NlcnRpZmljYXRlX2FsaWFzIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI1YTlkODIwMC0wNTA4LTRkNTQtYmM0My0zN2U1MzhjMWM5MDJAY2FyYm9uLnN1cGVyIiwiaXNzIjoiaHR0cHM6XC9cL3N0cy5jaG9yZW8uZGV2OjQ0M1wvb2F1dGgyXC90b2tlbiIsImtleXR5cGUiOiJQUk9EVUNUSU9OIiwic3Vic2NyaWJlZEFQSXMiOlt7InN1YnNjcmliZXJUZW5hbnREb21haW4iOm51bGwsIm5hbWUiOiJncmFtYUNvbm5lY3QiLCJjb250ZXh0IjoiXC83ZmEyYzFhNC0yYmZjLTRjNTgtODk5Zi05NTY5YzExMjE1MGJcL2RkcnFcL2dyYW1hY29ubmVjdFwvMS4wLjAiLCJwdWJsaXNoZXIiOiJjaG9yZW9fcHJvZF9hcGltX2FkbWluIiwidmVyc2lvbiI6IjEuMC4wIiwic3Vic2NyaXB0aW9uVGllciI6bnVsbH1dLCJleHAiOjE2Njk4NDI1MjksInRva2VuX3R5cGUiOiJJbnRlcm5hbEtleSIsImlhdCI6MTY2OTc4MjUyOSwianRpIjoiM2JlMDdiZWQtMWM2YS00ODMwLWE5NDktMTdlZGY5ZjJkN2I4In0.dodYKvAheZZ6_dx1Kq8bDSr7kixRwuU-_B4uNY8OjxLEvHR7f6wjkVLzgY_yoD0_N0Rhbo5f6VHafrLu5OeeEx_emf76Oy2_gasK3QFO70HehZxyiOqVehgtoNSo_ziNXuFIk72b9S_PYyfEx_8qLy4iE6NjDFruBtDIS1HJ93n8ofxu_Yy-xJCW-utXLZlyLnHia_yP_PRi63mG39JaukikbGOVBVUwHnXBaRDmvCLnu7XsofogsFF7d8gRg5WhXtEsP9f5HHTYPdSFbV_Tv5tyfIDn9ttgX8C79PVYHFXSwRdSaenZCbKpmWwGbfm60KFB7a6soX1sCMKYvc9KS80feWi8P1l0ZH489Gd8KmMKAuYBXRCNw2VRbYS34kHGMIviJmr3F1IM9S-396WHUeo-a6FdVlrC2m-0KJLj2h1tAN888Eh8uKn_DbhIdK_iAbQ6UE93UijYCFhmK3PzUTH0kV_uAQDzQZ5zJcSoEpMXBQg4dVYe1CqrMQYgVqPiy1GxByDB9Vkxp_EXA9vOdA9omCiIcO2YjbxwmecashnjBlQpkBPHq4RhBa1FiZW9n4mC_7o8_G6ZoW0iyIRaJVDkkeyNiEhGigU5gMCJ2vJoCz4YLK7x9MO4Dobvxn_DEPPJOdH31uJkpsbHxlXJOB1CJgroISCeZxNMxbakVIw',
    //         'Content-Type': 'application/json'
    //     }
    //   }
    // );

  }

  useEffect(()=>{

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

    Promise.all([getRequestDetails()]).then(res=>{
      console.log(res)
      let requestdetails = res[0].data;
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
              {(requests.length === 0) && ('No application requests found.')}
              {(requests.length !== 0) && (
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
                  {requests.map(r=>(
                    <tr key={r.nic}>
                      <td>{r.nic}</td>
                      <td>{r.name}</td>
                      <td>{r.address}</td>
                      <td><Link to={r.image} target='_blank' className='viewButton'>View</Link></td>
                      {/* <td>({r.idCheck})?<FaCheckCircle color='green'/> : <FaTimesCircle color='red'/></td>
                      <td>({r.policeCheck})?<FaCheckCircle color='green'/> : <FaTimesCircle color='red'/></td> */}
                      <td>
                        {(r.status === 'Accepted') && <FaCheckCircle color='green'/>}
                        {(r.status === 'Rejected') && <FaTimesCircle color='red'/>}
                        {(r.status === 'Pending') && 'Pending'}
                      </td>
                      <td className='action'>
                        <div  className='tableDiv'>
                        <Link to="#"  onClick={() => updateStatus(r,'Accepted')} className='accepttag'><FaCheck/></Link>
                        <Link to="#"  onClick={() =>updateStatus(r,'Rejected')} className='rejectR'><FaTimes/></Link>
                        </div>
                       
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