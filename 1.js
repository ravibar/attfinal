document.getElementById('submit').addEventListener('click', call);

document.getElementById('uid').onkeydown=function(e)
{
    if(e.keyCode==13){
    call();

    }
}


function call()
{
    var uid=document.getElementById('uid').value;
    var uname=document.getElementById('uname').value;
       
        /*if(uid.length>10)
            {
                alert("fu");
             }
        if(uname.length>50)
            {
                alert('fu');
            }*/
       /* console.log(uid)  //log uid aqnd uname to the console
        console.log(uname)
    
        document.getElementById('uid').value=' ';//setting uid and uname values to blank
        document.getElementById('uname').value=' ';*/
        

    
var request = new XMLHttpRequest()

request.open('GET', 'https://guarded-harbor-72259.herokuapp.com/login/student/'+uname+'/'+uid, true)//connecting to api
request.onload = function() {

  var data = JSON.parse(this.response)//getting data
  if (request.status >= 200 && request.status < 400)//since 404 is an error that the page is not fount if the error code lies between 200 and 400 this code will run
{
   // console.log(this.responseText);
  //  console.log(Object.keys(data[0]))
    document.getElementById('tableGoesHere').innerHTML = json2table(data,'table');
    
    document.getElementById('test').innerHTML=data.map(getName);
    //let namee=data.map(getName);
let namee=document.getElementById('test').textContent;
    console.log(namee)
    function getName(item)
    {
        var name=[item.Attendence_id];
        return name;
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
   // console.log(this.responseText);
    document.getElementById('table').innerHTML = json2table(data1,'table');
    document.getElementById('button_att').innerHTML='<input type="button" id=""get_att" value="Download Attendance">'
    document.getElementById('button_att').addEventListener('click',getAtt)
//JSONToCSVConvertor(data1, "Student", true);
      //console.log('hmm')
   // console.log(data1[0].Student_Name)
     function getName(item)
    {
        var name=[item.Student_Name];
        return name;
    }
   // var name=data.map(getName);
    //console.log(name)
    document.getElementById('test2').innerHTML=data.map(getName)
     document.getElementById('test2').style.display="none";
     let namee=document.getElementById('test2').textContent;
     console.log(namee)
    function getAtt()
    {
    JSONToCSVConvertor(data1, namee, true);
    }

      } 
     else {
    console.log('error')
  }
   
    
   
}

request1.send()

        
}
      
   
  } 
    
    else {
    console.log('error')
  }
}


request.send()   
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
    var fileName = "Attendance_";
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

