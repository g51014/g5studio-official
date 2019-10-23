import React from 'react';

type LogoProps = {
    logo: string,
    size?: string,

}

const StudioLogo: React.ComponentType<LogoProps> = ({ logo, size }) => (
    <div className='sidebar__Logo w-full'>
        <a href="/"><img style={{ width: size }} src={logo} /></a>
    </div>


)

export default StudioLogo;