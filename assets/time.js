'use strict'

const output = document.getElementById('time')

const update = () => {
    const dateString = new Date().toISOString()
    const date = dateString.slice(0, 10)
    const time = dateString.slice(11, 19)

    const clock = `${date}, ${time}`

    if (/\d\d\d\d\-\d\d\-\d\d, \d\d:\d\d:\d\d/gm.test(clock)) {
    	output.innerHTML = clock
    }
}

setInterval(update, 1000)
update()
