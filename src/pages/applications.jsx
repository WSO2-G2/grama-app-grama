// import '../styles/home.css';
import '../styles/application.css';
import TopBar from '../components/topbar';
import Side from '../components/side';
import { Link, useHistory } from 'react-router-dom';
import { FaBeer, FaCheck, FaCheckCircle, FaSpinner, FaTimes, FaTimesCircle } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'

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
    let updated = requests.filter((e) => e.nic != data.nic);
    setRequests(updated);
    console.log(updated)

    // try{
    //   axios.patch(
    //     'https://7fa2c1a4-2bfc-4c58-899f-9569c112150b-prod.e1-us-east-azure.choreoapis.dev/ddrq/gramaconnect/1.0.0/updateStatus',
    //     {
    //       'status' : `${status}`
    //     },
    //     {
    //       params: {
    //           'nic': `${data.nic}`,
    //           'phone': '+94717754881'
    //       },
    //       headers: {
    //         'Authorization': `Bearer ${accessToken}`,
    //       }
    //     }
    //   ).then((res)=>{
    //     console.log(res);
    //     let updated = requests.filter((e) => e.nic != data.nic);
    //     setRequests(updated);
    //     Swal.fire({
    //       icon: 'success',
    //       title: `${status} Successfully`,
    //       text: 'Request status updated succesfully.',
    //     }).then(() => {
    //       window.location.href = "/applications"
    //     })
    //   })
    // }catch(err){
    //   console.log(err);
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Try Again',
    //     text: 'Error in updating the Request status.',
    //   }).then(() => {
    //     window.location.href = "/applications"
    //   })
    // }

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
            <Link to={"/"} style={{alignSelf:'self-end'}}>Back</Link>
              {(requests.length === 0) && ('No application requests found.')}
              {(requests.length !== 0) && (
                <table border="1">
                <thead>
                <th>NIC or Passport No</th>
                <th>Name</th>
                <th>Address</th>
                <th>Address Proof</th>
                <th>Address Check</th>
                <th>Action</th>
              </thead>
                <tbody>
                  {requests.map(r=>(
                    <tr key={r.nic}>
                      <td>{r.nic}</td>
                      <td>{r.name}</td>
                      <td>{r.address}</td>
                      <td><a href={r.image} target='_blank' className='viewButton'>View</a></td>
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
          </div>
        </div>
        {/* <div className='contentTwo'>
          <Side />
        </div> */}
      </div>
    </div>
    </>
  );
}