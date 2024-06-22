let form = document.querySelector("form")
let chatArea = document.querySelector(".chat-area")
let inputMessage = document.querySelector("#message")

async function getBootAnswers (){
  const response = await fetch("boot-answer.json")
  const data = await response.json()


  // لما أدوس على الزرار هيبدأ يقوم ببعض المهام
  form.onsubmit = (e)=>{
    // هوقف تشغيل الزرار عشان ميعملش ريفريش
    e.preventDefault()
    
    
    let userMessage = inputMessage.value.trim();

    // بشوف هل القيمة اللي دخلها الشخص نفس القيمة اللي راجعه من الريسبونس
    if(userMessage != ""){
      data.forEach(answer => {
        if(userMessage == answer.question){
          console.log(answer.answer)
          chatArea.innerHTML += `<p class="answer">${answer.question}</p>`
          chatArea.innerHTML += `<p class="msg">${answer.answer}</p>`
        }
      });
    }else{
      alert("please enter a message")
    }

    inputMessage.value = "";
  }
}

getBootAnswers()