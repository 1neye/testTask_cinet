let img = document.getElementsByClassName('main__block6');
let modal = document.querySelector('.modal');
let cross = document.getElementById('cross');
let arrImg = [];
let idx = document.getElementById('idx');

for(i=0; i<img.length; i++){
    arrImg.push(img[i]);
    img[i].addEventListener('click', function(e){
        modal.style.display = 'flex'; 
        modal.firstElementChild.src = this.firstElementChild.src
        console.log(arrImg.indexOf(this));
        idx.innerHTML = '№ ' + (arrImg.indexOf(this) + 1) 
    });
}

cross.addEventListener('click', function(){
    modal.style.display= 'none';
})