const navToggle=document.querySelector('.nav-toggle');
  const navlinks=document.querySelectorAll('.header--menu>li>a');
  
navToggle.addEventListener('click',changemenustate);

    function changemenustate(){
      const headermenu=document.querySelector('ul.header--menu')

      const navicon=document.querySelectorAll('.nav-icon');
      /*show menu */
    headermenu.classList.toggle("show");
    
    navicon.forEach(icon=>{
       icon.classList.toggle("hidden");
    })
    }

    function fixednavbar(){
         
        const headerdom= document.querySelector('.navbar-fixed');
          const navheight=headerdom.clientHeight + 50;
         //  console.log(navheight);
               
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


    function onmenuclick(){
      //   console.log(navlinks);

        for(let i=0;i<navlinks.length;i++){
           navlinks[i].addEventListener('click',changemenustate)
        }
    }


    fixednavbar()
    onmenuclick()

