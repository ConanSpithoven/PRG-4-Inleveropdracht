class Item {
    protected game : Game;

    static useSlimeSword : number = 0;
    static useOrcSword : number = 0;
    static useDragonSword : number = 0;
    static numSquire : number = 0;
    static numKnight : number = 0;
    static numPaladin : number = 0;

    constructor(g:Game){
        this.game = g;
    }
    protected activateWeapon(theName : string, theDamage : number, theCost : number){
        if (this.game.gold >= theCost){
            this.game.gold -= theCost;

            console.log(theName + " with "+ theDamage +" damage bought for " + theCost);

            if(theName == "slimesword")
            {
                Item.useSlimeSword += 1;
                //set damage to 2
                document.getElementById(theName).innerHTML = "[" + Item.useSlimeSword + "] " + theName.toUpperCase() + "S (" + theCost + "gold)";
            }
            else if(theName == "orcsword")
            {
                Item.useOrcSword += 1;
                //set damage to 5
                document.getElementById(theName).innerHTML = "[" + Item.useOrcSword + "] " + theName.toUpperCase() + "S (" + theCost + "gold)";
            }
            else if(theName == "dragonsword")
            {
                Item.useDragonSword += 1;
                //set damage to 10  
                document.getElementById(theName).innerHTML = "[" + Item.useDragonSword + "] " + theName.toUpperCase() + "S (" + theCost + "gold)";
            }
        }
        else{
            let goldText = document.getElementById("gold");
            let switcher = false;

            for(var i = 0; i < 5; i++){
                let intervalID = setInterval(function(){
                    if(switcher){
                        goldText.style.color = "gold";
                        switcher = false;
                        clearInterval(intervalID);
                    }
                    else {
                        goldText.style.color = "red";
                        switcher = true;
                    }
                }, 100)
            }
        }
}
    protected activateIncome(theName : string, theIncome : number, theCost : number){
        if (this.game.gold >= theCost){
            this.game.gold -= theCost;

            console.log(theName + " with "+ theIncome +" gold/sec bought for " + theCost);

            if(theName == "squire")
            {
                Item.numSquire++;
                //add 1 gold/sec
                console.log("got squire");
                document.getElementById(theName).innerHTML = "[" + Item.numSquire + "] " + theName.toUpperCase() + "S (" + theCost + "gold)";
                
            }
            else if(theName == "knight")
            {
                Item.numKnight++;
                //add 4 gold/sec
                document.getElementById(theName).innerHTML = "[" + Item.numKnight + "] " + theName.toUpperCase() + "S (" + theCost + "gold)";
                
            }
            else if(theName == "paladin")
            {
                Item.numPaladin++;
                //add 8 gold/sec
                document.getElementById(theName).innerHTML = "[" + Item.numPaladin + "] " + theName.toUpperCase() + "S (" + theCost + "gold)";
                
            }
        }
        else{
            let goldText = document.getElementById("gold");
            let switcher = false;

            for(var i = 0; i < 5; i++){
                let intervalID = setInterval(function(){
                    if(switcher){
                        goldText.style.color = "gold";
                        switcher = false;
                        clearInterval(intervalID);
                    }
                    else {
                        goldText.style.color = "red";
                        switcher = true;
                    }
                }, 100)
            }
        }
    }
    }

