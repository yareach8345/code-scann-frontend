import type {NavigationMenu} from "~/model/NavigationMenu";

const navigationMenus: NavigationMenu[] = [
    {
        icon: "mdi-view-list",
        title: "게시글 목록",
        to: "/",
        needLogin: false
    },
    {
        icon: "mdi-pencil",
        title: "게시글 작성",
        to: "/posts/write",
        needLogin: true
    },
]

export default navigationMenus