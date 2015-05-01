   function folderExpand(event) {
            var $this = $(event).parent().parent();
            if ($this.hasClass('folderExpand')) {
                $this.removeClass('folderExpand');
            } else {
                $this.addClass('folderExpand');
            }
            return false;
        }

       
        
        function clientmodule($scope, $http) {
        	
        	var roleid = localStorage.getItem("roleid");
        	if(roleid == "2" || roleid == "3"){
        		$("#tdgetdetails").hide();
        		$("#graphContent").show();
        		 $("#tdsearch").hide();
                	$("#tdadd").hide();           	
                	$("#tdedit").show();
                	$("#tddelete").hide();
                	$("#tdsearchBorder").hide();
                	$("#tddetailsBorder").hide();
                	$("#tdaddBorder").hide();
                	$("#tdeditBorder").hide();
                	$("#divClientDetails").hide();                	
                    $("#theadClientDetails1").hide();
                	$("#theadClientDetails2").hide();
                	$("#divclienthide").hide();
                	$("#gridPagingHide").hide();
                	$("#pageControlhide").hide();                	
        	}
        	else{
        		$("#graphContent").hide();
        		$("#tableclientmodule").show();        		
        	}
         
        	 $scope.recordCount = {
     		        data: [{
     		            value: '10',
     		            name: '10'
     		        }, {
     		            value: '20',
     		            name: '20'
     		        },{
     		            value: '50',
     		            name: '50'
     		        },{
     		            value: '100',
     		            name: '100'
     		        }]
     		    };       
     		    $scope.noofrecordsDetails = '10';
     		    $scope.noofrecordsDelete = '10';
     		    $scope.noofrecordsSearch = '10';
     		    $("#divClientAdd").hide();
           	 	$("#divClientUpdate").hide();
            	$("#divClientDelete").hide();
             	$("#divClientDetails").show();
             	$("#divClientSearch").hide();           	
     		   var records = $scope.noofrecordsDelete;
           	   var url = "/api/client/getallclientdetails/NoofRecords/"+records+"/pageoffset/0";
               $http({
                   method: 'GET',
                   url: url
               }).success(function(response){
                   if(response.value.error == false){
                       $scope.clientGrid = response.value.result[0];
                       insertPaging(response.value.result[1][0].TotalRows, 3);
                   }
                   else{
                       alert(response.value.message);
                   }
               }).error(function(err){
                   alert(err.value.message);
               });
     		    
                             
               $scope.searchclient = function(){
               	$("#divClientAdd").hide();
               	$("#graphContent").hide();
               	$("#divClientDetails").hide();
               	$("#divClientUpdate").hide();
               	$("#divClientDelete").hide();
               	$("#divClientSearch").show();
               	$scope.template = $scope.templates[1];
               	var html = 'Home <span style="padding-left: 2px"><a href="#">';
               	html += '<img src="images/icon-breadcrumb.png" /></a></span>  Client Module';
               	html += ' <span style="padding-left: 2px"><a href="#">';
               	html += '<img src="images/icon-breadcrumb.png" /></a></span>  Search Client';
               	$(".BreadCrumColumn")[0].innerHTML = html;
               	$("#tddelete").css('background-color', '#fff');
               	$("#tdadd").css('background-color', '#fff');
               	$("#tdedit").css('background-color', '#fff');
               	$("#tdgetdetails").css('background-color', '#fff');
               	$("#tdsearch").css('background-color', '#ffe4b2');            	
               };
    
            
            $scope.getclientdetails = function(){
            	$("#divClientAdd").hide();
            	$("#graphContent").hide();            	
            	$("#divClientUpdate").hide();
            	$("#divClientDelete").hide();
            	$("#divClientDetails").show();
            	$("#divClientSearch").hide();
            	$scope.template = $scope.templates[0];
            	var html = 'Home <span style="padding-left: 2px"><a href="#">';
            	html += '<img src="images/icon-breadcrumb.png" /></a></span>  Client Module';
            	html += ' <span style="padding-left: 2px"><a href="#">';
            	html += '<img src="images/icon-breadcrumb.png" /></a></span>  Client Details';
            	$(".BreadCrumColumn")[0].innerHTML = html;
            	$("#tddelete").css('background-color', '#fff');
            	$("#tdadd").css('background-color', '#fff');
            	$("#tdedit").css('background-color', '#fff');
            	$("#tdgetdetails").css('background-color', '#ffe4b2');
            	$("#tdsearch").css('background-color', '#fff');
            	var records = $(".pageRp option:selected")[0].innerHTML;
            	   var url = "/api/client/getallclientdetails/NoofRecords/"+records+"/pageoffset/0";
                $http({
                    method: 'GET',
                    url: url
                }).success(function(response){
                    if(response.value.error == false){
                        $scope.clientGrid = response.value.result[0];
                        insertPaging(response.value.result[1][0].TotalRows, 3);
                    }
                    else{
                        alert(response.value.message);
                    }
                }).error(function(err){
                    alert(err.value.message);
                });
            };
            
            $scope.addclient = function(){
            	$("#divClientAdd").show();
            	$("#graphContent").hide();
            	$("#divClientDetails").hide();
            	$("#divClientUpdate").hide();
            	$("#divClientDelete").hide();
            	$("#divClientSearch").hide();
            	$scope.template = $scope.templates[1];
            	var html = 'Home <span style="padding-left: 2px"><a href="#">';
            	html += '<img src="images/icon-breadcrumb.png" /></a></span>  Client Module';
            	html += ' <span style="padding-left: 2px"><a href="#">';
            	html += '<img src="images/icon-breadcrumb.png" /></a></span>  Add Client';
            	$(".BreadCrumColumn")[0].innerHTML = html;
            	$("#tddelete").css('background-color', '#fff');
            	$("#tdadd").css('background-color', '#ffe4b2');
            	$("#tdedit").css('background-color', '#fff');
            	$("#tdgetdetails").css('background-color', '#fff');
            	$("#tdsearch").css('background-color', '#fff');
            };
 
            $scope.deleteclient = function(){
            	$("#divClientAdd").hide();
            	$("#graphContent").hide();            	
            	$("#divClientUpdate").hide();
            	$("#divClientDelete").show();
            	$("#divClientDetails").hide();
            	$("#divClientSearch").hide();
            	$scope.template = $scope.templates[3];
            	var html = 'Home <span style="padding-left: 2px"><a href="#">';
            	html += '<img src="images/icon-breadcrumb.png" /></a></span>  Client Module';
            	html += ' <span style="padding-left: 2px"><a href="#">';
            	html += '<img src="images/icon-breadcrumb.png" /></a></span>  Delete Client';
            	$(".BreadCrumColumn")[0].innerHTML = html;
            	$("#tddelete").css('background-color', '#ffe4b2');
            	$("#tdadd").css('background-color', '#fff');
            	$("#tdedit").css('background-color', '#fff');
            	$("#tdgetdetails").css('background-color', '#fff');
            	$("#tdsearch").css('background-color', '#fff');
            	var records = $(".pageRp option:selected")[0].innerHTML;
            	   var url = "/api/client/getallclientdetails/NoofRecords/"+records+"/pageoffset/0";
                $http({
                    method: 'GET',
                    url: url
                }).success(function(response){
                    if(response.value.error == false){
                        $scope.deleteclientGrid = response.value.result[0];
                        insertPaging(response.value.result[1][0].TotalRows, 3);
                    }
                    else{
                        alert(response.value.message);
                    }
                }).error(function(err){
                    alert(err.value.message);
                });
            };
            
            
          
            $scope.editclient = function(){
               	$("#divClientAdd").hide();
            	$("#graphContent").hide();            	
            	$("#divClientUpdate").show();
            	$("#divClientDelete").hide();
            	$("#divClientDetails").hide();
            	$("#divClientSearch").hide();
            	$scope.template = $scope.templates[2];
            	var html = 'Home <span style="padding-left: 2px"><a href="#">';
            	html += '<img src="images/icon-breadcrumb.png" /></a></span>  Client Module';
            	html += ' <span style="padding-left: 2px"><a href="#">';
            	html += '<img src="images/icon-breadcrumb.png" /></a></span>  Edit Client';
            	$(".BreadCrumColumn")[0].innerHTML = html;
            	$("#tddelete").css('background-color', '#fff');
            	$("#tdadd").css('background-color', '#fff');
            	$("#tdedit").css('background-color', '#ffe4b2');
            	$("#tdgetdetails").css('background-color', '#fff');
            	$("#tdsearch").css('background-color', '#fff');
                var url = "/api/client/getallclients";
                $http({
                    method: 'GET',
                    url: url
                }).success(function(response){
                    if(response.value.error == false){
                    	var value = response.value.result[0][0].ClientId;                    	              
                        $scope.clients = response.value.result[0];                    
                        $scope.clientsEdit = 1;                                                         	                                                    
        	        	var url = "/api/client/getclientinformation/clientId/"+ id;
        	                $http({
        	                    method: 'GET',
        	                    url: url
        	                }).success(function(response){
        	                    if(response.value.error == false){
        	                    	if(response.value.result[0].length > 0){        		                      
        								 $scope.nameEdit = response.value.result[0][0].Firstname;
        					     			$scope.addressEdit = response.value.result[0][0].Address;
        					     			$scope.surnameEdit = response.value.result[0][0].Lastname;
        					     			$scope.cityEdit = response.value.result[0][0].City;
        					     			$scope.contactnumberEdit = response.value.result[0][0].PhoneNumber;
        					     			$scope.stateEdit = response.value.result[0][0].State;
        					     			$scope.zipcodeEdit = response.value.result[0][0].ZipCode;
        					     			$scope.emailEdit = response.value.result[0][0].Email;
        					     			$scope.startdateEdit = response.value.result[0][0].StartDate;
        					     			$scope.enddateEdit = response.value.result[0][0].EndDate;
        					     			$scope.ssnEdit = response.value.result[0][0].SSNNumber;    
        					     			$scope.passwordEdit = response.value.result[0][0].PasswordSalt;
        	                    	}
        	                    }
        	                    else{
        	                        alert(response.value.message);
        	                    }
        	                }).error(function(err){
        	                    alert(err.value.message);
        	                });
                    }
                    else{
                        alert(response.value.message);
                    }
                }).error(function(err){
                    alert(err.value.message);
                });
            };
            
                                                 
            $scope.Add = function(){
            	var url = "/api/client/createclient";
                $http({
                    method: 'POST',
                    url: url,
                    data:
                    {
                    	"firstname": $scope.nameAdd,
                    	"lastname": $scope.surnameAdd,
						"address": $scope.addressAdd,
						"phone_no": $scope.contactnumberAdd,						
						"city": $scope.cityAdd,
						"state": $scope.stateAdd,
						"zipcode": $scope.zipcodeAdd,
						"emailaddress": $scope.emailAdd,
						"start_date": $scope.startdateAdd,
						"end_date": $scope.enddateAdd,
						"ssnnumber": $scope.ssnAdd,
						"password": $scope.passwordAdd						
                    }
                }).success(function(response){
                    if(response.value.error == false){
                        alert(response.value.result);
                        $scope.nameAdd = "";
            			$scope.addressAdd = "";
            			$scope.surnameAdd = "";
            			$scope.cityAdd = "";
            			$scope.contactnumberAdd = "";
            			$scope.stateAdd = "";
            			$scope.zipcodeAdd = "";
            			$scope.emailAdd = "";
            			$scope.startdateAdd = "";
            			$scope.enddateAdd = "";
            			$scope.ssnAdd = "";
            			$scope.passwordAdd = "";            			
                    }
                    else{
                        alert(response.value.message);
                    }
                }).error(function(err){
                    alert(err.value.message);
                });
            };
            
            
            
            $scope.Update = function(){
            	var url = "/api/client/updateclient";
                $http({
                    method: 'POST',
                    url: url,
                    data:
                    {                    	               				
						"clientid":	$scope.clientsEdit,
						"userid":	$scope.userEdit,
						 "firstname":$scope.nameEdit,
						 "address":$scope.addressEdit,
						 "lastname":$scope.surnameEdit,
						 "city":$scope.cityEdit,
						 "phone_no":$scope.contactnumberEdit,
						 "state":$scope.stateEdit,
						 "zipcode":$scope.zipcodeEdit,
						 "email":$scope.emailEdit,
						 "start_date":$scope.startdateEdit,
						 "end_date":$scope.enddateEdit,
						 "ssnnumber":$scope.ssnEdit,
						 "password":$scope.passwordEdit																							
                    }
                }).success(function(response){
                    if(response.value.error == false){
                        alert(response.value.result);
                        $scope.nameEdit = "";
             			$scope.addressEdit = "";
             			$scope.surnameEdit = "";
             			$scope.cityEdit = "";
             			$scope.contactnumberEdit = "";
             			$scope.stateEdit = "";
             			$scope.zipcodeEdit = "";
             			$scope.emailEdit = "";
             			$scope.startdateEdit = "";
             			$scope.enddateEdit = "";
             			$scope.ssnEdit = "";
             			$scope.passwordEdit = "";  
                    }
                    else{
                        alert(response.value.message);
                    }
                }).error(function(err){
                    alert(err.value.message);
                });
            };
           
                  
            
            $scope.resetAddAttribute = function(){
            	 $scope.nameAdd = "";
     			$scope.addressAdd = "";
     			$scope.surnameAdd = "";
     			$scope.cityAdd = "";
     			$scope.contactnumberAdd = "";
     			$scope.stateAdd = "";
     			$scope.zipcodeAdd = "";
     			$scope.emailAdd = "";
     			$scope.startdateAdd = "";
     			$scope.enddateAdd = "";
     			$scope.ssnAdd = "";
     			$scope.passwordAdd = "";
            };
            
            $scope.resetEditAttribute = function(){
            	 $scope.nameEdit = undefined;
     			$scope.addressEdit = undefined;
     			$scope.surnameEdit = undefined;
     			$scope.cityEdit = undefined;
     			$scope.contactnumberEdit = undefined;
     			$scope.stateEdit = undefined;
     			$scope.zipcodeEdit = undefined;
     			$scope.emailEdit = undefined;
     			$scope.startdateEdit = undefined;
     			$scope.enddateEdit = undefined;
     			$scope.ssnEdit = undefined;
     			$scope.passwordEdit = undefined;     	
            };
           
            
           $scope.resetSearchAttribute = function() {
        	   $scope.nameSearch = undefined;
    			$scope.addressSearch = undefined;
    			$scope.surnameSearch = undefined;
    			$scope.citySearch = undefined;
    			$scope.contactnumberSearch = undefined;
    			$scope.stateSearch = undefined;
    			$scope.emailSearch = undefined;
    			$scope.startdateSearch = undefined;
    			$scope.enddateSearch = undefined;
    			$scope.ssnSearch = undefined;
        	   
           }
            
            $scope.loadclientdetailsbyid = function(e){            	
            	var id = $scope.clientsEdit;     
            	console.log("id is "+id);
            	var url = "/api/client/getclientinformation/clientId/" + id;
	                $http({
	                    method: 'GET',
	                    url: url
	                }).success(function(response){
	                    if(response.value.error == false){
	                    	if(response.value.result[0].length > 0){
	                    		 $scope.nameEdit = response.value.result[0][0].Firstname;
					     			$scope.addressEdit = response.value.result[0][0].Address;
					     			$scope.surnameEdit = response.value.result[0][0].Lastname;
					     			$scope.cityEdit = response.value.result[0][0].City;
					     			$scope.contactnumberEdit = response.value.result[0][0].PhoneNumber;
					     			$scope.stateEdit = response.value.result[0][0].State;
					     			$scope.zipcodeEdit = response.value.result[0][0].ZipCode;
					     			$scope.emailEdit = response.value.result[0][0].Email;
					     			$scope.startdateEdit = response.value.result[0][0].StartDate;
					     			$scope.enddateEdit = response.value.result[0][0].EndDate;
					     			$scope.ssnEdit = response.value.result[0][0].SSNNumber;
					     			$scope.passwordEdit = response.value.result[0][0].PasswordSalt;					     			
	                    	}
	                    }
	                    else{
	                        alert(response.value.message);
	                    }
	                }).error(function(err){
	                    alert(err.value.message);
	           });
            };
            
            
            var url = "/api/client/getallclients";
            $http({
                method: 'GET',
                url: url
            }).success(function(response){
                if(response.value.error == false){
                    $scope.clients = response.value.result[0];
                    //$scope.clientsAdd = 1;
                    $scope.clientsEdit = response.value.result[0].ClientId;
                }
                else{
                    alert(response.value.message);
                }
            }).error(function(err){
                alert(err.value.message);
    });
            
            
            
            
           /* $scope.getclientrecordsfordisplayDelete = function(){
            	var records = $scope.noofrecordsDelete;
            	var url = "/api/client/getallclientdetails/NoofRecords/"+records+"/pageoffset/0";
                $http({
                    method: 'GET',
                    url: url
                }).success(function(response){
                    if(response.value.error == false){
                        $scope.deletebuildingGrid = response.value.result[0];
                        insertPaging(response.value.result[1][0].TotalRows);
                    }
                    else{
                        alert(response.value.message);
                    }
                }).error(function(err){
                    alert(err.value.message);
                });
            };*/
            
            
            $scope.getdataforgrid = function(){
            	var records = $(".pageRp option:selected")[0].innerHTML;
            	var offset = 0;
            	if($(event)[0].currentTarget.title == undefined || $(event)[0].currentTarget.title == ""){
            		offset = (parseInt(curPage) - 1) * parseInt(records);
            	}
            	else{
					offset = (parseInt($(event)[0].currentTarget.title) - 1) * parseInt(records);
				}
	        	var url = "/api/client/getallclientdetails/NoofRecords/"+records+"/pageoffset/" + offset;
	                $http({
	                    method: 'GET',
	                    url: url
	                }).success(function(response){
	                    if(response.value.error == false){
	                        $scope.deleteclientGrid = response.value.result[0];
	                        $scope.clientGrid = response.value.result[0];
	                        insertPaging(response.value.result[1][0].TotalRows, 3);
	                    }
	                    else{
	                        alert(response.value.message);
	                    }
	                }).error(function(err){
	                    alert(err.value.message);
	           });
            };
            
            
            
            
            $scope.clientrecordsfordisplaySearch = function(){            	
            	var records = $scope.noofrecordsSearch;
            	var url = "/api/client/getsearched/NoofRecords/"+records+"/pageoffset/0";
                $http({
                    method: 'POST',
                    url: url,
                    data:{
                    	 "firstname":$scope.nameSearch,
						 "address":$scope.addressSearch,
						 "lastname":$scope.surnameSearch,
						 "city":$scope.citySearch,
						 "phone_no":$scope.contactnumberSearch,
						 "state":$scope.stateSearch,						 
						 "email":$scope.emailSearch,
						 "ssnnumber":$scope.ssnSearch,
						 "startDate":$scope.startDateSearch,
						 "endDate":$scope.endDateSearch						 
                    }
                }).success(function(response){
                    if(response.value.error == false){
                        $scope.clientSearchGrid = response.value.result[0];
                       insertPaging(response.value.result[1][0].TotalRows, 2);
                    }
                    else{
                        alert(response.value.message);
                    }
                }).error(function(err){
                    alert(err.value.message);
                });
            };
            
            
            $scope.getclientrecordsfordisplaySearch = function(){
            	var records = $(".pageRp option:selected")[0].innerHTML;
            	var offset = 0;
            	if($(event)[0].currentTarget.title == undefined || $(event)[0].currentTarget.title == ""){
            		offset = (parseInt(curPage) - 1) * parseInt(records);
            	}
            	else{
					offset = (parseInt($(event)[0].currentTarget.title) - 1) * parseInt(records);
				}
            	var url = "/api/client/searchclient";
                $http({
                    method: 'POST',
                    url: url,
                    data:{
                    	 "firstname":$scope.nameSearch,
						 "address":$scope.addressSearch,
						 "lastname":$scope.surnameSearch,
						 "city":$scope.citySearch,
						 "phone_no":$scope.contactnumberSearch,
						 "state":$scope.stateSearch,						 
						 "email":$scope.emailSearch,
						 "ssnnumber":$scope.ssnSearch,
						 "startDate":$scope.startDateSearch,
						 "endDate":$scope.endDateSearch,
						 "noofrecords": records,
						 "pageoffset": offset						 
                    }
                }).success(function(response){
                    if(response.value.error == false){
                        $scope.clientSearchGrid = response.value.result;
                        insertPaging(response.totalrows[0].TotalRows, 2);
                        if(response.totalrows[0].TotalRows == 0){
                        	$("#divsearchgrid").hide();
                        }
                    }
                    else{
                        alert(response.value.message);
                    }
                }).error(function(err){
                    alert(err.value.message);
                });
            };
            
            $scope.deleteclientInfo = function(event){
            	var id = event.currentTarget.id.split('-');
            	var r = confirm("Are you sure you want to delete this client");
				if (r == true) {
				    var url = "/api/client/deleteclient/clientId/" + id[1];
	                $http({
	                    method: 'DELETE',
	                    url: url
	                }).success(function(response){
	                    if(response.value.error == false){
	                        alert(response.value.result);
	                        var records = $(".pageRp option:selected")[0].innerHTML;
		                        var url = "/api/client/getallclientdetails/NoofRecords/"+records+"/pageoffset/0";
		                        $http({
		                            method: 'GET',
		                            url: url
		                        }).success(function(response){
		                            if(response.value.error == false){
		                            	$scope.deleteclientGrid = response.value.result[0];
		                                $scope.totalrows = response.value.result[1];		                                		                               
		                                curPage = 1;
		                                insertPaging(response.value.result[1][0].TotalRows, 3);
		                            }
		                            else{
		                                alert(response.value.message);
		                            }
		                        }).error(function(err){
		                            alert(err.value.message);
		                        });
	                    }
	                    else{
	                        alert(response.value.message);
	                    }
	                }).error(function(err){
	                    alert(err.value.message);
	                });
				}
            };
            
            
            
            $scope.SearchClient = function(){
            	var records = $(".pageRp option:selected")[0].innerHTML;
            	var url = "/api/client/searchclient";
                $http({
                    method: 'POST',
                    url: url,
                    data:
                    {
						 "firstname":$scope.nameSearch,
						 "address":$scope.addressSearch,
						 "lastname":$scope.surnameSearch,
						 "city":$scope.citySearch,
						 "phone_no":$scope.contactnumberSearch,
						 "state":$scope.stateSearch,						 
						 "email":$scope.emailSearch,
						 "ssnnumber":$scope.ssnSearch,
						 "startDate":$scope.startDateSearch,
						 "endDate":$scope.endDateSearch,
						 "noofrecords": records,
						 "pageoffset": 0
                    }
                }).success(function(response){
                    if(response.value.error == false){                 
             			 $scope.clientSearchGrid = response.value.result;
                         insertPaging(response.totalrows[0].TotalRows, 2);
                         if(response.totalrows[0].TotalRows == 0){
                 			 $("#divsearchgrid").hide();                         	
                         }
                         else{
                        	 $("#divsearchgrid").show();   
                         }
                    }
                    else{
                        alert(response.value.message);
                    }
                }).error(function(err){
                    alert(err.value.message);
                });
            };
        }
    