const navToggle=document.querySelector('.nav-toggle');
navToggle.addEventListener('click',()=>{
     const headermenu=document.querySelector('ul.header--menu')

       const navicon=document.querySelectorAll('.nav-icon');
       /*show menu */
     headermenu.classList.toggle("show");
     
     navicon.forEach(icon=>{
        icon.classList.toggle("hidden");
     })

    });
