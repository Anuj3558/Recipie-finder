
const observer = new IntersectionObserver((entriers) =>{
        entriers.forEach((entry) =>{
                console.log(entry)
                if(entry.isIntersecting ){
                             entry.target.classList.add('show');
                             
                }
                
                
        });
        
});
const hiddenElemnts = document.querySelectorAll('.hidden');
hiddenElemnts.forEach((el)=>observer.observe(el));
