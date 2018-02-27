$(document).ready( function() {

    // define fighter objects
    // bobafett
    var bobaFett = {
        bobaHP: 100,
        bobaAttack: 25,
        bobaCounter:  25,
    };

    // kylo
    var kylo = {
        kyloHP: 100,
        kyloAttack: 25,
        kyloCounter: 25,
    };

    // darth vader
    var darth = {
        darthHP: 100,
        darthAttack: 25,
        darthCounter: 25,
    };

    // atat
    var atat = {
        atatHP: 100,
        atatAttack: 25,
        atatCounter: 25,
    }
    // luke skywalker
    var luke = {
        lukeHP: 100,
        lukeAttack: 25,
        lukeCounter: 25,
    }

    var myFighter = "";


    $(".choose-fighter").on("click", function () {
        myFighter = $(this).attr("value");
        console.log($(this).attr("value"));
        console.log(myFighter);

    });



});