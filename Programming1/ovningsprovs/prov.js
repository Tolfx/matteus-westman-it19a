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