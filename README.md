# 8ight6ix Artwork Hub

8ight6ix 웹 아트 갤러리 페이지입니다. [웹 페이지 이동하기](https://8ight6ix.github.io)

## 1. Local Test

```bash
$ npm install
$ npm start
```

## 2. Deploy

```bash
$ npm install
$ npm run deploy
```

## 3. 작품 추가

### 3.1 파일 옮기기

`/public/artworks/` 내부에 작품 파일을 넣을 디렉토리를 생성후, 해당 디렉토리 내부로 파일들을 옮깁니다.

```
public/
  artworks/
    smaple-artwork/
      index.html
      image/
        image01.png
        image02.png
        thumbnail.png
      js/
        script01.js
        script02.js
      css/
        style.css
```

### 3.2 JSON 파일 수정

`/public/artworks/index.json` 파일에 작품 정보를 추가합니다. 미기재 항목은 Default 값으로 대체됩니다. (`thubnail`과 `keywortd`는 Default가 존재하지 않습니다)

```json
{
  "id": "SAMPLE-ID-07", // 유니크 아이디
  "type": "Sample", // 현재 미사용
  "title": "Sample Work 07", // 제목
  "date": "2020.6.3", // 작품 생성 날짜 (YYYY.M.D)
  "creator": "Unknown", // 작가
  "description": "This is artwork sample description", // 설명
  "keyword": ["Node-sass"], // 키워드
  "path": "/artworks/sample07", // 작품 메인 HTML 파일 경로
  "thumbnail": "/artworks/sample07/thumbnail.png" // 섬네일 이미지 경로
}
```

### 3.3 Deploy

```bash
$ npm install
$ npm run deploy
```
