async function getContent(__COUNT_NEWS, __URL_SPORT, method) {
    try {
      let response = await method(__URL_SPORT);
      let responseObject;
      if (method === fetch) {
        checkResponseFormatAwait(response);
        responseObject = await response.json();
      }
      if (method === XHR) {
        responseObject = await JSON.parse(response);
      }
      const listLastNews = makeListNews(responseObject, __COUNT_NEWS);
      return listLastNews;
    }
    catch(e) {
    }
}