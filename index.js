console.log("loading")
const theme=localStorage.getItem("theme")
const imagesAbout=document.getElementById("social_img")
const links =document.getElementsByClassName("link")
const imageProyect=document.getElementById("img-modal")
const modal=document.getElementById("modal")
if(theme==null){
  setTheme("light")
}else{
  setTheme(theme)
}
for(let i=0;i<links.length;i++){
  links[i].addEventListener("click",()=>{
    imageProyect.src=`./images/proyect${i}.jpg`
    modal.classList.toggle("active")
    modal.addEventListener("click",()=>{
      modal.classList.remove("active")
    })
  })
}

const themeDots=document.getElementsByClassName("theme-dot")
for(let i=0;i<themeDots.length;i++){
  themeDots[i].addEventListener("click",function(){
    let mode=this.dataset.mode
    console.log("click on theme",mode)
    setTheme(mode)
  })
}
function setTheme(mode){
  if(mode=="light"){
    document.getElementById("link-style").href="./dist/style.css"
    imagesAbout.src="./images/coding_normal.svg"
  }
  if(mode=="blue"){
    document.getElementById("link-style").href="./dist/blue.css"
    imagesAbout.src="./images/coding_ blue.svg"

  }
  if(mode=="green"){
    document.getElementById("link-style").href="./dist/green.css"
    imagesAbout.src="./images/coding_green.svg"

  }
  if(mode=="purple"){
    document.getElementById("link-style").href="./dist/purple.css"
    imagesAbout.src="./images/coding_ purple.svg"

  }
  localStorage.setItem("theme",mode)
}