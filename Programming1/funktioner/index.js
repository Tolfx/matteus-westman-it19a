function dividera(tal1, tal2) 
{
    if(tal2 === 0)
        return "Invalid, can't divide 0, too strong!!!";
    
    return tal1/tal2;
}

function multi(tal1, tal2) 
{
    return tal1*tal2;
}

function subtra(tal1, tal2) 
{
    return tal1+tal2;
}

console.log(dividera(12, 0))
console.log(multi(142857, 6))
console.log(subtra(1, 1))