let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname){
    for(let tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for( let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

let sidemeu = document.getElementById("sidemenu");

function openmenu(){
    sidemeu.style.right = "0";
    // document.h
}
function closemenu(){
    sidemeu.style.right = "-200px";  
}

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzejes69vYwEEL7VLtW68fLPASswi9K8bm_g2VMWJEMg_waf2KyU0PZneXk06srRb03nA/exec'
  const form = document.forms['submit-to-google-sheet']
   const msg = document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{ msg.innerHTML = "Message Sent Successfully"
    setTimeout(function(){
        msg.innerHTML = ""
    },5000)
    form.reset()
})
      .catch(error => console.error('Error!', error.message))
  })