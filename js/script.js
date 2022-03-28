let contaCento = 100;
const conta = document.getElementById('conta');
const row = document.createElement('div');
const title = document.createElement('h1');
title.setAttribute('class', 'title');
title.innerHTML = 'FizzBuzzDom';
row.append(title);



row.setAttribute('class', 'row g-3 justify-content-center');
conta.append(row);



for (let a = 1; a <= 100; a++){     
    const col = document.createElement('div');
    col.setAttribute('class', "col-12 col-sm-6 col-md-4 col-lg-2 col-xl-2");
    const card = document.createElement('div');
    
    
    
    if(a % 3 === 0 && a % 5 === 0) {
        card.setAttribute('class', 'color-card-4');
        card.innerHTML = 'fizzbuzz';
        col.append(card);
        
        
        
        
    }else if(a % 3 === 0){
        card.innerHTML = 'buzz';
        card.setAttribute('class', 'color-card-2 ');
        col.append(card);
        
        
        
        
    }else if(a % 5 === 0){
        card.setAttribute('class', 'color-card-3');
        card.innerHTML = 'buzz';
        col.append(card);

    }else{
        card.setAttribute('class', 'color-card-1');
        card.innerHTML = a;
        col.append(card);
        
    }
    console.log(a);
    
    



    row.append(col);

}