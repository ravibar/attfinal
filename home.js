document.getElementById('submit').addEventListener('click', call);

document.getElementById('uid').onkeydown=function(e)
{
    if(e.keyCode==13){
    call();

    }
}
document.getElementById('uname').onkeydown=function(e)
{
    if(e.keyCode==13){
    call();

    }
}
 



function call()
{
       var uid=document.getElementById('uid').value;
    var uname=document.getElementById('uname').value;
       
     
    var atposition=uname.indexOf("@");  
var dotposition=uname.lastIndexOf(".");  
    if(uid!==" " && uname!==" ")
        {
    
   if (atposition<1 || dotposition<atposition+2 || dotposition+2>=uname.length)

{  
  document.getElementById('result').innerHTML="Enter valid username" 
  } 
else{
    
    if(uid.length>7){
 

    
var request = new XMLHttpRequest()

request.open('GET', 'https://guarded-harbor-72259.herokuapp.com/login/staff/'+uname+'/'+uid, true)//connecting to api
request.onload = function() {

  var data = JSON.parse(this.response)//getting data
  if (request.status >= 200 && request.status < 400)//since 404 is an error that the page is not fount if the error code lies between 200 and 400 this code will run
{

    if (Object.keys(data).length === 0)
    
    {
      //the response is null
        // console.log("no json")
         document.getElementById('result').innerHTML="Enter correct details"
        
 }
 else {
      //the response of JSON is not null
     console.log(data);
     location.replace("form.html")
 }
   
  } 
    
    else {
    console.log('error')
        document.getElementById('result').innerHTML="Enter Correct Details"
  }
}

request.send()   
}
    else
        {
            document.getElementById('result').innerHTML="Enter password again "
        }
}
        }
    else
        {
            document.getElementById('result').innerHTML="Cannot be Empty"
        }

}


