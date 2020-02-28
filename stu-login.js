document.getElementById('login-btn').addEventListener('click',send)

 var uname=document.getElementById('input_1').value;
    var pass=document.getElementById('input_2').value;
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

function send()
{
   var uname=document.getElementById('input_1').value;
    var pass=document.getElementById('input_2').value;
  //  console.log(uid)
   // console.log(pass)
    var atposition=uname.indexOf("@");  
var dotposition=uname.lastIndexOf(".");
    if(uname!==" " || pass!==" ")
        {
              
   if (atposition<1 || dotposition<atposition+2 || dotposition+2>=uname.length)

{  
  document.getElementById('result').innerHTML="Enter valid username" 
  } 
            
            else{
      
  //console.log("hmmmm")
                var request = new XMLHttpRequest()

request.open('GET', 'https://guarded-harbor-72259.herokuapp.com/login/student/'+uname+'/'+pass, true)//connecting to api
request.onload = function() {

  var data = JSON.parse(this.response)//getting data
  if (request.status >= 200 && request.status < 400)//since 404 is an error that the page is not fount if the error code lies between 200 and 400 this code will run
{
   // console.log(this.responseText);
       if (Object.keys(data).length === 0)
    
    {
      //the response is null
        // console.log("no json")
         document.getElementById('result').innerHTML="Enter correct details"
        
 }
 else {
      //the response of JSON is not null
  document.getElementById('login_head').style.display="none"
      document.getElementById('login_form').parentNode.removeChild(document.getElementById('login_form')); 
     
     document.getElementById("logout-btn").style.display = "block";
     
     
      document.getElementById('name_id').innerHTML=data.map(getName);
    //let namee=data.map(getName);
          document.getElementById("name_id").style.display = "block";
let namee1=document.getElementById('name_id').textContent;
     namee1.toUpperCase();
     document.getElementById('name_id').innerHTML=""+namee1
   // console.log(namee)
    function getName(item)
    {
        var name=[item.Student_Name];
        return name;
    }
    
     document.getElementById('att_id').innerHTML=data.map(getId);
     document.getElementById('att_id').style.display="block";
     let namee=document.getElementById('att_id').textContent;
     console.log(namee)
     function getId(item)
     {
         var id=[item.Attendence_id];
         return id;
     }
    if(namee!==" ")
        {
        

   // console.log("another step")
   // var info_1=document.getElementById('att_id').value;
    //console.log(info_1);
     var request1 = new XMLHttpRequest()

request1.open('GET', 'https://guarded-harbor-72259.herokuapp.com/student/attData/'+namee, true)//connecting to api
request1.onload = function() {

  var data1 = JSON.parse(this.response)//getting data
  if (request1.status >= 200 && request1.status < 400)//since 404 is an error that the page is not found if the error code lies between 200 and 400 this code will run
{
    //console.log(this.responseText);
    
    document.getElementById('table').innerHTML = json2table(data1,'table');
     document.getElementById("table").style.display = "block"
    document.getElementById('grad').style.height="auto";
    document.getElementById('result').style.display='none';

      //console.log('hmm')

      } 
     else {
    console.log('error')
  }
   
    
   
}
request1.send()

        
}
     
     
     
     
     
     
    
     
 }
   
  } 
    
    else {
    console.log('error')
        document.getElementById('result').innerHTML="Enter Correct Details"
  }
}
    request.send()
            
        }
  
        }
     else
        {
            document.getElementById('result').innerHTML="Cannot be Empty"
        }

    
}






  




function json2table(json, classes)
    {
  var cols = Object.keys(json[0]);
  
  var headerRow = '';
  var bodyRows = '';
  
  classes = classes || '';

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  cols.map(function(col) {
    headerRow += '<th>' + capitalizeFirstLetter(col) + '</th>';
  });

  json.map(function(row) {
    bodyRows += '<tr>';

    cols.map(function(colName) {
      bodyRows += '<td>' + row[colName] + '</td>';
    })

    bodyRows += '</tr>';
  });

  return '<table class="' +
         classes +
         '"><thead><tr>' +
         headerRow +
         '</tr></thead><tbody>' +
         bodyRows +
         '</tbody></table>';
}









