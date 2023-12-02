import { getComments, postApi } from "./api.js";


const addCommentButton = document.getElementById("comment-button");
  const addComment = document.getElementById("list");
  const nameInput = document.getElementById("name-input");
  const textInput = document.getElementById("text-input");
  const currentDate = new Date().toLocaleDateString('ru-RU', {year: '2-digit', month: '2-digit',  day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false,
      }).replace(',','');
  // const addFormProgressElement=document.querySelector("add-form-progress");
  
  let comments = [];

  // function getComments() {
  //   const commentsProgress = document.querySelector('.comments-progress');
  // commentsProgress.style.display = 'block';
    
  //   return fetch("https://wedev-api.sky.pro/api/v1/Aleksandra1216/comments", {
  //     method: "GET",
  //   })
  //   .then((response) => {
  //     if (response.status === 500) {
  //       throw new Error("Ошибка сервера");
  //     } if (response.status === 400){
  //       throw new Error("Неверный запрос");
  //     }
  //     return response.json();
  //   })
     
     getComments()
      .then((responseData) => {
        const appComments = responseData.comments.map((comment) => {
          return {
            name: comment.author.name,
            text: comment.text,
             date: currentDate,
            //date: new Date (comment.date),
            isLike: comment.likes,
            isLiked: false,
          };
        });
        comments = appComments;
        renderComments();
        // commentsProgress.style.display = 'none';
  })
  .catch((error) => {
    console.log(error);
  });


// getComments();

  const renderComments = () => {
    const commentsHtml = comments
      .map((comment, index) => {
        return `<li class="comment">
          <div class="comment-header">
            <div>${comment.name}</div>
            <div>${comment.date}</div>
          </div>
          <div class="comment-body">
            <div class="comment-text" data-index="${index}">
              ${comment.text}
            </div>
          </div>
          <div class="comment-footer">
            <div class="likes">
              <span class="likes-counter">${comment.isLike}</span>
              <button class="like-button ${
                comment.isLiked ? "-active-like" : ""
              }" data-index="${index}"></button>
            </div>
          </div>
        </li>`;
      })
      .join("");
    addComment.innerHTML = commentsHtml;


    const commentsElements = document.querySelectorAll(".comment-text");
    for (const commentElement of commentsElements) {
      commentElement.addEventListener("click", () => {
        const index = commentElement.dataset.index;
        if (index !== null) {
          const comment = comments[index];
          textInput.value = `> ${comment.name} : ${comment.text}`;
        }
      });
    }


    const likeButtons = document.querySelectorAll(".like-button");
    for (const likeButton of likeButtons) {
      likeButton.addEventListener("click", () => {
        const index = likeButton.dataset.index;
        if (index !== null) {
          const comment = comments[index];
          if (!comment.isLiked) {
            comment.isLiked = true;
            comment.isLike++;
          } else {
            comment.isLiked = false;
            comment.isLike--;
          }
          renderComments();
        }
      });
    }
  }

  
  
  addCommentButton.addEventListener("click", () => {
    nameInput.classList.remove("error");
    textInput.classList.remove("error");
    if (nameInput.value === "" && textInput.value === "") {
      nameInput.classList.add("error");
      textInput.classList.add("error");
      return;
    } else if (nameInput.value === "") {
      nameInput.classList.add("error");
      return;
    } else if (textInput.value === "") {
      textInput.classList.add("error");
      return;
    }

    const startAt = Date.now();
    console.log('Начинаем делать запрос');
    addCommentButton.disabled = true;
    addCommentButton.textContent = 'Элемент добавляется...';
    
    // fetch("https://wedev-api.sky.pro/api/v1/Aleksandra1216/comments", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     name: nameInput.value
    //     .replaceAll("&", "&amp;")
    //     .replaceAll("<", "&lt;")
    //     .replaceAll(">", "&gt;")
    //     .replaceAll('"', "&quot;"),
    //     date: currentDate,
    //     text: textInput.value
    //     .replaceAll("&", "&amp;")
    //     .replaceAll("<", "&lt;")
    //     .replaceAll(">", "&gt;")
    //     .replaceAll('"', "&quot;")
    //     .replaceAll("QUOTE_BEGIN", "<div class='comment-quote'><b>")
    //      .replaceAll("QUOTE_END", "</b></div>"),
    //      forceError: true,
    //   }),
    // })
   
    // .then((response) => {
    //   if (response.status === 500) {
    //     throw new Error("Сервер сломался")
    //   } else if (response.status === 400){
    //     throw new Error("Плохой запрос")
    //   }
    //   return response.json();
    // })
    const text = textInput.value;
    const name = nameInput.value;
    const date = currentDate;

    postApi({ text, name, date })
    .then((response) => {
      console.log("Время:" + (Date.now() - startAt));
      return response;
    })
    .then(() => {
      return getComments();
    })
    
    .then(() => {
    addCommentButton.disabled = false;
    addCommentButton.textContent = 'Добавить';
    nameInput.value = "";
    textInput.value = "";
    })
    .catch((error) => {
      addCommentButton.disabled = false;
      addCommentButton.textContent = 'Добавить';
      if (error.message === "Плохой запрос"){
        alert("имя и комментарий должны быть не короче 3 символов"); 
        return
      }else if (error.message === "Сервер сломался") {
        alert("кажется, у вас сломался интернет, попробуйте позже");
        return;
      }
      alert("кажется ,у вас сломался интернет, попробуйте позже")
      console.warn(error);
    })
        // getComments();
  });
  
