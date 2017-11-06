/**
 * Created by Ramin on 10/15/17.
 */
//add some extra comment on this code .

function changeValue() {
    document.getElementById("demo").innerHTML = ++value;
}


var timerInterval = null;
function start() {
    stop(); // stoping the previous counting (if any)
    value = 0;
    timerInterval = setInterval(changeValue, 1000);
}
var stop = function() {
    clearInterval(timerInterval);
}

var allBlocks =[""]
var cellNumber = 1;
function creatPanel(){
    var allBlocks =[""]
    var cellNumber = 1;
    document.getElementById("container").innerHTML="";
    for(var i = 10 ;i > 0 ;i--)
    {
        document.getElementById("container").innerHTML += '<div id="row'+i+'" class="clearfix">';
        for(var j = 0; j<10 ;j++){
            document.getElementById("row"+i+"").innerHTML += '<button></button>';

        }
    }


    mergeCells(document.getElementById("row1").getElementsByTagName("button"))
    mergeCells(document.getElementById("row2").getElementsByTagName("button"))
    mergeCells(document.getElementById("row3").getElementsByTagName("button"))
    mergeCells(document.getElementById("row4").getElementsByTagName("button"))
    mergeCells(document.getElementById("row5").getElementsByTagName("button"))
    mergeCells(document.getElementById("row6").getElementsByTagName("button"))
    mergeCells(document.getElementById("row7").getElementsByTagName("button"))
    mergeCells(document.getElementById("row8").getElementsByTagName("button"))
    mergeCells(document.getElementById("row9").getElementsByTagName("button"))
    mergeCells(document.getElementById("row10").getElementsByTagName("button"))
}
creatPanel()

function mergeCells(array){

        for(var i=0;i<10;i++){
            allBlocks.push(array[i])
            array[i].id = cellNumber;
            cellNumber++
        }
}

var inputedMines;
var minesIsSet = 0;
var mines = [];
function setmines(){
       inputedMines=document.getElementById("minesinput").value;
    var letters = /^[0-9]/;
    if(inputedMines.length>2 || !inputedMines[0].match(letters) || !inputedMines[0].match(letters)){
            alert("تعداد بمب ها باید بین 1 تا 99 باشد");
        minesIsSet = 2;
            return;
        }


    mines.push(Math.ceil(100*Math.random()))
        mines = mines.filter(function(elem, index, self) {
            return index == self.indexOf(elem);
        })
        if(mines.length<inputedMines){

            setmines()
       }
    minesIsSet = 1;

}




var numberOfFlags = 0;
document.getElementById('demo1').innerHTML = numberOfFlags;

var numberOfchekedCells = 0;
var panel = document.getElementById("container");
var target;
var targetParent;
var isStarted = 0;
panel.onmousedown = function (e) {
    if(minesIsSet === 0){
        setmines();
        if(minesIsSet === 2){
            document.getElementById("minesinput").disabled = false;
            document.getElementById("minesinput").style.backgroundColor="white" ;
            minesIsSet =0;
            return;
        }
        else{
            document.getElementById("minesinput").disabled = true;
            document.getElementById("minesinput").style.backgroundColor="#2c333b"
        }
    }

    if(isStarted === 0){
        start()
        isStarted = 1;
    }
    else{
    }
    target =e.target;
    targetParent = target.parentElement;
    if (e.which == 3) {
        if(targetParent.innerHTML == '<img src="flag.png" class="flag">'){
            targetParent.innerHTML = '';
            numberOfFlags--;
            document.getElementById('demo1').innerHTML = numberOfFlags;


        }
        else if(target.innerHTML === ''){
            target.innerHTML = '<img src="flag.png" class="flag">'
            numberOfFlags++;
            document.getElementById('demo1').innerHTML = numberOfFlags;
        }
        else{}

    }
}


var currentcell;
panel.onclick = function (e) {

    if(minesIsSet === 0){
        setmines();
        if(minesIsSet === 2){
            document.getElementById("minesinput").disabled = false;
            document.getElementById("minesinput").style.backgroundColor="white" ;
            minesIsSet = 0;
            return;
        }
        else{
            document.getElementById("minesinput").disabled = true;
            document.getElementById("minesinput").style.backgroundColor="#2c333b"
        }
    }

    if(isStarted === 0){
        start()
        isStarted = 1;
    }
    else{
    }

    target =e.target;
    targetParent = target.parentElement;
    if(target.innerHTML === "" && targetParent.innerHTML !== '<img src="flag.png" class="flag">')
    {
        currentcell = Number(target.id);

        cheakMine(mines,currentcell)
    }
    else {
    }

}


var neighborsCell = [];
function cheakMine(mines,currentcell){
    var isACellMine = 0;
    for(var i=0;i<inputedMines;i++){
        if(currentcell === mines[i]){
            stop()
            allBlocks[currentcell].innerHTML = '<img src="mine.png" class="flag">';
            isACellMine = 1;
            finished();
            return false;
        }
    }
    if(isACellMine === 0){
        allBlocks[currentcell].style.backgroundColor = 'gray';
        cheakNeighbors(mines,currentcell)
    }
}


function cheakNeighbors(mines,currentcell){


    var numberOfNeighborsMines= 0;
    if(currentcell === 1){
        for(var i=0;i<inputedMines;i++){
            if(mines[i] === 2){
                numberOfNeighborsMines++;
            }
            if(mines[i] === 11){
                numberOfNeighborsMines++;

            }
            if(mines[i] === 12){
                numberOfNeighborsMines++;
            }
        }
        neighborsCell=[2,11,12];

    }

    else if(currentcell === 10){
        for(var i=0;i<inputedMines;i++){
            if(mines[i] === 9){
                numberOfNeighborsMines++;
            }
            if(mines[i] === 19){
                numberOfNeighborsMines++;

            }
            if(mines[i] === 20){
                numberOfNeighborsMines++;
            }
        }
        neighborsCell=[9,19,20];
    }

    else if(currentcell === 100){
        for(var i=0;i<inputedMines;i++){
            if(mines[i] === 89){
                numberOfNeighborsMines++;

            }
            if(mines[i] === 90){
                numberOfNeighborsMines++;

            }
            if(mines[i] === 99){
                numberOfNeighborsMines++;
            }
        }
        neighborsCell=[89,90,99];
    }

    else if(currentcell === 91){
        for(var i=0;i<inputedMines;i++){
            if(mines[i] === 81){
                numberOfNeighborsMines++;
            }
            if(mines[i] === 82){
                numberOfNeighborsMines++;

            }
            if(mines[i] === 92){
                numberOfNeighborsMines++;
            }
        }
        neighborsCell=[81,82,92];
    }

    else if(currentcell%10 === 0){
        for(var i=0;i<inputedMines;i++){
            if(mines[i] === currentcell-10){
                numberOfNeighborsMines++;
            }
            if(mines[i] === currentcell-11){
                numberOfNeighborsMines++;
            }
            if(mines[i] === currentcell-1){
                numberOfNeighborsMines++;
            }
            if(mines[i] === currentcell+10){
                numberOfNeighborsMines++;
            }
            if(mines[i] === currentcell+9){
                numberOfNeighborsMines++;
            }
        }
        neighborsCell=[currentcell-10,currentcell-11,currentcell-1,currentcell+10,currentcell+9];
    }

    else if((currentcell-1)%10 === 0){
        for(var i=0;i<inputedMines;i++){
            if(mines[i] === currentcell-10){
                numberOfNeighborsMines++;
            }
            if(mines[i] === currentcell-9){
                numberOfNeighborsMines++;
            }
            if(mines[i] === currentcell+1){
                numberOfNeighborsMines++;
            }
            if(mines[i] === currentcell+10){
                numberOfNeighborsMines++;
            }
            if(mines[i] === currentcell+11){
                numberOfNeighborsMines++;
            }
        }
        neighborsCell=[currentcell-10,currentcell-9,currentcell+1,currentcell+10,currentcell+11];
    }

    else if(currentcell < 10){
        for(var i=0;i<inputedMines;i++){
            if(mines[i] === currentcell-1){
                numberOfNeighborsMines++;
            }
            if(mines[i] === currentcell+1){
                numberOfNeighborsMines++;

            }
            if(mines[i] === currentcell+9){
                numberOfNeighborsMines++;
            }
            if(mines[i] === currentcell+10){
                numberOfNeighborsMines++;
            }
            if(mines[i] === currentcell+11){
                numberOfNeighborsMines++;
            }
        }
        neighborsCell=[currentcell-1,currentcell+1,currentcell+9,currentcell+10,currentcell+11];
    }

    else if(currentcell > 91){
        for(var i=0;i<inputedMines;i++){
            if(mines[i] === currentcell-1){
                numberOfNeighborsMines++;
            }
            if(mines[i] === currentcell+1){
                numberOfNeighborsMines++;

            }
            if(mines[i] === currentcell-9){
                numberOfNeighborsMines++;
            }
            if(mines[i] === currentcell-10){
                numberOfNeighborsMines++;
            }
            if(mines[i] === currentcell-11){
                numberOfNeighborsMines++;
            }
        }
        neighborsCell=[currentcell-1,currentcell+1,currentcell-9,currentcell-10,currentcell-11];
    }

    else{
        for(var i=0;i<inputedMines;i++){
            if(mines[i] === currentcell-1){
                numberOfNeighborsMines++;
            }
            if(mines[i] === currentcell+1){
                numberOfNeighborsMines++;

            }
            if(mines[i] === currentcell-9){
                numberOfNeighborsMines++;
            }
            if(mines[i] === currentcell-10){
                numberOfNeighborsMines++;
            }
            if(mines[i] === currentcell-11){
                numberOfNeighborsMines++;
            }
            if(mines[i] === currentcell+9){
                numberOfNeighborsMines++;
            }
            if(mines[i] === currentcell+10){
                numberOfNeighborsMines++;
            }
            if(mines[i] === currentcell+11){
                numberOfNeighborsMines++;
            }
        }
        neighborsCell=[currentcell-1,currentcell+1,currentcell-9,currentcell-10,currentcell-11,currentcell+9,currentcell+10,currentcell+11];
    }

    allBlocks[currentcell].innerHTML = numberOfNeighborsMines;
    allBlocks[currentcell].style.background = "linear-gradient(to bottom, #c6c3c6 5%, #c6c3c6 100%)";

    if(numberOfNeighborsMines === 0){
        allBlocks[currentcell].style.fontSize ="0px"
    }
    else if(numberOfNeighborsMines === 1){
        allBlocks[currentcell].style.color ="#0000ff"
    }
    else if(numberOfNeighborsMines === 2){
        allBlocks[currentcell].style.color ="#008200"
    }
    else if(numberOfNeighborsMines === 3){
        allBlocks[currentcell].style.color ="#ff0000"
    }
    else if(numberOfNeighborsMines === 4){
        allBlocks[currentcell].style.color ="#000084"
    }
    else if(numberOfNeighborsMines === 5){
        allBlocks[currentcell].style.color ="#840000"
    }
    else if(numberOfNeighborsMines === 6){
        allBlocks[currentcell].style.color ="#008284"
    }
    else if(numberOfNeighborsMines === 7){
        allBlocks[currentcell].style.color ="#840084"
    }
    else{
        allBlocks[currentcell].style.color ="#000000"
    }



    var array=[];
    for(var i =0; i<neighborsCell.length;i++){
        if(allBlocks[neighborsCell[i]].innerHTML === ""){
            array.push(neighborsCell[i])
        }
    }
            if(numberOfNeighborsMines === 0){
            for(var i=0 ;i<array.length;i++){
                currentcell = array[i];
                cheakNeighbors(mines,currentcell)
            }
        }
    cheakIfWin()
}


function finished(){
    for(var i=1;i<101;i++){

        for(var j=0;j<inputedMines;j++){
            if(i === mines[j]){
                allBlocks[i].innerHTML = '<img src="mine.png" class="flag">';
                allBlocks[i].style.background = "linear-gradient(to bottom, #c6c3c6 5%, #c6c3c6 100%)";
                document.getElementById('condition').innerHTML = '<img src="unnamed.png" class="flag">'


            }
        }
    }
    var delayMillis = 500;
    setTimeout(function() {
        for(var j=0;j<inputedMines;j++){
            allBlocks[mines[j]].innerHTML = '<img src="Mine3.ico" class="flag">';
        }
        panel.innerHTML += '<div id="losserDiv" class="losser"></div> '
        panel.innerHTML += '<div id ="animateloss">!شما باختید!</div>'
        myMoveloss()

    }, delayMillis)
}

var isWinnerDiv =0;
var numberOfUnCkeckedCell=0;
function cheakIfWin(){
    numberOfUnCkeckedCell = 0;
    for(var i = 1 ;i< 101; i++){
        var a = allBlocks[i].innerHTML;
        if(a === "" || a === '<img src="flag.png" class="flag">' ){
            numberOfUnCkeckedCell++
        }
    }
    if(numberOfUnCkeckedCell == inputedMines){
        document.getElementById('condition').innerHTML = '<img src="Nerd_with_Glasses_Emoji.png" class="flag">'
        if(isWinnerDiv === 0){
            panel.innerHTML += '<div id="losserDiv" class="losser"></div> ';
            panel.innerHTML += '<div id ="animatewin">شما برنده شدید!<br> رکورد شما: '+value+'ثانیه</div>'
            myMovewin()

            isWinnerDiv =1;
        }
        stop()
    }
}


function newgame(){
    isWinnerDiv =0
    stop()
    document.getElementById('condition').innerHTML = '';
    allBlocks =[""];
    minesIsSet = 0;
    document.getElementById("minesinput").disabled = false;
    document.getElementById("minesinput").style.backgroundColor="gainsboro"
    mines = [];
    cellNumber = 1;
    numberOfFlags = 0;
    neighborsCell = [];
    isStarted = 0;
    numberOfFlags = 0;
    document.getElementById('demo1').innerHTML = numberOfFlags;
    document.getElementById("demo").innerHTML = 0;
    document.getElementById('condition').innerHTML = '<img src="Friend Smiley.ico" class="flag">'
    creatPanel();
}

function restart(){
    isWinnerDiv =0
    stop()
    document.getElementById('condition').innerHTML = '';
    allBlocks =[""];
    cellNumber = 1;
    numberOfFlags = 0;
    neighborsCell = [];
    isStarted = 0;
    numberOfFlags = 0;
    document.getElementById('demo1').innerHTML = numberOfFlags;
    document.getElementById("demo").innerHTML = 0;
    document.getElementById('condition').innerHTML = '<img src="Friend Smiley.ico" class="flag">'
    creatPanel();
    setmines();
}


function myMoveloss() {
    var elem = document.getElementById("animateloss");

    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 172) {
            clearInterval(id);
        } else {
            pos+=4;
            elem.style.top = pos + 'px';
        }
    }
}
function myMovewin() {
    var elem = document.getElementById("animatewin");

    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 140) {
            clearInterval(id);
        } else {
            pos+=4;
            elem.style.top = pos + 'px';
        }
    }
}