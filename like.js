

export function likeEventButton () {
    const likeButtons = document.querySelectorAll(".like-button");
  for (const likeButton of likeButtons) {
    likeButton.addEventListener("click", () =>{
    //event.stopPropagation();
      const index = likeButton.dataset.index;
    if (index !== null) {
      const comment = comments[index];
      if (!comment.isLiked) {
        comment.isLiked = true;
        comment.likes++;
      } else {
        comment.isLiked = false;
        comment.likes--;
      }

    renderComments();

      }
    });  
  }
}
likeEventButton ();