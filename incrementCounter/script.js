let counters = document.querySelectorAll('.count');
        counters.forEach((count)=> {
            count.innerHTML = 0;
           let updateCounter = () =>{
            let targetCounter = +count.getAttribute('data-target');
            let starCounter = +count.innerHTML;
            let increment = targetCounter /100;
            if (starCounter < targetCounter){
                count.innerHTML = `${Math.round(increment + starCounter)}`;
                setTimeout(updateCounter,10);
            }else{
                count.innerHTML = +targetCounter;
            }
           }
            updateCounter();
        })