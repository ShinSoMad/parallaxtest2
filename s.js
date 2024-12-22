const pageOne = document.getElementById("pageOne")
const pageTwo = document.getElementById("pageTwo")
const pageThre = document.getElementById("pageThre")
const pageFour = document.getElementById("pageFour")
const pageFive = document.getElementById("pageFive")

const farmPage = document.getElementById("farm_main_inner")
const taskPage = document.getElementById("tasks_main_inner")
const refPage = document.getElementById("ref_main_inner")
const walletPage = document.getElementById("wallet_main_inner")
const plannetPage = document.getElementById("plannet_main_inner")

const futor = document.getElementById("futor")


function foter(div){
    if(div == pageOne){
        pageOne.classList.add("active")
        pageThre.classList.remove("active")
        pageFour.classList.remove("active")
        pageTwo.classList.remove("active")
        pageFive.classList.remove("active")

        farmPage.style.display = "block"
        taskPage.style.display = "none"
        refPage.style.display = "none"
        walletPage.style.display = "none"
        plannetPage.style.display = "none"

        futor.style.marginTop = "0" + "vh"
    }else if(div == pageTwo){
        pageOne.classList.remove("active")
        pageThre.classList.remove("active")
        pageFour.classList.remove("active")
        pageFive.classList.remove("active")
        pageTwo.classList.add("active")

        farmPage.style.display = "none"
        taskPage.style.display = "block"
        refPage.style.display = "none"
        walletPage.style.display = "none"
        plannetPage.style.display = "none"

        futor.style.marginTop = "73" + "vh"
    }else if(div == pageThre){
        pageOne.classList.remove("active")
        pageThre.classList.add("active")
        pageFour.classList.remove("active")
        pageTwo.classList.remove("active")
        pageFive.classList.remove("active")

        farmPage.style.display = "none"
        taskPage.style.display = "none"
        refPage.style.display = "block"
        walletPage.style.display = "none"
        plannetPage.style.display = "none"

        futor.style.marginTop = "73" + "vh"
    }
    else if(div == pageFour){
        pageOne.classList.remove("active")
        pageThre.classList.remove("active")
        pageFour.classList.add("active")
        pageTwo.classList.remove("active")
        pageFive.classList.remove("active") 
        
        farmPage.style.display = "none"
        taskPage.style.display = "none"
        refPage.style.display = "none"
        walletPage.style.display = "block"
        plannetPage.style.display = "none"

       futor.style.marginTop = "73" + "vh"
    }
    else if(div == pageFive){
        pageOne.classList.remove("active")
        pageThre.classList.remove("active")
        pageFour.classList.remove("active")
        pageTwo.classList.remove("active")
        pageFive.classList.add("active")

        farmPage.style.display = "none"
        taskPage.style.display = "none"
        refPage.style.display = "none"
        walletPage.style.display = "none"
        plannetPage.style.display = "block"

        futor.style.marginTop = "73" + "vh"
    }
}
