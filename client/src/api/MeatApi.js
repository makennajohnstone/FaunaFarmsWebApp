class MeatApi {
  static getAllMeats() {
    return fetch('/meats').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default MeatApi;
