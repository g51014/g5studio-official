import React from 'react';
import { Route } from 'react-router-dom'
import Teachers from './teachers';
import Home from './home';
type PageProps = {

}
const Page: React.ComponentType<PageProps> = () => (
    <>
        <Route path="/" exact component={Home} />
        <Route path="/member" exact component={Teachers} />
    </>
)

export default Page;