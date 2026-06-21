var intro = document.querySelector(".intro");
var introtext2 = document.querySelector(".introtext2");
var introtext1 = document.querySelector(".introtext1");
var god = document.querySelector(".god");
var carddiv = document.querySelectorAll(".card-div");
var night = document.querySelector(".night");



setTimeout(() => {night.style.display = "block"; }, 8050);
setTimeout(() => {god.style.display = "block"; }, 6501);
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

     span.classList.add("flicker");

}
const pushpin = document.querySelectorAll(".pushpin");
const svg = document.querySelector(".svgcanvas");




const patharr = [];
for (let i = 0; i < carddiv.length; i++) {
let path= document.createElementNS("http://www.w3.org/2000/svg", "path");

path.setAttribute("stroke", "rgb(128, 0, 0,1)");
path.setAttribute("fill", "transparent");
path.setAttribute("stroke-width", "3");
patharr.push(path);
svg.appendChild(path);
}


const drawThreads = () => {
const points = [];
pushpin.forEach((pin) => {
    let pinx = pin.getBoundingClientRect().x;
    let piny = pin.getBoundingClientRect().y;
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
    setTimeout(() => { drawThreads(); }, 8000);

god.addEventListener("scroll", drawThreads);



const dim = document.querySelector(".darksheet");



let cardclicked=0;

carddiv.forEach((card) => {
    card.addEventListener("click", () => {
    if (cardclicked===0) {
   const rect = card.getBoundingClientRect();
    card.style.top = `${rect.top}px`;
    card.style.left = `${rect.left}px`;
    card.style.right = "auto";
    card.style.position = "fixed";
    document.body.appendChild(card);
    card.classList.add("cardclicked");

    dim.style.display = "block"; cardclicked=1;}
  
});
   
    });

carddiv.forEach((card) => {
    card.addEventListener("mouseover", () => {
        if (cardclicked ===2) {
            card.classList.add("scaledhover");
            card.style.cursor = "pointer";
        } 
    });
    card.addEventListener("mouseleave", () => {
        if (cardclicked ===2) {
            card.classList.remove("scaledhover");
        }
    });});
    carddiv.forEach((card) => {
        card.addEventListener("mouseover", () => {
        if (cardclicked === 1) {
            card.style.cursor = "none";
        }
    });});






    dim.addEventListener("click", () => {
    if (cardclicked === 2) {
carddiv.forEach((card) => {
        card.classList.remove("cardclicked");
         card.style.position = "absolute";
         god.appendChild(card);
         card.style.top = "";
         card.style.left = "";
         card.style.right = "";
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













var bookeh = document.querySelector(".bookeh");
var bookfp = document.querySelector(".bookfp");
var bookhb = document.querySelector(".bookhb");
var bookrl = document.querySelector(".bookrl");
var booksb = document.querySelector(".booksb");
var booksf = document.querySelector(".booksf");
var booksn = document.querySelector(".booksn");
var bookband = document.querySelector(".bookband");
var bookss = document.querySelector(".bookss");
var bookvf = document.querySelector(".bookvf");








var imageEH= document.createElement("img");
imageEH.src="/assets/covers/frontcover.png";
imageEH.style.width=window.innerWidth*0.5 + 'px';
imageEH.style.height=window.innerHeight + 'px';
var image1EH= document.createElement("img");
image1EH.src="/assets/covers/backcover.png";
image1EH.style.width=window.innerWidth*0.5 + 'px';
image1EH.style.height=window.innerHeight + 'px';

var imageFP = document.createElement("img");
imageFP.src="/assets/covers/frontcover.png";
imageFP.style.width=window.innerWidth*0.5 + 'px';
imageFP.style.height=window.innerHeight + 'px';
var image1FP = document.createElement("img");
image1FP.src="/assets/covers/backcover.png";
image1FP.style.width=window.innerWidth*0.5 + 'px';
image1FP.style.height=window.innerHeight + 'px';

var imageHB = document.createElement("img");
imageHB.src="/assets/covers/frontcover.png";
imageHB.style.width=window.innerWidth*0.5 + 'px';
imageHB.style.height=window.innerHeight + 'px';
var image1HB = document.createElement("img");
image1HB.src="/assets/covers/backcover.png";
image1HB.style.width=window.innerWidth*0.5 + 'px';
image1HB.style.height=window.innerHeight + 'px';

var imageRL = document.createElement("img");
imageRL.src="/assets/covers/frontcover.png";
imageRL.style.width=window.innerWidth*0.5 + 'px';
imageRL.style.height=window.innerHeight + 'px';
var image1RL = document.createElement("img");
image1RL.src="/assets/covers/backcover.png";
image1RL.style.width=window.innerWidth*0.5 + 'px';
image1RL.style.height=window.innerHeight + 'px';

var imageSB = document.createElement("img");
imageSB.src="/assets/covers/frontcover.png";
imageSB.style.width=window.innerWidth*0.5 + 'px';
imageSB.style.height=window.innerHeight + 'px'; 
var image1SB = document.createElement("img");
image1SB.src="/assets/covers/backcover.png";
image1SB.style.width=window.innerWidth*0.5 + 'px';
image1SB.style.height=window.innerHeight + 'px';

var imageSF = document.createElement("img");
imageSF.src="/assets/covers/frontcover.png";
imageSF.style.width=window.innerWidth*0.5 + 'px';
imageSF.style.height=window.innerHeight + 'px';
var image1SF = document.createElement("img");
image1SF.src="/assets/covers/backcover.png";
image1SF.style.width=window.innerWidth*0.5 + 'px';
image1SF.style.height=window.innerHeight + 'px';

var imageSN = document.createElement("img");
imageSN.src="/assets/covers/frontcover.png";
imageSN.style.width=window.innerWidth*0.5 + 'px';
imageSN.style.height=window.innerHeight + 'px';
var image1SN = document.createElement("img");
image1SN.src="/assets/covers/backcover.png";
image1SN.style.width=window.innerWidth*0.5 + 'px';
image1SN.style.height=window.innerHeight + 'px';

var imageBand = document.createElement("img");
imageBand.src="/assets/covers/frontcover.png";
imageBand.style.width=window.innerWidth*0.5 + 'px';
imageBand.style.height=window.innerHeight + 'px';
var image1Band = document.createElement("img");
image1Band.src="/assets/covers/backcover.png";
image1Band.style.width=window.innerWidth*0.5 + 'px';
image1Band.style.height=window.innerHeight + 'px';

var imageSS = document.createElement("img");
imageSS.src="/assets/covers/frontcover.png";
imageSS.style.width=window.innerWidth*0.5 + 'px';
imageSS.style.height=window.innerHeight + 'px';
var image1SS = document.createElement("img");
image1SS.src="/assets/covers/backcover.png";
image1SS.style.width=window.innerWidth*0.5 + 'px';
image1SS.style.height=window.innerHeight + 'px';

var imageVF = document.createElement("img");
imageVF.src="/assets/covers/frontcover.png";
imageVF.style.width=window.innerWidth*0.5 + 'px';
imageVF.style.height=window.innerHeight + 'px';
var image1VF = document.createElement("img");
image1VF.src="/assets/covers/backcover.png";
image1VF.style.width=window.innerWidth*0.5 + 'px';
image1VF.style.height=window.innerHeight + 'px';



























































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
        bookeh.appendChild(pageEH);
        lengthEH=0;
        pagestartEH=index;
    }
    
})
if (pagestartEH < emptyhousetext.length) {
    let pageEH = document.createElement("div");
    pageEH.classList.add("page");
    pageEH.dataset.density = "soft";
    pageEH.textContent = emptyhousetext.slice(pagestartEH).join(" ");
    bookeh.appendChild(pageEH);
}
let coverPage = document.createElement("div");
coverPage.classList.add("cpage");
coverPage.dataset.density = "hard";
coverPage.appendChild(imageEH);
bookeh.insertBefore(coverPage, bookeh.firstChild);
let coverPage2 = document.createElement("div");
coverPage2.classList.add("cpage");
coverPage2.dataset.density = "hard";
bookeh.insertBefore(coverPage2, bookeh.children[1]);
let backCover = document.createElement("div");
backCover.classList.add("cpage");
backCover.dataset.density = "hard";
backCover.appendChild(image1EH);
bookeh.appendChild(backCover);
let backCover2 = document.createElement("div");
backCover2.classList.add("cpage");
backCover2.dataset.density = "soft";
bookeh.insertBefore(backCover2, bookeh.lastChild);
let backCover3 = document.createElement("div");
backCover3.classList.add("cpage");
backCover3.dataset.density = "hard";
bookeh.insertBefore(backCover3, bookeh.children[bookeh.children.length-1]);


const pageflipEH = new St.PageFlip(document.querySelector(".bookeh"), {
    showCover: true,
    width: window.innerWidth*0.5,
height: window.innerHeight,
size: "stretch",
minHeight: window.innerHeight,
});
pageflipEH.loadFromHTML(bookeh.querySelectorAll(".page, .cpage"));
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
        bookfp.appendChild(pageFP);
        lengthFP=0;
        pagestartFP=index;
    }
    
})
if (pagestartFP < finalproblemtext.length) {
    let pageFP = document.createElement("div");
    pageFP.classList.add("page");
    pageFP.dataset.density = "soft";
    pageFP.textContent = finalproblemtext.slice(pagestartFP).join(" ");
    bookfp.appendChild(pageFP);
}
let coverPageFP = document.createElement("div");
coverPageFP.classList.add("cpage");
coverPageFP.dataset.density = "hard";
coverPageFP.appendChild(imageFP);
bookfp.insertBefore(coverPageFP, bookfp.firstChild);
let coverPageFP2 = document.createElement("div");
coverPageFP2.classList.add("cpage");
coverPageFP2.dataset.density = "hard";
bookfp.insertBefore(coverPageFP2, bookfp.children[1]);
let backCoverFP = document.createElement("div");
backCoverFP.classList.add("cpage");
backCoverFP.dataset.density = "hard";
backCoverFP.appendChild(image1FP); 
bookfp.appendChild(backCoverFP);
let backCoverFP1 = document.createElement("div");
backCoverFP1.classList.add("cpage");
backCoverFP1.dataset.density = "soft";
bookfp.insertBefore(backCoverFP1, bookfp.lastChild);
const pageflipFP = new St.PageFlip(document.querySelector(".bookfp"), {
    showCover: true,
    width: window.innerWidth*0.5,
height: window.innerHeight,
size: "stretch",
minHeight: window.innerHeight,
});
pageflipFP.loadFromHTML(bookfp.querySelectorAll(".page, .cpage"));
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
        bookhb.appendChild(pageHB);
        lengthHB=0;
        pagestartHB=index;
    }
    
})
if (pagestartHB < houndofbaskervillestext.length) {
    let pageHB = document.createElement("div");
    pageHB.classList.add("page");
    pageHB.dataset.density = "soft";
    pageHB.textContent = houndofbaskervillestext.slice(pagestartHB).join(" ");
    bookhb.appendChild(pageHB);
}
let coverPageHB = document.createElement("div");
coverPageHB.classList.add("cpage");
coverPageHB.appendChild(imageHB);
coverPageHB.dataset.density = "hard";
bookhb.insertBefore(coverPageHB, bookhb.firstChild);
let coverPageHB1 = document.createElement("div");
coverPageHB1.classList.add("cpage");
coverPageHB1.dataset.density = "hard";
bookhb.insertBefore(coverPageHB1, bookhb.children[1]);
let backCoverHB = document.createElement("div");
backCoverHB.classList.add("cpage");
backCoverHB.appendChild(image1HB);
backCoverHB.dataset.density = "hard";
bookhb.appendChild(backCoverHB);
let backCoverHB1 = document.createElement("div");
backCoverHB1.classList.add("cpage");
bookhb.insertBefore(backCoverHB1, bookhb.lastChild);
let backCoverHB2 = document.createElement("div");
backCoverHB2.classList.add("cpage");
bookhb.insertBefore(backCoverHB2, bookhb.children[bookhb.children.length-1]);

const pageflipHB = new St.PageFlip(document.querySelector(".bookhb"), {
    showCover: true,
    width: window.innerWidth*0.5,
height: window.innerHeight,
size: "stretch",
minHeight: window.innerHeight,
});
pageflipHB.loadFromHTML(bookhb.querySelectorAll(".page, .cpage"));
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
        bookrl.appendChild(pageRL);
        lengthRL=0;
        pagestartRL=index;
    }
    
})
if (pagestartRL < redtext.length) {
    let pageRL = document.createElement("div");
    pageRL.classList.add("page");
    pageRL.dataset.density = "soft";
    pageRL.textContent = redtext.slice(pagestartRL).join(" ");
    bookrl.appendChild(pageRL);
}
let coverPageRL = document.createElement("div");
coverPageRL.classList.add("cpage");
coverPageRL.appendChild(imageRL);
coverPageRL.dataset.density = "hard";
bookrl.insertBefore(coverPageRL, bookrl.firstChild);
let coverPageRL1 = document.createElement("div");
coverPageRL1.classList.add("cpage");
coverPageRL1.dataset.density = "hard";
bookrl.insertBefore(coverPageRL1, bookrl.children[1]);
let backCoverRL = document.createElement("div");
backCoverRL.classList.add("cpage");
backCoverRL.dataset.density = "hard";
backCoverRL.appendChild(image1RL);
bookrl.appendChild(backCoverRL);
let backCoverRL1 = document.createElement("div");
backCoverRL1.classList.add("cpage");
bookrl.insertBefore(backCoverRL1, bookrl.lastChild);

const pageflipRL = new St.PageFlip(document.querySelector(".bookrl"), {
    showCover: true,
    width: window.innerWidth*0.5,
height: window.innerHeight,
size: "stretch",
minHeight: window.innerHeight,
});
pageflipRL.loadFromHTML(bookrl.querySelectorAll(".page, .cpage"));
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
        booksb.appendChild(pageSB);
        lengthSB=0;
        pagestartSB=index;
    }
    
})
if (pagestartSB < scandaltext.length) {
    let pageSB = document.createElement("div");
    pageSB.classList.add("page");
    pageSB.dataset.density = "soft";
    pageSB.textContent = scandaltext.slice(pagestartSB).join(" ");
    booksb.appendChild(pageSB);
}
let coverPageSB = document.createElement("div");
coverPageSB.classList.add("cpage");
coverPageSB.appendChild(imageSB);
coverPageSB.dataset.density = "hard";
booksb.insertBefore(coverPageSB, booksb.firstChild);
let coverPageSB1 = document.createElement("div");
coverPageSB1.classList.add("cpage");
coverPageSB1.dataset.density = "hard";
booksb.insertBefore(coverPageSB1, booksb.children[1]);
let backCoverSB = document.createElement("div");
backCoverSB.classList.add("cpage");
backCoverSB.dataset.density = "hard";
backCoverSB.appendChild(image1SB);
booksb.appendChild(backCoverSB);
let backCoverSB1 = document.createElement("div");
backCoverSB1.classList.add("cpage");
backCoverSB1.dataset.density = "hard";
booksb.insertBefore(backCoverSB1, booksb.lastChild);

const pageflipSB = new St.PageFlip(document.querySelector(".booksb"), {
    showCover: true,
    width: window.innerWidth*0.5,
height: window.innerHeight,
size: "stretch",
minHeight: window.innerHeight,
});
pageflipSB.loadFromHTML(booksb.querySelectorAll(".page, .cpage"));
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
        booksf.appendChild(pageSF);
        lengthSF=0;
        pagestartSF=index;
    }
    
})
if (pagestartSF < signtext.length) {
    let pageSF = document.createElement("div");
    pageSF.classList.add("page");
    pageSF.dataset.density = "soft";
    pageSF.textContent = signtext.slice(pagestartSF).join(" ");
    booksf.appendChild(pageSF);
}
let coverPageSF = document.createElement("div");
coverPageSF.classList.add("cpage");
coverPageSF.appendChild(imageSF);
coverPageSF.dataset.density = "hard";
booksf.insertBefore(coverPageSF, booksf.firstChild);
let coverPageSF1 = document.createElement("div");
coverPageSF1.classList.add("cpage");
coverPageSF1.dataset.density = "hard";
booksf.insertBefore(coverPageSF1, booksf.children[1]);
let backCoverSF = document.createElement("div");
backCoverSF.classList.add("cpage");
backCoverSF.dataset.density = "hard";
backCoverSF.appendChild(image1SF);
booksf.appendChild(backCoverSF);
let backCoverSF1 = document.createElement("div");
backCoverSF1.classList.add("cpage");
booksf.insertBefore(backCoverSF1, booksf.lastChild);
let backCoverSF2 = document.createElement("div");
backCoverSF2.classList.add("cpage");
booksf.insertBefore(backCoverSF2, booksf.children[booksf.children.length-1]);

const pageflipSF = new St.PageFlip(document.querySelector(".booksf"), {
    showCover: true,
    width: window.innerWidth*0.5,
height: window.innerHeight,
size: "stretch",
minHeight: window.innerHeight,
});
pageflipSF.loadFromHTML(booksf.querySelectorAll(".page, .cpage"));
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
        booksn.appendChild(pageSN);
        lengthSN=0;
        pagestartSN=index;
    }
    
})
if (pagestartSN < sixtext.length) {
    let pageSN = document.createElement("div");
    pageSN.classList.add("page");
    pageSN.dataset.density = "soft";
    pageSN.textContent = sixtext.slice(pagestartSN).join(" ");
    booksn.appendChild(pageSN);
}
let coverPageSN = document.createElement("div");
coverPageSN.classList.add("cpage");
coverPageSN.dataset.density = "hard";
coverPageSN.appendChild(imageSN);
booksn.insertBefore(coverPageSN, booksn.firstChild);
let coverPageSN1 = document.createElement("div");
coverPageSN1.classList.add("cpage");
coverPageSN1.dataset.density = "hard";
booksn.insertBefore(coverPageSN1, booksn.children[1]);
let backCoverSN = document.createElement("div");
backCoverSN.classList.add("cpage");
backCoverSN.dataset.density = "hard";
backCoverSN.appendChild(image1SN);
booksn.appendChild(backCoverSN);
let backCoverSN1 = document.createElement("div");
backCoverSN1.classList.add("cpage");
booksn.insertBefore(backCoverSN1, booksn.lastChild);

const pageflipSN = new St.PageFlip(document.querySelector(".booksn"), {
    showCover: true,
    width: window.innerWidth*0.5,
height: window.innerHeight,
size: "stretch",
minHeight: window.innerHeight,
});
pageflipSN.loadFromHTML(booksn.querySelectorAll(".page, .cpage"));
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
        bookband.appendChild(pageBand);
        lengthBand=0;
        pagestartBand=index;
    }
    
})
if (pagestartBand < bandtext.length) {
    let pageBand = document.createElement("div");
    pageBand.classList.add("page");
    pageBand.dataset.density = "soft";
    pageBand.textContent = bandtext.slice(pagestartBand).join(" ");
    bookband.appendChild(pageBand);
}
let coverPageBand = document.createElement("div");
coverPageBand.classList.add("cpage");
coverPageBand.appendChild(imageBand);
coverPageBand.dataset.density = "hard";
bookband.insertBefore(coverPageBand, bookband.firstChild);
let coverPageBand1 = document.createElement("div");
coverPageBand1.classList.add("cpage");
coverPageBand1.dataset.density = "hard";
bookband.insertBefore(coverPageBand1, bookband.children[1]);
let backCoverBand = document.createElement("div");
backCoverBand.classList.add("cpage");
backCoverBand.appendChild(image1Band);
backCoverBand.dataset.density = "hard";
bookband.appendChild(backCoverBand);
let backCoverBand1 = document.createElement("div");
backCoverBand1.classList.add("cpage");
bookband.insertBefore(backCoverBand1, bookband.lastChild);
const pageflipBand = new St.PageFlip(document.querySelector(".bookband"), {
    showCover: true,
    width: window.innerWidth*0.5,
height: window.innerHeight,
size: "stretch",
minHeight: window.innerHeight,
});
pageflipBand.loadFromHTML(bookband.querySelectorAll(".page, .cpage"));
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
        bookss.appendChild(pageScarlet);
        lengthScarlet=0;
        pagestartScarlet=index;
    }
    
})
if (pagestartScarlet < sstext.length) {
    let pageScarlet = document.createElement("div");
    pageScarlet.classList.add("page");
    pageScarlet.dataset.density = "soft";
    pageScarlet.textContent = sstext.slice(pagestartScarlet).join(" ");
    bookss.appendChild(pageScarlet);
}
let coverPageScarlet = document.createElement("div");
coverPageScarlet.classList.add("cpage");
coverPageScarlet.appendChild(imageSS);
coverPageScarlet.dataset.density = "hard";
bookss.insertBefore(coverPageScarlet, bookss.firstChild);
let coverPageScarlet1 = document.createElement("div");
coverPageScarlet1.classList.add("cpage");
coverPageScarlet1.dataset.density = "hard";
bookss.insertBefore(coverPageScarlet1, bookss.children[1]);
let backCoverScarlet = document.createElement("div");
backCoverScarlet.classList.add("cpage");
backCoverScarlet.appendChild(image1SS);
backCoverScarlet.dataset.density = "hard";
bookss.appendChild(backCoverScarlet);
let backCoverScarlet1 = document.createElement("div");
backCoverScarlet1.classList.add("cpage");
bookss.insertBefore(backCoverScarlet1, bookss.lastChild);
let backCoverScarlet2 = document.createElement("div");
backCoverScarlet2.classList.add("cpage");
bookss.insertBefore(backCoverScarlet2, bookss.children[bookss.children.length-1]);

const pageflipScarlet = new St.PageFlip(document.querySelector(".bookss"), {
    showCover: true,
    width: window.innerWidth*0.5,
height: window.innerHeight,
size: "stretch",
minHeight: window.innerHeight,
});
pageflipScarlet.loadFromHTML(bookss.querySelectorAll(".page, .cpage"));
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
        bookvf.appendChild(pageVF);
        lengthVF=0;
        pagestartVF=index;
    }
    
})
if (pagestartVF < vftext.length) {
    let pageVF = document.createElement("div");
    pageVF.classList.add("page");
    pageVF.dataset.density = "soft";
    pageVF.textContent = vftext.slice(pagestartVF).join(" ");
    bookvf.appendChild(pageVF);
}
let coverPageVF = document.createElement("div");
coverPageVF.classList.add("cpage");
coverPageVF.appendChild(imageVF);
coverPageVF.dataset.density = "hard";
bookvf.insertBefore(coverPageVF, bookvf.firstChild);
let coverPageVF1 = document.createElement("div");
coverPageVF1.classList.add("cpage");
coverPageVF1.dataset.density = "hard";
bookvf.insertBefore(coverPageVF1, bookvf.children[1]);
let backCoverVF = document.createElement("div");
backCoverVF.classList.add("cpage");
backCoverVF.appendChild(image1VF);
backCoverVF.dataset.density = "hard";
bookvf.appendChild(backCoverVF);
let backCoverVF1 = document.createElement("div");
backCoverVF1.classList.add("cpage");
bookvf.insertBefore(backCoverVF1, bookvf.lastChild);

const pageflipVF = new St.PageFlip(document.querySelector(".bookvf"), {
    showCover: true,
    width: window.innerWidth*0.5,
height: window.innerHeight,
size: "stretch",
minHeight: window.innerHeight,

});
pageflipVF.loadFromHTML(bookvf.querySelectorAll(".page, .cpage"));
});





























































carddiv.forEach((card) => {
    card.addEventListener("animationend", (e) => {
        if (e.animationName === "click") {cardclicked=2;
            
}})})













carddiv[1].addEventListener("click", () => {
    if (cardclicked === 2) {
        
        god.appendChild(carddiv[1]);
        blacksheet.style.display = "block";
        light.style.display = "none";
        god.style.display = "none";
        cord.style.display = "none";
        setTimeout(() => {bookeh.style.top = "0";
 blacksheet.style.display="none";}, 1250);

    dim.style.display = "none";}
    })

   carddiv[2].addEventListener("click", () => {
    if (cardclicked === 2) {
        
        god.appendChild(carddiv[2]);
        blacksheet.style.display = "block";
        light.style.display = "none";
        god.style.display = "none";
        cord.style.display = "none";
        setTimeout(() => {bookfp.style.top = "0";
 blacksheet.style.display="none";}, 1380);
    dim.style.display = "none";}
    })
 
carddiv[3].addEventListener("click", () => {
    if (cardclicked === 2) {
        
        god.appendChild(carddiv[3]);
        blacksheet.style.display = "block";
        light.style.display = "none";
        god.style.display = "none";
        cord.style.display = "none";
        setTimeout(() => {bookhb.style.top = "0";
 blacksheet.style.display="none";}, 1380);
    dim.style.display = "none";}
    })
 
carddiv[4].addEventListener("click", () => {
    if (cardclicked === 2) {
        
        god.appendChild(carddiv[4]);
        blacksheet.style.display = "block";
        
        god.style.display = "none";
        cord.style.display = "none";
        light.style.display = "none";
        setTimeout(() => {bookrl.style.top = "0";
 blacksheet.style.display="none";}, 1380);
    dim.style.display = "none";}
    })
carddiv[0].addEventListener("click", () => {
    if (cardclicked === 2) {
        
        god.appendChild(carddiv[0]);
        blacksheet.style.display = "block";
        light.style.display = "none";
        god.style.display = "none";
        cord.style.display = "none";
        setTimeout(() => {booksb.style.top = "0";
 blacksheet.style.display="none";}, 1380);
    dim.style.display = "none";}
    })
carddiv[5].addEventListener("click", () => {
    if (cardclicked === 2) {
        
        god.appendChild(carddiv[5]);
        blacksheet.style.display = "block";
        
        god.style.display = "none";
        cord.style.display = "none";
        light.style.display = "none";
        setTimeout(() => {booksf.style.top = "0";
 blacksheet.style.display="none";}, 1380);
    dim.style.display = "none";}
    })
    carddiv[6].addEventListener("click", () => {
    if (cardclicked === 2) {
        
        god.appendChild(carddiv[6]);
        blacksheet.style.display = "block";
        
        god.style.display = "none";
        cord.style.display = "none";
        light.style.display = "none";
        setTimeout(() => {booksn.style.top = "0";
 blacksheet.style.display="none";}, 1380);
    dim.style.display = "none";}
    })
    carddiv[7].addEventListener("click", () => {
    if (cardclicked === 2) {
        
        god.appendChild(carddiv[7]);
        blacksheet.style.display = "block";
        
        god.style.display = "none";
        cord.style.display = "none";
        light.style.display = "none";
        setTimeout(() => {bookband.style.top = "0";
 blacksheet.style.display="none";}, 1380);
    dim.style.display = "none";}
    })
    carddiv[8].addEventListener("click", () => {
    if (cardclicked === 2) {
        
        god.appendChild(carddiv[8]);
        blacksheet.style.display = "block";
        
        god.style.display = "none";
        cord.style.display = "none";
        light.style.display = "none";
        setTimeout(() => {bookss.style.top = "0";
 blacksheet.style.display="none";}, 1380);
    dim.style.display = "none";}
    })
    carddiv[9].addEventListener("click", () => {
    if (cardclicked === 2) {
        
        god.appendChild(carddiv[9]);
        blacksheet.style.display = "block";
        
        god.style.display = "none";
        cord.style.display = "none";
        light.style.display = "none";
        setTimeout(() => {bookvf.style.top = "0";
 blacksheet.style.display="none";}, 1380);
    dim.style.display = "none";}
    })

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
        light.style.display = "none";
        button=0;
    }
    else {
        night.style.display = "none";
        light.style.display = "block";
        button=1;
    }})

