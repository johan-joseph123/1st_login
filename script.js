function login(event){
    console.log("hi")
    event.preventDefault();
    const x=document.getElementById("user").value;
    const y=document.getElementById("Welcome");
    y.textContent="Welcome"+x;
    y.style.display='block';

}