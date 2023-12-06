export const client = {
  serverApi: process.env.SERVER_API,
  send: async function (url, method = "GET", body = null) {
    url = `${"https://api-pages.vercel.app/api/v1"}${url}`;
    const headers = {
      "Content-Type": "application/json",
    };
    const options = {
      method,
      headers,
    };
    if (body) {
      options.body = JSON.stringify(body);
    }
    const response = await fetch(url, options);
    const data = await response.json();
    return { data, response };
  },
  get: function (url) {
    return this.send(url);
  },

  post: function (url, body) {
    return this.send(url, "POST", body);
  },

  put: function (url, body) {
    return this.send(url, "PUT", body);
  },

  patch: function (url, body) {
    return this.send(url, "PATCH", body);
  },

  delete: function (url) {
    return this.send(url, "DELETE");
  },
};
