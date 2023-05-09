$(document).ready(() => {

    console.log('test jquery') ;

    // EVENEMENT MOUSEOVER
    /* lorsque nous allons passer notre souris (mouseover) sur les elements dyant la classe 'zone1', nous ferons changer leur couleurs de fond d'écran en bleu. la barre représentée par l'id 'info voit son contenu se modifier et sa couleur de fond d'écran changer en vert */
    $('.zone1').mouseover(function () { 
        $(this).css('background-color', 'blue') ;
        $('#info').html('je suis sur la zone 1') ;
        $('#info').css('background-color', 'green') ;
    });

    // EVENEMENT MOUSEOUT
    /* le changement de la mise en forme intervient lorsque l'utilisateur quitte la zone2 avec sa souris */
    $('.zone2').mouseout(function() {
        $(this).css({'background-color': 'grey', 'font-size': '2em'})
        $('#info').html('je suis sur sortie de la zone 2') ;
    })

    $('.zone3').mouseover(function () { 
        $(this).css('background-color', 'blue') ;
        $('#info').html('je suis sur la zone 3') ;
        $('#info').css('background-color', 'green') ;
    });

    $('.zone3').mouseout(function () { 
        $(this).css({'background-color': 'grey', 'font-size': '2em'})
        $('#info').html('je suis sur sortie de la zone 3') ;
    });


    $('.zone4').click(function () { 
        $(this).css('background-color', 'blue') ;
        $('#info').html('j\'ai cliqué sur la zone 4') ;
        $('#info').css('background-color', 'green') ;
    });

    $('.zone5').dblclick(function () { 
        $(this).css({'background-color': 'grey', 'font-size': '2em'})
        $('#info').html('j\'ai double cliqué sur la zone 5') ;
        $('#info').css('background-color', 'purple') ;
    });

    $('.zone6').contextmenu(function () { 
    
        $(this).css('background-color', 'blue') ;
        $('#info').html('j\'ai clique droit sur la zone 6') ;
        $('#info').css('background-color', 'red') ;
    });

    $( '.zone7' ).blur(function() {
        $(this).css('background-color', 'blue') ;
        $('#info').html('j\'ai clique ailleurs apres avoir focus la zone 7') ;
        $('#info').css('background-color', 'green') ;
    });

    console.log($('.zone8:eq(0)')) ;

    $('.zone8').change(function() {
        console.log('test') ;
        $(this).css('background-color', 'blue') ;
        $('#info').html('j\'ai sélectionné un autre selecteur dans la zone 8') ;
        $('#info').css('background-color', 'orange') ;
    });



    $( ".zone9" ).keyup(function() {
        console.log('test relachement touche') ;
        $(this).css('background-color', 'blue') ;
        $('#info').html('j\'ai relaché une touche dans la zone 9') ;
        $('#info').css('background-color', 'yellow') ;
    });

    $( ".zone9" ).keydown(function() {
        console.log('test appuyer touche') ;
        $(this).css('background-color', 'blue') ;
        $('#info').html('j\'ai appuyé une touche dans la zone 9') ;
        $('#info').css('background-color', 'green') ;
    });

    $(document).scroll(function () { 
        $('#info').html('je scroll') ;
        $('#info').css('background-color', 'red') ;
    });

})