const axios = require("axios");
const cheerio = require("cheerio");

const url = "https://icy.tools/";

export default function handler(req, res) {
  return new Promise((resolve, reject) => {
    axios(url)
      .then((response) => {
        const html = response.data;
        const $ = cheerio.load(html);
        let arr = [];
        $("table > tbody > tr").each((index, element) => {
          let obj = {};

          const name = $(element).find("p.text-ellipsis").text();
          const circulatingSupply = $(element).find("strong").text();
          const floorPrice = $(element)
            .find("td:nth-of-type(2) p.font-bold")
            .text();
          const floorPriceTrend = $(element)
            .find("td:nth-of-type(2) span.text-xs")
            .text();
          const floorPriceTrendDirection = $(element)
            .find("td:nth-of-type(2) svg")
            .hasClass("text-red-400");
          const sales = $(element).find("td:nth-of-type(3) p.font-bold").text();
          const salesTrend = $(element)
            .find("td:nth-of-type(3) span.text-xs")
            .text();
          const salesTrendDirection = $(element)
            .find("td:nth-of-type(3) svg")
            .hasClass("text-red-400");
          const averagePrice = $(element)
            .find("td:nth-of-type(4) p.font-bold")
            .text();
          const averagePriceTrend = $(element)
            .find("td:nth-of-type(4) span.text-xs")
            .text();
          const averagePriceTrendDirection = $(element)
            .find("td:nth-of-type(4) svg")
            .hasClass("text-red-400");
          const volume = $(element)
            .find("td:nth-of-type(5) p.font-bold")
            .text();
          const volumeTrend = $(element)
            .find("td:nth-of-type(5) span.text-xs")
            .text();
          const volumeTrendDirection = $(element)
            .find("td:nth-of-type(5) svg")
            .hasClass("text-red-400");
          const marketCap = $(element)
            .find("td:nth-of-type(6) p.text-base")
            .text();
          const marketCapTrend = $(element)
            .find("td:nth-of-type(6) p.font-bold.text-xs")
            .text();
          // const marketCapTrend = $(element).find("td:nth-of-type(6) p.font-bold.text-xs").text().match(/\d.+/g);

          if (name !== "") {
            obj["collectionName"] = name;
            obj["circulatingSupply"] = circulatingSupply;
            obj["floorPrice"] = floorPrice;
            obj["floorPriceTrend"] = floorPriceTrend;
            obj["floorPriceTrendDirection"] = floorPriceTrendDirection;
            obj["sales"] = sales;
            obj["salesTrend"] = salesTrend;
            obj["salesTrendDirection"] = salesTrendDirection;
            obj["averagePrice"] = averagePrice;
            obj["averagePriceTrend"] = averagePriceTrend;
            obj["averagePriceTrendDirection"] = averagePriceTrendDirection;
            obj["volume"] = volume;
            obj["volumeTrend"] = volumeTrend;
            obj["volumeTrendDirection"] = volumeTrendDirection;
            obj["marketCap"] = marketCap;
            obj["marketCapTrend"] = marketCapTrend;
            arr.push(obj);
          }
        });

        res.status(200).json(arr);
        resolve();
      })
      .catch((error) => {
        res.json(error);
        res.status(405).end();
        resolve();
      });
  });
}
