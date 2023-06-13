// Challange https://edabit.com/challenge/HXAWjd2Nkj8eAJ2xY

// Jake is a very habitual person. He eats breakfast at 7:00 a.m. each morning, lunch at 12:00
// p.m. and dinner at 7:00 p.m. in the evening.

// Create a function that takes in the current time as a string and determines the duration of
// time before Jake's next meal. Represent this as an array with the first and second elements
// representing hours and minutes, respectively.

function timeToEat(currentTime) {
    var hour = parseInt(currentTime.split(" ")[0].split(":")[0]);
    var min = parseInt(currentTime.split(" ")[0].split(":")[1]);
    var type = currentTime.split(" ")[1];
    var mins = 0;

    if (type == "a.m.") {
        mins = hour * 60 + min;
    } else {
        mins = hour * 60 + min + 720;
    }
    if (currentTime == "12:00 a.m.") {
        mins = 0;
    }
    var toBreakfast = 420;
    var toLunch = 720;
    var toDinner = 1140;

    if (mins < toBreakfast) {
        mins = toBreakfast - mins;
        return [Math.floor(mins / 60), mins % 60];
    } else if (mins > toBreakfast && mins < toLunch) {
        mins = toLunch - mins;
        return [Math.floor(mins / 60), mins % 60];
    } else if (mins > toLunch && mins < toDinner) {
        mins = toDinner - mins;
        return [Math.floor(mins / 60), mins % 60];
    } else if (mins > toDinner) {
        mins = (1440 - mins) + 420;
        return [Math.floor(mins / 60), mins % 60];
    } else {
        return [0, 0];
    }
}

console.log(timeToEat("2:00 p.m."));
// Expected result = [5, 0]