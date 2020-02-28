/*function mouseOver()

{
document.querySelector('#login-btn').addEventListener(mouseover,mouseOver1()
        {                                                                                
 document.querySelector('#login-btn').mouseover.style.backgroundColor='#ffffff';
         })
}

mouseOver();*/
document.getElementById('login-btn').onmouseover=function()
{
    this.style.backgroundColor="#ffffff";
}

