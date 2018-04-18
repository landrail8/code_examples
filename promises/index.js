function getContent(__COUNT_NEWS, __URL_SPORT, method) {
    return new Promise((resolve, reject) => {
        method(__URL_SPORT)
        .then(response => {        
  
          if (method === fetch) {
            checkResponseFormat(reject, response);
            return response.json();
          }
          if (method === XHR) {
            return JSON.parse(response);
          }
        })
        .then(responseObject => {
          checkByJSONschema(reject, responseObject);
          makeListNews(responseObject, __COUNT_NEWS);          
          resolve(listLastNews);    
  
        })
        .catch(err => reject(err));
    });
  }