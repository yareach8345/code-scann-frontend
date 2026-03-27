# Code Snacc Frontend

일본어 문서는 아래 파일음 참고해주세요.

日本語の文書はこちらのファイルをご覧ください。
[日本語の文書](README-JP.md)

## 🖥️ 프로젝트 개요

---
자그마한 코드 한조각

### 🗓️ 개발기간
2025년 4월 21일 ~ 2025년 7월 10일

### ⚙️ 사용기술
- Nuxt.js
- Vuetify
- axios
- pinia

### 🌐 더 보기
![Static Badge](https://img.shields.io/badge/Notion-project-a97bff?logo=notion&link=https%3A%2F%2Fwww.notion.so%2FCodeSnacc-1dcad8559b2d8076b1dcc5a8c7641961)
![Static Badge](https://img.shields.io/badge/Notion-backend-6db33f?logo=notion&link=https://github.com/yareach8345/code-snacc-backend)
![Static Badge](https://img.shields.io/badge/Notion-portfolio-aaaaaa?logo=notion&link=https%3A%2F%2Fwww.notion.so%2FPortfolio-JP-257ad8559b2d80a28d1ac84052eea6f2)

## 사용방법
### environment variables
```text
API_BASE_URL=http://localhost:8080
```
| property     | value   |
|--------------|---------|
| API_BASE_URL | 백엔드 url |

## 페이지
| 엔드포인트                  | 설명                 |
|------------------------|--------------------|
| /                      | 메인 페이지, 게시글 목록이 보임 |
| /join                  | 회원가입               |
| /user/[id]             | 해당 id의 유저 정보       |
| /my-page               | 내 정보               |
| /my-page/edit          | 내 정보 수정            |
| /posts/write           | 게시글 작성             |
| /posts/[postId]        | postId의 게시글        |
| /posts/[postId]/update | postId의 게시글 수정     |