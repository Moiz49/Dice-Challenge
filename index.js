function myFunction(){
  var str1 = "images/dice"
  var str2 = ".png";
  
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  
  var s1 = str1 + randomNumber1 + str2;
  var s2 = str1 + randomNumber2 + str2;
  
  
  document.getElementsByClassName("img1")[0].setAttribute("src", s1);
  document.getElementsByClassName("img2")[0].setAttribute("src", s2);
  
  if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Wins";
  }
  else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player 2 Wins";
  }
  else {
    document.querySelector("h1").textContent = "Draw";
  }
  
}
