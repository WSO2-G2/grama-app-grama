import '../styles/home.css';
import '../styles/application.css';
import TopBar from '../components/topbar';
import Side from '../components/side';
import { Link } from 'react-router-dom';
import { FaBeer, FaCheck, FaCheckCircle, FaSpinner, FaTimes, FaTimesCircle } from 'react-icons/fa';

export default function Applications() {


  return (
    <>
    <TopBar />
    <div className="app">
      <div className='content'>
        <div className='contentOne'>
          <div className='app-content'>
            <h2>Pending Applications</h2>
          <table border="1">
            <thead>
                <th>NIC or Passport No</th>
                <th>Name</th>
                <th>Address</th>
                <th>Address Proof</th>
                <th>Identity Check</th>
                <th>Police Check</th>
                <th>Address Check</th>
                <th>Action</th>
            </thead>
            <tbody>
              <tr>
                <td>997682521V</td>
                <td>J.P.M.Thushari</td>
                <td>317, Carmel Mw, Palliyawatha, Wattala</td>
                <td><a href='/coverimg.jpg' target='_blank'>View</a></td>
                <td><FaCheckCircle color='green'/></td>
                <td><FaTimesCircle color='red'/></td>
                <td><FaSpinner color='blue'/></td>
                <td className='action'><a><FaCheck/></a><a><FaTimes/></a></td>
              </tr>
              <tr>
                <td>997682521V</td>
                <td>J.P.M.Thushari</td>
                <td>317, Carmel Mw, Palliyawatha, Wattala</td>
                <td><a href='/coverimg.jpg' target='_blank'>View</a></td>
                <td><FaCheckCircle color='green'/></td>
                <td><FaCheckCircle color='green'/></td>
                <td><FaSpinner color='blue'/></td>
                <td className='action'><a><FaCheck/></a><a><FaTimes/></a></td>
              </tr>
            </tbody>
          </table>
          </div>
          <Link to={"/"}>Back</Link>
        </div>
        <div className='contentTwo'>
          <Side />
        </div>
      </div>
    </div>
    </>
  );
}