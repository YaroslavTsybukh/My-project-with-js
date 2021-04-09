/* Timer*/
let timer = "2021-04-08"

    function calculationClock(endTime){
        let date = new Date()
        let diff = Date.parse(endTime) - Date.parse(date)
        let hours = Math.floor(diff/(1000*60*60))
        if(hours < 10){
            hours = "0" + hours
        }
        let minutes = Math.floor(diff/(1000*60)%60)
        if(minutes < 10){
            minutes = "0" + minutes
        }
        let seconds = Math.floor((diff/1000)%60)
        if(seconds < 10){
            seconds = "0" + seconds
        }
        return {
            "total" : diff,
            "hours" : hours,
            "minutes" : minutes,
            "seconds" : seconds
        }
    }

    function startClock(endTime){
        let hourBlock = document.querySelector(".hour")
        let minutesBlock = document.querySelector(".minutes")
        let secondsBlock = document.querySelector(".seconds")
        let timerInterval = setInterval(updateClock , 1000)
            function updateClock(){
                let t = calculationClock(endTime)
                hourBlock.textContent = t.hours
                secondsBlock.textContent = t.seconds
                minutesBlock.textContent = t.minutes
                    if(t.total <= 0){
                        clearInterval(timerInterval)
                        hourBlock.textContent = '00';
                        minutesBlock.textContent = '00';
                        secondsBlock.textContent = '00';
                    }
                }
            }
startClock(timer)

/*price list*/
let link = document.querySelector('.thirdBlockButton')
let blob = new Blob(["Прайс лист" + "\nЦены от 1000 до 2000"], {type:"text/plain"})
    link.href = URL.createObjectURL(blob)

/*twoSection block*/

    let blockServices = document.querySelectorAll(".blockServices")
    let serviceDescription = document.querySelectorAll(".serviceDescription")
    blockServices.forEach(function(item){
        item.addEventListener("click" , function(){
            let elem = item
            let tabId = elem.getAttribute("data-id")
            let currentTab = document.querySelector(tabId)
            serviceDescription.forEach(function(item){
                item.classList.remove("block")
            })
                currentTab.classList.add("block")
        })
    })



/*Modal*/

let button = document.getElementById("button")
    button.addEventListener("click",function(e){
        let div = document.createElement("div")
            div.className = "coverDiv"
            document.body.append(div)
            document.body.style.overflowY = "hidden"
        function showBlockForm(){
            let promptBlock = document.getElementById("prompt-form-container")
            promptBlock.classList.add("show")
            let closeButton = document.querySelector(".remove-button")
            closeButton.addEventListener("click" , function(e){
                promptBlock.classList.remove("show")
                document.querySelector(".coverDiv").remove()
                document.body.style.overflowY = ""
            })
        }
        showBlockForm()
    })
