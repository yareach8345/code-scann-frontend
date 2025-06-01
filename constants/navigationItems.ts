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
    {
        icon: "mdi-information",
        title: "사이트 정보",
        to: "/about",
        needLogin: false
    }
]

export default navigationMenus