import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Login from './form/security/login';
import Useraccount from './form/security/useraccounts';
import DashBoard from './form/dashboard';
import Category from './form/setups/category';
import Product from './form/setups/product';
import Invtype from './form/setups/invType';
import ReportInvBalance from './form/report/invBalance';
import ReportProduct from './form/report/product';
import ReportReleasing from './form/report/releasing';
import ReportRecieving from './form/report/recieving';

import { createStackNavigator } from 'react-navigation';

const dashBoardNav=createStackNavigator({
    DashBoard:{
        screen: DashBoard
    },
});

const securityNav=createStackNavigator({
    Login:{
        screen:Login
    },
    Useraccount:{
        screen:Useraccount
    }
});

const setupNav=createStackNavigator({
    Category:{
        screen:Category
    },
    Product:{
        screen:Product
    },
    InvType:{
        screen:Invtype
    }
});

const reportsNav=createStackNavigator({
    ReportInvBalance:{
        screen:ReportInvBalance
    },
    ReportProduct:{
        screen:ReportProduct
    },
    ReportRecieving:{
        screen:ReportRecieving
    },
    ReportReleasing:{
        screen:ReportReleasing
    }
});


const Navigator=createStackNavigator({
    Home:{
        screen:Login
    },
    DashBoard:{
      screen:DashBoard  
    },
    Login:{
        screen:Login
    },
    Useraccount:{
        screen:Useraccount
    },
    Category:{
        screen:Category
    },
    Product:{
        screen:Product
    },
    InvType:{
        screen:Invtype
    },
    ReportInvBalance:{
        screen:ReportInvBalance
    },
    ReportProduct:{
        screen:ReportProduct
    },
    ReportReleasing:{
        screen:ReportReleasing
    }

})

export default Navigator;
/*export default class Navigator extends Component {
    render() {
        return (
            <Login />
        );
    }
}*/
