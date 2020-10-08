/**
 * 
 * @param {String} body 
 */
function converter(body) {
    let removedWhiteSpace = body.slice(/ /g).split(/ +/g);
    const convertMe = removedWhiteSpace.filter(data => parseInt(data));
    let finalMessage = "";
    let security = [];
    for (let i = 0; i < convertMe.length; i++) {
        for (let x = 0; x < convertMe[i].length; x++) {
            if (convertMe[i][x] == 2 && security[i] != 0) {
                if (convertMe[i][x] === convertMe[i][x+1]) {
                    if (convertMe[i][x] === convertMe[i][x+2]) {
                        finalMessage += "c"
                        security[i] = 0;
                    } else {
                        finalMessage += "b"
                        security[i] = 0;
                    }
                } else {
                    finalMessage += "a"
                    security[i] = 0;
                }
            }

            if (convertMe[i][x] == 3 && security[i] != 1) {
                if (convertMe[i][x] === convertMe[i][x+1]) {
                    if (convertMe[i][x] === convertMe[i][x+2]) {
                        finalMessage += "f"
                        security[i] = 1;
                    } else {
                        finalMessage += "e"
                        security[i] = 1;
                    }
                } else {
                    finalMessage += "d"
                    security[i] = 1;
                }
            }

            if (convertMe[i][x] == 4 && security[i] != 2) {
                if (convertMe[i][x] === convertMe[i][x+1]) {
                    if (convertMe[i][x] === convertMe[i][x+2]) {
                        finalMessage += "g"
                        security[i] = 2;
                    } else {
                        finalMessage += "h"
                        security[i] = 2;
                    }
                } else {
                    finalMessage += "i"
                    security[i] = 2;
                }
            }

            if (convertMe[i][x] == 5 && security[i] != 3) {
                if (convertMe[i][x] === convertMe[i][x+1]) {
                    if (convertMe[i][x] === convertMe[i][x+2]) {
                        finalMessage += "l"
                        security[i] = 3;
                    } else {
                        finalMessage += "k"
                        security[i] = 3;
                    }
                } else {
                    finalMessage += "j"
                    security[i] = 3;
                }
            }

            if (convertMe[i][x] == 6 && security[i] != 4) {
                if (convertMe[i][x] === convertMe[i][x+1]) {
                    if (convertMe[i][x] === convertMe[i][x+2]) {
                        finalMessage += "m"
                        security[i] = 4;
                    } else {
                        finalMessage += "n"
                        security[i] = 4;
                    }
                } else {
                    finalMessage += "o"
                    security[i] = 4;
                }
            }

            if (convertMe[i][x] == 7 && security[i] != 5) {
                if (convertMe[i][x] === convertMe[i][x+1]) {
                    if (convertMe[i][x] === convertMe[i][x+2]) {
                        finalMessage += "p"
                        security[i] = 5;
                    } else if (convertMe[i][x] === convertMe[i][x+3]) {
                        finalMessage += "q"
                        security[i] = 5;
                    } else {
                        finalMessage += "r"
                        security[i] = 5;
                    }
                } else {
                    finalMessage += "s"
                    security[i] = 5;
                }
            }

            if (convertMe[i][x] == 8 && security[i] != 6) {
                if (convertMe[i][x] === convertMe[i][x+1]) {
                    if (convertMe[i][x] === convertMe[i][x+2]) {
                        finalMessage += "t"
                        security[i] = 6;
                    } else {
                        finalMessage += "u"
                        security[i] = 6;
                    }
                } else {
                    finalMessage += "v"
                    security[i] = 6;
                }
            }

            if (convertMe[i][x] == 9 && security[i] != 7) {
                if (convertMe[i][x] === convertMe[i][x+1]) {
                    if (convertMe[i][x] === convertMe[i][x+2]) {
                        finalMessage += "w"
                        security[i] = 5;
                    } else if (convertMe[i][x] === convertMe[i][x+3]) {
                        finalMessage += "x"
                        security[i] = 7;
                    } else {
                        finalMessage += "y"
                        security[i] = 7;
                    }
                } else {
                    finalMessage += "z"
                    security[i] = 7;
                }
            }
        }
        finalMessage += " "
    }
    return finalMessage;
}

console.log(converter("44335 32"))