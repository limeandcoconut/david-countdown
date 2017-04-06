var countdown = require('countdown')
var zeroFill = require('zero-fill')
var docReady = require('doc-ready')

console.log(countdown)
docReady(function() {

    if (new Date('06 Apr 2017 17:00:00 PDT') - new Date() > 0) {

        function format(num) {
            num = String(num)
            if (num.length > 2) {
                num = num.slice(0, 2)
            }
            return zeroFill(2, num)
        }

        let units = ['hours', 'minutes', 'seconds', 'milliseconds']
        let stamp = ''
        let element = document.getElementById('countdown')

        let countdownId = countdown(
            new Date('06 Apr 2017 17:00:00 PDT'),
            (ts) => {
                units.forEach((unit) => {
                    return stamp += format(ts[unit]) + ':'
                })
                element.textContent = stamp.slice(0, -1)
                stamp = ''
            },
            countdown.HOURS | countdown.MINUTES | countdown.SECONDS | countdown.MILLISECONDS
        )

        let intervalId = setInterval(() => {
            console.log(new Date('06 Apr 2017 17:00:00 PDT') - new Date() < 0)
            if (new Date('06 Apr 2017 17:00:00 PDT') - new Date() < 0) {
                clearInterval(intervalId)
                clearInterval(countdownId)
                location.reload()
            }
        }, 1000)
    }

})
