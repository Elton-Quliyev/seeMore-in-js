//active classi secen

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
    text: "Azərbaycan və ya rəsmi adı ilə Azərbaycan Respublikası — Şərqi Avropa və Qərbi Asiyanın sərhəddində yerləşən transkontinental ölkə. Azərbaycan Xəzər dənizi hövzəsinin qərbində, Cənubi Qafqazda yerləşir. Şimaldan Rusiya (Dağıstan),[7] şimal-qərbdən Gürcüstan, qərbdən Ermənistan, cənub-qərbdən Türkiyə və cənubdan İran ilə həmsərhəddir.[8] Azərbaycanın anklavı olan Naxçıvan Muxtar Respublikası Ermənistanla şimal-şərqdə, İranla qərbdə və Türkiyə ilə şimal-qərbdən həmsərhəddir. Azərbaycan ərazisinin bir hissəsi (Dağlıq Qarabağ bölgəsi və ona bitişik 7 inzibati rayon) 1988–1994-cü illərdə Ermənistan tərəfindən işğal olunmuş və burda heç bir ölkə tərəfindən tanınmayan qondarma Dağlıq Qarabağ Respublikası yaradılmışdır.[9] Uzunsürən sülh danışıqları nəticəsiz qalmış və 2020-ci il 27 sentyabrda Azərbaycan Respublikası Silahlı Qüvvələri tərəfindən əks-hücum əməliyyatı ilə torpaqların bir hissəsi azad edilmiş və 10 noyabr Bakı vaxtı ilə 01:00-da imzalanan üçtərəfli bəyanat ilə başa çatmışdır. Dövlət sərhədləri cənubdan İranla 765 km, Türkiyə ilə 15, şimaldan Rusiya ilə 391 km, şimal-qərbdən Gürcüstan ilə 471 km, qərbdən Ermənistan ilə 1007 km həmsərhəddir.[10][11][12][13] Onun 825 km-i su sərhəddidir. Sahil xəttinin uzunluğu 713 km-dir.[12] Azərbaycanın Xəzər dənizi sektorunda həmçinin Türkmənistan, Qazaxıstan, İran və Rusiya ilə sərhədə malikdir .",
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
  var span2 = document.createElement("span")
  metn.appendChild(span2)
  metn.appendChild(span1)
  
  span1.textContent = qisaMetn + " ..."


  span2.style.display = "none"
  
  btnShow.addEventListener("click" , function(){

    if(span2.style.display == "block"){
      span2.style.display = "none"
      btnShow.textContent = "Daha coxunu gosder"
      span1.textContent = qisaMetn + " ..."
    }
    else{
      span2.style.display = "block"
      btnShow.textContent = "Daha azini gosder"
      span1.textContent = qisaMetn + " " + gizliMetn
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


