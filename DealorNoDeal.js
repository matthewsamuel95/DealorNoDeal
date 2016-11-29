//Matthew Samuel
  var cases=[0];
  //another int array with the same values
  var copy=[1,5,10,25,50,75,100,200,300,400,500,750,1000,2500,5000,10000,25000,
    50000,100000,200000,300000,400000,500000,750000,1000000];

function start(){
  var nums=[1,5,10,25,50,75,100,200,300,400,500,750,1000,2500,5000,10000,25000,
    50000,100000,200000,300000,400000,500000,750000,1000000];


  //a boolean variable to decide if the game is over
  var deal=false;

  //a int vector to hold all the money values randomly
  var random;
  //loop through 25 times to make the vector in random order
  for(var k=0;k<25;k++){
      do{
          //everytime it will give a new (not neccesilary different) random numer
          random=Math.floor(Math.random()*25);
          //if that array is 0 in the index the random number index then proceeed
          if(nums[random]!=0){
              //give that random number index in the array to the kth number in the array
              cases.unshift(nums[random]);
              //once that process is done then force that number in the array to be 0 so it can not be used again
              nums[random]=0;
          }
      }while(cases[k]==0);
  }
  //remove last index ( which helped initalized the array)
  cases.pop();
  console.log(cases);
}




function myFunction(buttonP){
  var x=buttonP;
  if (typeof x != 'undefined'){
    //document.getElementById("message").innerHTML = cases[x-1];
    if(cases[x-1]!=0)
    document.getElementById("case").innerHTML =
    "That case was valued at: $"+cases[x-1];
    cases[x-1]=0;
  }

  var sum=1;
  var howmany=1;

  for(var k=1;k<26;k++){
    if(cases[k-1]!=0){
        sum+=cases[k-1];
        howmany++;
      }
    }
    var average;
    average=(sum-1)/(howmany-1);
    document.getElementById("message").innerHTML = "$"+average.toFixed(2);

    var result = [];
    for(var p=1;p<26;p++){
      if(cases[p-1]!=0){
          result.push(cases[p-1]);
        }
    }

    result.sort(function(a, b){return a-b})
    var theAnswer="";
    for(var p=1;p<result.length+1;p++){
          theAnswer+=" $"+result[p-1];
          if(p%2==0)
            theAnswer+="<div>";

    }
    document.getElementById("remain").innerHTML = theAnswer;
}

function checkNum() {
  var theNumber;
  theNumber = document.getElementById("number").value;
  if(isNaN(theNumber)==true ){
      alert("Enter as a number");
      document.getElementById('number').style.borderColor = "red";
      document.getElementById("message").innerHTML = "Enter a Number";
    }
  else if(theNumber==9324){
      document.getElementById('number').style.borderColor = "green";
      message.style.color="green";
      document.getElementById("message").innerHTML = "Correct!";
      setCookie("total",parseInt(1));
      //from the lab unlock door
      document.getElementById("number").setAttribute("disabled", "");
    }
  else if(theNumber!=9324){
      document.getElementById('number').style.borderColor = "red"
      document.getElementById("message").innerHTML = "Incorrect Answer Try Again";
    }
}

function checkNumtwo() {
  var theNumber;
  theNumber = document.getElementById("number").value;
  if(isNaN(theNumber)==true){
      alert("Enter as a number");
      document.getElementById('number').style.borderColor = "red";
      document.getElementById("message").innerHTML = "Enter a Number";
    }
  else if(theNumber==2919){
      document.getElementById('number').style.borderColor = "green";
      message.style.color="green";
      document.getElementById("message").innerHTML = "Correct!";
      setCookie("total1",parseInt(1));
      //from the lab unlock door
      document.getElementById("number").setAttribute("disabled", "");
    }
  else if(theNumber!=2919){
      document.getElementById('number').style.borderColor = "red"
      document.getElementById("message").innerHTML = "Incorrect Answer Try Again";
    }
}

function checkNumthree() {
  //Grab the user's input and store in variables
  var theNumber;
  theNumber = document.getElementById("number").value;
  if(isNaN(theNumber)==true){
      alert("Enter as a number");
      document.getElementById('number').style.borderColor = "red";
      document.getElementById("message").innerHTML = "Enter a Number";
    }
  else if(theNumber==3581){
      document.getElementById('number').style.borderColor = "green";
      message.style.color="green";
      document.getElementById("message").innerHTML = "Correct!";
      setCookie("total2",parseInt(1));
      //from the lab unlock door
      document.getElementById("number").setAttribute("disabled", "");
    }
  else if(theNumber!=3581){
      document.getElementById('number').style.borderColor = "red"
      document.getElementById("message").innerHTML = "Incorrect Answer Try again";
    }
}

function calculateResult(){
  var total;
  total= Number(getCookie("total"))+ Number(getCookie("total1")) +
  Number(getCookie("total2"));
  document.getElementById("sub").innerHTML="Final Score: "+
  Math.round((parseInt(total)/parseInt(3)) * parseInt(100)) +"%";
}

function tic(){
  var theNumber;
  theNumber = document.getElementById("number").value;
  var howmany = [0,0,0,0,0,0,0,0,0,0];
  howmany[random]++;
  console.log(random);
  if(howmany[theNumber]==1){
      document.getElementById('number').style.borderColor = "green";
      message.style.color="green";
      document.getElementById("message").innerHTML = "Correct!";
      //from the lab unlock door
      document.getElementById("number").setAttribute("disabled", "");
    }
  else {
    document.getElementById('number').style.borderColor = "red"
    document.getElementById("message").innerHTML = "Incorrect Answer Try Again";
  }
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
