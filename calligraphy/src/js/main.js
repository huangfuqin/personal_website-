var defaultColor = '#FFF123';
function getRandomColor() { 
    var c = '#'; 
    for(var i = 0; i < 6;i++) { 
        var cNumber = Math.round(Math.random()*15); 
        c += cNumber.toString(16); 
    }
    if(c === defaultColor) {
        getRandomColor();
    }else{
        return c; 
    }
}
function getRandomNumber(num) {
    var rand = Math.round(Math.random()*num);
    return rand;
} 
function _changeColor(index){
    var nodes= document.getElementsByTagName('span');
    nodes[index].style.backgroundColor = getRandomColor();
}
function changeColor(){
    var num = 8,
        i = 0,
        newArray = [Math.round(Math.random()*num)];
    do {
        let randNumber = Math.round(Math.random()*num);
        if(randNumber != newArray[i] && randNumber != newArray[i-1]) {
            newArray.push(randNumber);
            i ++;
        }
    }
    while(newArray.length < 3);
    for(let i = 0; i < newArray.length; i++){
        _changeColor(newArray[i]);
    }
}
function resetColor() {
    let nodes= document.getElementsByTagName('span');
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].style.backgroundColor = defaultColor;
    }
}

var timer = null;
function autoChange(){
    timer = setInterval(changeColor,1000);
}
function stopAuto(){
    clearInterval(timer);
    resetColor();
}