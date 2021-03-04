document.addEventListener('DOMContentLoaded', function() {
    let div = document.createElement('div');
    div.className = 'header-container';
    document.body.appendChild(div);
    
    let h1 = document.createElement('h1');
    h1.className ='h1';
    let h1Text = document.createTextNode('This is an h1');
    
    div.appendChild(h1);
    h1.appendChild(h1Text);
    
    let h2 = document.createElement('h2')
    h2.className ='h2';
    let h2Text = document.createTextNode('This is an h2');

    div.appendChild(h2);
    h2.appendChild(h2Text);

    let h3 = document.createElement('h3')
    h3.className ='h3';
    let h3Text = document.createTextNode('This is an h3');

    div.appendChild(h3);
    h3.appendChild(h3Text);

    let h4 = document.createElement('h4')
    h4.className ='h4';
    let h4Text = document.createTextNode('This is an h4');

    div.appendChild(h4);
    h4.appendChild(h4Text);

    let h5 = document.createElement('h5')
    h5.className ='h5';
    let h5Text = document.createTextNode('This is an h5');

    div.appendChild(h5);
    h5.appendChild(h5Text);

    let h6 = document.createElement('h6')
    h6.className ='h6';
    let h6Text = document.createTextNode('This is an h6');

    div.appendChild(h6);
    h6.appendChild(h6Text);

    // Array section

    let colors = ['blue','black','red','yellow','green','brown','orange','purple']

    function getRandomColors() {
        let randomColorSelect = colors[(Math.random()*colors.length)*Math.floor]
        return randomColorSelect;
    }

    h1.addEventListener('click', function(){
        let randomColorSelect = getRandomColors();
        h1.style.color = randomColorSelect;
    });

    h2.addEventListener('click', function(){
        let randomColorSelect = getRandomColors();
        h2.style.color = randomColorSelect;
    });

    h3.addEventListener('click', function(){
        let randomColorSelect = getRandomColors();
        h3.style.color = randomColorSelect;
    });

    h4.addEventListener('click', function(){
        let randomColorSelect = getRandomColors();
        h4.style.color = randomColorSelect;
    });

    h5.addEventListener('click', function(){
        let randomColorSelect = getRandomColors();
        h5.style.color = randomColorSelect;
    });

    h6.addEventListener('click', function(){
        let randomColorSelect = getRandomColors();
        h6.style.color = randomColorSelect;
    });

    let button = document.createElement('button');
    let btnText = document.createTextNode('Click to add a new list item');
    button.appendChild(btnText);
    div.appendChild(button);
    button.className = 'ButtonList1';

    let ul = document.createElement('ul');
    div.appendChild(ul);

    let l = 1;
    function addToList() {
        let li = document.createElement('li');
        ul.appendChild(li);
        let liText = document.createTextNode(`This is list item ${(l)}`);
        li.appendChild(liText);
        l +=1;

    li.addEventListener("click",function(){
        let randomColorSelect = getRandomColors();
        li.style.color =randomColorSelect;
    })

    li.addEventListener("click",function(){
        this.remove();
        })
    }
    button.addEventListener("click",addToList);
})




