import React, { useMemo, useState } from 'react';
import '../../App.css';
import axios from 'axios';
import { Input, Button,  Label, Sidebar, Icon, Tab, Modal, Checkbox, Dimmer, Loader  } from 'semantic-ui-react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';



// Rendering the Dashboard component 
const Dashboard = () => {
  
    const host = process.env.REACT_APP_HOST_IP;
    const port = process.env.REACT_APP_HOST_PORT;

    const formSubmit = async (e) => { 
        
    }

  return (
    <div>
  
    <header className='App' style={{marginTop:'5%'}}>
        <h1>React + Falsk Python - Dashboard</h1>
    </header>

    {/* Input form for GitHub url and toast message */}
      <div className='App'>
        <form onSubmit={formSubmit} method="post">
          <div className='input-url'>
            
                
          </div>
            
        </form>
        
      </div>

      {/* Rendering the two Ag-Grids */}
      <div className='left-rigt-ag-grid'>
            
      </div>

      {/* Rendering the Tabs */}
     
      
    </div>
  );
}

export default Dashboard;
