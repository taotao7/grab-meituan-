const request = require("request");
const fs = require("fs");

const url =
  "https://apimobile.meituan.com/group/v4/poi/pcsearch/59?uuid=c83470d130f54cce98e9.1613610567.1.0.0&userid=746230993&limit=200&offset=200&cateId=-1&q=%E5%89%A7%E6%9C%AC%E6%9D%80&token=pqJyQI7xVGde2GmnTvV4SqxW1TIAAAAAxgwAAKXVZm5SeZDB6EVtkCCgMDdJs4La4KlzmOwnUwpiJH0xM81T7SIuVzlSdW54jnNixA&sort=solds";

const cookies =
  "_lxsdk_cuid=1774b946214c8-03191dd9eb3b56-876103d-13c680-1774b946214c8; _lxsdk=1774b946214c8-03191dd9eb3b56-876103d-13c680-1774b946214c8; uuid=c83470d130f54cce98e9.1613610567.1.0.0; mtcdn=K; lsu=; ci=59; rvct=59,1; lt=pqJyQI7xVGde2GmnTvV4SqxW1TIAAAAAxgwAAKXVZm5SeZDB6EVtkCCgMDdJs4La4KlzmOwnUwpiJH0xM81T7SIuVzlSdW54jnNixA; u=746230993; n=tao8462; token2=pqJyQI7xVGde2GmnTvV4SqxW1TIAAAAAxgwAAKXVZm5SeZDB6EVtkCCgMDdJs4La4KlzmOwnUwpiJH0xM81T7SIuVzlSdW54jnNixA; unc=tao8462; firstTime=1613623037341";

const options = {
  url: url,
  headers: {
    Connection: "keep-alive",
    Accept: "*/*",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
    Cookie: cookies,
    Referer: "https://cd.meituan.com/s/%E5%89%A7%E6%9C%AC%E6%9D%80/",
  },
};

request(options, (error, response, body) => {
  console.log("错误为:", error);
  console.log("状态码:", response && response.statusCode);
  console.log("输出到json");
  fs.writeFile("data.json", body, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log("成功");
  });
});
