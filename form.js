document.getElementById('submit').addEventListener('click', send);
document.getElementById('logout_1').addEventListener('click',home)


function home()
{
    location.replace('Home.html')
}
/*document.getElementById('att_id').onkeydown=function(e)
{
    if(e.keyCode==13){
    info();

    }
}*/
function info()
{
   // console.log("another step")
   // var info_1=document.getElementById('att_id').value;
       var e = document.getElementById("select");
				
    var result2 = e.options[e.selectedIndex].value;
    //console.log(info_1);
     if(result2!=="none")
         {
     var request = new XMLHttpRequest()

request.open('GET', 'https://guarded-harbor-72259.herokuapp.com/student/attData/'+result2, true)//connecting to api
request.onload = function() {

  var data = JSON.parse(this.response)//getting data
  if (request.status >= 200 && request.status < 400)//since 404 is an error that the page is not found if the error code lies between 200 and 400 this code will run
{
    //console.log(this.responseText);
    document.getElementById('table').innerHTML = json2table(data,'table');
    document.getElementById('button_att').innerHTML='<input type="button" id=""get_att" value="Download Attendance">'

    
}
    else {
    console.log('error')
  }
}
request.send()
    
         }
    else
        {
           alert("Enter Attendace ID")
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


function send()
{
   
    var e = document.getElementById("course");
				
    var result2 = e.options[e.selectedIndex].value;
    //console.log(result2)
   
    
    var g= document.getElementById("sem");

    var sem_1 = g.options[g.selectedIndex].value;
    //console.log(sem_1)
    
    
    if(result2!=="none")
        {
            document.getElementById('result').innerHTML=" "
            if(sem_1!=="none")
                {
                    document.getElementById('result').innerHTML=" "
                    
                    //console.log(result2)
                    //console.log(sem_1)
                    
                    var request = new XMLHttpRequest()

request.open('GET', 'https://guarded-harbor-72259.herokuapp.com/getStudents/'+sem_1+'/'+result2, true)//connecting to api
request.onload = function() {

  var data1 = JSON.parse(this.response)//getting data
  if (request.status >= 200 && request.status < 400)//since 404 is an error that the page is not found if the error code lies between 200 and 400 this code will run
{
    //console.log(this.responseText);
    document.getElementById('tableGoesHere').innerHTML = json2table(data1,'table');
    
 
    

      
json2table(data1,'table')
    document.getElementById('more').innerHTML=' <input type="button" value="More Details" id="detail">'
    document.getElementById('detail').addEventListener('click',more)

function more()
{
    //console.log("welcome to new era")
    document.getElementById('detail_2').innerHTML='<form id="form_2"><label id="enter_att_id">Enter Attendance ID</label><br><br> <label id="att_1"> Attendance ID : </label><select id="select"><option value="none">--SELECT--</option></select><br><br><input type="button" value="INFO" id="info_1" onClick="return info()">'
    
     var ids=[];
    var select=document.getElementById('select');
    for(var i=0; i< data1.length;i++)
        {
            
            var counter=data1[i]
            ids.push(counter.Attendence_id);
          //  console.log(counter.Student_Name);
            //console.log(counter.Attendence_id)
           // console.log(ids[i])
            
            var opt=document.createElement('option')
            opt.value=ids[i]
            opt.innerHTML=ids[i]
           // console.log(opt)
            select.appendChild(opt);
          //  console.log(counter.Student_Name)

        }
   // print()
    //console.log(ids);

}
    
    
    
   //document.getElementById('att_id').addEventListener("keypress",isNumber(event))
// document.getElementById('info_1').addEventListener('click',info)


  } 
     else {
    console.log('error')
  }
   
    
   
}
request.send()  
                    
                    
                }
            else
                {
                    document.getElementById('result').innerHTML="Enter Semester"
                }
        }
    else
        {
            document.getElementById('result').innerHTML="Enter Course"
        }
}



function json2table(json, classes)//to create table from the json obtained from the api 
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
         '</tbody> </table>';
}


function JSONToCSVConvertor(JSONData, ReportTitle, ShowLabel) {
    //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
    var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
    
    var CSV = 'sep=,' + '\r\n\n';

    //This condition will generate the Label/Header
    if (ShowLabel) {
        var row = "";
        
        //This loop will extract the label from 1st index of on array
        for (var index in arrData[0]) {
            
            //Now convert each value to string and comma-seprated
            row += index + ',';
        }

        row = row.slice(0, -1);
        
        //append Label row with line break
        CSV += row + '\r\n';
    }
    
    //1st loop is to extract each row
    for (var i = 0; i < arrData.length; i++) {
        var row = "";
        
        //2nd loop will extract each column and convert it in string comma-seprated
        for (var index in arrData[i]) {
            row += '"' + arrData[i][index] + '",';
        }

        row.slice(0, row.length - 1);
        
        //add a line break after each row
        CSV += row + '\r\n';
    }

    if (CSV == '') {        
        alert("Invalid data");
        return;
    }   
    
    //Generate a file name
    var fileName = "";
    //this will remove the blank-spaces from the title and replace it with an underscore
    fileName += ReportTitle.replace(/ /g,"_");   
    
    //Initialize file format you want csv or xls
    var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);
    
    // Now the little tricky part.
    // you can use either>> window.open(uri);
    // but this will not work in some browsers
    // or you will not get the correct file extension    
    
    //this trick will generate a temp <a /> tag
    var link = document.createElement("a");    
    link.href = uri;
    
    //set the visibility hidden so it will not effect on your web-layout
    link.style = "visibility:hidden";
    link.download = fileName + ".csv";
    
    //this part will append the anchor tag and remove it after automatic click
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


    document.getElementById('button_att').addEventListener('click',print)
    function print()
{
      var e = document.getElementById("select");
				
    var result2 = e.options[e.selectedIndex].value;
    //console.log(info_1);
     if(result2!=="none")
         {
             
                    var request = new XMLHttpRequest()

    request.open('GET', 'https://guarded-harbor-72259.herokuapp.com/student/attData/'+result2, true)//connecting to api
request.onload = function() {

  var data2 = JSON.parse(this.response)//getting data
  if (request.status >= 200 && request.status < 400)//since 404 is an error that the page is not found if the error code lies between 200 and 400 this code will run
{
    
    JSONToCSVConvertor(data2,"Attendance_"+result2, true);
        //alert('Excel Downloaded');
   // document.location.reload(true)
   data2=new Object();
   // console.log(data2)
}
     else {
    console.log('error')
  }
    
}
   request.send()
}
    else{
        alert('select a ID')
    }
}
          


