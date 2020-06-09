console.log('itworks')

$(document).ready(function () {
    $('.submitbutton').click(function (event) {
        event.preventDefault()
        

        var firstName = $('.firstName').val()
        var lastName = $('.lastName').val()
        var male = $('.male').val()
        var female = $('.female').val()
        var email = $('.email').val()
        var address = $('.address').val()
        var newsletter = $('.newsletter').val()
        var query = $('.query').val()
        var statusElm = $('.status')
        statusElm.empty()

        if(email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.append('<div>Email is cracking</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Email is bollocks</div>')
        }

         if(query.length > 5 ) {
            statusElm.append('<div>Query is cracking</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Query is bollocks</div>')
        }
    })
})