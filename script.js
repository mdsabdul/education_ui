const overlay1 = document.querySelector(".overlay1")
const content1 = document.querySelector(".content1")
const overlay2 = document.querySelector(".overlay2")
const overlay3 = document.querySelector(".overlay3")
const imgbox1 = document.querySelector(".pag1img1")
const imgbox2 = document.querySelector(".pag1img2")
const imgbox3 = document.querySelector(".pag1img3")
const childpage2img1 = document.querySelector("#sale1")
const childpage2img2 = document.querySelector("#sale2")
const childpage2img3 = document.querySelector("#sale3")
const childpage2img4 = document.querySelector("#sale4")
const heading1 = document.querySelector("#sale")
const heading2 = document.querySelector("#data")
const heading3 = document.querySelector("#copy")
const heading4 = document.querySelector("#design")

overlay2.addEventListener("mouseenter", function () {

    imgbox1.style.width = "18%"
    imgbox2.style.width = "55%"
    content1.style.display = "none"
    imgbox1.style.transformOrigin = "left center 0px"
    imgbox2.style.transformOrigin = "right center 0px"

})
overlay2.addEventListener("mouseleave", function () {
    imgbox1.style.width = "60%"
    imgbox2.style.width = "18%"
    content1.style.display = "flex"


})
overlay3.addEventListener("mouseenter", function () {
    imgbox1.style.width = "18%"

    imgbox3.style.width = "55%"
    content1.style.display = "none"
    imgbox3.style.transformOrigin = "right center 0px"
    

})
overlay3.addEventListener("mouseleave", function () {
    imgbox1.style.width = "60%"
    imgbox3.style.width = "18%"
    content1.style.display = "flex"
})


childpage2img1.addEventListener("mouseenter", function () {
    heading1 .style.color = "#97C680"
})
childpage2img1.addEventListener("mouseleave", function () {
    heading1 .style.color = "rgba(0, 0, 0, 0.771)"
})
childpage2img2.addEventListener("mouseenter", function () {
    heading2.style.color = "#97C680"
})
childpage2img2.addEventListener("mouseleave", function () {
    heading2.style.color = "rgba(0, 0, 0, 0.771)"
})
childpage2img3.addEventListener("mouseenter", function () {
    heading3.style.color = "#97C680"
})
childpage2img3.addEventListener("mouseleave", function () {
    heading3.style.color = "rgba(0, 0, 0, 0.771)"
})
childpage2img4.addEventListener("mouseenter", function () {
    heading4.style.color = "#97C680"
})
childpage2img4.addEventListener("mouseleave", function () {
    heading4.style.color = "rgba(0, 0, 0, 0.771)"
})
const tl1 = gsap.timeline()
tl1.from(".page1img",{
    opacity:0,
   x:"-50%",
    duration:1,
   
})
tl1.from(".page1text",{
    opacity:0,
   y:"100%",
    duration:1,
   zIndex:1
})
tl1.from("nav ",{
    opacity:0,
   y:"-50%",
    duration:1,
  
})
