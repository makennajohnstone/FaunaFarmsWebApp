class MeatApi {
  static getAllMeats() {
    return fetch('/meats').then(response => {
      console.log("these are the meats: " + response.json());
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default MeatApi;
