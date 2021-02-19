const xlsx = require("node-xlsx");
const fs = require("fs");

let excelData = [
  {
    name: "sheet",
    data: [["店名", "地址", "区域", "最低消费", "评价留言", "评分"]],
  },
];
let allData = fs.readFileSync("data.json");
let formatData = JSON.parse(allData);

formatData.data.searchResult.forEach((element) => {
  excelData[0].data.push([
    element.title,
    element.address,
    element.areaname,
    element.lowestprice,
    element.comments,
    element.avgscore,
  ]);
});

let buffer = xlsx.build(excelData);

fs.writeFile("美团数据.xlsx", buffer, (err) => {
  if (err) {
    console.log("写入失败:" + err);
    return;
  }

  console.log("写入完成");
});
