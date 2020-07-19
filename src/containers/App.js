import React from 'react';
import './App.css';
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import store from '../store/index';
import { getState } from  'redux';
import _ from 'lodash';
 

function App() {
	const { contacts, user, activeUserId  } = store.getState();

  return (
    <div className="App">
      <Sidebar contacts = {_.values(contacts.contacts)}/>
      <Main user={user} activeUserId={activeUserId}/>
    </div>
  );
}

export default App;
