function check () {
    if (document.form.fname.value==""){
        alert("First name required");
        document.form.fname.focus();
        return false;
    } 
    if (document.form.lname.value==""){
        alert("Last name required");
        document.form.lname.focus();
        return false;
    }
    if (document.form.comment.value==""){
        alert("Any comments?");
        document.form.comment.focus();
        return false;
    }
    if (document.form.thoughts.value=""){
        alert("Input your thoughts");
        document.form.thoughts.focus();
        return false;
    }
    else{
        alert("Thanks for your input!");
        return(true);
        
    }
}
function copy(){
    alert("Email request sent");
}
function done(){
    if (document.forms.names.value==""){
        alert("Input your name");
        document.forms.names.focus();
        return false;
    }
    if(document.forms.email.value==""){
        alert("Input your email");
        document.forms.names.focus();
        return false;
    }
    if(document.forms.caretaker.value=="none"){
        alert("Choose a caretaker");
        document.forms.names.focus();
        return false;
    }
    if(document.forms.opinions.value==""){
        alert("Give us feedback!");
        document.forms.names.focus();
        return false;
    }
    else{
        alert("Confirmed. Thank You for your review!");
        return (true);
    }
    
}