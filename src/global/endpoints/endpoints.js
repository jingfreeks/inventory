import {store} from '../store';
//import { bankInfo } from '../containers/Employees/data/activeProfile/api';


/*export const getActiveUsername = () => {
	return store.getState().loginReducer.logininfo.resUsername;
};*/

export const getActiveUserId = () => {
	return store.getState().loginReducer.logininfo.userid;
};

export const getActiveCompany = () => {
	return store.getState().activeCompanyReducer.activecompany.id;
};


export let baseURL = {
	activeCompany: function(){
		return(
		'user/' + getActiveUserId() +
		'/company/' + getActiveCompany()
		)
 	}
}

export let newBaseURL = {
	activeCompany: function(){
		return(
		'company/' + getActiveCompany()
		)
 	}
}


export let setups = {
	category:{
		getData: function(payload){
			return(
				'inventory/api/category/category.json'
			);
		},
	},
	product:{ 
		getData:function(payload){
			return(
				'inventory/api/product/product.json'
			);
		},
	},
	type: {
		getData:function(payload){
			return(
				'inventory/api/invtype/invtype.json'
			);
		},
	},

}

export let transactions = {
	receiving:{
		get: function(payload){
			return(
				'payrollschedule/currentandprevious?filter=COMPANY&'+
				'id=' + getActiveCompany()
			)
		},

		update: function(payload){
			return(
				policy.ranks.get() + 
				payload.data.id
			)
		}
	},

	releasing:{
		generate: function(payload){
			return(
				'payrolltransaction/' +
				payload
			)
		},

		cancel: function(payload){
			return(
				'payrolltransaction/' +
				payload + 
				'/cancel'
			)
		},

		regenerate: function(payload){
			return(
				'payrolltransaction/' +
				payload + 
				'/regenerate'
			)
		},

		post: function(payload){
			return(
				'payrolltransaction/' +
				payload + 
				'/post'
			)
		},

		switchCloseAllFlag: function (payload){
			return(
				'payrolltransaction/' +
				payload.payrollid +
				'/employees/' + 
				'switchcloseallflag/' + 
				payload.value
			)
		},

		employees:{
			get: function (payload){
				return(
					'payrolltransaction/' +
					payload.payrollid +
					'/employees' +
					'?page=' + payload.page
				)
			},

			regenerate: function (payload){
				return(
					'payrolltransaction/' +
					payload.payrollid +
					'/employees/' + 
					payload.employeeid +
					'/regenerate'
				)
			},

			close: function (payload){
				return(
					'payrolltransaction/' +
					payload.payrollid +
					'/employees/' + 
					payload.employeeid +
					'/close'
				)
			}
		},

		summary:{
			get: function (payload){
				return(
					'payrolltransaction/' +
					payload.payrollid + 
					'/summary'
				)
			},
		},
	
	},
}


export let reports = {
	dtr: {
		get: function(payload){
			return(
				baseURL.activeCompany() +
				'/employee/'  + payload.employeeid + 
				'/reports/dtr/' + payload.payrollid
			)
		},

		update: function(payload){
			console.log('payloadsssss',payload);
			return(
				baseURL.activeCompany() +
				'/employee/'  + payload.employeeid + 
				'/reports/dtr/'
			)
		},
	},
	

	payrollSchedule: {
		get: function(payload){
			return(
				'payrollschedule/all?filter=COMPANY&'+
				'id=' + getActiveCompany()
			)
		},
	},

	payrollReports: {
		/*get: function(payload){
			return(
				'payrollschedule/all?filter=COMPANY&'+
				'id=' + getActiveCompany()
			)
		},*/

		get: function(payload){
			return(
				'payrolllist/?company=' + getActiveCompany()
			)
		},
	},

	creditInstruction:{
		get: function(payload){
			return(
				'generatecreditinstructionbycompany/?company='+payload.compId+'&paydate='+payload.payDate+'&employer='+payload.employerId
			)
		},
	},

	employeeSummary:{
		get: function(payload){
			return(
				'generatepayrollemployeesummary/?company='+payload.compId+'&email='+payload.email
			)
		},
	},
	
	
	monetaryAdjustment: {
		get: function(payload){
			return(
				'transaction/adjustment/filter/' +
				payload.filter + '/?' + 
				'page= ' + payload.page
			)
		},

		cancel: function(payload){
			return(
				'transaction/adjustment/cancel'
			)
		}
	},

	leaveBalance: {
		get: function(payload){
			return(
				'transaction/leave/leavetypes'
			)
		},
	},

	tardiness: {
		get: function(payload){
			if(payload.filter=='COMPANY'){
				return(
					'validations/tardiness?' +
					'filter=' + payload.filter + 
					'&id=' + payload.compid + 
					'&page=' + payload.page
				);					
			}
			return(
				'validations/tardiness?' +
				'filter=' + payload.filter + 
				'&id=' + payload.empid + 
				'&page=' + payload.page
			);

			/*return(
				'validations/tardiness?' +
				payload.filter + 
				'/?page=' +
				payload.page
			);*/
		},
		confirm: function(payload){
			return(
				'reports/validations/confirm/?' +
				'company=' + payload.compid + 
				'&type=tardiness' +
				'&id=' + 
				payload.id
			)
		},
		update: function(payload){
			return(
				/*'reports/validations/confirm/?' +
				'company=' + payload.compid + 
				'&&type=tardiness' +
				'&&id=' + 
				payload.id*/

				baseURL.activeCompany() +
				'/employee/'  + payload.employeeid + 
				'/reports/dtr/'
			)
		},
	},

	leaves: {
		get: function(payload){
			return(
				'reports/validations/leave/' +
				payload.filter + '/?' + 
				'page= ' + payload.page
			)
		},

		cancel: function(payload){
			return(
				'transaction/leave/cancel'
			)
		},
	},

	undertime: {
		get: function(payload){
			return(
				'reports/validations/undertime/' + 
				payload.filter + 
				'/?page=' +
				payload.page
			)
		},
		confirm: function(payload){
			return(
				'reports/validations/confirm/?' +
				'company=' + payload.compid + 
				'&type=undertime' +
				'&id=' + 
				payload.id
			)
		},
		update: function(payload){
			return(
				/*'reports/validations/confirm/?' +
				'company=' + payload.compid + 
				'&&type=tardiness' +
				'&&id=' + 
				payload.id*/

				baseURL.activeCompany() +
				'/employee/'  + payload.employeeid + 
				'/reports/dtr/'
			)
		},
	},

	overtime: {
		get: function(payload){
			return(
				'reports/validations/overtime/' + 
				payload.filter + 
				'/?page=' +
				payload.page
			)
		},
		confirm: function(payload){
			return(
				'reports/validations/confirm/?' +
				'company=' + payload.compid + 
				'&type=overtime' +
				'&id=' + 
				payload.id
			)
		},
		update: function(payload){
			console.log('payloadssss',payload);
			return(
				/*'reports/validations/confirm/?' +
				'company=' + payload.compid + 
				'&&type=tardiness' +
				'&&id=' + 
				payload.id*/

				baseURL.activeCompany() +
				'/employee/'  + payload.employeeid + 
				'/reports/dtr/'
			)
		},
	},
	
	notimein: {
		get: function(payload){
			return(
				'reports/validations/dtr/notimein/' +
				payload.filter +
				'/?page=' + payload.page
			)
		},
		confirm: function(payload){
			return(
				'reports/validations/confirm/?' +
				'company=' + payload.compid + 
				'&type=timein' +
				'&id=' + 
				payload.id
			)
		},
		update: function(payload){
			console.log('payloadssss',payload);
			return(
				baseURL.activeCompany() +
				'/employee/'  + payload.employeeid + 
				'/reports/dtr/'
			)
		},
	},

	notimeout: {
		get: function(payload){
			return(
				'reports/validations/dtr/notimeout/' +
				payload.filter +
				'/?page=' + payload.page
			)
		},
		confirm: function(payload){
			return(
				'reports/validations/confirm/?' +
				'company=' + payload.compid + 
				'&type=timeout' +
				'&id=' + 
				payload.id
			)
		},
		update: function(payload){
			console.log('payloadssss',payload);
			return(
				baseURL.activeCompany() +
				'/employee/'  + payload.employeeid + 
				'/reports/dtr/'
			)
		},
	},

	payslip: {
		get: function(payload){
			console.log('payloadssss',payload);
			return(
				'payrolltransaction/' + 
				payload.payrollid +
				'/employees/' +
				payload.employeeid
			);
		},
	},
	emailpayslip:{
		get: function(payload){
			console.log('payloadssss',payload);
			return(
				'generatepayslip/?payrollid=' + 
				payload.payrollid +
				'&employee=' +
				payload.id
			);
		},
	},
	dtrmodification:{
		get:function(payload){
			return(
				'reports/validations/dtr/company'
			);
		}
	},
	sss:{
		get:function(payload){
			return(
				'reports/payrollgovbenefits/?page='+payload.page+'&company='+payload.id+'&benefit=sss'
			);
		},
		confirm: function(payload){
			return(
				'reports/validations/confirm/?' +
				'company=' + payload.compid + 
				'&benefits=sss' +
				'&id=' + 
				payload.id
			);
		},
	},

	sssreport:{
		get:function(payload){
			return(
				//'reports/payrollgovbenefits/?page='+payload.page+'&company='+payload.id+'&benefit=sss'
				'reports/employee/benefits/government/?employee='+payload.empid+'&benefit=sss'
			);
		},
		confirm: function(payload){
			return(
				'reports/validations/confirm/?' +
				'company=' + payload.compid + 
				'&benefits=sss' +
				'&id=' + 
				payload.id
			);
		},
	},	
	philhealth:{
		get:function(payload){
			return(
				//'reports/payrollgovbenefits/?page='+payload.page+'&company='+payload.id+'&benefit=philhealth'
				'reports/payrollgovbenefits/?page='+payload.page+'&company='+payload.id+'&benefit=philhealth'
			);
		},
		confirm: function(payload){
			return(
				'reports/validations/confirm/?' +
				'company=' + payload.compid + 
				'&benefits=philhealth' +
				'&id=' + 
				payload.id
			);
		},
	},

	philhealthreport:{
		get:function(payload){
			return(
				//'reports/payrollgovbenefits/?page='+payload.page+'&company='+payload.id+'&benefit=philhealth'
				'reports/employee/benefits/government/?employee='+payload.empid+'&benefit=philhealth'
			);
		},
		confirm: function(payload){
			return(
				'reports/validations/confirm/?' +
				'company=' + payload.compid + 
				'&benefits=philhealth' +
				'&id=' + 
				payload.id
			);
		},
	},	
	pagibig:{
		get:function(payload){
			return(
				'reports/payrollgovbenefits/?page='+payload.page+'&company='+payload.id+'&benefit=pagibig'
			);
		},
		confirm: function(payload){
			return(
				'reports/validations/confirm/?' +
				'company=' + payload.compid + 
				'&benefits=pagibig' +
				'&id=' + 
				payload.id
			);
		},
	},
}

export let security = {
	login:{
		get: function(payload){
			return(
				'oauth/token'
			)
		},

		update: function(payload){
			return(
				policy.ranks.get() + 
				payload.data.id
			)
		}
	},

	useraccounts:{
		get: function(payload){
			return(
				'payrolltransaction/' +
				payload
			)
		},

		post: function(payload){
			return(
				'payrolltransaction/' +
				payload + 
				'/cancel'
			)
		},

		update: function(payload){
			return(
				'payrolltransaction/' +
				payload + 
				'/regenerate'
			)
		},

		delete: function(payload){
			return(
				'payrolltransaction/' +
				payload + 
				'/post'
			)
		},
	},
}

