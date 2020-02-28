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



function isAlpha(evt){
      evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
     if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || (charCode==32)){
                    return true;
    
}
    return false;
}

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

document.getElementById('submit').addEventListener('click', send);
document.getElementById('input_9').onkeydown=function(e)
{
    if(e.keyCode==13){
    send();

    }
}
document.getElementById('input_1').onkeydown=function(e)
{
    if(e.keyCode==13){
    send();

    }
}

document.getElementById('input_2').onkeydown=function(e)
{
    if(e.keyCode==13){
    send();

    }
}

document.getElementById('input_3').onkeydown=function(e)
{
    if(e.keyCode==13){
    send();

    }
}

document.getElementById('input_4').onkeydown=function(e)
{
    if(e.keyCode==13){
    send();

    }
}

document.getElementById('input_5').onkeydown=function(e)
{
    if(e.keyCode==13){
    send();

    }
}

document.getElementById('input_6').onkeydown=function(e)
{
    if(e.keyCode==13){
    send();

    }
}

document.getElementById('input_7').onkeydown=function(e)
{
    if(e.keyCode==13){
    send();

    }
}

document.getElementById('input_8').onkeydown=function(e)
{
    if(e.keyCode==13){
    send();

    }
}

document.getElementById('input_10').onkeydown=function(e)
{
    if(e.keyCode==13){
    send();

    }
}

function send()
{
    var course_code;
    	//function GetSelectedText(){//get selected text from drop down box
				var e = document.getElementById("course");
				//var result = e.options[e.selectedIndex].text;//get selected text
    var result2 = e.options[e.selectedIndex].value;//get selected value
   // console.log(result2)
          //  console.log(result);
       // }
   // GetSelectedText();
    
    switch (result2)
        {
                
            case "none" : alert("Select Course");
                break;
            case "msc_cs":course_code=200;
                break;
            case "msc_bio":course_code=201;
                break;
            case "mcom":course_code=202;
                break;
            case "other":course_code=203;
                break;
            default: alert("select course");
        }
    //console.log(course_code);
    typeof course_code;

    var name=document.getElementById('input_1').value;
    var roll_no=document.getElementById('input_2').value;
    var sem=document.getElementById('input_3').value;
    var f_name=document.getElementById('input_4').value;
    var m_name=document.getElementById('input_5').value;
    var f_ph_no=document.getElementById('input_6').value;
    var s_ph_no=document.getElementById('input_10').value;
    var pass=document.getElementById('input_7').value;
    var re_pass=document.getElementById('input_8').value;
    var email=document.getElementById('input_9').value;
    let email_2=email.toLowerCase();
    let roll_no_1=parseInt(roll_no);
    let sem_1=parseInt(sem);
    let f_ph_no_1=parseInt(f_ph_no);
    let course_code_1=parseInt(course_code);
    
    
    let name_1="'"+name+"'"
    let roll_no_2="'"+roll_no+"'"
    let sem_2="'"+sem+"'"
    let f_name_2="'"+f_name+"'"
    let m_name_2="'"+m_name+"'"
    let f_ph_no_2="'"+f_ph_no+"'"
    let s_ph_no_2="'"+s_ph_no+"'"
    let course_code_2="'"+course_code+"'"
    let pass_2="'"+pass+"'"
    let email_1="'"+email_2+"'"
    
        var atposition=email.indexOf("@");  
var dotposition=email.lastIndexOf("."); 
    
    
    
    
    if(name!=="")
        {document.getElementById('warn').innerHTML=" "
    if(roll_no!=="" && roll_no.length>6 && roll_no.length<13)
        {document.getElementById('warn').innerHTML=" "
    if(sem!=="")
    {document.getElementById('warn').innerHTML=" "
     if(f_name!="")
         {
         if(m_name!="")
         {
    if(f_name!==m_name)
    {document.getElementById('warn').innerHTML=" "
    if(f_ph_no.length>9 && f_ph_no.length<11)
    {
        document.getElementById('warn').innerHTML=" "
        
    if(s_ph_no.length>9 && s_ph_no.length<11)
        {
    document.getElementById('warn').innerHTML=" "
    if(f_ph_no!==s_ph_no)
        { document.getElementById('warn').innerHTML=" "
    if(pass.length>7)
    { document.getElementById('warn').innerHTML=" "
    if(pass==re_pass)
    {
        document.getElementById('warn').innerHTML=" "
    if(atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length)
       {
           document.getElementById('warn').innerHTML="Enter Valid Email"
      // console.log("Not-valid");
       }
else{
 //code goes here after debugging
    const url = 'https://guarded-harbor-72259.herokuapp.com/post/student';
    let data = {
				"Student_Roll":roll_no_2,
                "Student_Name":name_1,
                "sem":sem_1,
                "Father_Name":f_name_2,
        "Course_Id":course_code_2,
        "Student_PHN":s_ph_no_2,
                "Mother_Name":m_name_2,
                "Father_PHN":f_ph_no_2,
                
        
        "password1":pass_2,
        "email":email_1,
};
var json = JSON.stringify(data);
       // console.log(json);
     document.getElementById('warn').innerHTML=" "
   // console.log('valid')
       

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
   //   console.log(fetchData.body);
   
});
    //console.log('k');
    //console.log(typeof course_code_2);
}
    }
    else{
        document.getElementById('warn').innerHTML="Password Do Not Match"
    }
    }
    else
        {
            document.getElementById('warn').innerHTML="Password Too Short"
        }
        }
    else
    {
    document.getElementById('warn').innerHTML="Phone Number Cannot be Same"    
    }
        }
    else
        {
            document.getElementById('warn').innerHTML="Enter Valid Student Phone Number"
        }
}
else{
    document.getElementById('warn').innerHTML="Enter Valid Parent Phone Number"
}
    }
    else{
        document.getElementById('warn').innerHTML="Parents Name Cannot Be The Same "
    }
    }
     else
         {
            document.getElementById('warn').innerHTML="Enter Mother Name" 
         }
         }
     else
     {
         document.getElementById('warn').innerHTML="Enter Father Name"
     }
     
    }
    
    else
        {
            document.getElementById('warn').innerHTML=" Enter Semester"
        }
        }
    else
        {
            document.getElementById('warn').innerHTML="Enter Correct Roll Number"
        }
        }
    else
        {
            document.getElementById('warn').innerHTML="Enter Name "
        }
    
}