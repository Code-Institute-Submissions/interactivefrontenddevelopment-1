var myform = $("form#myform");
myform.submit(function(event){
	event.preventDefault();

  // Change to your service ID, or keep using the default service
  var service_id = "default_service";
  var template_id = "template_IwNYahr0";


function checkEmail(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!reg.test(email)) return false;
    return true;
}

  myform.find("button").text("We are sending your message in 3, 2, 1");
  emailjs.sendForm(service_id,template_id,myform[0])
  	.then(function(){ 
    	alert("Your message has been sent");
       myform.find("button").text("Contact Us!");
    }, function(err) {
       alert("Sorry, we could not send your email\r\n Response:\n " + JSON.stringify(err));
       myform.find("button").text("Send");
    });
  return false;
});

