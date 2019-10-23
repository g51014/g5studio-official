import React from 'react';
import Navigation from '../../component/navigation';
import { Grid } from '@material-ui/core';
import StudioLogo from '../../component/navigation/logo';
import Logo from '../../static/images/studio.png'
import './style.scss'

type SidebarProps = {
    path: string
}
const Sidebar: React.FunctionComponent<SidebarProps> = ({path}) => (
    <Grid className='sidebar' container direction = 'column' justify='flex-start'>
        <Grid item >
            <StudioLogo logo={Logo} />
        </Grid>
        <Grid item>
            <Navigation path ={path}/>
        </Grid>

    </Grid>


)

export default Sidebar;

