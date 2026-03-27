# Code Snacc Frontend

## 🖥️ プロジェクト紹介

---
小さく美味しいコード一切れ

### 🗓️ 開発期間
２０２５年４月２１日 ~ ２０２５年７月１０日

### ⚙️ 使用技術
- Nuxt.js
- Vuetify
- axios
- pinia

### 🌐 他のサイト
![Static Badge](https://img.shields.io/badge/Notion-project-a97bff?logo=notion&link=https%3A%2F%2Fwww.notion.so%2FCodeSnacc-1dcad8559b2d8076b1dcc5a8c7641961)
![Static Badge](https://img.shields.io/badge/Notion-backend-6db33f?logo=notion&link=https://github.com/yareach8345/code-snacc-backend)
![Static Badge](https://img.shields.io/badge/Notion-portfolio-aaaaaa?logo=notion&link=https%3A%2F%2Fwww.notion.so%2FPortfolio-JP-257ad8559b2d80a28d1ac84052eea6f2)

## 使用方法
### environment variables
```text
API_BASE_URL=http://localhost:8080
```
| property     | value      |
|--------------|------------|
| API_BASE_URL | バックエンドのURL |

## ページ情報
| エンドポイント                | 説明               |
|------------------------|------------------|
| /                      | メインページ、記事の目録が見える |
| /join                  | 会員登録ページ          |
| /user/[id]             | ユーザー情報ページ        |
| /my-page               | 自分の情報ページ         |
| /my-page/edit          | 自分の情報修正ページ       |
| /posts/write           | 記事作成ページ          |
| /posts/[postId]        | 記事ページ            |
| /posts/[postId]/update | 記事修正ページ          |