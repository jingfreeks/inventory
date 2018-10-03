import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Login from './form/security/login';
import Useraccount from './form/security/useraccounts';
import DashBoard from './form/dashboard';
import TransDashBoard from './form/transaction/dashboard';
import TransReceiving from './form/transaction/receiving';
import TransReleasing from './form/transaction/releasing';

import SetupDashBoard from './form/setups/dashboard';
import Category from './form/setups/category';
import Product from './form/setups/product';
import Invtypes from './form/setups/invtype';

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

const transactionNav=createStackNavigator({
    TransReceiving:{
        screen:TransReceiving
    },
    TransReleasing:{
        screen:TransReleasing
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
    Invtypes:{
        screen:Invtypes
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
      screen:DashBoard,
    },
    SetupDashBoard:{
        screen:SetupDashBoard,
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
    Invtypes:{
        screen:Invtypes
    },
    ReportInvBalance:{
        screen:ReportInvBalance
    },
    ReportProduct:{
        screen:ReportProduct
    },
    ReportReleasing:{
        screen:ReportReleasing
    },
    ReportRecieving:{
        screen:ReportRecieving
    },
    TransDashBoard:{
        screen:TransDashBoard
    },
    TransReceiving:{
        screen:TransReceiving
    },
    TransReleasing:{
        screen:TransReleasing
    },

})

export default Navigator;
/*export default class Navigator extends Component {
    render() {
        return (
            <Login />
        );
    }
}*/
