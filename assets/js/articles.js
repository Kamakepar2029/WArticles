fetch('/ksv/articles/articles.xml')
    .then((response) => {
        return response;
    })
    .then((data) => {
        let rep = data;
        alld = data.split('<item>');
        document.getElementsByClassName('body')[0].innerHTML = '';
        for (let k in alld){
            let y = document.createElement('div');
            y.className = 'body__warticle';
            
        }
    });