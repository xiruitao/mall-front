var userVO = {};
jQuery(document).ready(function(){
	$.ajax({
		type: "GET",
		contentType: "application/x-www-form-urlencoded",
		url: "http://localhost:8080/user/get",
		xhrFields:{withCredentials:true},
		success: function(data){
			if(data.status == "fail"){
				$("#logout").hide();
			} else{
				userVO = data.data;
				$("#logoin").hide();
				$("#regist").hide();
				$("#myself").html("用户："+userVO.userName)
			}
		},
		error: function(data){
			$("#logout").hide();
			// alert("用户信息获取失败，原因为"+data.responseText);
		}
	})
	return true;
})