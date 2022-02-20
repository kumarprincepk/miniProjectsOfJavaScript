const cont = document.querySelector('#container');

        const request = new XMLHttpRequest();
        request.open('GET', "https://restcountries.com/v2/name/india?fullText=true");
        request.send();

        // to get the respose
        request.addEventListener('load', function(){
            console.log(this.responseText);
            const [get_data] = JSON.parse(this.responseText);
            // console.log(get_data.flags);
            const htmlData = `<div id="card">
            <article class="card">
                <div class="card-body">
                    <img src="${get_data.flag}" alt="" class="card-body-img">
                    <h1 class="card-body-title">${get_data.name}</h1>
                    <p class="card-body-text">capital : ${get_data.capital}</p>
                </div>
                <div class="card-footer">
                    <div class="card-footer-social">
                        <h3>${get_data.nativeName}</h3>
                        <p>Native Language</p>
                    </div>
                    <div class="card-footer-social">
                        <h3>${get_data.population}</h3>
                        <p>Population</p>
                    </div>
                    <div class="card-footer-social">
                        <h3>${get_data.area}</h3>
                        <p>Area</p>
                    </div>
                </div>
            </article>
        </div>`;

        cont.insertAdjacentHTML("afterbegin", htmlData);
        // cont.insertAdjacentElementH("afterbegin", htmlData);
        })