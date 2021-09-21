a('#free_plan').onclick = function(){
    let all = document.getElementsByClassName('plans__box__content__right__box__item');
    for (let k in all){
        let elem = all[k];
        if (elem.className){
            elem.className = 'plans__box__content__right__box__item';
            //console.log(k);
            //console.log(elem.className);
            elem.getElementsByClassName('checkbox_new')[0].className = 'checkbox_new';
        }
    }
    this.className += ' checked';
    a('.plans__box__content__left__box').innerHTML = `<div class="plans__box__content__left__box__title">Availiable on Free Plan</div>
                        <div class="plans__box__content__left__box__item">
                            <div class="plans__box__content__left__box__item__text">3 Free WArticles</div>
                            <div class="plans__box__content__left__box__item__char" style="color:rgb(6, 255, 6);">✓</div>
                        </div>
                        <div class="plans__box__content__left__box__item">
                            <div class="plans__box__content__left__box__item__text">Free Custom Domain</div>
                            <div class="plans__box__content__left__box__item__char" style="color:rgb(6, 255, 6);">✓</div>
                        </div>
                        <div class="plans__box__content__left__box__item">
                            <div class="plans__box__content__left__box__item__text">Only Document Team</div>
                            <div class="plans__box__content__left__box__item__char" style="color:rgb(6, 255, 6);">✓</div>
                        </div>
                        <div class="plans__box__content__left__box__item">
                            <div class="plans__box__content__left__box__item__text">48 hour Support</div>
                            <div class="plans__box__content__left__box__item__char" style="color:rgb(6, 255, 6);">✓</div>
                        </div>
                        <div class="plans__box__content__left__box__item">
                            <div class="plans__box__content__left__box__item__text">Bind your own domain</div>
                            <div class="plans__box__content__left__box__item__char" style="color:rgb(255, 24 ,24)">⨯</div>
                        </div>`;
    this.getElementsByClassName('checkbox_new')[0].className += ' checked';
}

a('#base_plan').onclick = function(){
    let all = document.getElementsByClassName('plans__box__content__right__box__item');
    for (let k in all){
        let elem = all[k];
        if (elem.className){
            elem.className = 'plans__box__content__right__box__item';
            //console.log(k);
            //console.log(elem.className);
            elem.getElementsByClassName('checkbox_new')[0].className = 'checkbox_new';
        }
    }
    this.className += ' checked';
    a('.plans__box__content__left__box').innerHTML = `<div class="plans__box__content__left__box__title">Availiable on Free Plan</div>
                        <div class="plans__box__content__left__box__item">
                            <div class="plans__box__content__left__box__item__text">50 WArticles</div>
                            <div class="plans__box__content__left__box__item__char" style="color:rgb(6, 255, 6);">✓</div>
                        </div>
                        <div class="plans__box__content__left__box__item">
                            <div class="plans__box__content__left__box__item__text">Free Custom Domain</div>
                            <div class="plans__box__content__left__box__item__char" style="color:rgb(6, 255, 6);">✓</div>
                        </div>
                        <div class="plans__box__content__left__box__item">
                            <div class="plans__box__content__left__box__item__text">Unlimited Print Options</div>
                            <div class="plans__box__content__left__box__item__char" style="color:rgb(6, 255, 6);">✓</div>
                        </div>
                        <div class="plans__box__content__left__box__item">
                            <div class="plans__box__content__left__box__item__text">24 hour Support</div>
                            <div class="plans__box__content__left__box__item__char" style="color:rgb(6, 255, 6);">✓</div>
                        </div>
                        <div class="plans__box__content__left__box__item">
                            <div class="plans__box__content__left__box__item__text">Bind your 5 own domains</div>
                            <div class="plans__box__content__left__box__item__char" style="color:rgb(6, 255, 6);">✓</div>
                        </div>`;
    this.getElementsByClassName('checkbox_new')[0].className += ' checked';
}

a('#pro_plan').onclick = function(){
    let all = document.getElementsByClassName('plans__box__content__right__box__item');
    for (let k in all){
        let elem = all[k];
        if (elem.className){
            elem.className = 'plans__box__content__right__box__item';
            //console.log(k);
            //console.log(elem.className);
            elem.getElementsByClassName('checkbox_new')[0].className = 'checkbox_new';
        }
    }
    this.className += ' checked';
    a('.plans__box__content__left__box').innerHTML = `<div class="plans__box__content__left__box__title">Availiable on Free Plan</div>
                        <div class="plans__box__content__left__box__item">
                            <div class="plans__box__content__left__box__item__text">∞ WArticles</div>
                            <div class="plans__box__content__left__box__item__char" style="color:rgb(6, 255, 6);">✓</div>
                        </div>
                        <div class="plans__box__content__left__box__item">
                            <div class="plans__box__content__left__box__item__text">Free Custom Domain</div>
                            <div class="plans__box__content__left__box__item__char" style="color:rgb(6, 255, 6);">✓</div>
                        </div>
                        <div class="plans__box__content__left__box__item">
                            <div class="plans__box__content__left__box__item__text">Unlimited Print Options</div>
                            <div class="plans__box__content__left__box__item__char" style="color:rgb(6, 255, 6);">✓</div>
                        </div>
                        <div class="plans__box__content__left__box__item">
                            <div class="plans__box__content__left__box__item__text">12 hour Support</div>
                            <div class="plans__box__content__left__box__item__char" style="color:rgb(6, 255, 6);">✓</div>
                        </div>
                        <div class="plans__box__content__left__box__item">
                            <div class="plans__box__content__left__box__item__text">Bind your ∞ own domains</div>
                            <div class="plans__box__content__left__box__item__char" style="color:rgb(6, 255, 6);">✓</div>
                        </div>`;
    this.getElementsByClassName('checkbox_new')[0].className += ' checked';
}