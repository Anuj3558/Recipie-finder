const observer = new IntersectionObserver((entriers) = >{
        entries.forEach(entry) = >{
                console.log(entry)
                if(entry.isIntersecting){
                             entry.target.classList.add('show');
                }
                else{
                          enrty.traget.classList.remove('show');
                }
        });
});
const hiddenElemnts = document.querySelectorAll('.hidden');
hiddenElemnts.forEach((el)=>observer.observer(el));
