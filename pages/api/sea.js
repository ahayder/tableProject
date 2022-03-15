const OpenseaScraper = require("opensea-scraper");

const options = {
  debug: false,
  logs: false,
  sort: true,
  browserInstance: undefined,
}

const getInfoBySlug = async (slug) => {

  // get basic info (from the opensea API)
  const result = await OpenseaScraper.basicInfo(slug);
  
  // get offers from opensea. Each offer includes the floor price, tokenName,
  // tokenId, tokenContractAddress and offerUrl
  // let result = await OpenseaScraper.offers(slug, options);
  console.log("result", result); // result object contains keys `stats` and `offers`

  return result;
}

export default function handler(req, res) {
  getInfoBySlug("cool-cats-nft").then(result => {
    res.status(200).json(result)
  })
}