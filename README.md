<img width="100" alt="image" src="https://user-images.githubusercontent.com/72684256/222954950-6ab18005-81e1-4d0b-93d5-6097f11fee32.png">


# 24 HANE(24 hours are not enough)

42카뎃, 멤버분들의 클러스터 출입 누적 시간을 확인할 수 있는 24HANE 서비스입니다.
 - 클러스터 출입태깅이 잘 됐는지 궁금한가요?
 - 클러스터 출입 누적 시간이 궁금한가요?

24HANE 서비스를 이용해서 확인 할 수 있습니다.
 - 클러스터 출입 누적 시간을 오늘 / 월 기준으로 한 눈에 볼 수 있습니다.
 - 목표 시간을 설정하여 오늘 / 월의 학습 시간 진척도를 그래프로 볼 수 있습니다.
 - 상세한 클러스터 출입 기록을 일별로 확인할 수 있습니다.
 - 자정 전후로 별도 태깅 없이 학습에만 몰입 할 수 있습니다.
 - 최근 6주간 / 6달간의 학습 시간 진척도를 그래프로 볼 수 있습니다.
<table>
  <tr>
    <td><img width="345" alt="image" src="https://user-images.githubusercontent.com/72684256/222955031-4ce9edd6-6dda-46f3-ac17-e6bacacfbcfe.png"></td>
    <td><img width="345" alt="image" src="https://user-images.githubusercontent.com/72684256/222955101-301b7088-890b-4291-899f-9e685264c78f.png"></td>
    <td><img width="345" alt="image" src="https://user-images.githubusercontent.com/72684256/222955264-301460c7-cc7d-4d2c-905a-5b73cba8383c.png"></td>
  <tr>
</table>

## 앱 실행방법

```sh
//의존성 패키지 설정
npm i

//코드를 실행 합니다
npm run dev
```

## 환경변수

루트에 .env파일을 만듭니다.

```
VITE_APP_API_URL=http://localhost:2424 // 백엔드 url 주소
VITE_TOKEN=accessToken // 토큰 이름
```

## 기술스택
- Vue.js
- Typescript
- Amazon S3
