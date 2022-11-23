// import logo from '../logo.svg';
import '../styles/topbar.css'
import { useAuthContext } from "@asgardeo/auth-react";
import { useEffect, useState } from 'react';


export default function TopBar() {

  const {
    state,
    signIn,
    signOut,
    getBasicUserInfo,
    getIDToken,
    getDecodedIDToken,
    on
  } = useAuthContext();

  const [derivedAuthenticationState, setDerivedAuthenticationState] = useState(null);


  useEffect(() => {

    if (!state?.isAuthenticated) {
      return;
    }

    (async () => {
      const basicUserInfo = await getBasicUserInfo();
      const idToken = await getIDToken();
      const decodedIDToken = await getDecodedIDToken();

      const derivedState = {
        authenticateResponse: basicUserInfo,
        idToken: idToken.split("."),
        decodedIdTokenHeader: JSON.parse(atob(idToken.split(".")[0])),
        decodedIDTokenPayload: decodedIDToken
      };

      console.log(derivedState);

      setDerivedAuthenticationState(derivedState);

      // Exhange idToken for API token using STS in Choreo
      fetch("https://sts.choreo.dev/oauth2/token", {
        body: "grant_type=urn:ietf:params:oauth:grant-type:token-exchange&subject_token=" + idToken + "&subject_token_type=urn:ietf:params:oauth:token-type:jwt&requested_token_type=urn:ietf:params:oauth:token-type:jwt",
        headers: {
          Authorization: "Basic VmhnbjEzMXI4Y0lnRjNTeGFlYlFzdnZJMnlBYTppZDFTVmI5WW5XNG4xUzM5cUpLRUhpU08wX1Vh",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST"
      })
        .then((response) => response.json())
        .then((resJson) => localStorage.setItem("API_TOKEN", JSON.stringify(resJson)))
        .catch((err) => { console.log("acess token failed!!"); console.log(err) })

    })();
  }, [state.isAuthenticated]);

  return (
    <div className='topBar'>
      <div className='topLeft'>
        <h2>Grama App</h2>
      </div>
      <div className="topRight">
        <ul className='topList'>
          {
            state.isAuthenticated
              ? (
                <div>
                  <ul>
                    <li><span>{state.username} </span><span> <button onClick={() => signOut()}>Logout</button></span></li>
                   
                  </ul>
                 
                  {/* <ul>
                    <button onClick={() => signOut()}>Logout</button>
                  </ul> */}


                </div>
              )
              : <button onClick={() => { signIn().then(res => console.log(res)) }} className='loginbutoon'>Login</button>
          }
        </ul>
      </div>
    </div>
  );
}
