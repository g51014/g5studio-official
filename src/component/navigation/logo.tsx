import React from 'react';

type LogoProps = {
    logo: string,
    size?: string,

}

const StudioLogo: React.ComponentType<LogoProps> = ({ logo, size }) => (
    <div className='sidebar__Logo'>
        <img  style={{ width: size }} src={logo} />
        G5 Studio
    </div>


)

export default StudioLogo;