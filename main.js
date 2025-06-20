let current1 = "",
  prev1 = "",
  current2 = "",
  prev2 = "";

document.addEventListener("DOMContentLoaded", function () {
  console.log(prev1, current1, prev2, current2);  
  let randomPlayer1 = Math.floor(Math.random() * 6) + 1;
  let randomPlayer2 = Math.floor(Math.random() * 6) + 1;

  let player1 = document.querySelectorAll(".game-content1 > div")[randomPlayer1-1];
  let player2 = document.querySelectorAll(".game-content2 > div")[randomPlayer2-1];
  let heading = document.querySelector("h1");

  console.log("random number: "+randomPlayer1+" "+ randomPlayer2);
  console.log("player "+player1+" "+player2);





  function onRefresh(randomPlayer,player, current, prev) {
  if (randomPlayer == 1) {
    prev = current;
    player.classList.add("one");
    if (prev) {
      player.classList.remove(prev);
    }
    current = "one";
  } else if (randomPlayer == 2) {
    prev = current;
    player.classList.add("two");
    if (prev) {
      player.classList.remove(prev);
    }
    current = "two";
  } else if (randomPlayer == 3) {
    prev = current;
    player.classList.add("three");
    if (prev) {
      player.classList.remove(prev);
    }
    current = "three";
  } else if (randomPlayer == 4) {
    prev = current;
    player.classList.add("four");
    if (prev) {
      player.classList.remove(prev);
    }
    current = "four";
  } else if (randomPlayer == 5) {
    prev = current;
    player.classList.add("five");
    if (prev) {
      player.classList.remove(prev);
    }
    current = "five";
  } else if (randomPlayer == 6) {
    prev = current;
    player.classList.add("six");
    if (prev) {
      player.classList.remove(prev);
    }
    current = "six";
  }
}

onRefresh(randomPlayer1, player1, current1, prev1);
onRefresh(randomPlayer2, player2, current2, prev2);  

if(randomPlayer1 > randomPlayer2) {
    heading.innerHTML = "Player 1 Wins!";
} else if(randomPlayer1 < randomPlayer2) {
    heading.innerHTML = "Player 2 Wins!";
} else {
    heading.innerHTML = "It's a Draw!";
}
});
