document.getElementById('admin-btn').addEventListener('click',admin)
document.getElementById('teach-btn').addEventListener('click',teach)
document.getElementById('stu-btn').addEventListener('click',stu)


function admin()
{
    location.replace('Admin_login.html')
}

function teach()
{
    location.replace('Home.html')
}

function stu()
{
    location.replace('student_login.html')
}
