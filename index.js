'use strict'
const textarea = document.querySelector("textarea");
const addCommentBtn = document.getElementsByClassName("comment-button")[0];
const deleteCommentBtn = document.getElementsByClassName("delete");
const commentSection = document.getElementsByClassName("comments")[0];
const t = document.querySelector("#template-comment").content;
const fragment = document.createDocumentFragment();

const commentDelete = () => {
    let comments = commentSection.querySelectorAll("div");
    comments.forEach((element) => {
        element.addEventListener("click", (event) => {
            console.log(element)
            element.remove()

        });
    });
};

 const addComment = (txt) => {
    if (!txt) {
        return null;
    };
    t.querySelector('p').innerHTML = txt;
    const clone = t.cloneNode(true);
    fragment.appendChild(clone);

    commentSection.appendChild(fragment);
    textarea.value = ""
};

addCommentBtn.addEventListener("click", (event) => {
    addComment(textarea.value);
});


