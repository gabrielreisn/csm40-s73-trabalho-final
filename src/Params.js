class Params{
  static get(nome){
    const params = []
    const query = location.search.slice(1);
    const partesDaQuery = query.split("&");
    partesDaQuery.forEach(parte => {
      const [key, value] = parte.split("=")
      params[key] = value
    })
    return params;
  }
}
