//  VERY LIMITED ON TIME FOR THIS ASSIGNMENT DUE TO WORK COMMITMENTS
//  SUBMITTEED CRYSTALS COLLECTORS BUT WOULD LIKE TO GET THIS FULLY FUNCTIONALLY
//  STARTED MORE ON AESTHETICS / ATTEMPTED TO UTILIZE CSS AND JQUERY THAT I'M NOT AS FAMILIAR WITH YET

$(document).ready( function() {

    // define fighter objects
    // FIRST ATTEMPT AT MAKING AN ARRAY OF OBJECTS   
    var possibleFighters = [
    {
    // bobafett    
    id: bobaFett = {
    bobaHP: 100,
    bobaAttack: 25,
    bobaCounter:  25,
    }},

    // kylo
    {id: kylo = {
        kyloHP: 100,
        kyloAttack: 25,
        kyloCounter: 25,
    }},

    // darth vader
    {id: darth = {
        darthHP: 100,
        darthAttack: 25,
        darthCounter: 25,
    }},

    // atat
    {id: atat = {
        atatHP: 100,
        atatAttack: 25,
        atatCounter: 25,
    }},

    // luke skywalker
    {id: luke = {
        lukeHP: 100,
        lukeAttack: 25,
        lukeCounter: 25,
    }}
    ];

    // GLOBAL VARIABLE FOR FIGHTER AND OPPONENT CHOSEN
    var myFighter = "";
    var myOpp = "";

    // HIDE FIGHTERS AFTER INITIAL FIGHTER CHOSEN
    // HIDE ADDITIONAL FIGHTERS SHOULD FIGHTER DEFEAT OPPONENT
    function removeFighters(fighter) {

        $(".chooser-fighter").stop(); //this isn't stopping on click event, have tried multiple options via google searches
        $("#attack").toggle();

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

    // MOVE INITIAL OPPONENT TO BATTLE ARENA
    // USE FUNCTION TO ALSO MOVE ADDITIONAL OPPONENTS TO ARENA
    function battleArena(opponent) {

        $(".opp-fighter").stop("click"); // this isn't stopping on click event, have tried multiple options via google searches

        document.getElementById(opponent).style.display = "none";
        document.getElementById(opponent.replace("-opp","-bat")).style.display = "inline-block";

        
    }

    // ON CLICK EVENT TO CHOOSE FIGHTER
    $(".choose-fighter").on("click", function () {
        myFighter = $(this).attr("id");
        console.log(myFighter);

        removeFighters(myFighter);

    });

    // ON CLICK EVENT TO CHOOSE OPPONENT
    $(".opp-fighter").on("click", function () {
        myOpp = $(this).attr("id");
        console.log(myOpp);

        battleArena(myOpp);
    });

    // ON CLICK EVENT FOR BATTLE FUNCTION
    $("#attack").on("click", function () {
        console.log(myFighter);
        console.log(myOpp);

        // could not find the proper code via google search to get object from array
        // var tempFighter = get myFighter from possibleFighters
        // var tempOpponent = get myOpp from possibleFighters

        // ON CLICK OF ATTACK
        //// ATTACK OPPONENT WITH FIGHTER ATTACK POWER
        ////// INCREASE ATTACK POWER = AP + BASE AP
        //// DECREASE OPPONENT HP BY ATTACK POWER
        //// COUNTER ATTACK FIGHTER BASED ON OPP CAP
        //// DECREASE FIGHTER HP
        //// CONTINUE UNTIL EITHER FIGHTER DEFEATS OPP OR OPP DEFEATS FIGHTER
        ////// IF FIGHTER WINS (OPP HP <= 0)
        //////// RUN WIN SCENARIO, THEN
        //////// CHOOSE NEW OPPONENT, KEEP UPDATED ATTACK POWER
        ////// IF FIGHTER LOSES (FIGHTER HP <= 0)
        //////// RUN LOSE SCENARIO, THEN
        //////// START NEW GAME

        // REALLY WISH I HAD MORE TIME TO COMPLETE THE RPG GAME
        // AGAIN, WORK COMMITMENTS REALLY GOT IN MY WAY FOR THIS ASSIGMENT

    });


});