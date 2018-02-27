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
    var myOpp = "";

    function removeFighters(fighter) {

        $(".chooser-fighter").stop("click");

        var fighters = ["boba", "kylo", "darth", "atat", "luke"];

        for (var i = 0; i < fighters.length; i++) {
            if ( fighter != fighters[i] ) {
                console.log("remove fighter: " + fighters[i]);
                // $(".choose-fighter[value='fighters[i]']").toggle();
                document.getElementById(fighters[i]).style.display = "none";
                document.getElementById(fighters[i] + "-opp").style.display = "inline-block";                
            }
        }
    }

    function startBattle(opponent) {

        $(".opp-fighter").stop("click");
        
        document.getElementById(opponent).style.display = "none";
        document.getElementById(opponent.replace("-opp","-bat")).style.display = "inline-block";

        
    }

    $(".choose-fighter").on("click", function () {
        myFighter = $(this).attr("id");
        console.log(myFighter);

        removeFighters(myFighter);

    });

    $(".opp-fighter").on("click", function () {
        myOpp = $(this).attr("id");
        console.log(myOpp);

        startBattle(myOpp);
    })



});