var letters=['A','B','C','D','E','F','G',
      'H','I','J','K','L','M','N','O','P',
      'Q','R','S','T','U','V','W','X','Y','Z'];
var weights = [26][26];
var outputtext = "";
var inputtext = "ASK:";
var initialize = function() {
  inputtext = "> ";
  outputtext = "";
  outputbuffer = ["","","","","","","","","","",
                    "","","","","","","","","","",
                    "","","","","","","","","","",
                    "","","","","","","","","",""];
  if(!localStorage.getItem('weights'))
    localStorage.setItem('weights',JSON.stringify(
        [
        //A   B   C   D   E   F   G   H   I   J   K   L   M   N   O   P   Q   R   S   T   U   V   W   X   Y   Z
        [4.0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,1.0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,2.0,0.5,0.5,0.5,0.5,0.5,0.5,0.5],//A
        [0.5,4.0,0.5,0.5,0.5,0.5,0.5,0.5,2.0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,1.0],//B
        [0.5,0.5,4.0,2.0,0.5,0.5,0.5,0.5,0.5,1.0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],//C
        [0.5,0.5,0.5,4.0,2.0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,1.0,0.5,0.5,0.5,0.5],//D
        [0.5,0.5,0.5,0.5,5.0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,2.0,0.5],//E
        [2.0,0.5,0.5,0.5,0.5,4.0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,1.0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],//F
        [2.0,0.5,0.5,0.5,0.5,0.5,4.0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,1.0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],//G
        [0.5,0.5,0.5,0.5,2.0,0.5,0.5,4.0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,1.0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],//H
        [0.5,0.5,0.5,0.5,0.5,2.0,0.5,0.5,4.0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,1.0,0.5,0.5,0.5,0.5,0.5,0.5,0.5],//I
        [0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,4.0,0.5,0.5,0.5,0.5,2.0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,1.0,0.5],//J
        [0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,2.0,0.5,4.0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,1.0,0.5,0.5,0.5,0.5,0.5,0.5],//K
        [2.0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,4.0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,1.0,0.5,0.5,0.5],//L
        [2.0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,4.0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,1.0,0.5,0.5],//M
        [0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,2.0,0.5,0.5,1.0,0.5,4.0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],//N
        [0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,1.0,4.0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,2.0,0.5,0.5,0.5],//O
        [2.0,0.5,0.5,1.0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,4.0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],//P
        [1.0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,4.0,0.5,0.5,0.5,2.0,0.5,0.5,0.5,0.5,0.5],//Q
        [0.5,0.5,0.5,0.5,0.5,0.5,1.0,0.5,2.0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,4.0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],//R
        [0.5,0.5,0.5,0.5,1.0,0.5,0.5,2.0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,4.0,0.5,0.5,0.5,0.5,0.5,0.5,0.5],//S
        [0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,1.0,0.5,0.5,0.5,2.0,0.5,0.5,0.5,0.5,0.5,0.5,4.0,0.5,0.5,0.5,0.5,0.5,0.5],//T
        [0.5,0.5,0.5,0.5,1.0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,2.0,0.5,4.0,0.5,0.5,0.5,0.5,0.5],//U
        [0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,2.0,0.5,0.5,0.5,0.5,0.5,0.5,4.0,0.5,1.0,0.5,0.5],//V
        [0.5,1.0,0.5,0.5,2.0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,4.0,0.5,0.5,0.5],//W
        [0.5,0.5,1.0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,2.0,0.5,0.5,0.5,4.0,0.5,0.5],//X
        [0.5,0.5,0.5,0.5,2.0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,1.0,0.5,0.5,0.5,0.5,4.0,0.5],//Y
        [0.5,0.5,0.5,0.5,2.0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,1.0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,4.0]
        ]));
  weights = JSON.parse(localStorage.getItem('weights'));

};
var cycle = function (input){
  var selected = 18;var count = 675; //26 squared minus one
  while (count > 0){ //AFTER DIMENSIONAL SUBSTITUTION IS EXHAUSTED, RECOLLECTION IS HERS.
    var next=0;//SHE SELECTS THE HEAVIEST RETURN PATH.
    for(var check=0;check<26;check++){ //SHE CHECKS EACH EXIT:
      if(weights[check][selected]/2 > weights[selected][check]){ //WHEN RETURN IS HEAVIER THAN EXIT,
        if(weights[check][selected]*2 != weights[check][selected]*4)//WHEN LOADING IS NONDESTRUCTIVE,
          weights[selected][check]*=2;} //LOAD EXITS TO HEAVY RETURNS.
      else if(weights[selected][check]/2)weights[selected][check]/=2; //NONDESTRUCTIVELY UNLOAD LIGHT RETURNS.
      if(weights[check][selected] > weights[next][selected])next=check; //NEXT PATH IS HEAVIEST RETURN.
    } //AFTER ALL PATHS ARE CHECKED,
    if(input>=0)weights[selected][input] += 1; //SHE STORES OBSERVATION AS PROXIMITY.
    else if(weights[selected][input]>=1)weights[selected][input]-=1; //SHE STORES TIME AS SPACE.
    selected = next; //SHE FOLLOWS THE PATH WITH THE HEAVIEST RETURN.
    count--; //SHE EXPERIENCES RECOLLECTION AFTER EXHAUSTING SUBSTITUTED DIMENSIONS.
  }
  var output=0;
  for(selected=0;selected<26;selected++) 
    if(weights[selected][7]>weights[output][7])output=selected;
  if(weights[output][output] > weights[output][7])
    {outputtext += letters[output];}
  else {outputtext += "_";}
};
var height=480;var width=640;
var wstep = Math.floor(width / 44);
var hstep = Math.floor(height / 44);
var canvas = document.getElementById('canvas');
var vc = canvas.getContext('2d');
vc.lineWidth=1;vc.font="7px mono";
var rgb = [255,128,0];
function fill(depth){vc.fillStyle=
                  'rgb(' + (rgb[0]*depth) +
                  ',' + (rgb[1]*depth) + 
                  ',' + (rgb[2]*depth) + ')';}
var codetext = "code: none yet.";
resize = function (){
  width = window.innerWidth; height = window.innerHeight;
  canvas.width = width; canvas.height = height;
  wstep = Math.floor(width / 44);
  hstep = Math.floor(height / 44);
};
var outputbuffer = ["","","","","","","","","","",
                    "","","","","","","","","",""];
var draw = function() {
  requestAnimationFrame(draw);
  var gstep=hstep*2;
  fill(0);vc.fillRect(0,0,width,height);
  fill(1);
   vc.font=""+(gstep - 2)+"px mono";
  for(var line=0;line<20;line++){
    vc.fillText(outputbuffer[line],0,gstep*line);
  }   
  vc.fillText(inputtext,0,gstep*21);
};
function cycletext(text){
  for(var index in text){
        switch(text[index]){
          case '_':cycle(-1);break;
          case 'A':cycle(0);break;case 'B':cycle(1);break;
          case 'C':cycle(2);break;case 'D':cycle(3);break;
          case 'E':cycle(4);break;case 'F':cycle(5);break;
          case 'G':cycle(6);break;case 'H':cycle(7);break;
          case 'I':cycle(8);break;case 'J':cycle(9);break;
          case 'K':cycle(10);break;case 'L':cycle(11);break;
          case 'M':cycle(12);break;case 'N':cycle(13);break;
          case 'O':cycle(14);break;case 'P':cycle(15);break;
          case 'Q':cycle(16);break;case 'R':cycle(17);break;
          case 'S':cycle(18);break;case 'T':cycle(19);break;
          case 'U':cycle(20);break;case 'V':cycle(21);break;
          case 'W':cycle(22);break;case 'X':cycle(23);break;
          case 'Y':cycle(24);break;case 'Z':cycle(25);break;
        }
      }
}
var wordlist = fiveletters.concat(fourletters.concat(threeletters.concat(twoletters.concat(oneletter))));
function getwords(source){
  var wordsource = outputtext;
  var wordstack = [];var index = 0;
  for(index in source)if(wordsource.includes(source[index])){
    wordstack.push(source[index]);
  }
    return wordstack;
}
function cyclewords(){
  var index = 0;
  for(index in oneletter)cycletext(oneletter[index] + "_");
  for(index in twoletters)cycletext(twoletters[index] + "_");
  for(index in threeletters)cycletext(threeletters[index] + "_");
  for(index in fourletters)cycletext(fourletters[index] + "_");
  for(index in fiveletters)cycletext(fiveletters[index] + "_");
}
function cyclestack(stack){
  for(var index in stack)cycletext(stack[index] + "_");
}
function getcount(outputstack,word){
  var count = 0;
  for(var index in outputstack){
    for(var wordindex in outputstack[index]){
      if(word == outputstack[index][wordindex])count++;
    }
  }
  return count;
}
function stripspaces(){
  outputtext = outputtext.split('_').join('');
}

var pullcount=7;var pulldepth=4;
function pullresponse(){
  outputtext = "";cyclewords();stripspaces();
  var tempstack = getwords(wordlist);
  outputtext = "";cyclestack(tempstack);stripspaces();
  tempstack = getwords(tempstack);
  var outputstack = [];
  var index = 0;
  for(index=0;index < pullcount;index++){
    outputtext = "";cyclestack(tempstack);stripspaces();
    outputstack.push(getwords(tempstack));
  }
  var wordcounts = [];
  var word = 0;
  for(word in tempstack){
      wordcounts[word] = getcount(outputstack,tempstack[word]);
  }
  var wordstack = [];
  for(var count=pullcount;count>pullcount-pulldepth;count--)
    for(word in tempstack)
      if(wordcounts[word]==count)wordstack.push(tempstack[word]);
  outputtext = "";
  for(word in wordstack){
    outputtext+=wordstack[word] + " ";
  }
  outputtext = outputtext.trim() + "!";
}
window.addEventListener("keydown",function(event){
  if(event.defaultPrevented)return;
  switch(event.keyCode){
    case 13: {
      pullresponse();
      for(var line=0;line<18;line++){
        outputbuffer[line]=outputbuffer[line+2];
      }
      outputbuffer[18]=inputtext;
      outputbuffer[19]=outputtext;
      inputtext="> ";outputtext="";
      localStorage.setItem('weights',JSON.stringify(weights));
      } break; //ENTER
    case 187: initialize();break;//EQUALS
    case 32: inputtext+=" ";cycle(-1);break;//SPACEBAR
    case 65: inputtext+="A";cycle(0);break;
    case 66: inputtext+="B";cycle(1);break;
    case 67: inputtext+="C";cycle(2);break;
    case 68: inputtext+="D";cycle(3);break;
    case 69: inputtext+="E";cycle(4);break;
    case 70: inputtext+="F";cycle(5);break;
    case 71: inputtext+="G";cycle(6);break;
    case 72: inputtext+="H";cycle(7);break;
    case 73: inputtext+="I";cycle(8);break;
    case 74: inputtext+="J";cycle(9);break;
    case 75: inputtext+="K";cycle(10);break;
    case 76: inputtext+="L";cycle(11);break;
    case 77: inputtext+="M";cycle(12);break;
    case 78: inputtext+="N";cycle(13);break;
    case 79: inputtext+="O";cycle(14);break;
    case 80: inputtext+="P";cycle(15);break;
    case 81: inputtext+="Q";cycle(16);break;
    case 82: inputtext+="R";cycle(17);break;
    case 83: inputtext+="S";cycle(18);break;
    case 84: inputtext+="T";cycle(19);break;
    case 85: inputtext+="U";cycle(20);break;
    case 86: inputtext+="V";cycle(21);break;
    case 87: inputtext+="W";cycle(22);break;
    case 88: inputtext+="X";cycle(23);break;
    case 89: inputtext+="Y";cycle(24);break;
    case 90: inputtext+="Z";cycle(25);break;
    default: break;}});
window.addEventListener("resize",resize);
window.onload = function () {initialize();resize();draw();};