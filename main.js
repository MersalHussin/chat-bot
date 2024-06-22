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
      // لو عندي قيمة بشوف هل القيمة دي موجودة في لداتا بتاعتي ولا لأ
      data.forEach(answer => {
      // لو الداتا موجودة بـ أطر ح السؤال والأجابه
        if(userMessage == answer.question){
          chatArea.innerHTML += `<p class="msg">${answer.question}</p>`
          setTimeout(() => {
            chatArea.innerHTML += `<p class="answer">${answer.answer}</p>`
          }, Math.floor(Math.random() * 4000));
        }
      });
    }else{
      alert("please enter a message")
    }

    inputMessage.value = "";
  }
}

getBootAnswers()