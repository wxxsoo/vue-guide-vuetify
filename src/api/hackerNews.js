import { hackerNewsInstance } from "./index";
// news 조회
function fetchNewsList() {
  return hackerNewsInstance.get(`news/1.json`);
}
// news 조회 async/await 패턴 적용
async function fetchNewsList2() {
  try {
    const response = await hackerNewsInstance.get(`news/1.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

function fetchJobsList() {
  return hackerNewsInstance.get(`jobs/1.json`);
}

function fetchAskList() {
  return hackerNewsInstance.get(`ask/1.json`);
}

export { fetchNewsList, fetchNewsList2, fetchJobsList, fetchAskList };
