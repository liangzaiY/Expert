const axios = require("axios").default;

const APP_BASETWO_URL = "//sd.imlatin.com/";

//获取省份
export async function getProvince() {
  const { data } = await axios.get(
    `${APP_BASETWO_URL}center/officialWebsite/getProvince`
  );
  return data;
}

//省份获取所属店铺
export async function getProvinceShop(Province) {
  const { data } = await axios.get(
    `${APP_BASETWO_URL}center/officialWebsite/getProvinceShop?Province=${Province}`
  );
  return data;
}
