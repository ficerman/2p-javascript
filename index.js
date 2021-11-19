function winOpenFicerman(zad) {
	window.open(
		'zad' + zad + '.html',
		'okienko' + zad,
		'toolbar=no,directories=no,menubar=no,height=1000,width=1000,top=200,left=200'
	)
}

function dodajZadFicerman(zad) {
	let zadP = document.createElement('button')
	zadP.innerHTML = 'zad. ' + zad
	zadP.className = 'zadP'
	zadP.setAttribute('onclick', 'winOpenFicerman(' + zad + ')')
	document.getElementById('mainContainer').appendChild(zadP)
}

document.addEventListener('DOMContentLoaded', function () {
	for (let k = 0; k < 29; k++) {
		dodajZadFicerman(k + 1)
	}
})
kotekPermaMad = new Boolean(false)
var bodyRep = new Audio('bodyreport.mp3')
var amongusDrip = new Audio('amongusdriptheme.mp3')
var killSound = new Audio('killsound.mp3')
let kotek = document.getElementById('kotek')
kotek.addEventListener('click', function () {
	kotekPermaMad = true
	bodyRep.pause()
	killSound.play()
	amongusDrip.currentTime = bodyRep.currentTime
	amongusDrip.play()
})
kotek.addEventListener('mouseenter', function () {
	if (kotekPermaMad == false) {
		kotek.setAttribute('src', 'catMad.ico')
		bodyRep.reset
		bodyRep.currentTime = 0
		bodyRep.play()
	}
})
kotek.addEventListener('mouseleave', function () {
	if (kotekPermaMad == false) {
		kotek.setAttribute('src', 'icon.ico')
		bodyRep.pause()
	}
})
