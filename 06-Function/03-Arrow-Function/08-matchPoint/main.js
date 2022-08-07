let score = 0;
let scorecal = (win, draw , lose) => {
    score += 3 * win;
    score += draw;
    alert(score)
}

scorecal(10,3,9);

