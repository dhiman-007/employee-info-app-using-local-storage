
window.history.forward();

var xx=localStorage.getItem("Employee_name");

	
		function check(){
		if(xx==null){
			window.location.href="index.html";
			
		}
	}
	
	document.getElementById("show-it").innerHTML="Welcome, " + xx;

function show(){
	document.getElementById("myDiv").style.display="block";
	setTimeout("hide()", 1500);  // 2 seconds
}

function hide() {
	document.getElementById("myDiv").style.display="none";
	setTimeout("checking1()", 0100);
}


function checking1(){
var b,i,z1=0,z2=0,z3=0,z4=0,fst,scnd,efforts,message_efforts,dependency,x1=0,x2=0,x3=0,BU,mail;
mail=document.getElementById("email").value;
b=document.getElementById("exp").value;
efforts=document.getElementById("eff").value;
BU=document.getElementById("bu").value;

if( mail.length==0 || BU.length==0 || b.length==0 || efforts.length==0  || mail=="@wipro.com"  || b.length>2  || efforts.length >2)
	{
	
if(mail.length==0){
x1=1;
	alert("Enter your Mail Id");
}

 else if(BU.length==0 && x1!=1){
x2=1;
	alert("Enter your Business Unit");
}

else if(b.length==0 && x2!=1){
	x3=1;
	alert("Enter your Experience");
}

 else if(efforts.length==0 && x3!=1){
	alert("Enter your Effort");
}

 else if(mail=="@wipro.com"){
	alert("Invalid Mail ID");
}

 else if(b.length>2){
	alert("Experience out Of Bound Exception");
} 
else if(efforts.length>2){
				alert("Invalid Efforts! You Sick" );
			}

}

else{
	if(!(mail.substring(mail.length-10)=="@wipro.com")){
	z1=1;
	alert("Enter Valid Wipro mail Id");
} 

 if(b.length==2 && z1!=1){
		fst=b.charCodeAt(0);
		scnd= b.charCodeAt(1);
		if(parseInt(b)> 35 || !(fst>=48 && fst<=57) || !(scnd>=48 && scnd<=57)){
		if(parseInt(b)>35){
			z2=1;
			alert("You can have Max. Experience of 35 yrs. in an organisation");
		}
		else{
		z2=1;
		alert("Please, Enter a Valid Experience !");
		}
	}
	}
if(efforts.length==2 && z2!=1){
	 fst=efforts.charCodeAt(0);
	 scnd= efforts.charCodeAt(1);
	if(parseInt(efforts)>24 || !(fst>=48 && fst<=57) || !(scnd>=48 && scnd<=57)){
		if(parseInt(efforts)>24){
			z3=1;
			alert("There are only 24 hours in a Day! Invalid Effort");
		}else{
		z3=1;
		alert("Don't Fool me, Enter a Valid Effort !");
		}
	}
}
	if(z3!=1){
	var str=mail.substring(0,mail.length-10);
	str=str.toLowerCase();
	for(i=0;i<str.length;i++){
		if(!(str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122)){
			z4=1;
			alert("Wrong Mail id");
			break;
		}
	}
	}


if(z1!=1 && z2!=1 && z3!=1 && z4!=1 ){

if(b<=1){
dependency="TRB";
} else if(b>1 && b<=2){
dependency="B1";
} else if(b>2 && b<=4){
dependency="B2";
}
else if(b>4 && b<=7){
dependency="B3";
}
else if(b>7 && b<=10){
dependency="C1";
}
else if(b>10 && b<=14){
dependency="C2";
}
else if(b>14 && b<=35){
dependency="C3";
}
document.getElementById("Answer2").innerHTML= "1. You Are currently in "+ dependency + " Band."; 
var random = Math.random( );
document.getElementById("Answer3").innerHTML= "2. Your Percentage of Performance By manager is "+ (random.toFixed(2))*100 +".";

if(efforts<=4){
message_efforts="Half Day";
} else if(efforts>4 && efforts<=24 ){
message_efforts="Full Day";
}
document.getElementById("Answer4").innerHTML="3. You have made a "+ message_efforts + " as your number of Efforts Hours are " + efforts +" !";
document.getElementById("btn-id").style.display="none";
}
}
}

function clearance(){
	window.location.href="Login.html";
}
