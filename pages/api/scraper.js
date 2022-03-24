const axios = require("axios");
const cheerio = require("cheerio");
const cheerioTableparser = require("cheerio-tableparser");

const url = "https://icy.tools/";

export default function handler(req, res) {
  return new Promise((resolve, reject) => {
    axios(url)
      .then((response) => {
        const html = response.data;
        const $ = cheerio.load(html);
        const arr = [];
        $("table > tbody > tr > td").each((index, element) => {
          arr.push($(element).text());
        });
        res.status(200).json(arr);
        resolve();
      })
      .catch((error) => {
        res.json(error);
        res.status(405).end();
        resolve(); // in case something goes wrong in the catch block (as vijay commented)
      });
  });
}
