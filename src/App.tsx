import React from 'react';
import './App.scss';
import Grid from '@material-ui/core/Grid';
import Sidebar from './layout/sidebar';
import Page from './page';

type AppProps = {
  location?: any
}

type AppState = {
  width: number,
  height: number
}

class App extends React.Component <AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render() {
    console.log(this.props)
    return (
      <div className="App" style={{height: this.state.height}}>
        <Grid container direction='row' style = {{height: '100%'}} >
          <Grid item xs={3} md={1}>
            <Sidebar path = {this.props.location.pathname} />
          </Grid>
          <Grid item xs={9} md={11}>
            <Page />
          </Grid>
        </Grid>
      </div>
    );
  }

}

export default App;
