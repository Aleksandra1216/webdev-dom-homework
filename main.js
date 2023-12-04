import { getComments } from "./api.js";
import { renderComments } from "./renderComments.js";


const newDate = new Date;
export const formatedDate = `${newDate.getDate()}.${newDate.getMonth() + 1}.${newDate.getFullYear()} ${newDate.getHours()}:${newDate.getMinutes()}`;

const date = ({ apiDate }) => {
  return new Date(apiDate).toLocaleDateString() + " "
    + (new Date(apiDate).getHours() < 10 ? '0' + new Date(apiDate).getHours() : new Date(apiDate).getHours()) + ":"
    + (new Date(apiDate).getMinutes() < 10 ? '0' + new Date(apiDate).getMinutes() : new Date(apiDate).getMinutes()) + ":"
    + (new Date(apiDate).getSeconds() < 10 ? '0' + new Date(apiDate).getSeconds() : new Date(apiDate).getSeconds())
}


export let comments = [];

export const getRenderComments = () => {
const appHTML = document.getElementById("app")
 
  getComments().then((responseData) => {
    comments = responseData.comments.map((comment) => {
      const apiDate = comment.date;
      return {
        id: comment.id,
        name: comment.author.name,
        date: date({ apiDate }),
        text: comment.text,
        likes: comment.likes,
        isLiked: comment.isLiked,
      }
    });
    renderComments({ comments });
  });
};
getRenderComments();