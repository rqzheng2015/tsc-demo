/**
 * Created by rqzheng on 2017/8/2.
 */
import React from 'react';

//引入component
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            data: [],
            pagination: {},
            loading: false,
        };
    }

    render() {
        /* return (

             <Layout className="app-container">
                 <Sider
                     trigger={null}
                     collapsible
                     collapsed={this.props.collapsed}
                     style={{ minWidth: 100 }}
                 >
                     <Sidebar />
                 </Sider>
                 <Layout>
                     <NewHeader />
                     <Content style={{ padding: 16 }}>
                         {/!*路由字段*!/}
                         <RouterContent />
                         <BackTop />
                     </Content>
                 </Layout>
             </Layout>
         );*/
        return (
            <div>hello world</div>
        )
    }
}

function mapStateToProps(store) {
    return {
        collapsed: store.dashboardStore.collapsed,
    };
}

export default withRouter(connect(mapStateToProps)(App));