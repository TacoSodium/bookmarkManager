import {Bookmark, BookmarkDetails} from "./Bookmark.js";

let bookmarkContainer = document.getElementById("bookmarkContainer") as HTMLDivElement;
let addBookmarkButton = document.getElementById("addBookmarkButton") as HTMLButtonElement;

addBookmarkButton.addEventListener('click', () => {
    //take user input
    console.log("test test");

    let titleInput = document.getElementById("titleInput") as HTMLInputElement;
    let bookmarkTitle = document.createTextNode(titleInput.value) as Node;
    let urlInput = document.getElementById("urlInput") as HTMLInputElement;
    let bookmarkURL = document.createTextNode(urlInput.value) as Node;

    let newBookmarkDetails = new BookmarkDetails(bookmarkTitle, bookmarkURL);
    let newBookmark = new Bookmark(newBookmarkDetails);

    //creates bookmark
    if (addBookmarkButton !== null) {
        newBookmark.Spawn(bookmarkContainer);
    }

    // removes bookmark
    newBookmark.FavouriteButton.addEventListener('click', () => {
        if (newBookmark !== null) {
            newBookmark.Unfavourite();
        }
    })
})