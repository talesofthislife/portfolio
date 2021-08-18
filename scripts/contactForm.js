document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('form').addEventListener('submit',sendMail);
})



async function sendMail(event){
    event.preventDefault();
    const email = DOMPurify.sanitize(document.getElementById('email').value);
    const fullName = DOMPurify.sanitize(document.getElementById('fullName').value);
    const message = DOMPurify.sanitize(document.getElementById('message').value);
    document.getElementById('fullName').value ="";
    document.getElementById('email').value ="";
    document.getElementById('message').value ="";

    try{
        await Email.send({
            SecureToken: '4e6a1939-9761-42f3-94bc-bc7e748567b8',
            To : 'hello@marianikolaidou.dev',
            From : "contactform@marianikolaidou.dev",
            Subject : "You received a new message from your contact form",
            Body : `<p>Full name: ${fullName} <br><br> Email address: ${email} <br><br> Message: ${message} <br><br></p>`
        })
        
        
        const alertElement = document.createElement('div')
        alertElement.innerHTML = '<div class="alert alert-success'+' alert-dismissible" role="alert">' + 'Email sent correctly.' + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
        let alertPlaceholder = document.getElementById('alertPlaceholder')
        alertPlaceholder.append(alertElement);
    }
    catch(e){
        const wrapper = document.createElement('div');
        wrapper.innerHTML = '<div class="alert alert-danger'+' alert-dismissible" role="alert">' + 'Email was not sent. Please try again later.' + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
        let alertPlaceholder = document.getElementById('alertPlaceholder');
        alertPlaceholder.append(wrapper);
    }
    
}