$(() => {

    $('#fadeIn').click(function() {

        // On sélectionne chaque '<div>' et on éxecute la méthode fadeIn() pour faire apparaître progressivement les blocs 'rouge , bleu et vert'. On peut modifier la durée de transistions (en ms)
        $('#rouge').fadeIn(2000);
        $('#bleu').fadeIn('slow');
        $('#vert').fadeIn('fast');

    })


    $('#fadeOut').click(function() {

        $('#rouge2').fadeOut(2000);
        $('#bleu2').fadeOut('slow');
        $('#vert2').fadeOut('fast');

    })

    $('#fadeToggle').mouseover(function(){

        $('#rouge3').fadeToggle(2000);
        $('#bleu3').fadeToggle('slow');
        $('#vert3').fadeToggle('fast');

    })

    $('#fadeTo').click(function () { 
        $('#formulaire').fadeTo('slow', 1);
        $('#jaune').fadeTo('slow', 0);
        $('#violet').fadeTo('fast', 0);
        
    });

    $('#fadeTo2').click(function () { 
        $('#formulaire').fadeTo('slow', 0);
        $('#jaune').fadeTo('slow', 1);
        $('#violet').fadeTo('fast', 1);
        
    });


    // SLIDEDOWN
    /* cette méthode permet de déplier un élément */
    $('#barre').click(function () { 
        $('#rideau').slideDown('slow');
        
    });

    // SLIDEUP
    /* cette méthode permet l'effet inverse de la méthode 'slideUp()', c'est à dire replier un élément */
    $('#barreUp').click(function () { 
        $('#rideau').slideUp('slow');
        
    });


    /* mes tests */
    $('#barreUpDown').click(function () { 
        $('#rideau').slideToggle('slow');
        
    });

    $('#barreMouseOver').hover(function () { 
        $('#rideau').slideDown('slow');
        
    }, function () { 
        $('#rideau').slideUp('slow');
        
    })
    
    // ANIMATE SIMPLE
    $('#btn-simple').click(function () {
        $('#simple').animate({
            left : '200px'
        }, 'slow')
    })

    
    $('#btn-double').click(function () {
        $('#double').animate({
            left : '400px',
            bottom: '300px',
        }, 200)
    })

    // AUTRE METHODE FAIT PAR ABDEL
    $('#btn-etape').click(function () {
        $('#etape').animate({
            left : '400px'
        }, 2000)
        $('#etape').animate({
            bottom: '300px'
        }, 2000) ;
    })

    // AUTRE METHODE FAIT PAR ABDEL
    $('#btn-etape').click(function () {
        $('#etape')
            .animate({
                left : '400px'
            }, 2000)
            .animate({
                bottom: '300px'
            }, 2000) ;
    })


    $('#btn-etape2').click(function () {
        $('#etape2')
            .animate({
                width: '500px',
                height : '300px'
            }, 200)
            .animate({
                fontSize: '4em'
            }, 200) 
            .animate({
                color: 'red'
            }, 20) ;
    })


    // AUTRE METHODE FAIT PAR ABDEL
    $('#btn-etape3').click(function () {
        $('#etape3')
            .animate({
                width: '500px',
            }, 200)
            .animate({
                height : '300px'
            }, 200)
            .animate({
                left : '400px'
            }, 200)
            .animate({
                bottom: '300px'
            }, 200)
            .animate({
                fontSize: '4em'
            }, 200)
            .animate({
                opacity: '0'
            },200)
            
    })

    $('#div1').click(function() {
        $('h2').hide();
    })
    
    $('img').click(function() {
        $('h2').show();
    })


    $('#pseudo1').keypress(function (e) { 
        console.log('test');
        $(this).css({
            backgroundColor: 'red',
            outline: '2px solid blue'
        }) ;
    });

    /* bouton ON OFF */
    $('#onOFF').click(() => {
        /* pour faire disparaitre la phrase */
        $('p').slideToggle('fast') ;
    });
})