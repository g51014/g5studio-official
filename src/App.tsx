import React from 'react';
import { Route } from 'react-router-dom'
import './App.scss';
import Home from './page/home';
import Teachers from './page/teachers';
import Grid from '@material-ui/core/Grid';
import Sidebar from './layout/sidebar';


const App: React.FC = () => {
  return (
    <div className="App h-full">
      <Grid container direction ='row'  >
        <Grid item>
          <Sidebar />
        </Grid>
        <Grid item>
          <Route path="/" exact component={Home} />
          <Route path="/member" exact component={Teachers} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
