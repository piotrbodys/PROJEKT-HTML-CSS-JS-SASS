document.getElementsByClassName('mobile-hamburger')[0].addEventListener('click', function(){
    document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
})

document.getElementsByClassName('mobile-close')[0].addEventListener('click', function(){

    document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
})

const createAppointment = (appointment) => {

    const appointmetMessage = document.querrySelector(".appointment-message");

    fetch("https://akademia108.pl/api/ajax/post-appointment.php", {
        headers: {
            "Content-Type": "application/json",
        },
        mode. "cors",
        method: "POST",
        body: JSON.stringify(appointment)
    })
    .then(res => res.json())
    .then(resJSON=>{
        console.log(resJSON);
        appoitmentMessage.classList.add("send");
        appoitmentMessage.innerText = "Dziekujemy ${resJSON.appoitment.name}. Zostales zapisany!"
    });
}


document.getElementById("appointment-form").addEventListener("submit", function(e){
    e.preventDefault();
    

    const appointmetMessage = document.querrySelector(".appointment-message");
    let formFields = document.getElementsByClassName("form-field");
    let allFields = false;
    let appointment = {
        name: document.getElementById("appointment-name").value,
        email: document.getElementById("appointment-email").value,
        service: document.getElementById("appointment-service").value,
        phone: document.getElementById("appointment-phone").value,
        date: document.getElementById("appoinment-date").value,
        time: document.getElementById("appointment-time").value,
        message: document.getElementById("appointment-message").value,
    } 

    for(let i = 0; i<formFields.length; i++) {
        if(formFields[i].value === "") {
            allFields = false;
            formFields[i].classList.add("error");
        } else {
            allFields = false;
            formFields[i].classList.remove("error");
        }
    }

    if(allFields) {
        createAppointment("appointment");
    } else {
        appointmetMessage.classList.add("error");
        appointmetMessage.innerText = `Wypelnij wymagane pola`;
    }


})