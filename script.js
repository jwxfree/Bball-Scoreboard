let homeCurrentPts = document.getElementById('home-currentpts')
let awayCurrentPts = document.getElementById('away-currentpts')
let homepoint = 0
let awaypoint = 0
function homeAdd3Pts(){
    homepoint += 3
    homeCurrentPts.textContent = homepoint
}
function homeAdd2Pts(){
    homepoint += 2
    homeCurrentPts.textContent = homepoint
}
function homeAdd1Pts(){
    homepoint += 1
    homeCurrentPts.textContent = homepoint
}
function homeremove(){
    homepoint -= 1
    homeCurrentPts.textContent = homepoint
}

function awayAdd3Pts(){
    awaypoint += 3
    awayCurrentPts.textContent = awaypoint
}
function awayAdd2Pts(){
    awaypoint += 2
    awayCurrentPts.textContent = awaypoint
}
function awayAdd1Pts(){
    awaypoint += 1
    awayCurrentPts.textContent = awaypoint
}
function awayremove(){
    awaypoint -= 1
    awayCurrentPts.textContent = awaypoint
}

