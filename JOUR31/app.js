const navSlide=function(){
    const burger=document.querySelector('.burger');
    const nav=document.querySelector('.navlinks')
    const navlinks= document.querySelectorAll('.navlinks a');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('burger-is-active')

        navlinks.forEach((link,index)=>{
        
            if(link.style.animation)
            {
                link.style.animation=""
            }
            else{
                link.style.animation=`slide 0.5s ease forwards ${index/7+ 0.2}s`;
            }
            
    })
    burger.classList.toggle('toggle')
})
}

navSlide();