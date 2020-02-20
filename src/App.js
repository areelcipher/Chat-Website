import React from 'react';

import {Link} from 'react-router-dom'
import Navbar from './navbar/Navbar'

import './App.css';

function App() {
  return (
      <div>
        <Navbar />
          <div className="row" id={'card'}>
              <div className="col s12 m6">
                  <div className="card green lighten-1 darken-1" >
                      <div className="card-content white-text">
                          <p className={'areel flow-text'}>Areel Chat is a platform that connects you to your old and prospective friends. We've got a lot of goodies packaged for you, if you understand what I'm driving. <br /><br /> Sign up already, and feel the groove... Winks :)</p>
                      </div>
                      <div className="card-action">
                          <Link to="/signup"><a className={'orange-text'}>Sign Up Here</a></Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
