// Q1 Solution of feet to mile conversation
function feetToMile(feet) {
    if (feet >= 0) {
        var mile = feet / 5280;
        return mile;
    }
    else {
        return "Feet can't be a negative number!";
    }
}
var feet = 5000;
var totalMile = feetToMile(feet);
console.log(totalMile);


// Q2 Solution of calculating wood
function woodCalculator(chair, table, bed) {
    if (chair < 0 || table < 0 || bed < 0) {
        return "length can't be a negative number !";

    } else {
        countingWood = (chair * 1) + (table * 3) + (bed * 5);
        return countingWood;
    }
}
var chair = 3, table = 5, bed = 2;
var totalWood = woodCalculator(chair, table, bed);
console.log(totalWood);


// Q3 Solution of calculating bricks
function brickCalculator(floor) {
    var bricks = 0;
    if (floor <= 0) {
        return "floor can't be zero Or negative value!";
    }
    else if (floor >= 1 && floor <= 10) {
        bricks = floor * 15 * 1000;
        return bricks;
    }
    else if (floor >= 11 && floor <= 20) {
        floor = floor - 10;
        bricks = (floor * 12 * 1000) + 150000;
        return bricks;
    }
    else if (floor >= 21) {
        floor = floor - 20;
        bricks = (floor * 10 * 1000) + 150000 + 120000;
        return bricks;
    }
}
var floor = 45;
var totalBricks = brickCalculator(floor);
console.log(totalBricks);


// Q4 Solution of shortest name
function tinyFriend(friendName) {
    if (friendName.length == 0 || friendName == undefined) {
        return "Friends list is empty!";
    }

    else {
        var shortestName = friendName[0];
        for (let i = 1; i < friendName.length; i++) {
            if (friendName[i].length < shortestName.length) {
                shortestName = friendName[i];
            }
        }
        return shortestName;
    }
}
var friendName = ["akhu vai","rokon bro","ansar"];
var finalShortName = tinyFriend(friendName);
console.log(finalShortName);