
        function alertmodule($scope, $http) {
        	
           var roleid = localStorage.getItem("roleid");
        	if(roleid == "2" || roleid == "3"){
        		$("#tdbuilding").hide();
        	}
        	else{
        		$("#tdbuilding").show();
        	}
        };