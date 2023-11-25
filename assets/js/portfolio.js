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

    function fixednavbar(){
         
        const headerdom= document.querySelector('.navbar-fixed');
          const navheight=headerdom.clientHeight + 50;
          console.log(navheight);
               
         window.addEventListener('scroll',()=>{

            let scroll=window.pageYOffset || document.documentElement.scrollTop;
             console.log(scroll);

             if(scroll>=navheight){
              headerdom.classList.add('.navbar-fixed')
             }
             else{
              headerdom.classList.remove('.navbar-fixed');
             }
          })
    }
    fixednavbar()
