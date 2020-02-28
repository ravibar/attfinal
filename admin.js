document.getElementById('logout').addEventListener('click',log)


document.getElementById('home').addEventListener('click',home)

function home()
{
    location.replace("select.html")
}

function log()
{
    location.replace("Admin_login.html")
}
   
document.getElementById('submit').addEventListener('click', send);
document.getElementById('input_7').onkeydown=function(e)
{
    if(e.keyCode==13){
    send();

    }
}

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function isAlpha(evt){
      evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
     if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || (charCode==32)){
                    return true;
    
}
    return false;
}

function send()
{
    var name=document.getElementById('input_1').value;
    /*let name2=name.toLowerCase();
    console.log(name2)*/
    var des=document.getElementById('input_2').value;
    let des2=des.toLowerCase();
    var dept=document.getElementById('input_3').value;
    let dept2=dept.toLowerCase();
    var addr=document.getElementById('input_4').value;
    let addr2=addr.toLowerCase()
    var email=document.getElementById('input_5').value;
    let email2=email.toLowerCase();
    var pass=document.getElementById('input_6').value;
    var ph_no=document.getElementById('input_7').value;
    var pass2=document.getElementById('input_8').value;
    
      var ph_no1="'"+ph_no+"'";
    var name1="'"+name+"'";
    var des1="'"+des2+"'";
    var dept1="'"+dept2+"'";
    var addr1="'"+addr2+"'";
    var email1="'"+email2+"'";
    var pass1="'"+pass+"'";
    
    
    
    var atposition=email.indexOf("@");  
var dotposition=email.lastIndexOf(".");  
   
           
    if(des2 !== dept2)
        {
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length)//email verification

{  
  alert("Please enter a valid e-mail address");   
  }  
    
    else{ document.getElementById('result').innerHTML=" "
        
    if(pass.length>7)//password greater than 7
        {document.getElementById('result').innerHTML=" "
    if(pass==pass2)//password verification
        {document.getElementById('result').innerHTML=" "
if(ph_no.length>9 && ph_no.length<11)//phone number length
    {
    document.getElementById('result').innerHTML=" "
    
 
   // console.log(ph_no.length);
    
 const url = 'https://guarded-harbor-72259.herokuapp.com/post/teacher';
// The data we are going to send in our request
let data = {
				"T_name":name1,
                "phone_Number":ph_no1,
                "desgination":des1,
                "email":email1,
                "password1":pass1,
                "address":addr1,
                "Dept":dept1
};
var json = JSON.stringify(data);
        //console.log(json);

// The parameters we are gonna pass to the fetch function
let fetchData = { 
    method: 'POST', 
    body: json,
    //mode: 'no-cors',
headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    }
};
fetch(url, fetchData)
.then(function() {
    // Handle response you get from the server
    alert("Data Sucessfully Added");
    document.location.reload(true);
      console.log(fetchData.body);
}); 
        
    }
    
    else
        {
            
            document.getElementById('result').innerHTML="Invalid Phone Number"
        }
        
        }
    else
        {
            
             document.getElementById('result').innerHTML="Passwords Do Not Match"
        }
    
    }
        else
            {
                 document.getElementById('result').innerHTML="Password is Too small Enter more than 8"
                
            }
    }
        }
    else
        {
            document.getElementById('result').innerHTML="Designation and Department cannot be the same "
        }
    
       
    
}






