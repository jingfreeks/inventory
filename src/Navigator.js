import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Login from './form/security/login';
import { createStackNavigator } from 'react-navigation';

const dashBoardNav=createStackNavigation({
    dashBoard:{
        screen: dashBoard
    },
});

const securityNav=createStackNavigation({
    Login:{
        screen:Login
    },
    Useraccount:{
        screen:useraccount
    }
});

const setupNav=createStackNavigation({
    Category:{
        screen:category
    },
    Product:{
        screen:product
    },
    InvType:{
        screen:invtype
    }
});

const reportsNav=createStackNavigation({
    ReportInvBalance:{
        screen:rptinvBalance
    },
    ReportProduct:{
        screen:rptproduct
    },
    ReportRecieving:{
        screen:rptrecieving
    },
    ReportReleasing:{
        screen:rptreleasing
    }
});


const Navigator=createStackNavigator({
    Home:{
        screen:Login
    },
    dashBoard:{
      screen:dashBoard  
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
export default class Navigator extends Component {
    render() {
        return (
            <Login />
        );
    }
}
