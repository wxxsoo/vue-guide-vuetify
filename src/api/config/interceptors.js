export function setInterceptors(instance) {
  // Add a request interceptor
  instance.interceptors.request.use(
    function(config) {
      //헤더 등 request 설정 가능
      return config;
    },
    function(error) {
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function(response) {
      // 응답 전 로직 추가 가능
      return response;
    },
    function(error) {
      return Promise.reject(error);
    }
  );

  return instance;
}
