function showContent(sectionId){
    document.querySelectorAll('.content').forEach(section=>{
        section.style.display='none';
    });

    const section=document.getElementById(sectionId);
    if(section){
        section.style.display='block';
        section.scrollIntoView({behavior: 'smooth', block:'start'});
    }
    
}



function closeSection(sectionId){
    const section=document.getElementById(sectionId);
    section.style.animation="fadeOut 0.5s ease-in-out";

    setTimeout(()=>{
        section.style.display='none';
    },250);
}

let slideIndex=0;
const slides=document.querySelectorAll(".slide");

function showSlide(index){
    if(index>=slides.length) slideIndex=0;
    if(index<0) slideIndex=slideIndex.length-1;
 
    slides.forEach(slide=>{
        slide.style.display="none";
    });

    slides[slideIndex].style.display="block";
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

function previousSlide(){
    slideIndex--;
    showSlide(slideIndex);
}

setInterval(nextSlide, 3000);
showSlide(slideIndex);




document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("-w4JXGwRZpnvSdUIw"); 
});

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const submitBtn= document.getElementById("submit-btn");

    submitBtn.textContent="Sending...";
    submitBtn.disabled=true;

    
    const templateParams = {
        to_name: name,
        from_email: email,
        message: message
    };


    
    emailjs.send("service_37w2n36", "template_jrcxy49", templateParams)
    .then((response) => {
        submitBtn.textContent="Sent!";
        alert("Email sent successfully!");
        console.log("Success:", response);

        setTimeout(() => {
            document.getElementById("contact-form").reset();
            submitBtn.textContent = "Send"; 
            submitBtn.disabled = false; 
        }, 1000);
    
    })
    .catch((error) => {
        submitBtn.textContent="Failed!"
        alert("Failed to send email. Please try again.");
        console.error("Error:", error);

        setTimeout(() => {
            document.getElementById("contact-form").reset();
            submitBtn.textContent = "Send"; // Reset button text
            submitBtn.disabled = false; // Re-enable button
        }, 1000);
    });

    
    document.getElementById("contact-form").reset();
});


