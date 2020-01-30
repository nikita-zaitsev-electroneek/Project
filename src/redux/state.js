import messagesData from "../data/Messages";
import postsData from "../data/Posts";
import dialogsData from "../data/Dialogs";

let state = {
    profilePage: {
        postsData: postsData
    },
    dialogsPage: {
        messagesData: messagesData,
        dialogsData: dialogsData
    }
}

export default state
