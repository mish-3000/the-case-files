var intro = document.querySelector(".intro");
var introtext2 = document.querySelector(".introtext2");
var introtext1 = document.querySelector(".introtext1");
var EvidenceBoard = document.querySelector(".EvidenceBoard");
var carddiv = document.querySelectorAll(".card-div");
var night = document.querySelector(".night");



setTimeout(() => {night.style.display = "block"; }, 8050);
setTimeout(() => {EvidenceBoard.style.display = "block"; }, 6501);
setTimeout(() => {cord.style.display = "block"; }, 8001);


setTimeout(() => {intro.style.display = "none";}, 8000);

setTimeout(() => {introtext2.classList.add("fadeout");
    introtext1.classList.add("fadeout");
}, 6000);
var arr=introtext1.textContent.split("");
introtext1.textContent="";
for (let i = 0; i < arr.length; i++) {
 
    const span = document.createElement("span");
span.textContent=arr[i];
introtext1.appendChild(span);

span.classList.add("flicker");}

   








var CaseDataArr=[]
var CaseCardDivArr=[]
var CaseNameArr=["A Scandal in Bohemia", "The Adventure of the Empty House", "The Final Problem", "The Hound of the Baskervilles", "The Red Headed League", "The Sign of the Four", "The Adventure of the Six Napoleons", "The Adventure of the Speckled Band", "A Study in Scarlet", "The Valley of Fear"]
var CaseClassArr=["A_Scandal_in_Bohemia", "The_Adventure_of_the_Empty_House", "The_Final_Problem", "The_Hound_of_the_Baskervilles", "The_Red_Headed_League", "The_Sign_of_the_Four", "The_Adventure_of_the_Six_Napoleons", "The_Adventure_of_the_Speckled_Band", "A_Study_in_Scarlet", "The_Valley_of_Fear"]
var CaseImageArr=["assets/covers/A_Scandal_in_Bohemia.jpg", "assets/covers/Empty_House.jpg", "assets/covers/final_problem.jpg", "assets/covers/Hound_of_Baskervilles.jpg", "assets/covers/red_headed_league.jpg", "assets/covers/Sign_of_four.jpg", "assets/covers/Six_Napoleons.jpg", "assets/covers/Speckled_Band.jpg", "assets/covers/Study_in_Scarlet.jpg", "assets/covers/The_Valley_of_Fear.jpg"]
var PushpinClassArr=["pushpin1", "pushpin2", "pushpin3", "pushpin4", "pushpin5", "pushpin6", "pushpin7", "pushpin8", "pushpin9", "pushpin10", "pushpin11"]
for (let i = 0; i <10; i++) { 
    let Div= document.createElement("div")

Div.classList.add("card-div")
Div.classList.add(CaseClassArr[i])
EvidenceBoard.appendChild(Div)
CaseCardDivArr.push(Div)
let name= document.createElement("p")
name.textContent=CaseNameArr[i]
name.classList.add("casename")
Div.appendChild(name)
let image= document.createElement("img")
image.setAttribute("src", CaseImageArr[i])
image.classList.add("caseimg")
Div.appendChild(image)
let pushpin= document.createElement("img")
pushpin.classList.add("pushpin")
pushpin.classList.add(PushpinClassArr[i])
pushpin.setAttribute("src", "https://freepngimg.com/save/webp/25041-pushpin-free-download")
EvidenceBoard.appendChild(pushpin)
let id=i
let CaseData= {
    "NAME": CaseNameArr[i],
    "IMAGE": CaseImageArr[i],
    "PUSHPIN_SRC": pushpin.getAttribute("src"),
    "DIV": CaseCardDivArr[i],
    "ID": i,
    "PUSHPIN": pushpin
} 
CaseDataArr.push(CaseData)
}


























































































const svg = document.querySelector(".svgcanvas");




const patharr = [];
for (let i = 0; i < CaseDataArr.length; i++) {
let path= document.createElementNS("http://www.w3.org/2000/svg", "path");

path.setAttribute("stroke", "rgb(128, 0, 0,1)");
path.setAttribute("fill", "transparent");
path.setAttribute("stroke-width", "3.6");
patharr.push(path);
svg.appendChild(path); 
}


const drawThreads = () => {
const points = [];
CaseDataArr.forEach((caseData) => {
    let pinx = caseData.PUSHPIN.getBoundingClientRect().x;
    let piny = caseData.PUSHPIN.getBoundingClientRect().y;
points.push({x: pinx, y: piny});

});


if (points.length >= 10) {
    
    const pathdata = [`M${points[0].x+30} ${points[0].y+30} Q${(points[0].x + points[1].x) / 2} ${ (points[0].y + points[1].y) / 2 + 70} ${points[1].x+40} ${points[1].y+45}`,
     `M${points[0].x+30} ${points[0].y+30} Q${(points[0].x + points[5].x) / 2} ${ (points[0].y + points[5].y) / 2 + 50} ${points[5].x+40} ${points[5].y+40}`,
   `M${points[0].x+20} ${points[0].y+20} Q${(points[0].x + points[8].x) / 2+70} ${ (points[0].y + points[8].y) / 2 + 70} ${points[8].x+40} ${points[8].y+35}`,
     `M${points[3].x+20} ${points[3].y+20} Q${(points[3].x + points[7].x) / 2+70} ${ (points[3].y + points[7].y) / 2 + 50} ${points[7].x+37} ${points[7].y+35}`,
     `M${points[6].x+43} ${points[6].y+40} Q${(points[6].x + points[3].x) / 2} ${ (points[6].y + points[3].y) / 2 + 50} ${points[3].x+18} ${points[3].y+40}`,
     `M${points[6].x+20} ${points[6].y+20} Q${(points[6].x + points[1].x) / 2} ${ (points[6].y + points[1].y) / 2 + 50} ${points[1].x+40} ${points[1].y+40}`,
   `M${points[7].x+20} ${points[7].y+50} Q${(points[7].x + points[9].x) / 2} ${ (points[7].y + points[9].y) / 2 + 50} ${points[9].x+30} ${points[9].y+40}`,
     `M${points[4].x+20} ${points[4].y+50} Q${(points[4].x + points[3].x) / 2} ${ (points[4].y + points[3].y) / 2 + 50} ${points[3].x+40} ${points[3].y+40}`,
     `M${points[2].x+45} ${points[2].y+40} Q${(points[2].x + points[4].x) / 2} ${ (points[2].y + points[4].y) / 2 + 50} ${points[4].x+20} ${points[4].y+40}`
]
    
    
    
    for (let i = 0; i < patharr.length; i++) {

    patharr[i].setAttribute("d", pathdata[i]);
    

    }}}
    
    setTimeout(() => { drawThreads();
        setTimeout(() => { patharr.forEach((path) => {
            path.classList.remove("draw");
            path.style.strokeDasharray = "";
            path.style.strokeDashoffset = "";
        }); }, 2800);
    }, 8000);
    
    for (let i = 0; i < patharr.length; i++) { 
        setTimeout(() => {     patharr[i].style.strokeDasharray = patharr[i].getTotalLength();
    patharr[i].style.strokeDashoffset = patharr[i].getTotalLength();}, 8000);


        setTimeout(() => { patharr[i].classList.add("draw");
        }, 9000);
    }

   EvidenceBoard.addEventListener("scroll", drawThreads);



const dim = document.querySelector(".darksheet");



let cardclicked=0;

CaseDataArr.forEach((card) => {
    card.DIV.addEventListener("click", () => {
    if (cardclicked===0) {
   const rect = card.DIV.getBoundingClientRect();
    card.DIV.style.top = `${rect.top}px`;
    card.DIV.style.left = `${rect.left}px`;
    card.DIV.style.right = "auto";
    card.DIV.style.position = "fixed";
    document.body.appendChild(card.DIV);
    card.DIV.classList.add("cardclicked");

    dim.style.display = "block"; cardclicked=1;}
  
});
   
    });

CaseDataArr.forEach((card) => {
    card.DIV.addEventListener("mouseover", () => {
        if (cardclicked ===2) {
            card.DIV.classList.add("scaledhover");
            card.DIV.style.cursor = "pointer";
        } 
    });
    card.DIV.addEventListener("mouseleave", () => {
        if (cardclicked ===2) {
            card.DIV.classList.remove("scaledhover");
        }
    });});
    CaseDataArr.forEach((card) => {
        card.DIV.addEventListener("mouseover", () => {
        if (cardclicked === 1) {
            card.DIV.style.cursor = "none";
        }
    });});






    dim.addEventListener("click", () => {
    if (cardclicked === 2) {
CaseDataArr.forEach((card) => {
        card.DIV.classList.remove("cardclicked");
         card.DIV.style.position = "absolute";
         document.body.appendChild(card.DIV);
         card.DIV.style.top = "";
         card.DIV.style.left = "";
         card.DIV.style.right = "";
        dim.style.display = "none";
        
        cardclicked=0;
})
    }
});











var blacksheet = document.querySelector(".blacksheet");




let emptyhousetext = [];
let finalproblemtext = [];
let houndofbaskervillestext = [];
let redtext = [];
let scandaltext = [];
let signtext = [];
let sixtext = [];
let bandtext = [];
let sstext = [];
let vftext = [];







const book=[];
carddiv.forEach((card, index) => {var bookdiv = document.createElement("div");
bookdiv.classList.add("book");
document.body.appendChild(bookdiv);
book.push(bookdiv);
});





const image=[];
const image1=[];

carddiv.forEach((card, index) => {var img = document.createElement("img");
img.src="/assets/covers/frontcover.png";
img.style.width=window.innerWidth*0.5 + 'px';
img.style.height=window.innerHeight + 'px';
var img1 = document.createElement("img");
img1.src="/assets/covers/backcover.png";
img1.style.width=window.innerWidth*0.5 + 'px';
img1.style.height=window.innerHeight + 'px';
image.push(img);
image1.push(img1);});










fetch("/assets/stories/emptyhouse.txt")

.then(response => response.text())
.then(data => {
    emptyhousetext=(data.split(" "));
    let lengthEH=0;
    let pagestartEH=0;
    emptyhousetext.forEach((word, index) => {
    lengthEH+=word.length;
    
    if (lengthEH>=1655) {
        let pageEH = document.createElement("div");
        
        pageEH.classList.add("page");
   pageEH.dataset.density = "soft";
        pageEH.textContent=emptyhousetext.slice(pagestartEH, index).join(" ");
        book[1].appendChild(pageEH);
        lengthEH=0;
        pagestartEH=index;
    }
    
})
if (pagestartEH < emptyhousetext.length) {
    let pageEH = document.createElement("div");
    pageEH.classList.add("page");
    pageEH.dataset.density = "soft";
    pageEH.textContent = emptyhousetext.slice(pagestartEH).join(" ");
    book[1].appendChild(pageEH);
}
let coverPage = document.createElement("div");
coverPage.classList.add("cpage");
coverPage.dataset.density = "hard";
coverPage.appendChild(image[1]);
book[1].insertBefore(coverPage, book[1].firstChild);
let coverPage2 = document.createElement("div");
coverPage2.classList.add("cpage");
coverPage2.dataset.density = "hard";
book[1].insertBefore(coverPage2, book[1].children[1]);
let backCover = document.createElement("div");
backCover.classList.add("cpage");
backCover.dataset.density = "hard";
backCover.appendChild(image1[1]);
book[1].appendChild(backCover);
let backCover2 = document.createElement("div");
backCover2.classList.add("cpage");
backCover2.dataset.density = "soft";
book[1].insertBefore(backCover2, book[1].lastChild);
let backCover3 = document.createElement("div");
backCover3.classList.add("cpage");
backCover3.dataset.density = "hard";
book[1].insertBefore(backCover3, book[1].children[book[1].children.length-1]);


const pageflipEH = new St.PageFlip(book[1], {
    showCover: true,
    width: window.innerWidth*0.5,
height: window.innerHeight, 
size: "stretch",
minHeight: window.innerHeight,
});
pageflipEH.loadFromHTML(book[1].querySelectorAll(".page, .cpage"));
});






fetch("/assets/stories/finalproblem.txt")

.then(response => response.text())
.then(data => {
    finalproblemtext=(data.split(" "));
    let lengthFP=0;
    let pagestartFP=0;
    finalproblemtext.forEach((word, index) => {
    lengthFP+=word.length;
    
    if (lengthFP>=1655) {
        let pageFP = document.createElement("div");
        
        pageFP.classList.add("page");
   pageFP.dataset.density = "soft";
        pageFP.textContent=finalproblemtext.slice(pagestartFP, index).join(" ");
        book[2].appendChild(pageFP);
        lengthFP=0;
        pagestartFP=index;
    }
    
})
if (pagestartFP < finalproblemtext.length) {
    let pageFP = document.createElement("div");
    pageFP.classList.add("page");
    pageFP.dataset.density = "soft";
    pageFP.textContent = finalproblemtext.slice(pagestartFP).join(" ");
    book[2].appendChild(pageFP);
}
let coverPageFP = document.createElement("div");
coverPageFP.classList.add("cpage");
coverPageFP.dataset.density = "hard";
coverPageFP.appendChild(image[2]);
book[2].insertBefore(coverPageFP, book[2].firstChild);
let coverPageFP2 = document.createElement("div");
coverPageFP2.classList.add("cpage");
coverPageFP2.dataset.density = "hard";
book[2].insertBefore(coverPageFP2, book[2].children[1]);
let backCoverFP = document.createElement("div");
backCoverFP.classList.add("cpage");
backCoverFP.dataset.density = "hard";
backCoverFP.appendChild(image1[2]); 
book[2].appendChild(backCoverFP);
let backCoverFP1 = document.createElement("div");
backCoverFP1.classList.add("cpage");
backCoverFP1.dataset.density = "soft";
book[2].insertBefore(backCoverFP1, book[2].lastChild);
const pageflipFP = new St.PageFlip(book[2], {
    showCover: true,
    width: window.innerWidth*0.5,
height: window.innerHeight,
size: "stretch",
minHeight: window.innerHeight,
});
pageflipFP.loadFromHTML(book[2].querySelectorAll(".page, .cpage"));
});






fetch("/assets/stories/houndofbaskervilles.txt")

.then(response => response.text())
.then(data => {
    houndofbaskervillestext=(data.split(" "));
    let lengthHB=0;
    let pagestartHB=0;
    houndofbaskervillestext.forEach((word, index) => {
    lengthHB+=word.length;
    
    if (lengthHB>=1655) {
        let pageHB = document.createElement("div");
        
        pageHB.classList.add("page");
   pageHB.dataset.density = "soft";
        pageHB.textContent=houndofbaskervillestext.slice(pagestartHB, index).join(" ");
        book[3].appendChild(pageHB);
        lengthHB=0;
        pagestartHB=index;
    }
    
})
if (pagestartHB < houndofbaskervillestext.length) {
    let pageHB = document.createElement("div");
    pageHB.classList.add("page");
    pageHB.dataset.density = "soft";
    pageHB.textContent = houndofbaskervillestext.slice(pagestartHB).join(" ");
    book[3].appendChild(pageHB);
}
let coverPageHB = document.createElement("div");
coverPageHB.classList.add("cpage");
coverPageHB.appendChild(image[3]);
coverPageHB.dataset.density = "hard";
book[3].insertBefore(coverPageHB, book[3].firstChild);
let coverPageHB1 = document.createElement("div");
coverPageHB1.classList.add("cpage");
coverPageHB1.dataset.density = "hard";
book[3].insertBefore(coverPageHB1, book[3].children[1]);
let backCoverHB = document.createElement("div");
backCoverHB.classList.add("cpage");
backCoverHB.appendChild(image1[3]);
backCoverHB.dataset.density = "hard";
book[3].appendChild(backCoverHB);
let backCoverHB1 = document.createElement("div");
backCoverHB1.classList.add("cpage");
book[3].insertBefore(backCoverHB1, book[3].lastChild);
let backCoverHB2 = document.createElement("div");
backCoverHB2.classList.add("cpage");
book[3].insertBefore(backCoverHB2, book[3].children[book[3].children.length-1]);

const pageflipHB = new St.PageFlip(book[3], {
    showCover: true,
    width: window.innerWidth*0.5,
height: window.innerHeight,
size: "stretch",
minHeight: window.innerHeight,
});
pageflipHB.loadFromHTML(book[3].querySelectorAll(".page, .cpage"));
});







fetch("/assets/stories/red-headedleague.txt")

.then(response => response.text())
.then(data => {
    redtext=(data.split(" "));
    let lengthRL=0;
    let pagestartRL=0;
    redtext.forEach((word, index) => {
    lengthRL+=word.length;
    
    if (lengthRL>=1655) {
        let pageRL = document.createElement("div");
        
        pageRL.classList.add("page");
   pageRL.dataset.density = "soft";
        pageRL.textContent=redtext.slice(pagestartRL, index).join(" ");
        book[4].appendChild(pageRL);
        lengthRL=0;
        pagestartRL=index;
    }
    
})
if (pagestartRL < redtext.length) {
    let pageRL = document.createElement("div");
    pageRL.classList.add("page");
    pageRL.dataset.density = "soft";
    pageRL.textContent = redtext.slice(pagestartRL).join(" ");
    book[4].appendChild(pageRL);
}
let coverPageRL = document.createElement("div");
coverPageRL.classList.add("cpage");
coverPageRL.appendChild(image[4]);
coverPageRL.dataset.density = "hard";
book[4].insertBefore(coverPageRL, book[4].firstChild);
let coverPageRL1 = document.createElement("div");
coverPageRL1.classList.add("cpage");
coverPageRL1.dataset.density = "hard";
book[4].insertBefore(coverPageRL1, book[4].children[1]);
let backCoverRL = document.createElement("div");
backCoverRL.classList.add("cpage");
backCoverRL.dataset.density = "hard";
backCoverRL.appendChild(image1[4]);
book[4].appendChild(backCoverRL);
let backCoverRL1 = document.createElement("div");
backCoverRL1.classList.add("cpage");
book[4].insertBefore(backCoverRL1, book[4].lastChild);

const pageflipRL = new St.PageFlip(book[4], {
    showCover: true,
    width: window.innerWidth*0.5,
height: window.innerHeight,
size: "stretch",
minHeight: window.innerHeight,
});
pageflipRL.loadFromHTML(book[4].querySelectorAll(".page, .cpage"));
});








fetch("/assets/stories/scandalinbohemia.txt")

.then(response => response.text())
.then(data => {
    scandaltext=(data.split(" "));
    let lengthSB=0;
    let pagestartSB=0;
    scandaltext.forEach((word, index) => {
    lengthSB+=word.length;
    
    if (lengthSB>=1655) {
        let pageSB = document.createElement("div");
        
        pageSB.classList.add("page");
   pageSB.dataset.density = "soft";
        pageSB.textContent=scandaltext.slice(pagestartSB, index).join(" ");
        book[0].appendChild(pageSB);
        lengthSB=0;
        pagestartSB=index;
    }
    
})
if (pagestartSB < scandaltext.length) {
    let pageSB = document.createElement("div");
    pageSB.classList.add("page");
    pageSB.dataset.density = "soft";
    pageSB.textContent = scandaltext.slice(pagestartSB).join(" ");
    book[0].appendChild(pageSB);
}
let coverPageSB = document.createElement("div");
coverPageSB.classList.add("cpage");
coverPageSB.appendChild(image[0]);
coverPageSB.dataset.density = "hard";
book[0].insertBefore(coverPageSB, book[0].firstChild);
let coverPageSB1 = document.createElement("div");
coverPageSB1.classList.add("cpage");
coverPageSB1.dataset.density = "hard";
book[0].insertBefore(coverPageSB1, book[0].children[1]);
let backCoverSB = document.createElement("div");
backCoverSB.classList.add("cpage");
backCoverSB.dataset.density = "hard";
backCoverSB.appendChild(image1[0]);
book[0].appendChild(backCoverSB);
let backCoverSB1 = document.createElement("div");
backCoverSB1.classList.add("cpage");
backCoverSB1.dataset.density = "hard";
book[0].insertBefore(backCoverSB1, book[0].lastChild);

const pageflipSB = new St.PageFlip(book[0], {
    showCover: true,
    width: window.innerWidth*0.5,
height: window.innerHeight,
size: "stretch",
minHeight: window.innerHeight,
});
pageflipSB.loadFromHTML(book[0].querySelectorAll(".page, .cpage"));
});










fetch("/assets/stories/signoffour.txt")

.then(response => response.text())
.then(data => {
    signtext=(data.split(" "));
    let lengthSF=0;
    let pagestartSF=0;
    signtext.forEach((word, index) => {
    lengthSF+=word.length;
    
    if (lengthSF>=1655) {
        let pageSF = document.createElement("div");
        
        pageSF.classList.add("page");
   pageSF.dataset.density = "soft";
        pageSF.textContent=signtext.slice(pagestartSF, index).join(" ");
        book[5].appendChild(pageSF);
        lengthSF=0;
        pagestartSF=index;
    }
    
})
if (pagestartSF < signtext.length) {
    let pageSF = document.createElement("div");
    pageSF.classList.add("page");
    pageSF.dataset.density = "soft";
    pageSF.textContent = signtext.slice(pagestartSF).join(" ");
    book[5].appendChild(pageSF);
}
let coverPageSF = document.createElement("div");
coverPageSF.classList.add("cpage");
coverPageSF.appendChild(image[5]);
coverPageSF.dataset.density = "hard";
book[5].insertBefore(coverPageSF, book[5].firstChild);
let coverPageSF1 = document.createElement("div");
coverPageSF1.classList.add("cpage");
coverPageSF1.dataset.density = "hard";
book[5].insertBefore(coverPageSF1, book[5].children[1]);
let backCoverSF = document.createElement("div");
backCoverSF.classList.add("cpage");
backCoverSF.dataset.density = "hard";
backCoverSF.appendChild(image1[5]);
book[5].appendChild(backCoverSF);
let backCoverSF1 = document.createElement("div");
backCoverSF1.classList.add("cpage");
book[5].insertBefore(backCoverSF1, book[5].lastChild);
let backCoverSF2 = document.createElement("div");
backCoverSF2.classList.add("cpage");
book[5].insertBefore(backCoverSF2, book[5].children[book[5].children.length-1]);

const pageflipSF = new St.PageFlip(book[5], {
    showCover: true,
    width: window.innerWidth*0.5,
height: window.innerHeight,
size: "stretch",
minHeight: window.innerHeight,
});
pageflipSF.loadFromHTML(book[5].querySelectorAll(".page, .cpage"));
});










fetch("/assets/stories/sixnapoleans.txt")

.then(response => response.text())
.then(data => {
    sixtext=(data.split(" "));
    let lengthSN=0;
    let pagestartSN=0;
    sixtext.forEach((word, index) => {
    lengthSN+=word.length;
    
    if (lengthSN>=1655) {
        let pageSN = document.createElement("div");
        
        pageSN.classList.add("page");
   pageSN.dataset.density = "soft";
        pageSN.textContent=sixtext.slice(pagestartSN, index).join(" ");
        book[6].appendChild(pageSN);
        lengthSN=0;
        pagestartSN=index;
    }
    
})
if (pagestartSN < sixtext.length) {
    let pageSN = document.createElement("div");
    pageSN.classList.add("page");
    pageSN.dataset.density = "soft";
    pageSN.textContent = sixtext.slice(pagestartSN).join(" ");
    book[6].appendChild(pageSN);
}
let coverPageSN = document.createElement("div");
coverPageSN.classList.add("cpage");
coverPageSN.dataset.density = "hard";
coverPageSN.appendChild(image[6]);
book[6].insertBefore(coverPageSN, book[6].firstChild);
let coverPageSN1 = document.createElement("div");
coverPageSN1.classList.add("cpage");
coverPageSN1.dataset.density = "hard";
book[6].insertBefore(coverPageSN1, book[6].children[1]);
let backCoverSN = document.createElement("div");
backCoverSN.classList.add("cpage");
backCoverSN.dataset.density = "hard";
backCoverSN.appendChild(image1[6]);
book[6].appendChild(backCoverSN);
let backCoverSN1 = document.createElement("div");
backCoverSN1.classList.add("cpage");
book[6].insertBefore(backCoverSN1, book[6].lastChild);

const pageflipSN = new St.PageFlip(book[6], {
    showCover: true,
    width: window.innerWidth*0.5,
height: window.innerHeight,
size: "stretch",
minHeight: window.innerHeight,
});
pageflipSN.loadFromHTML(book[6].querySelectorAll(".page, .cpage"));
});








fetch("/assets/stories/speckledband.txt")

.then(response => response.text())
.then(data => {
    bandtext=(data.split(" "));
    let lengthBand=0;
    let pagestartBand=0;
    bandtext.forEach((word, index) => {
    lengthBand+=word.length;
    
    if (lengthBand>=1655) {
        let pageBand = document.createElement("div");
        
        pageBand.classList.add("page");
   pageBand.dataset.density = "soft";
        pageBand.textContent=bandtext.slice(pagestartBand, index).join(" ");
        book[7].appendChild(pageBand);
        lengthBand=0;
        pagestartBand=index;
    }
    
})
if (pagestartBand < bandtext.length) {
    let pageBand = document.createElement("div");
    pageBand.classList.add("page");
    pageBand.dataset.density = "soft";
    pageBand.textContent = bandtext.slice(pagestartBand).join(" ");
    book[7].appendChild(pageBand);
}
let coverPageBand = document.createElement("div");
coverPageBand.classList.add("cpage");
coverPageBand.appendChild(image[7]);
coverPageBand.dataset.density = "hard";
book[7].insertBefore(coverPageBand, book[7].firstChild);
let coverPageBand1 = document.createElement("div");
coverPageBand1.classList.add("cpage");
coverPageBand1.dataset.density = "hard";
book[7].insertBefore(coverPageBand1, book[7].children[1]);
let backCoverBand = document.createElement("div");
backCoverBand.classList.add("cpage");
backCoverBand.appendChild(image1[7]);
backCoverBand.dataset.density = "hard";
book[7].appendChild(backCoverBand);
let backCoverBand1 = document.createElement("div");
backCoverBand1.classList.add("cpage");
book[7].insertBefore(backCoverBand1, book[7].lastChild);
const pageflipBand = new St.PageFlip(book[7], {
    showCover: true,
    width: window.innerWidth*0.5,
height: window.innerHeight,
size: "stretch",
minHeight: window.innerHeight,
});
pageflipBand.loadFromHTML(book[7].querySelectorAll(".page, .cpage"));
});







fetch("/assets/stories/studyinscarlet.txt")

.then(response => response.text())
.then(data => {
    sstext=(data.split(" "));
    let lengthScarlet=0;
    let pagestartScarlet=0;
    sstext.forEach((word, index) => {
    lengthScarlet+=word.length;
    
    if (lengthScarlet>=1655) {
        let pageScarlet = document.createElement("div");
        
        pageScarlet.classList.add("page");
   pageScarlet.dataset.density = "soft";
        pageScarlet.textContent=sstext.slice(pagestartScarlet, index).join(" ");
        book[8].appendChild(pageScarlet);
        lengthScarlet=0;
        pagestartScarlet=index;
    }
    
})
if (pagestartScarlet < sstext.length) {
    let pageScarlet = document.createElement("div");
    pageScarlet.classList.add("page");
    pageScarlet.dataset.density = "soft";
    pageScarlet.textContent = sstext.slice(pagestartScarlet).join(" ");
    book[8].appendChild(pageScarlet);
}
let coverPageScarlet = document.createElement("div");
coverPageScarlet.classList.add("cpage");
coverPageScarlet.appendChild(image[8]);
coverPageScarlet.dataset.density = "hard";
book[8].insertBefore(coverPageScarlet, book[8].firstChild);
let coverPageScarlet1 = document.createElement("div");
coverPageScarlet1.classList.add("cpage");
coverPageScarlet1.dataset.density = "hard";
book[8].insertBefore(coverPageScarlet1, book[8].children[1]);
let backCoverScarlet = document.createElement("div");
backCoverScarlet.classList.add("cpage");
backCoverScarlet.appendChild(image1[8]);
backCoverScarlet.dataset.density = "hard";
book[8].appendChild(backCoverScarlet);
let backCoverScarlet1 = document.createElement("div");
backCoverScarlet1.classList.add("cpage");
book[8].insertBefore(backCoverScarlet1, book[8].lastChild);
let backCoverScarlet2 = document.createElement("div");
backCoverScarlet2.classList.add("cpage");
book[8].insertBefore(backCoverScarlet2, book[8].children[book[8].children.length-1]);

const pageflipScarlet = new St.PageFlip(book[8], {
    showCover: true,
    width: window.innerWidth*0.5,
height: window.innerHeight,
size: "stretch",
minHeight: window.innerHeight,
});
pageflipScarlet.loadFromHTML(book[8].querySelectorAll(".page, .cpage"));
});








fetch("/assets/stories/valleyoffear.txt")

.then(response => response.text())
.then(data => {
    vftext=(data.split(" "));
    let lengthVF=0;
    let pagestartVF=0;
    vftext.forEach((word, index) => {
    lengthVF+=word.length;
    
    if (lengthVF>=1655) {
        let pageVF = document.createElement("div");
        
        pageVF.classList.add("page");
   pageVF.dataset.density = "soft";
        pageVF.textContent=vftext.slice(pagestartVF, index).join(" ");
        book[9].appendChild(pageVF);
        lengthVF=0;
        pagestartVF=index;
    }
    
})
if (pagestartVF < vftext.length) {
    let pageVF = document.createElement("div");
    pageVF.classList.add("page");
    pageVF.dataset.density = "soft";
    pageVF.textContent = vftext.slice(pagestartVF).join(" ");
    book[9].appendChild(pageVF);
}
let coverPageVF = document.createElement("div");
coverPageVF.classList.add("cpage");
coverPageVF.appendChild(image[9]);
coverPageVF.dataset.density = "hard";
book[9].insertBefore(coverPageVF, book[9].firstChild);
let coverPageVF1 = document.createElement("div");
coverPageVF1.classList.add("cpage");
coverPageVF1.dataset.density = "hard";
book[9].insertBefore(coverPageVF1, book[9].children[1]);
let backCoverVF = document.createElement("div");
backCoverVF.classList.add("cpage");
backCoverVF.appendChild(image1[9]);
backCoverVF.dataset.density = "hard";
book[9].appendChild(backCoverVF);
let backCoverVF1 = document.createElement("div");
backCoverVF1.classList.add("cpage");
book[9].insertBefore(backCoverVF1, book[9].lastChild);

const pageflipVF = new St.PageFlip(book[9], {
    showCover: true,
    width: window.innerWidth*0.5,
height: window.innerHeight,
size: "stretch",
minHeight: window.innerHeight,

});
pageflipVF.loadFromHTML(book[9].querySelectorAll(".page, .cpage"));
});





























































CaseCardDivArr.forEach((card) => {
    card.DIV.addEventListener("animationend", (e) => {
        if (e.animationName === "click") {cardclicked=2;
            
}})})






var exit = document.querySelector(".exit");



let bookopenindex="";


CaseCardDivArr.forEach((card, index) => {
card.DIV.addEventListener("click", () => {
    if (cardclicked === 2) {
        
        EvidenceBoard.appendChild(card);
        blacksheet.style.display = "block";
        
        EvidenceBoard.style.display = "none";
        cord.style.display = "none";
        light.style.display = "none";
        bookopenindex=index;
    dim.style.display = "none";
    }})});

blacksheet.addEventListener("animationend", (e) => {if(e.animationName === "fadeinblack") {
    book[bookopenindex].style.top = "0";
 blacksheet.style.opacity="0"; exit.style.display="block"; book[bookopenindex].style.animation="fadeinblack 1s ease forwards"; }})

    var cord = document.querySelector(".cord");
    let button=0;



    var light = document.querySelector(".light");
cord.addEventListener("click", () => {
    cord.classList.add("cordpulled");})
    cord.addEventListener("animationend", (e) => {
        if (e.animationName === "pullcord") {
            cord.classList.remove("cordpulled");
        }
    })
cord.addEventListener("click", () => {
    if (button===1) {
        night.style.display = "block";
        light.classList.add("lightflickeroff");
        button=0;
    }
    else {
        night.style.display = "none";
        light.style.display = "block";
        light.classList.add("lightflickeron");
        button=1;
    }})

light.addEventListener("animationend", (e) => {
    if (e.animationName === "lightflickeroff") {
        light.classList.remove("lightflickeroff");
        light.style.display = "none";
    }
    else if (e.animationName === "lightflickeron") {
        light.classList.remove("lightflickeron");
    }})

    var cross = document.querySelector(".cross");
    cross.addEventListener("mouseover", () => {
        cross.classList.add("crosshover");
        document.querySelector(".circle").classList.add("circlehover");
    });
    cross.addEventListener("mouseout", () => {
        cross.classList.remove("crosshover");
        document.querySelector(".circle").classList.remove("circlehover");
    });
   cross.addEventListener("click", () => {
        exit.style.display = "none";
        book[bookopenindex].style.top = "";
        EvidenceBoard.style.display = "block";
        blacksheet.style.display = "none";
        cord.style.display = "block";
       EvidenceBoard.style.animation="none";
       CaseCardDivArr[bookopenindex].DIV.style.animation="";
       CaseCardDivArr[bookopenindex].classList.remove("cardclicked");
      CaseCardDivArr[bookopenindex].DIV.style.position = "absolute";
      CaseCardDivArr[bookopenindex].DIV.style.top = "";
      CaseCardDivArr[bookopenindex].DIV.style.left = "";
      CaseCardDivArr[bookopenindex].DIV.style.right = "";
      dim.style.display = "none";
       cardclicked=0;
       bookopenindex="";
       
    })
    
