function showContent(sectionId){
    document.querySelectorAll('.content').forEach(section=>{
        section.computedStyleMap.display='none';
    });

    const section=document.getElementById(sectionId);
    section.style.display='block';
    section.scrollIntoView({behavior: 'smooth', block:'start'});
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
 // slideIndex=index;
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



// Initialize EmailJS
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("-w4JXGwRZpnvSdUIw"); 
});

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
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


    // Send email using EmailJS
    emailjs.send("service_37w2n36", "template_jrcxy49", templateParams)
    .then((response) => {
        submitBtn.textContent="Sent!";
        alert("Email sent successfully!");
        console.log("Success:", response);

        setTimeout(() => {
            document.getElementById("contact-form").reset();
            submitBtn.textContent = "Send"; // Reset button text
            submitBtn.disabled = false; // Re-enable button
        }, 1000);
    
    })
    .catch((error) => {
        alert("Failed to send email. Please try again.");
        console.error("Error:", error);
    });

    // Clear form fields after sending the message
    document.getElementById("contact-form").reset();
});


