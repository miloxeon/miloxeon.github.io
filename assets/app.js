'use strict'

const themesContainer = document.querySelector('.themes')
if (themesContainer) themesContainer.removeAttribute('hidden')

Array.from(document.querySelectorAll('.themes button')).forEach(button => {
	const color = button.dataset?.color
	if (!color) return
	button.style.backgroundColor = color
	button.addEventListener('click', () => {
		document.documentElement.style.cssText = `--accent: ${color}`
		const pic = document.querySelector('.content-core .left .scanlines')
		if (!pic) return
		pic.style.cssText = `background-image: linear-gradient(${color}00 0px, ${color}00 0px, ${color}55 2px);`
	})
})
