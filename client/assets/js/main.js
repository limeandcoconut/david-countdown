var countdown = require('countdown')
var zeroFill = require('zero-fill')
var docReady = require('doc-ready')

console.log(countdown)
docReady(function() {

    if (new Date('07 Apr 2017 17:00:00 PST') - new Date() > 0) {

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

        console.log(units)

        countdown(
            new Date('07 Apr 2017 17:00:00 PST'),
            (ts) => {
                units.forEach((unit) => {
                    return stamp += format(ts[unit]) + ':'
                })
                element.textContent = stamp.slice(0, -1)
                // console.log(element)
                // console.log(stamp)
                stamp = ''
            },
            countdown.HOURS | countdown.MINUTES | countdown.SECONDS | countdown.MILLISECONDS
        )
    }

})
