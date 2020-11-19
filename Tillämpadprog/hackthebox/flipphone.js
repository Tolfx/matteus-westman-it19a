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
                        finalMessage += "i"
                        security[i] = 2;
                    } else {
                        finalMessage += "h"
                        security[i] = 2;
                    }
                } else {
                    finalMessage += "g"
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
                        finalMessage += "o"
                        security[i] = 4;
                    } else {
                        finalMessage += "n"
                        security[i] = 4;
                    }
                } else {
                    finalMessage += "m"
                    security[i] = 4;
                }
            }

            if (convertMe[i][x] == 7 && security[i] != 5) {
                if (convertMe[i][x] === convertMe[i][x+1]) {
                    if (convertMe[i][x] === convertMe[i][x+2]) {
                        finalMessage += "r"
                        security[i] = 5;
                    } else if (convertMe[i][x] === convertMe[i][x+3]) {
                        finalMessage += "s"
                        security[i] = 5;
                    } else {
                        finalMessage += "q"
                        security[i] = 5;
                    }
                } else {
                    finalMessage += "p"
                    security[i] = 5;
                }
            }

            if (convertMe[i][x] == 8 && security[i] != 6) {
                if (convertMe[i][x] === convertMe[i][x+1]) {
                    if (convertMe[i][x] === convertMe[i][x+2]) {
                        finalMessage += "v"
                        security[i] = 6;
                    } else {
                        finalMessage += "u"
                        security[i] = 6;
                    }
                } else {
                    finalMessage += "t"
                    security[i] = 6;
                }
            }

            if (convertMe[i][x] == 9 && security[i] != 7) {
                if (convertMe[i][x] === convertMe[i][x+1]) {
                    if (convertMe[i][x] === convertMe[i][x+2] && !convertMe[i][x] === convertMe[i][x+3]) {
                        finalMessage += "y"
                        security[i] = 5;
                    } else if (convertMe[i][x] == convertMe[i][x+3]) {
                        finalMessage += "z"
                        security[i] = 7;
                    } else {
                        finalMessage += "x"
                        security[i] = 7;
                    }
                } else {
                    finalMessage += "w"
                    security[i] = 7;
                }
            }
            
        }
        finalMessage += " "
    }
    return finalMessage;
}
console.log(converter("999"))
//console.log(converter(`444333 99966688 277733 7773323444664 84433 22244474433777 99966688 277733 666552999 99966688777 777744277733 666333 84433 443344477778 4447777 44466 99966688777 4466688777733 84433 5533999 8666 84433 55566622255 4447777 22335556669 4666 8666 72777444777747777888 995559888 4555 47777888 44999988 666555997 8555444888477744488866888648833369`))