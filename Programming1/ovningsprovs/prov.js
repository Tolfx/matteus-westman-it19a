/**
 * 
 * @param {number} b 
 * @param {number} h 
 * @returns Omkretsen på en rektangel
 */
function omkretsRekt(b,h)
{
    return (2*b)+(2*h)
}
 
console.log(omkretsRekt(6, 10)) // 32

/**
 * 
 * @param {string} string 
 */
function totalWords(string)
{
    return string.replace(/ /g, "").length
}

console.log(totalWords("Hej vad heter du!!")) // 15

/**
 * @param {number} number
 */
function tecken(number)
{
    if(number === 0)
    {
        return "Noll";
    }
    else if (number > -1)
    {
        return "Positiv"
    }
    else
    {
        return "Negativ"
    }
}

console.log(tecken(5))

/**
 * 
 * @param {number} kompisett 
 * @param {number} kompistvo 
 */
function tiokompis(kompisett, kompistvo)
{
    if(((kompisett+kompistvo) % 10) === 0)
    {
        return "Tvåkompis";
    }
    else
    {
        return "Nope";
    }
}

console.log(tiokompis(7,3)) // Rätt

function addiotionSpel()
{
    let tal1 = Math.floor(Math.random() * 20);
    let tal2 = Math.floor(Math.random() * 20);

    let answer = prompt(`Vad är ${tal1}+${tal2} lika med?`);

    if(parseInt(answer)==(tal1+tal2))
        return console.log("Grattis du hade rätt!");
    else
        return console.log("Grattis du hade fel!");
}