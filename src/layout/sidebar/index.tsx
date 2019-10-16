import React from 'react';
import Navigation from '../../component/navigation';
import { Grid } from '@material-ui/core';
import StudioLogo from '../../component/navigation/logo';
import Logo from '../../static/images/studio.png'
import './style.scss'

type SidebarProps = {

}
const Sidebar: React.FunctionComponent<SidebarProps> = () => (
    <Grid className = 'sidebar' container justify='center'>
        <StudioLogo logo={Logo} />
        <Navigation />
    </Grid>


)

export default Sidebar;

