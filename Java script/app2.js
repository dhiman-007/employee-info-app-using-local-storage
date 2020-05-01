
var count=3;
function show(){

    document.getElementById("myDiv").style.display="block";
    setTimeout("hide()", 1500);  // 2 seconds
}

function hide() {
	
    document.getElementById("myDiv").style.display="none";
	setTimeout("validate_login()", 0100);
	
}

function validate_login(){
var a_id,pass_log,e_id,pass_id,z1=0,z2=0,x1=0,x2=0;

a_id = document.getElementById("empID").value;
pass_log=document.getElementById("pswrd").value;
e_id=localStorage.getItem("employeeID");
pass_id=localStorage.getItem("password");
if(a_id.length==0 || pass_log.length==0){

		if(a_id.length==0){
			x1=1;
			alert("Enter Your Emploeye id");
			
		}
		 if(pass_log.length==0 && x1!=1){
			x2=1
			alert("Enter Your password");
		}
}else{
		 if(a_id.length!=8){
				z1=1;
				alert("Enter a 8 length Employee ID");
     }
  else if(a_id.length==8 && z1!=1){
	for(i=0;i<a_id.length;i++){
			if(a_id.charCodeAt(i)<48 || a_id.charCodeAt(i)>57){
				z2=1;
				alert("No characters in Emploeye ID");
				break;
		}
	}
}
}
	if( z1!=1 && z2!=1&& x1!=1 && x2!=1 ){
		//status_in=0;
			if(a_id==e_id && pass_log==pass_id ){
				window.location.href="wiproDup.html";
	}
		else {
		count--;
		alert("Wrong Password, You Can Try " + count+ " more Times");
			if(count==0){
				document.getElementById("empID").disabled=true;
				document.getElementById("pswrd").disabled=true;
				show1();
			}
		}
	}
	
}
function show1(){
	document.getElementById("myDiv").style.display="block";
	setTimeout("hide1()", 600);
	}
	function hide1(){
		document.getElementById("myDiv").style.display="none";
		document.getElementById("log").style.display="none";
		document.getElementById("set").style.display="block";
}
function show2(){	
		let employee_id, employee_id_prev, seccure,seccure_prev,p1,p2; 
		employee_id=document.getElementById("emp_id").value;
		employee_id_prev=localStorage.getItem("employeeID");
		seccure=document.getElementById("secQus").value;
		secure_prev=localStorage.getItem("security_Ans");
		p1=document.getElementById("set_pswd").value;
		p2=document.getElementById("set_pswd_val").value;
		//alert(employee_id+" "+employee_id_prev+" "+seccure+" "+secure_prev+" "+set_pswd+" "+set_pswd_val);
		if(employee_id==employee_id_prev && secure_prev==seccure && p1==p2){
				//alert("Password Reset Sucessfully!");
				show3();
			//window.location.href="wiproDup.html";
		}else{
			if(employee_id!=employee_id_prev){
				alert("Wrong Emploeye Id");
			}
			if(seccure!=secure_prev){
			alert("Invalid Security Answer");
			}
			if(p1!=p2){
			alert("Password doesn't Matches");
			}
		}
	}
function show3(){
	document.getElementById("myDiv1").style.display="block";
		setTimeout("hide3()", 1500);
	}
function hide3(){
	document.getElementById("myDiv1").style.display="none";
	alert("Password reset Sucessfully");
	window.location.href="wiproDup.html";
	}