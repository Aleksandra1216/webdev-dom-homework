
export function getComments() {
//     const commentsProgress = document.querySelector('.comments-progress');
//   commentsProgress.style.display = 'block';
    
    return fetch("https://wedev-api.sky.pro/api/v1/Aleksandra1216/comments", {
      method: "GET",
    })
    .then((response) => {
      if (response.status === 500) {
        throw new Error("Ошибка сервера");
      } if (response.status === 400){
        throw new Error("Неверный запрос");
      }
      return response.json();
    })
};



export function postApi ({ text, name, date }) {
    return fetch("https://wedev-api.sky.pro/api/v1/Aleksandra1216/comments", {
      method: "POST",
      body: JSON.stringify({
        name: name
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;"),
        date: date,
        text: text
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("QUOTE_BEGIN", "<div class='comment-quote'><b>")
         .replaceAll("QUOTE_END", "</b></div>"),
        //  forceError: true,
      }),
    })
   
    .then((response) => {
        console.log(response);
      if (response.status === 500) {
        throw new Error("Сервер сломался")
      }  if (response.status === 400){
        throw new Error("Плохой запрос")
      }
      else{
      return response.json();
      }
    });
};