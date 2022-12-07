//수업 내용입니다. - 내 진심 담은 하트 버튼에 알림창 코딩해보기!

const heart = document.getElementById("heart");
heart.addEventListener("click", () => {
  alert("배고파 언능 치킨 먹고 싶어^ㅠ^");
});

// 수업내용이 아닙니다.

let stars = 100;

for (let i = 0; i <= stars; i++) {
  let star = document.createElement("div");

  if (i % 2 === 0) {
    star.className = "whiteStar";
  } else {
    star.className = "yellowStar";
  }
  let position = getStarPosition();
  star.style.top = position.x + "px";
  star.style.left = position.y + "px";
  document.body.append(star);
}

function getStarPosition() {
  let bodyX = window.innerHeight;
  let bodyY = window.innerWidth;

  let randomX = Math.floor(Math.random() * bodyX);
  let randowY = Math.floor(Math.random() * bodyY);

  return { x: randomX, y: randowY };
}

const logo = document.getElementById("logo");
logo.addEventListener("click", () => {
  window.open("https://wecode.co.kr/");
});

const startButton = document.getElementById("startButton");
startButton.addEventListener("click", () => getStarted());

function getStarted() {
  startButton.remove();

  const intro = document.getElementById("intro");
  intro.style.animation = "intro 2s ease-out 1s";

  const main = document.getElementById("main");
  main.style.animation = "main 4s ease-out 5s";

  const loveYou = document.getElementById("loveYou");
  let playTime = 0;
  if (loveYou.clientWidth < 517) {
    playTime =
      ((loveYou.clientHeight * loveYou.clientWidth) / 28000 / 80) * 168;
  } else {
    playTime = (loveYou.clientHeight * loveYou.clientWidth) / 28000;
  }

  const text = document.getElementById("text");
  text.style.animation = `scroll ${playTime}s linear 12s`;
}
