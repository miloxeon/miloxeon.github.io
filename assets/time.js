'use strict'

Date.prototype.today = function () { 
    return (this.getDate() < 10 ? '0' : '') + this.getDate() + '.' +
           (this.getMonth() + 1 < 10 ? '0' : '') + (this.getMonth() + 1) + '.' + 
            this.getFullYear()
}

Date.prototype.timeNow = function () {
    return this.getHours() < 10 ? '0' : '' + this.getHours() + ':' +
          (this.getMinutes() < 10 ? '0' : '') + this.getMinutes() + ':' +
          (this.getSeconds() < 10 ? '0' : '') + this.getSeconds()
}

var output = document.getElementById('time')

function update () {
    var date = new Date()
    var clock = date.today() + ', ' + date.timeNow()
    if (/\d\d.\d\d.\d\d\d\d, \d\d:\d\d:\d\d/gm.test(clock)) {
    	output.innerHTML = clock
    }
}

setInterval(update, 1000)
update()
