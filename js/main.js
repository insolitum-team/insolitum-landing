var key = [72, 74, 82]
var ck = 0
var max = key.length
const contct = document.querySelector('.contact')
console.log(contct)

var hi = function () {
    var shock = document.createElement('div')
    var img = new Image()
    img.src = data
    img.style.width = '300px'
    img.style.height = '300px'
    img.style.transition = '1s all'
    img.style.position = 'fixed'
    img.style.left = 'calc(50% - 150px)'
    img.style.bottom = '-100px'
    img.style.zIndex = 999999

    document.body.appendChild(img)

    window.setTimeout(function () {
        img.style.bottom = '-50px'
    }, 30)

    window.setTimeout(function () {
        img.style.bottom = '-300px'
    }, 4300)
    window.setTimeout(function () {
        img.parentNode.removeChild(img)
    }, 5400)
}

var record = function (e) {
    if (e.which === key[ck]) {
        ck++
    } else {
        ck = 0
    }

    if (ck >= max) {
        hi()
        ck = 0
    }
}

var init = function (data) {
    document.addEventListener('keyup', record)
}

var data = 'https://i.gifer.com/5EeH.gif'

init(data)

console.log('напиши "рок"')

var typed = new Typed('#typed', {
    typeSpeed: 50,
    stringsElement: '#typed-strings',
    cursorChar: '_',
})

// swag

if (window.matchMedia('(max-width: 768px)').matches) {
 const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href')

        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    })
}

$('.icon, ul li').click(function () {
    if ($('.nav_buttons').is(':hidden')) {
        $('.nav_buttons').show('slideToggle')
    } else {
        $('.nav_buttons').hide('slideToggle')
    }
})
   
}
// contct.addEventListener('click', contactform{})
contct.addEventListener("click", function(){  
let back = document.querySelector('.blur')
let form = document.getElementsByClassName('form')
back.style.display = 'flex'
for (var i = 0; i < form.length; i++) form[i].style.display = 'flex'
back.addEventListener('click', function(){
back.style.display = 'none'
for (var i = 0; i < form.length; i++) form[i].style.display = 'none'
})
})




$(document).ready(function () {
    $('#button_contacts').click(function () {
        var form_name = $('#form_name').val()
        var form_email = $('#form_email').val()
        var form_message = $('#form_message').val()
        $.ajax({
            url: 'post.php',
            type: 'post',
            dataType: 'json',
            data: {
                form_name: form_name,
                form_email: form_email,
                form_message: form_message,
            },
            success: function (data) {
                $('.messages').html(data.result)
            },
        })
    })
})

