
/**
 * 
 * @param {Number} p 
 * @param {Number} q 
 * @description x^2(+-)Px(+-)Q=0
 */
function pqForm(p, q) {
   return {
    x1: -(p/2)+Math.sqrt((p/2)**2-q),
    x2: -(p/2)-Math.sqrt((p/2)**2-q)
   }
}

function konjugat(a, b) {
    return `${a}^2 - ${b}^2`
}

function kvadrering(a, b) {
    let B = b.replace(/\-|\+/gm, "");
    return `${a}^2${b.includes("-") ? "-" : "+"}2${a}${B}+${B}^2`
}
console.log(pqForm(12, 35));