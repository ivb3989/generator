user.innerText = prompt("What is your name?", "Johnny Depp");
if (!user.innerText) {
  user.innerText = "User";
}
btn.addEventListener("click", function () {
  if (+p1.innerText != 3 && +p2.innerText != 3) {
    let tmp1 = Math.round(Math.random() * 10);
    let tmp2 = Math.round(Math.random() * 10);
    rn1.innerText = tmp1;
    rn2.innerText = tmp2;
    console.log(tmp1, tmp2);
    if (tmp1 > tmp2) {
      +p1.innerText++;
    } else {
      +p2.innerText++;
    }
    if (+p1.innerText == 3) {
      setTimeout(() => confirm(`${user.innerText} won!`) ? document.location.reload() : undefined, 100);
    } else if (+p2.innerText == 3) {
      setTimeout(() => confirm("Computer won!") ? document.location.reload() : undefined, 100);
    }
  }
});
