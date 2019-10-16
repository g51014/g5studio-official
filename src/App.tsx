import React from 'react';
import { Route } from 'react-router-dom'
import './App.scss';
import Home from './page/home';
import Teachers from './page/teachers';
import Navigation from './component/navigation';
import Grid from '@material-ui/core/Grid';


const App: React.FC = () => {
  return (
    <div className="w-full h-full App">
      <Grid container direction ='row' alignItems = 'center' justify ='flex-start'>
        <Grid xs = {12} sm = {12} md = {12} lg = {12} item>
          <Navigation />
        </Grid>
        <Grid xs = {12} sm = {12} md = {12} lg = {12} item>
          <Route path="/" exact component={Home} />
          <Route path="/teachers" exact component={Teachers} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
