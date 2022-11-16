import '../styles/home.css';
import TopBar from '../components/topbar';
import Side from '../components/side';
// import { Link } from "react-router-dom";

export default function Applications() {


  return (
    <>
    <TopBar />
    <div className="home">
      <div className='content'>
        <div className='contentOne'>
        <p style={{"fontSize":"10"}}>
          <table>
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
          </table>
          </p>
        </div>
        <div className='contentOne'>
          <Side />
        </div>
      </div>
    </div>
    </>
  );
}