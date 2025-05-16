import type PostInfoResponseDto from "~/dto/post/PostInfoResponseDto";

export async function getNPosts(
    page: number = 1,
    pageSize: number = 10,
) {
    const { $axios } = useNuxtApp()
    const { data } = await $axios.get<PostInfoResponseDto[]>(`/posts?page=${page}&pageSize=${pageSize}`)
    return data
}

export async function searchNPostsWithUserId(
    id: string,
    page: number = 1,
    pageSize: number = 10,
) {
    const { $axios } = useNuxtApp()
    const { data } = await $axios.get<PostInfoResponseDto[]>(`/posts?page=${page}&pageSize=${pageSize}&searchBy=writer&searchValue=${id}`)
    return data
}