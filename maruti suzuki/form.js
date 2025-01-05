function validation()
{
    if(document.formfill.Username.value=="")
    {
        document.getElementById("result").innerHTML="Enter username ";
        return false;
    }
    else if(document.formfill.Username.value.length<6)
    {
        document.getElementById("result").innerHTML="atleast six letter ";
        return false;
    }
    else if(document.formfill.Email.value=="")
    {
        document.getElementById("result").innerHTML="*Enter your Email account ";
        return false;
    }
    else if(document.formfill.password.value=="")
    {
        document.getElementById("result").innerHTML="*Enter your Password ";
        return false;
    }
    else if(document.formfill.password.value.length<6)
    {
        document.getElementById("result").innerHTML="* Password must have 5-digits ";
        return false;
    }
    
    else if(document.formfill.Cpassword.value=="")
    {
        document.getElementById("result").innerHTML="*confirm your no. ";
        return false;
    }
    else if(document.formfill.password.value !== document.formfill.Cpassword.value)
    {
        document.getElementById("result").innerHTML="*your numbers does not matched ";
        return false;
    }

    else if(document.formfill.password.value == document.formfill.Cpassword.value)
    {
       popup.classList.add("open-slide");
        return false;
    }
}
let popup=document.getElementById('popup');
function CloseSlide()
{
    popup.classList.remove("open-slide");
}

function addinvoice(){

    var name =document.formfill.Username.value;
    var email = document.formfill.Email.value;
    var no_ = document.formfill.password.value;
    var c_no = document.formfill.Cpassword.value;
 
    var tr = document.createElement('tr');
    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    
    td1.innerHTML=Username;
    td2.innerHTML=Email;
    td3.innerHTML=password;
    td4.innerHTML=Cpassword;

    document.getElementById("td1").appendChild(tr);
}


addinvoice();


