function moveToSelected(element) {

    var selected = document.querySelector(".selected");
    var prev = document.querySelector(".prev");
    var next= document.querySelector(".next");
    var prevSecond = document.querySelector(".prevLeftSecond");
    var nextSecond = document.querySelector(".nextRightSecond");
    var hideLeft = document.querySelector(".hideLeft");
    var hideRight = document.querySelector(".hideRight");

    if(element == 'prev'){
        selected.classList.remove('selected');
        selected.classList.add('next');
        prev.classList.remove('prev');
        prev.classList.add('selected');
        prevSecond.classList.remove('prevLeftSecond');
        prevSecond.classList.add('prev');  
        hideLeft.classList.remove('hideLeft');
        hideLeft.classList.add('prevLeftSecond'); 
        
        next.classList.remove('next');
        next.classList.add('nextRightSecond');
        nextSecond.classList.remove('nextRightSecond');
        nextSecond.classList.add('hideRight');
        hideRight.classList.remove('hideRight');
        hideRight.classList.add('hideLeft');  
    } else {
        selected.classList.remove('selected');
        selected.classList.add('prev');
        next.classList.remove('next');
        next.classList.add('selected');
        nextSecond.classList.remove('nextRightSecond');
        nextSecond.classList.add('next');  
        hideRight.classList.remove('hideRight');
        hideRight.classList.add('nextRightSecond');

        prev.classList.remove('prev');
        prev.classList.add('prevLeftSecond');
        prevSecond.classList.remove('prevLeftSecond');
        prevSecond.classList.add('hideLeft');
        hideLeft.classList.remove('hideLeft');
        hideLeft.classList.add('hideRight');  
     
    }
}

