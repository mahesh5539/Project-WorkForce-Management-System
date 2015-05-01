 		    
        function folderExpand(event) {
            var $this = $(event).parent().parent();
            if ($this.hasClass('folderExpand')) {
                $this.removeClass('folderExpand');
            } else {
                $this.addClass('folderExpand');
            }
            return false;
        }

        function buildingmodule($scope, $http) {        	
        	var roleid = localStorage.getItem("roleid");
        	if(roleid == "2" || roleid == "3"){
        		$("#buildingerrormessage").show();
        		$("#tablebuildingmodule").hide();
   	    		$("#tdbuilding").hide();
        	}
        	else{
        		$("#buildingerrormessage").hide();
        		$("#tablebuildingmodule").show();
        		$("#tdbuilding").show();
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
		    
            $("#divBuildingDelete").hide();
            $("#divBuildingAdd").hide();
            $("#divBuildingUpdate").hide();
            $("#divBuildingDetails").show();
            $("#tddelete").css('background-color', '#fff');
            $("#tdadd").css('background-color', '#fff');
            $("#tdedit").css('background-color', '#fff');
            $("#tdgetdetails").css('background-color', '#ffe4b2');
            var url = "/api/building/getallbuildingdetails/NoofRecords/10/pageoffset/0";
            $http({
                method: 'GET',
                url: url
            }).success(function(response){
                if(response.value.error == false){
                    $scope.buildingGrid = response.value.result[0];
                    insertPaging(response.value.result[1][0].TotalRows);
                }
                else{
                    alert(response.value.message);
                }
            }).error(function(err){
                alert(err.value.message);
            });

            $scope.getbuildingdetails = function(){
            	curPage = 1;
                $("#divBuildingDelete").hide();
                $("#divBuildingAdd").hide();
                $("#divBuildingUpdate").hide();
                $("#divBuildingDetails").show();
                var html = 'Home <span style="padding-left: 2px"><a href="#">';
                html += '<img src="images/icon-breadcrumb.png" /></a></span>  Building Module';
                $(".BreadCrumColumn")[0].innerHTML = html;
                $("#tddelete").css('background-color', '#fff');
                $("#tdadd").css('background-color', '#fff');
                $("#tdedit").css('background-color', '#fff');
                $("#tdgetdetails").css('background-color', '#ffe4b2');
                var records = $scope.noofrecordsDetails;
                var url = "/api/building/getallbuildingdetails/NoofRecords/"+records+"/pageoffset/0";
                $http({
                    method: 'GET',
                    url: url
                }).success(function(response){
                    if(response.value.error == false){
                        $scope.buildingGrid = response.value.result[0];
                        insertPaging(response.value.result[1][0].TotalRows);
                    }
                    else{
                        alert(response.value.message);
                    }
                }).error(function(err){
                    alert(err.value.message);
                });
            };

            $scope.addbuilding = function(){
                $("#divBuildingDelete").hide();
                $("#divBuildingAdd").show();
                $("#divBuildingUpdate").hide();
                $("#divBuildingDetails").hide();
                var html = 'Home <span style="padding-left: 2px"><a href="#">';
                html += '<img src="images/icon-breadcrumb.png" /></a></span>  Building Module';
                html += ' <span style="padding-left: 2px"><a href="#">';
                html += '<img src="images/icon-breadcrumb.png" /></a></span>  Add Building';
                $(".BreadCrumColumn")[0].innerHTML = html;
                $("#tddelete").css('background-color', '#fff');
                $("#tdadd").css('background-color', '#ffe4b2');
                $("#tdedit").css('background-color', '#fff');
                $("#tdgetdetails").css('background-color', '#fff');
            };

            $scope.editbuilding = function(){
                $("#divBuildingDelete").hide();
                $("#divBuildingAdd").hide();
                $("#divBuildingUpdate").show();
                $("#divBuildingDetails").hide();
                var html = 'Home <span style="padding-left: 2px"><a href="#">';
                html += '<img src="images/icon-breadcrumb.png" /></a></span>  Building Module';
                html += ' <span style="padding-left: 2px"><a href="#">';
                html += '<img src="images/icon-breadcrumb.png" /></a></span>  Edit Building';
                $(".BreadCrumColumn")[0].innerHTML = html;
                $("#tddelete").css('background-color', '#fff');
                $("#tdadd").css('background-color', '#fff');
                $("#tdedit").css('background-color', '#ffe4b2');
                $("#tdgetdetails").css('background-color', '#fff');
                
                var url = "/api/building/getallbuildings";
                $http({
                    method: 'GET',
                    url: url
                }).success(function(response){
                    if(response.value.error == false){
                    	$scope.buildings = response.value.result[0];
                    	$scope.buildingsEdit = 1;
                    	
                        var id = $scope.buildingsEdit;             	
        	        	var url = "/api/building/getbuildinginformation/buildingId/" + id;
        	                $http({
        	                    method: 'GET',
        	                    url: url
        	                }).success(function(response){
        	                    if(response.value.error == false){
        	                    	if(response.value.result[0].length > 0){
        		                        $scope.nameEdit = response.value.result[0][0].BuildingName;
        								$scope.addressEdit = response.value.result[0][0].Address;
        								$scope.clientsEdit = response.value.result[0][0].ClientId;
        								$scope.contactnameEdit = response.value.result[0][0].ContactName;
        								$scope.contactnumberEdit = response.value.result[0][0].ContactNumber;
        								$scope.releasedateEdit = response.value.result[0][0].ReleaseDate;
        								$scope.lat1Edit = response.value.result[0][0].CheckPoint1_Latitude;
        								$scope.lat2Edit = response.value.result[0][0].CheckPoint2_Latitude;
        								$scope.lat3Edit = response.value.result[0][0].CheckPoint3_Latitude;
        								$scope.lat4Edit = response.value.result[0][0].CheckPoint4_Latitude;
        								$scope.lat5Edit = response.value.result[0][0].CheckPoint5_Latitude;
        								$scope.lon1Edit = response.value.result[0][0].CheckPoint1_Longitude;
        								$scope.lon2Edit = response.value.result[0][0].CheckPoint2_Longitude;
        								$scope.lon3Edit = response.value.result[0][0].CheckPoint3_Longitude;
        								$scope.lon4Edit = response.value.result[0][0].CheckPoint4_Longitude;
        								$scope.lon5Edit = response.value.result[0][0].CheckPoint5_Longitude;	                    		
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

            $scope.deletebuilding = function(){
            	curPage = 1;
                $("#divBuildingDelete").show();
                $("#divBuildingAdd").hide();
                $("#divBuildingUpdate").hide();
                $("#divBuildingDetails").hide();
                var html = 'Home <span style="padding-left: 2px"><a href="#">';
                html += '<img src="images/icon-breadcrumb.png" /></a></span>  Building Module';
                html += ' <span style="padding-left: 2px"><a href="#">';
                html += '<img src="images/icon-breadcrumb.png" /></a></span>  Delete Building';
                $(".BreadCrumColumn")[0].innerHTML = html;
                $("#tddelete").css('background-color', '#ffe4b2');
                $("#tdadd").css('background-color', '#fff');
                $("#tdedit").css('background-color', '#fff');
                $("#tdgetdetails").css('background-color', '#fff');
                var records = $scope.noofrecordsDelete;
                var url = "/api/building/getallbuildingdetails/NoofRecords/"+records+"/pageoffset/0";
                $http({
                    method: 'GET',
                    url: url
                }).success(function(response){
                    if(response.value.error == false){
                        $scope.deletebuildingGrid = response.value.result[0];
                        $scope.totalrows = response.value.result[1];
                        insertPaging(response.value.result[1][0].TotalRows);
                    }
                    else{
                        alert(response.value.message);
                    }
                }).error(function(err){
                    alert(err.value.message);
                });
            };
            
            $scope.Add = function(){
            	var url = "/api/building/createbuilding";
                $http({
                    method: 'POST',
                    url: url,
                    data:
                    {
                    	"buildingname": $scope.nameAdd,
						"address": $scope.addressAdd,
						"clientid":	$scope.clientsAdd,
						"clientname": $("#ddlClientsEdit option:selected")[0].innerHTML,
						"contactname": $scope.contactnameAdd,
						"contactnumber": $scope.contactnumberAdd,
						"releasedate": $scope.releasedateAdd,
						"latitude1": $scope.lat1Add,
						"latitude2": $scope.lat2Add,
						"latitude3": $scope.lat3Add,
						"latitude4": $scope.lat4Add,
						"latitude5": $scope.lat5Add,
						"longitude1": $scope.lon1Add,
						"longitude2": $scope.lon2Add,
						"longitude3": $scope.lon3Add,
						"longitude4": $scope.lon4Add,
						"longitude5": $scope.lon5Add
                    }
                }).success(function(response){
                    if(response.value.error == false){
                        alert(response.value.result);
                        $scope.nameAdd = "";
            			$scope.addressAdd = "";
            			$scope.clientsAdd = "";
            			$scope.contactnameAdd = "";
            			$scope.contactnumberAdd = "";
            			$scope.releasedateAdd = "";
            			$scope.lat1Add = "";
            			$scope.lat2Add = "";
            			$scope.lat3Add = "";
            			$scope.lat4Add = "";
            			$scope.lat5Add = "";
            			$scope.lon1Add = "";
            			$scope.lon2Add = "";
            			$scope.lon3Add = "";
            			$scope.lon4Add = "";
            			$scope.lon5Add = "";
                    }
                    else{
                        alert(response.value.message);
                    }
                }).error(function(err){
                    alert(err.value.message);
                });
            };
            
            $scope.Update = function(){
            	var url = "/api/building/updatebuilding";
                $http({
                    method: 'POST',
                    url: url,
                    data:
                    {
                    	"buildingid": $scope.buildingsEdit,
                    	"buildingname": $scope.nameEdit,
						"address": $scope.addressEdit,
						"clientid":	$scope.clientsEdit,
						"clientname": $("#ddlClientsEdit option:selected")[0].innerHTML,
						"contactname": $scope.contactnameEdit,
						"contactnumber": $scope.contactnumberEdit,
						"releasedate": $scope.releasedateEdit,
						"latitude1": $scope.lat1Edit,
						"latitude2": $scope.lat2Edit,
						"latitude3": $scope.lat3Edit,
						"latitude4": $scope.lat4Edit,
						"latitude5": $scope.lat5Edit,
						"longitude1": $scope.lon1Edit,
						"longitude2": $scope.lon2Edit,
						"longitude3": $scope.lon3Edit,
						"longitude4": $scope.lon4Edit,
						"longitude5": $scope.lon5Edit
                    }
                }).success(function(response){
                    if(response.value.error == false){
                        alert(response.value.result);
                        $scope.buildingsEdit = "";
            			$scope.nameEdit = "";
            			$scope.addressEdit = "";
            			$scope.clientsEdit = "";
            			$scope.contactnameEdit = "";
            			$scope.contactnumberEdit = "";
            			$scope.releasedateEdit = "";
            			$scope.lat1Edit = "";
            			$scope.lat2Edit = "";
            			$scope.lat3Edit = "";
            			$scope.lat4Edit = "";
            			$scope.lat5Edit = "";
            			$scope.lon1Edit = "";
            			$scope.lon2Edit = "";
            			$scope.lon3Edit = "";
            			$scope.lon4Edit = "";
            			$scope.lon5Edit = "";
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
    			$scope.clientsAdd = "";
    			$scope.contactnameAdd = "";
    			$scope.contactnumberAdd = "";
    			$scope.releasedateAdd = "";
    			$scope.lat1Add = "";
    			$scope.lat2Add = "";
    			$scope.lat3Add = "";
    			$scope.lat4Add = "";
    			$scope.lat5Add = "";
    			$scope.lon1Add = "";
    			$scope.lon2Add = "";
    			$scope.lon3Add = "";
    			$scope.lon4Add = "";
    			$scope.lon5Add = "";
            };
            
            $scope.resetEditAttribute = function(){
            	$scope.buildingsEdit = "";
    			$scope.nameEdit = "";
    			$scope.addressEdit = "";
    			$scope.clientsEdit = "";
    			$scope.contactnameEdit = "";
    			$scope.contactnumberEdit = "";
    			$scope.releasedateEdit = "";
    			$scope.lat1Edit = "";
    			$scope.lat2Edit = "";
    			$scope.lat3Edit = "";
    			$scope.lat4Edit = "";
    			$scope.lat5Edit = "";
    			$scope.lon1Edit = "";
    			$scope.lon2Edit = "";
    			$scope.lon3Edit = "";
    			$scope.lon4Edit = "";
    			$scope.lon5Edit = "";           	
            };
            
            $scope.deletebuildingInfo = function(event){
            	var id = event.currentTarget.id.split('-');
            	var r = confirm("Are you sure you want to delete this building");
				if (r == true) {
				    var url = "/api/building/deletebuilding/buildingId/" + id[1];
	                $http({
	                    method: 'DELETE',
	                    url: url
	                }).success(function(response){
	                    if(response.value.error == false){
	                        alert(response.value.result);
		                        var records = $scope.noofrecordsDelete;
		                        var url = "/api/building/getallbuildingdetails/NoofRecords/"+records+"/pageoffset/0";
		                        $http({
		                            method: 'GET',
		                            url: url
		                        }).success(function(response){
		                            if(response.value.error == false){
		                                $scope.deletebuildingGrid = response.value.result[0];
		                                $scope.totalrows = response.value.result[1];
		                                curPage = 1;
		                                insertPaging(response.value.result[1][0].TotalRows);
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
            
            $scope.getbuildingrecordsfordisplay = function(){
            	var records = $scope.noofrecordsDetails;
            	var url = "/api/building/getallbuildingdetails/NoofRecords/"+records+"/pageoffset/0";
                $http({
                    method: 'GET',
                    url: url
                }).success(function(response){
                    if(response.value.error == false){
                        $scope.buildingGrid = response.value.result[0];
                        insertPaging(response.value.result[1][0].TotalRows);
                    }
                    else{
                        alert(response.value.message);
                    }
                }).error(function(err){
                    alert(err.value.message);
                });
            };
                        
            $scope.getbuildingrecordsfordisplayDelete = function(){
            	var records = $scope.noofrecordsDelete;
            	var url = "/api/building/getallbuildingdetails/NoofRecords/"+records+"/pageoffset/0";
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
            };
            
            
            $scope.loadbuildingdetailsbyid = function(e){
            	var id = $scope.buildingsEdit;             	
	        	var url = "/api/building/getbuildinginformation/buildingId/" + id;
	                $http({
	                    method: 'GET',
	                    url: url
	                }).success(function(response){
	                    if(response.value.error == false){
	                    	if(response.value.result[0].length > 0){
		                        $scope.nameEdit = response.value.result[0][0].BuildingName;
								$scope.addressEdit = response.value.result[0][0].Address;
								$scope.clientsEdit = response.value.result[0][0].ClientId;
								$scope.contactnameEdit = response.value.result[0][0].ContactName;
								$scope.contactnumberEdit = response.value.result[0][0].ContactNumber;
								$scope.releasedateEdit = response.value.result[0][0].ReleaseDate;
								$scope.lat1Edit = response.value.result[0][0].CheckPoint1_Latitude;
								$scope.lat2Edit = response.value.result[0][0].CheckPoint2_Latitude;
								$scope.lat3Edit = response.value.result[0][0].CheckPoint3_Latitude;
								$scope.lat4Edit = response.value.result[0][0].CheckPoint4_Latitude;
								$scope.lat5Edit = response.value.result[0][0].CheckPoint5_Latitude;
								$scope.lon1Edit = response.value.result[0][0].CheckPoint1_Longitude;
								$scope.lon2Edit = response.value.result[0][0].CheckPoint2_Longitude;
								$scope.lon3Edit = response.value.result[0][0].CheckPoint3_Longitude;
								$scope.lon4Edit = response.value.result[0][0].CheckPoint4_Longitude;
								$scope.lon5Edit = response.value.result[0][0].CheckPoint5_Longitude;	                    		
	                    	}
	                    }
	                    else{
	                        alert(response.value.message);
	                    }
	                }).error(function(err){
	                    alert(err.value.message);
	           });
            };
            
            $scope.getdataforgrid = function(){
            	var records = $(".pageRp option:selected")[0].innerHTML;
            	var offset = 0;
            	if($(event)[0].currentTarget.title == undefined || $(event)[0].currentTarget.title == ""){
            		offset = (parseInt(curPage) - 1) * parseInt(records);
            	}
            	else{
					offset = (parseInt($(event)[0].currentTarget.title) - 1) * parseInt(records);
				}
	        	var url = "/api/building/getallbuildingdetails/NoofRecords/"+records+"/pageoffset/" + offset;
	                $http({
	                    method: 'GET',
	                    url: url
	                }).success(function(response){
	                    if(response.value.error == false){
	                        $scope.deletebuildingGrid = response.value.result[0];
	                        $scope.buildingGrid = response.value.result[0];
	                        insertPaging(response.value.result[1][0].TotalRows);
	                    }
	                    else{
	                        alert(response.value.message);
	                    }
	                }).error(function(err){
	                    alert(err.value.message);
	           });
            };
            
            $scope.getdataforgrid = function(){
            	var records = $(".pageRp option:selected")[0].innerHTML;
            	var offset = 0;
            	if($(event)[0].currentTarget.title == undefined || $(event)[0].currentTarget.title == ""){
            		offset = (parseInt(curPage) - 1) * parseInt(records);
            	}
            	else{
					offset = (parseInt($(event)[0].currentTarget.title) - 1) * parseInt(records);
				}
	        	var url = "/api/building/getallbuildingdetails/NoofRecords/"+records+"/pageoffset/" + offset;
	                $http({
	                    method: 'GET',
	                    url: url
	                }).success(function(response){
	                    if(response.value.error == false){
	                        $scope.deletebuildingGrid = response.value.result[0];
	                        $scope.buildingGrid = response.value.result[0];
	                        insertPaging(response.value.result[1][0].TotalRows);
	                    }
	                    else{
	                        alert(response.value.message);
	                    }
	                }).error(function(err){
	                    alert(err.value.message);
	           });
            };
            
            // load clients
            
            var url = "/api/building/getallclients";
	                $http({
	                    method: 'GET',
	                    url: url
	                }).success(function(response){
	                    if(response.value.error == false){
	                        $scope.buildingclients = response.value.result[0];
	                        $scope.clientsAdd = 1;
	                        $scope.clientsEdit = 1;
	                    }
	                    else{
	                        alert(response.value.message);
	                    }
	                }).error(function(err){
	                    alert(err.value.message);
	        });
	                
	                
	       // load buildings
	       
	       var url = "/api/building/getallbuildings";
	                $http({
	                    method: 'GET',
	                    url: url
	                }).success(function(response){
	                    if(response.value.error == false){
	                    	$scope.buildings = response.value.result[0];
	                    	$scope.buildingsEdit = 1;
	                    }
	                    else{
	                        alert(response.value.message);
	                    }
	                }).error(function(err){
	                    alert(err.value.message);
	       });
	       
	       
        }


        function showDetails(event, value){
            ShowPopUpWindow("divHideongrid-" + value, "Check Point Details", 230, 900);
        }  