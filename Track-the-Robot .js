// Challange https://edabit.com/challenge/jfpfpH6w42tZeRo2T

// This robot roams around a 2D grid. It starts at (0, 0) facing North. After each time it
// moves, the robot rotates 90 degrees clockwise. Given the amount the robot has moved each
// time, you have to calculate the robot's final position.

function trackRobot(...steps) {
    var res = [[0, 0]];
    var direction = "north";

    for (var i = 0; i < steps.length; i++) {
        if (direction == "north") {
            res.push([res[i][0], res[i][1] + steps[i]]);
            direction = "east";
        } else if (direction == "east") {
            res.push([res[i][0] + steps[i], res[i][1]]);
            direction = "south";
        } else if (direction == "south") {
            res.push([res[i][0], res[i][1] - steps[i]]);
            direction = "west";
        } else if (direction == "west") {
            res.push([res[i][0] - steps[i], res[i][1]]);
            direction = "north";
        }
    }
    return res[res.length - 1];
}

console.log(trackRobot(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
//Expected Result = [6, 5]
