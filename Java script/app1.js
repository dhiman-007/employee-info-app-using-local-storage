function show(){
    document.getElementById("myDiv").style.display="block";
    setTimeout("hide()", 1500);  // 2 seconds
}

function hide() {
	document.getElementById("myDiv").style.display="none";
	setTimeout("signMeUp()", 0200);
}

function signMeUp(){
var z1=0,z2=0,z3=0, x1=0,x2=0,x3=0,x4=0,x5=0, a, Emp_id, pass, secure;
a = document.getElementById("Name").value;
Emp_id=document.getElementById("emp_id").value;
pass=document.getElementById("psw").value;
secure=document.getElementById("security").value;

	if(a.length==0 || Emp_id.length==0 || pass.length==0 || secure.length==0){
		if(a.length==0){
		x1=1;
		alert("Enter Your Name");
	}
		if(Emp_id.length==0 && x2!=1){
		x3=1;
			alert("Enter Your Employee Id");
			
	}
		if(pass.length==0 && x3!=1){
			x4=1;
			alert("Enter Your Password");
	}
		if(secure.length==0 && x4!=1){
			x5=1;
			alert("Enter Security Answer");
	}
}
else{
if(a.length>0){
	for(i=0;i<a.length;i++){
		if(a.charCodeAt(i)!=32){
			if(a.charCodeAt(i)<65 || (a.charCodeAt(i)>90 && a.charCodeAt(i)<97) || a.charCodeAt(i)>122){
				z1=1;
				alert("Enter Alphabets Only in Name");
				break;
				}
	}
	if(z1==1){
		break;
	}
}
}
if(Emp_id.length!=8 && z1!=1){
	z2=1;
	alert("Enter a 8 length Employee ID");
}
 if(Emp_id.length==8 && z2!=1){
	for(i=0;i<Emp_id.length;i++){
			if(Emp_id.charCodeAt(i)<48 || Emp_id.charCodeAt(i)>57){
				z3=1;
				alert("No characters in Emploeye ID");
				break;
		}
	}
}
}
if(z1!=1 && z2!=1 && z3!=1 && x1!=1 && x2!=1 && x3!=1&& x4!=1 && x5!=1){
localStorage.setItem("Employee_name", a);
localStorage.setItem("employeeID", Emp_id);
localStorage.setItem("password", pass);
localStorage.setItem("security_Ans", secure);
window.location.href="Login.html";
}
}
