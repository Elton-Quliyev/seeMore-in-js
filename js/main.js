var header = document.querySelector(".tabs")
var btns = header.getElementsByClassName("tab");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}


var btnTommy = document.getElementById("tommy-tab")
var btnBidgroup = document.getElementById("bidgroup-tab")
var btnCuker = document.getElementById("cuker-tab")

var container = document.querySelector(".container")


var array = [
  {
    title: "Full Stack Web Developer",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptate asperiores ex ad magnam consequuntur illum corporis distinctio maxime, aspernatur at expedita voluptatum quae? Officiis blanditiis explicabo doloremque unde harum aliquam totam laboriosam dicta quos. Ipsum sint doloremque esse repellat, nulla alias blanditiis hic eveniet rem ullam sapiente excepturi facilis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptate asperiores ex ad magnam consequuntur illum corporis distinctio maxime, aspernatur at expedita voluptatum quae? Officiis blanditiis explicaboLorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor pariatur, harum impedit, nemo unde commodi animi perspiciatis dignissimos voluptas cupiditate, nesciunt praesentium sunt minima! Laboriosam, ut.",
    name : "TOMMY",
    date : "December 2015 - Present"
  },
  {
    title: "Vision",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptate asperiores ex ad magnam consequuntur illum corporis distinctio maxime, aspernatur at expedita voluptatum quae? Officiis blanditiis eLorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor pariatur, harum impedit, nemo unde commodi animi perspiciatis dignissimos voluptas cupiditate, nesciunt praesentium sunt minima! Laboriosam, ut.o maxime, aspernatur at expedita voluptatum quae? Officiis blanditiis eLorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor pariatur, harum impedit.",
    name : "BIDGROUP",
    date : "Septenber 2010 - Present"
  },
  {
    title: "Goals",
    text: "bu texde metnin eri qeyd olunmalidirLorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptate asperiores ex ad magnam consequuntur illum corporis distinctio maxime, aspernatur at expedita voluptatum quae? Officiis blanditiis eLorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor pariatur, harum impedit, nemo unde commodi animi perspiciatis dignissimos voluptas cupiditate, nesciunt praesentium sunt minima! Laboriosam, ut.o maxime, aspernatur at expedita voluptatum quae? Officiis blanditiis eLorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor pariatur, harum impedit.",
    name : "CUKER",
    date : "November 2017 - Present"
  }
];

function hansiObyekt(name){   //burda funkisiyanin icine tittlenide texdide vere bilerdim ama basim garismasin deye butun objectlere name verdim

  container.textContent = ""      

  function obyektsecen(object){
    return object.name === name;
  }
  const selectedObject = array.find(obyektsecen)
  //bu hisse obyektlerin hansinin hansi oldugunu secendir. find, objecte şert verib secendir ve burada yoxlayirki senin verdiyin name ile eyni olan bir name vami? varsa hemin obyekti sececek eyer ele bisey yoxdusada undefined olacaq
  




  
  

  // const textArray = selectedObject.text.split(" ") //bosluqsuz array
  // const umumiText = selectedObject.text.textContent
  // console.log(umumiText )

  // if(textArray.length<100){
  // console.log(textArray.length)

  // btnShow.textContent = "daha azini gosder"

  // }
  // else{
    // btnShow.textContent = "daha coxunu gosder"
    
  // }
  
  
  

  

  

  divim = document.createElement("div")
  container.appendChild(divim)
  divim.classList.add("divim")

  var basliq = document.createElement("h1")
  basliq.textContent = selectedObject.title
  divim.appendChild(basliq)
  basliq.classList.add("tittle")
  
  var ad = document.createElement("span")
  ad.textContent = selectedObject.name
  divim.appendChild(ad)
  ad.classList.add("name")
  
  var tarix = document.createElement("span")
  tarix.textContent = selectedObject.date
  divim.appendChild(tarix)
  tarix.classList.add("date")
  
  var metn = document.createElement("p")
  //metn.textContent = selectedObject.text
  divim.appendChild(metn)
  
  
  var btnShow = document.createElement("button")
  btnShow.classList.add("btn")  
  btnShow.textContent = "Daha coxunu gosder"  
  divim.appendChild(btnShow)
  
  
    
  var metninIcindekiler = selectedObject.text
  var maxSoz = 50
  
  var qisaMetn = metninIcindekiler.split(" ").slice(0 , maxSoz).join(" ");
  var gizliMetn = metninIcindekiler.split(" ").slice(maxSoz).join(" ");
  var span1 = document.createElement("span")
  metn.appendChild(span1)
  var span2 = document.createElement("span")
  metn.appendChild(span2)
  span2.textContent = gizliMetn
  span2.style.display = "none"
  span1.textContent = qisaMetn
  btnShow.addEventListener("click" , function(){

    if(span2.style.display == "block"){
      span2.style.display = "none"
      btnShow.textContent = "Daha coxunu gosder"
    }
    else{
      
      span2.style.display = "block"
      btnShow.textContent = "Daha azini gosder"
    }
  })
  

































}  



btnTommy.addEventListener("click", function(){
  hansiObyekt("TOMMY")
})

btnBidgroup.addEventListener("click" , function(){
  hansiObyekt("BIDGROUP")
})

btnCuker.addEventListener("click" , function(){
  hansiObyekt("CUKER")
})




window.addEventListener('load', function() {
  btnTommy.click();
  //btnShow.click();
});
//bu kod seyfeye refres atanda veya ilk girende qarsimiza btnhistoryin basilmis kimi gorunmesi ucundur


