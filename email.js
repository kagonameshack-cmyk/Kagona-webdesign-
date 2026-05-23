emailjs.init({
    publicKey:"YOUR_PUBLIC_KEY",
});

const form =
document.getElementById("contact-form");

form.addEventListener("submit",
function(e){

e.preventDefault();

emailjs.sendForm(
    "service_hcx599e",
    "template_vpkudn4",
    this
)

.then(function(){

window.location.href =
"success.html";

})

.catch(function(error){

alert(
"Something went wrong. Please try again."
);

console.log(error);

});

});
