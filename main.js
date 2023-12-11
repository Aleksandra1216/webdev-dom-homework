import { getComments } from "./api.js";
import { renderComments } from "./renderComments.js";
// import { formatDateToRu, formatDateToUs } from "./lib/formatDate/formatDate.js";
import { format } from "date-fns";



export let comments = [];

export const getRenderComments = () => {
const appHTML = document.getElementById("app")
const country = "ru";
  getComments().then((responseData) => {
    comments = responseData.comments.map((comment) => {
      // const apiDate = comment.date;
      const createDate = format(new Date(comment.date), 'dd-MM-yyyy HH:mm');
      return {
        id: comment.id,
        name: comment.author.name,
       date: new Date (createDate),
        text: comment.text,
        likes: comment.likes,
        isLiked: comment.isLiked,
      }
    });
 
    renderComments({ comments });
  });
};
getRenderComments();

