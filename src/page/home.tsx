import React from 'react';

type HomeProps = {
    location?
}
class Home extends React.Component<HomeProps> {
    render() {
        console.log(this.props.location.pathname)
        return (
            <>
                Home
            </>
        )
    }
}

export default Home;

