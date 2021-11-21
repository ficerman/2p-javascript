let backgrounds = [
	'linear-gradient(-45deg, #6fa3f1, #ec8fb3, #eca7ca, #acebc8)',
	'linear-gradient(-45deg, #6fa3f1, #8fece7, #68cc81, #c3b1f5)',
]

function winOpenFicerman(zad) {
	window.open(
		'zad' + zad + '.html',
		'okienko',
		'toolbar=no,directories=no,menubar=no,height=1000,width=1000,top=200,left=200'
	)
}

function dodajZadFicerman(zad) {
	let zadP = document.createElement('button')
	zadP.innerHTML = '-- ' + zad + ' --'
	zadP.className = 'zadP'
	zadP.setAttribute('onclick', 'winOpenFicerman(' + zad + ')')
	zadP.setAttribute('id', zad)
	/*let zadPKod = document.createElement('button')
	zadPKod.innerHTML = 'kod'
	zadPKod.className = 'zadP kod'
	zadP.appendChild(zadPKod)*/
	document.getElementById('mainContainer').appendChild(zadP)
}

function kodOpenFicerman(zad) {
	window.open(
		'zad' + zad + 'kod.html',
		'okienko',
		'toolbar=no,directories=no,menubar=no,height=1000,width=1000,top=200,left=200'
	)
}

function dodajKodFicerman(zad) {
	let zadP = document.createElement('button')
	zadP.innerHTML = '-- ' + zad + 'k --'
	zadP.className = 'zadP'
	zadP.setAttribute('onclick', 'kodOpenFicerman(' + zad + ')')
	zadP.setAttribute('id', zad + 'kod')
	/*let zadPKod = document.createElement('button')
	zadPKod.innerHTML = 'kod'
	zadPKod.className = 'zadP kod'
	zadP.appendChild(zadPKod)*/
	document.getElementById('mainContainer').appendChild(zadP)
}

document.addEventListener('DOMContentLoaded', function () {
	kodyOn = false
	document.getElementById('mainContainer').replaceChildren()
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
	if (kotekPermaMad == false) {
		kotekPermaMad = true
		bodyRep.pause()
		killSound.play()
		amongusDrip.currentTime = bodyRep.currentTime
		amongusDrip.play()
		document.getElementById('cat1').style.opacity = '100'
		document.getElementById('cat2').style.opacity = '100'
		document.getElementById('cat3').style.opacity = '100'
		document.body.style.overflow = 'hidden'
	}
})
kotek.addEventListener('mouseenter', function () {
	if (kotekPermaMad == false) {
		kotek.setAttribute('src', 'catMad.ico')
		bodyRep.reset
		bodyRep.currentTime = 0
		bodyRep.play()
		document.getElementById('cat1').style.display = 'block'
		document.getElementById('cat2').style.display = 'block'
		document.getElementById('cat3').style.display = 'block'
	}
})
kotek.addEventListener('mouseleave', function () {
	if (kotekPermaMad == false) {
		kotek.setAttribute('src', 'icon.ico')
		bodyRep.pause()
		document.getElementById('cat1').style.display = 'none'
		document.getElementById('cat2').style.display = 'none'
		document.getElementById('cat3').style.display = 'none'
	}
})
amongusDrip.addEventListener(
	'ended',
	function () {
		document.body.style.overflow = 'scroll'
		document.getElementById('cat1').style.opacity = '0'
		document.getElementById('cat2').style.opacity = '0'
		document.getElementById('cat3').style.opacity = '0'
		document
			.getElementsByClassName('cat')
			.addEventListener(this.getAttribute.opacity == 0)
		{
			this.style.display = 'none'
		}
	},
	false
)

let chemiaNowejEry = new Audio('muzyka z chemii nowej ery (vaporwave edit).mp3')
scriptExtended = new Boolean(false)

document
	.getElementById('breakingBadScript')
	.addEventListener('click', function () {
		document
			.getElementById('breakingBadScript')
			.setAttribute('style', 'height: 10000vh; overflow: hidden;')
		this.style.opacity = '0'
		scriptExtended = true
		document.body.style.backgroundSize = '10000vh'
		bodyRep.pause()
		amongusDrip.pause()
		amongusDrip.volume = 0
		bodyRep.volume = 0
		kotekPermaMad = true
		chemiaNowejEry.play()
		document.getElementById('mainContainer').style.opacity = 0
		document.getElementById('nazwisko').style.opacity = 0
		document.getElementById('kotek').style.opacity = 0
		document.getElementById('settings').style.opacity = 0
		document.getElementById('footer').style.opacity = 0
		document.getElementById('breakingBadHeader').style.opacity = 100
		document.getElementById('breakingBadScript').style.opacity = 100
		document.getElementById('breakingBadScript').style.background =
			'rgba(255, 255, 255, 1)'
		document.getElementById('breakingBadScript').firstChild.style.background =
			'rgba(255, 255, 255, 1)'
	})

document
	.getElementById('breakingBadScript')
	.addEventListener('mouseenter', function () {
		document.getElementById('breakingBadHeader').style.display = 'block'
	})

document
	.getElementById('breakingBadScript')
	.addEventListener('mouseleave', function () {
		if (scriptExtended == false) {
			document.getElementById('breakingBadHeader').style.display = 'none'
		}
	})

chemiaNowejEry.addEventListener(
	'ended',
	function () {
		this.currentTime = 0
		this.play()
	},
	false
)

let settings = document.getElementById('settings')
kodyOn = new Boolean(false)

settings.addEventListener('click', function () {
	if (kodyOn == false) {
		document.body.style.background =
			'linear-gradient(-45deg, #98abc7, #8fece7, #68ccbb, #c3b1f5)'
		document.body.style.backgroundSize = '400vw 400vh'
		document.body.style.animation = 'gradient 15s ease infinite'

		document.getElementById('mainContainer').replaceChildren()
		for (let k = 0; k < 29; k++) {
			dodajKodFicerman(k + 1)
		}
		kodyOn = true
	} else if (kodyOn == true) {
		kodyOn = false
		document.body.style.background =
			'linear-gradient(-45deg, #6fa3f1, #ec8fb3, #eca7ca, #acebc8)'
		document.body.style.backgroundSize = '400vw 400vh'
		document.body.style.animation = 'gradient 15s ease infinite'

		document.getElementById('mainContainer').replaceChildren()
		for (let k = 0; k < 29; k++) {
			dodajZadFicerman(k + 1)
		}
	}
})
