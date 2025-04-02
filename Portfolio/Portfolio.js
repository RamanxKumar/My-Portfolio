// Function for the tab 

function opentab(tabName) {
    const allTabs = document.querySelectorAll('.tab-contents');
    allTabs.forEach(tab => {
        tab.classList.remove('active-tab');
    });

    const allLinks = document.querySelectorAll('.tab-links');
    allLinks.forEach(link => {
        link.classList.remove('active-link');
    });

    document.getElementById(tabName).classList.add('active-tab');

    const activeLink = document.querySelector(`.tab-links[onclick="opentab('${tabName}')"]`);
    activeLink.classList.add('active-link');
}



  const scriptURL = 'https://script.google.com/macros/s/AKfycbw_-1dL53xfynNZ9m05s_eROxmZwg6XD30SvljbYS6EiHXwzfLciIlHIclYEe2FKY3tsQ/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        msg.innerHTML="Message sent successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },100)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })