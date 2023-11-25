

export function getComments() {
const commentsProgress = document.querySelector('.comments-progress');
commentsProgress.style.display = 'block';

    return fetch("https://wedev-api.sky.pro/api/v1/Aleksandra1216/comments", {
        method: "GET",
      })
      .then((response) => {
        console.log(response.status);
   
         if (response.status === 200){
            return response.json();
         } else {
          throw new Error("Что-то пошло не так, попробуйте еще раз");
        }
        })
        .then((responseData) => {
    let appComments = responseData.comments.map((comment) => {
      return {
        name: comment.author.name,
        text: comment.text,
         date: comment.date,
         //currentDate,
        isLike: comment.likes,
        isLiked: false,
      };
    });
   
    // comments = appComments;
    // renderComments();
    // commentsProgress.style.display = 'none';
})
.catch((error) => {
alert('Ошибка сервера, попробуйте еще раз');
});
}
//getComments();


export function addCommentFetch () {
     fetch("https://wedev-api.sky.pro/api/v1/Aleksandra1216/comments", {
      method: "POST",
      body: JSON.stringify({
        name: nameInput.value,
        // .replaceAll("&", "&amp;")
        // .replaceAll("<", "&lt;")
        // .replaceAll(">", "&gt;")
        // .replaceAll('"', "&quot;"),
        // date: currentDate,
        text: textInput.value,
        // .replaceAll("&", "&amp;")
        // .replaceAll("<", "&lt;")
        // .replaceAll(">", "&gt;")
        // .replaceAll('"', "&quot;")
        // .replaceAll("QUOTE_BEGIN", "<div class='comment-quote'><b>")
        //  .replaceAll("QUOTE_END", "</b></div>"),
        //  forceError: true,
      }),
    })

    .then((response) => {
      if (response.status === 201) {
        console.log(response.status);
        return getCommentFetch();
      } else if (response.status === 400){
        throw new Error('Убедись в том, что все поля заполнены, ваши имя и текс содержат больше трех символов');
      } else {
        throw new Error('Что-то пошло не так,попробуйте еще раз');
      }
      })
    .then((response) => {
        console.log("Время:" + (Date.now() - startAt));
        return response;
      })
      .then(() => {
        //return getComments();
        const newComment = {
            name: nameInput.value,
            text:textInput.value,
             date: currentDate.date,
             //currentDate,
            isLike: 0,
            isLiked: false,
          };
  
          comments.push(newComment);
          renderComments();
  
          nameInput.value= "";
          textInput.value = "";
          nameInput.disabled = false;
          textInput.disabled = false;
          addCommentButton.disabled = false;
          addCommentButton.textContent ='Добавить';
        })
        .catch((error) => {
            console.log('error');
          });         
}