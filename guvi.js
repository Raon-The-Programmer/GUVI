function Hi(){
    const img = document.getElementById("img")
    let randNum = Math.floor(Math.random()*6)+1;
    let player1 = document.getElementById("P1Val")
    let player2 = document.getElementById("P2Val")
    img.setAttribute("src",`${randNum}.png`)
    
}
function anim(){
    setTimeout(Hi,1000);
    const img = document.getElementById("img")
    img.setAttribute("src","roller.gif")
}