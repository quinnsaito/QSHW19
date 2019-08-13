function sliceScroll(){
    var sliceBody = document.querySelector('.sliceBody');
    var introPosition = sliceBody.getBoundingClientRect().top;
  
    var screenPosition = window.innerHeight / 1.3 ;

    if(introPosition < screenPosition){
        sliceBody.classList.add('appearSlice');
    }
}

    window.addEventListener('scroll',sliceScroll); 



function ocScroll(){
    var ockbfBody = document.querySelector('.ockbfBody');
    var introPosition = ockbfBody.getBoundingClientRect().top; 
    var screenPosition = window.innerHeight / 1.3 ;
   
        if(introPosition < screenPosition){
         ockbfBody.classList.add('appearOc');
     }
   }
   window.addEventListener('scroll',ocScroll);
      
   