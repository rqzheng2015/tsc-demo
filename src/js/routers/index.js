/**
 * Created by rqzheng on 2017/2/19.
 */
import React from 'react';
import {Route} from 'react-router-dom';
import Page1 from '../pages/page1';
import Page2 from '../pages/page2';
import WelcomePage from '../pages/welcomePage';

export default class RouterContent extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={WelcomePage}/>
                <Route exact path="/welcomePage" component={WelcomePage}/>
                <Route path="/page1" component={Page1}/>
                <Route path="/page2" component={Page2}/>
            </div>
        )
    }
}
