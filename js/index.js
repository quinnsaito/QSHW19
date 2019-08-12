function scrollAppear(){
    var sliceBody = document.querySelector('.sliceBody');
    var introPosition = sliceBody.getBoundingClientRect().top;
  
    var screenPosition = window.innerHeight / 1.3 ;

    if(introPosition < screenPosition){
        sliceBody.classList.add('appearSlice');
    }
}

    window.addEventListener('scroll',scrollAppear);


//function scrollAppear(){
  //   var ockbfBody = document.querySelector('.ockbfBody');
 //    var introPosition = ockbfBody.getBoundingClientRect().top; 
   //  var screenPosition = window.innerHeight / 1.3 ;

     //if(introPosition < screenPosition){
      //   ockbfBody.classList.add('appearOc');
  //   }
    //}

     //window.addEventListener('scroll',scrollAppear);
     //fr tho y does this one not work its cool i guess

