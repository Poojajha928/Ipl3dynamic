const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const extraRun =require("./ipl/extraRun");
const economic =require("./ipl/economic");
const matchesWonPerYear =require("./ipl/matchesWonPerYear");
const Ques5 =require("./ipl/Ques5");
const matchesPerStadium =require("./ipl/matchesPerStadium");
const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH= "./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";
const JSON_OUTPUT_FILE_PATH1 = "./public/data1.json";
function main() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      csv()
        .fromFile(DELIVERIES_FILE_PATH)
        .then(deliveries => {
          //console.log(deliveries[0], matches[0], "matches-deliveries");
          let result = matchesPlayedPerYear(matches);
          let result1 = extraRun(matches,deliveries);
        //  console.log(result1);
          let result2=economic(matches,deliveries);
          let result3=matchesWonPerYear(matches);
          let result4=Ques5(matches);
         // let result5=matchesPerStadium(matches,deliveries);
          saveMatchesPlayedPerYear(result,result2,result3,result4);
         saveMatchesPlayedPerYear1(result1);
        });
    });
}

function saveMatchesPlayedPerYear(result,result2,result3,result4) {
  const jsonData = {
    matchesPlayedPerYear: result,
    //extraRun : result1,
    economic :result2,
    matchesWonPerYear :result3,
    Ques5 :result4,
   // matchesPerStadium :result5

  };
  

  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}




function saveMatchesPlayedPerYear1(result1) {
  const jsonData = {
    //matchesPlayedPerYear: result,
    extraRun : result1,
    //economic :result2,
    //matchesWonPerYear :result3,
    //Ques5 :result4,
   // matchesPerStadium :result5

  };
  

  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH1, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}



main();
