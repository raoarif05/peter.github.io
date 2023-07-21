
var fltrbtn = document.getElementById("fltrbtn")                
var fltrcntnt = document.getElementById("fltrcntnt")                
        
fltrcntnt.style.height = "0";
        
fltrbtn.onclick = function(){
    if(fltrcntnt.style.height == "650px"){
        fltrcntnt.style.width = "100%";
        fltrcntnt.style.height = "0";
        fltrcntnt.style.padding = "0";
        
    }
    else{
        fltrcntnt.style.width = "100%";
        fltrcntnt.style.height = "650px";
        fltrcntnt.style.padding = "30px";
    }
}


var container = document.getElementById('newmovies');
var nextButton = document.getElementById('nextbtn');
var prevButton = document.getElementById('prevbtn');

var clickCount = 0;
        
nextButton.onclick = function() {
    if (clickCount < 6) {
        var currentPosition = container.style.transform;
        
        if (currentPosition) {
            var currentPositionValue = parseInt(currentPosition.match(/-?\d+/)[0]);
            container.style.transform = `translateX(${currentPositionValue - 260.5}px)`;
        } else {
            container.style.transform = 'translateX(-260.5px)';
        }
        
        clickCount++;
    }
};
        
prevButton.onclick = function() {
    if (clickCount > 0) {
        var currentPosition = container.style.transform;

        if (currentPosition) {
            var currentPositionValue = parseInt(currentPosition.match(/-?\d+/)[0]);
            container.style.transform = `translateX(${currentPositionValue + 260.5}px)`;
        }

        clickCount--;
    }
};

// 2nd LIST JS

var container2 = document.getElementById('newmovies2');
var nextButton2 = document.getElementById('nextbtn2');
var prevButton2 = document.getElementById('prevbtn2');
var clickCount2 = 0;

nextButton2.onclick = function() {
                    if (clickCount2 < 6) {
                        var currentPosition2 = container2.style.transform;

                        if (currentPosition2) {
                            var currentPositionValue2 = parseInt(currentPosition2.match(/-?\d+/)[0]);
                            container2.style.transform = `translateX(${currentPositionValue2 - 260}px)`;
                        } else {
                            container2.style.transform = 'translateX(-260px)';
                        }

                        clickCount2++;
                    }
};

prevButton2.onclick = function() {
                    if (clickCount2 > 0) {
                        var currentPosition2 = container2.style.transform;

                        if (currentPosition2) {
                            var currentPositionValue2 = parseInt(currentPosition2.match(/-?\d+/)[0]);
                            container2.style.transform = `translateX(${currentPositionValue2 + 260}px)`;
                        }

                        clickCount2--;
                    }
};

// 3RD LIST JS

var container3 = document.getElementById('newmovies3');
var nextButton3 = document.getElementById('nextbtn3');
var prevButton3 = document.getElementById('prevbtn3');
var clickCount3 = 0;

nextButton3.onclick = function() {
if (clickCount3 < 6) {
    var currentPosition3 = container3.style.transform;

    if (currentPosition3) {
        var currentPositionValue3 = parseInt(currentPosition3.match(/-?\d+/)[0]);
        container3.style.transform = `translateX(${currentPositionValue3 - 260}px)`;
    } else {
        container3.style.transform = 'translateX(-260px)';
    }

    clickCount3++;
}
};

prevButton3.onclick = function() {
    if (clickCount3 > 0) {
        var currentPosition3 = container3.style.transform;

        if (currentPosition3) {
            var currentPositionValue3 = parseInt(currentPosition3.match(/-?\d+/)[0]);
            container3.style.transform = `translateX(${currentPositionValue3 + 260}px)`;
        }

        clickCount3--;
    }
};