const Om_Mig = document.querySelector("#om-mig");
const Bilder = document.querySelector("#bilder");
const Fun_Facts = document.querySelector("#fun-facts");
const Content = document.querySelector("#content");

/**
 * 
 * @param {"om-mig" | "bilder" | "fun-facts"} dom 
 */
const changeOpacity = (dom) => {
    if(dom.match(/om-mig|bilder|fun-facts/g))
    {
        switch(dom)
        {
            case "om-mig": {
                console.log("Showing Om-Mig");
                Content.style.paddingBottom = "17rem";
                Om_Mig.style.opacity = "1";
                Bilder.style.opacity = "0";
                Fun_Facts.style.opacity = "0";
                break;
            }
            case "bilder": {
                console.log("Showing Bilder");
                Content.style.paddingBottom = "31rem";
                Om_Mig.style.opacity = "0";
                Bilder.style.opacity = "1";
                Fun_Facts.style.opacity = "0";
                break;
            }
            case "fun-facts": {
                console.log("Showing Fun-Facts");
                Content.style.paddingBottom = "6rem";
                Om_Mig.style.opacity = "0";
                Bilder.style.opacity = "0";
                Fun_Facts.style.opacity = "1";
                break;
            }
        }
    }
};