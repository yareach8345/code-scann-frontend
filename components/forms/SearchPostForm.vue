<script setup lang="ts">
import type PostSearchDto from "~/dto/post/PostSearchDto"
import icons from "~/constants/UserIconList";
import {languages} from "~/constants/Languages";
interface Props {
  initOptions: PostSearchDto,
  tags: string[]
}

const { initOptions, tags } = defineProps<Props>()

const router = useRouter()

const showMenu = ref(false)
const toggleShowMenu = () => {
  showMenu.value = !showMenu.value
}

const title = ref<string>(initOptions.title ?? "")
const isTitleEmpty = computed(() => title.value.length === 0)

const pageSize = ref<number>(initOptions.pageSize ?? 10)
const isPageSizeDefault = computed(() => pageSize.value === 10)

const language = ref<string | undefined>(initOptions.lang)
const langaugeIsNotSelected = computed(() => language === undefined)

const tagList = computed(() => tags.toSorted())
const selectedTags = ref<string[]>(initOptions.tags ?? [])

const doSearch = async () => {
  await router.push({
    path: '/',
    query: {
      title: !isTitleEmpty.value ? title.value : undefined,
      pageSize: !isPageSizeDefault.value ? pageSize.value : undefined,
      tags: selectedTags.value.length > 0 ? selectedTags.value.join(',') : undefined,
    }
  })
}

const resetTitle = async () => {
  title.value = ""
  await doSearch()
}

const resetPageSize = async () => {
  pageSize.value = 10
  await doSearch()
}
</script>

<template>
  <v-card
      class="pa-3 ma-2"
      :class="{ 'border-sm': showMenu }"
      elevation="0"
  >
    <v-sheet>
      <v-expand-transition>
        <v-form
            v-if="showMenu"
            @submit.prevent="doSearch"
        >
          <v-text-field
              label="제목"
              v-model="title"
          />
          <v-number-input
              label="한페이지에 표시할 게시글 수"
              v-model="pageSize"
              :min="1"
          />
          <v-select
              label="태그"
              :items="tagList"
              v-model="selectedTags"
              multiple
          />
          <custom-btn submit>검색하기</custom-btn>
        </v-form>
        <div class="text-center" v-else>
          <div>
            <v-chip v-if="!isTitleEmpty" class="ma-1" color="primary" @click="resetTitle">
              title: {{title}}
            </v-chip>
            <v-chip v-if="!isPageSizeDefault" class="ma-1" color="secondary" @click="resetPageSize">
              pageSize: {{pageSize}}
            </v-chip>
            <v-chip v-for="selectedTag in selectedTags" :key="selectedTag" class="ma-1" color="info">
              #{{selectedTag}}
            </v-chip>
          </div>
          <div>
            검색 메뉴 열기
          </div>
        </div>
      </v-expand-transition>
      <div class="text-center" @click="toggleShowMenu">
        <v-icon v-if="showMenu">mdi-menu-up-outline</v-icon>
        <v-icon v-else>mdi-menu-down-outline</v-icon>
      </div>
    </v-sheet>
  </v-card>
</template>

<style scoped>

</style>