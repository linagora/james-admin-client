class Client {
  constructor(options) {
    this.httpClient = options.httpClient;
    this.promiseProvider = options.promiseProvider;
    this.apiUrl = options.apiUrl;
    this.token = options.token;
  }

  listDomains() {
    const url = `${this.apiUrl}/domains`;
    const headers = {
      authorization: `Bearer ${this.token}`
    };

    return this.httpClient.get(url, headers);
  }
}

module.exports = Client;
