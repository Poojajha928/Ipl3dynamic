function fetchAndVisualizeData() {
  fetch("./data.json")
    .then(r => r.json())
    .then(visualizeData);
}

fetchAndVisualizeData();

function visualizeData(data) {
  
  visualizeMatchesPlayedPerYear1(data.matchesPlayedPerYear);
  visualizeMatchesPlayedPerYear3(data.matchesWonPerYear);
  //visualizeMatchesPlayedPerYear(data.extraRun);
  visualizeMatchesPlayedPerYear2(data.economic);
  visualizeMatchesPlayedPerYear4(data.Ques5);
  //visualizeMatchesPlayedPerYear5(data.mathchesPerStadium);
  
  

  return;
}



/*function visualizeMatchesPlayedPerYear(extraRun) {
    const seriesData = [];
    for (let year in extraRun) {
    seriesData.push([year, extraRun[year]]);
  }
  
  
  

  Highcharts.chart("matches-played-per-year", {
    chart: {
      type: "column"
    },
    title: {
      text: "ExtraRun"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    series: [
      {
        name: "Years",
        data: seriesData
      }
    ]
  });
} */


function visualizeMatchesPlayedPerYear1(matchesPlayedPerYear) {
  const seriesData1 = [];
  for (let year in matchesPlayedPerYear ) {
  seriesData1.push([year, matchesPlayedPerYear[year]]);
}




Highcharts.chart("matches-played-per-year1", {
  chart: {
    type: "column"
  },
  title: {
    text: "Matches Played Per Year"
  },
  subtitle: {
    text:
      'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
  },
  xAxis: {
    type: "category"
  },
  yAxis: {
    min: 0,
    title: {
      text: "Matches"
    }
  },
  series: [
    {
      name: "Years",
      data: seriesData1
    }
  ]
});
}

function visualizeMatchesPlayedPerYear2(economic) {
  const seriesData3 = [];
  for (let year in economic) {
  seriesData3.push([year, economic[year]]);
  //console.log(seriesData3);
}




Highcharts.chart("matches-played-per-year2", {
  chart: {
    type: "column"
  },
  title: {
    text: "top 10 economic bowler"
  },
  subtitle: {
    text:
      'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
  },
  xAxis: {
    type: "category"
  },
  yAxis: {
    min: 0,
    title: {
      text: "economic-rate"
    }
  },
  series: [
    {
      name: "top 10 playeers",
      data: seriesData3
    }
  ]
});
}








function visualizeMatchesPlayedPerYear4(Ques5) {
  const seriesData20 = [];
  for (let year in Ques5) {
  seriesData20.push([year, Ques5[year]]);
  //console.log(seriesData3);
}




Highcharts.chart("matches-played-per-year4", {
  chart: {
    type: "column"
  },
  title: {
    text: " Mathes Played in Rajiv Gandhi International Stadium, Uppal in 2008"
  },
  subtitle: {
    text:
      'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
  },
  xAxis: {
    type: "category"
  },
  yAxis: {
    min: 0,
    title: {
      text: "mathches played"
    }
  },
  series: [
    {
      name: "top 10 playeers",
      data: seriesData20
    }
  ]
});
}








function visualizeMatchesPlayedPerYear3(matchesWonPerYear) {
  const seriesData4 = [];
  const seriesData5 = [];
  const seriesData6 = [];
  const seriesData7 = [];
  const seriesData8 = [];
  const seriesData9 = [];
  const seriesData10 = [];
  const seriesData11 = [];
  const seriesData12 = [];
  const seriesData13 = [];
  const seriesData14= [];
  const seriesData15 = [];
  const seriesData16 = [];
  const Team=['Chennai Super Kings',
  'Kolkata Knight Riders',
  'Delhi Capitals',
  'Kings XI Punjab',
  'Mumbai Indians',
  'Sunrisers Hyderabad',
  'Rajasthan Royals',
  'Royal Challengers Bangalore',
  'Gujarat Lions',
  'Rising Pune Supergiant',
  'Pune Warriors',
  'Deccan Chargers',
  'noResult'];
  for (let i in matchesWonPerYear) {
   var  a=matchesWonPerYear[i];
   var z=0;
   //console.log(a);
   for(let tea in a)
    {
   //console.log("pooja");
   //console.log(Object.keys(matchesWonPerYear).length);

    if(tea=="Chennai Super Kings")
    {
      z++;
      //console.log(a[tea]);
     seriesData4.push(a[tea]);
    }
    
    }
    if(z==0)
    {
      seriesData4.push(0);
    }

}
//console.log(seriesData4);
for (let i in matchesWonPerYear) {
  var  a=matchesWonPerYear[i];
  var z=0;
  //console.log(a);
  for(let tea in a)
   {
  //console.log("pooja");
  //console.log(Object.keys(matchesWonPerYear).length);

   if(tea=="Kolkata Knight Riders")
   {
     z++;
     //console.log(a[tea]);
    seriesData5.push(a[tea]);
   }
   
   }
   if(z==0)
   {
     seriesData5.push(0);
   }

}

for (let i in matchesWonPerYear) {
  var  a=matchesWonPerYear[i];
  var z=0;
  //console.log(a);
  for(let tea in a)
   {
  //console.log("pooja");
  //console.log(Object.keys(matchesWonPerYear).length);

   if(tea=="Delhi Capitals")
   {
     z++;
     //console.log(a[tea]);
    seriesData6.push(a[tea]);
   }
   
   }
   if(z==0)
   {
     seriesData6.push(0);
   }

}


for (let i in matchesWonPerYear) {
  var  a=matchesWonPerYear[i];
  var z=0;
  //console.log(a);
  for(let tea in a)
   {
  //console.log("pooja");
  //console.log(Object.keys(matchesWonPerYear).length);

   if(tea=="Kings XI Punjab")
   {
     z++;
     //console.log(a[tea]);
    seriesData7.push(a[tea]);
   }
   
   }
   if(z==0)
   {
     seriesData7.push(0);
   }

}

for (let i in matchesWonPerYear) {
  var  a=matchesWonPerYear[i];
  var z=0;
  //console.log(a);
  for(let tea in a)
   {
  //console.log("pooja");
  //console.log(Object.keys(matchesWonPerYear).length);

   if(tea=="Mumbai Indians")
   {
     z++;
     //console.log(a[tea]);
    seriesData8.push(a[tea]);
   }
   
   }
   if(z==0)
   {
     seriesData8.push(0);
   }

}


for (let i in matchesWonPerYear) {
  var  a=matchesWonPerYear[i];
  var z=0;
  //console.log(a);
  for(let tea in a)
   {
  //console.log("pooja");
  //console.log(Object.keys(matchesWonPerYear).length);

   if(tea=="Sunrisers Hyderabad")
   {
     z++;
     //console.log(a[tea]);
    seriesData9.push(a[tea]);
   }
   
   }
   if(z==0)
   {
     seriesData9.push(0);
   }

}

for (let i in matchesWonPerYear) {
  var  a=matchesWonPerYear[i];
  var z=0;
  //console.log(a);
  for(let tea in a)
   {
  //console.log("pooja");
  //console.log(Object.keys(matchesWonPerYear).length);

   if(tea=="Rajasthan Royals")
   {
     z++;
     //console.log(a[tea]);
    seriesData16.push(a[tea]);
   }
   
   }
   if(z==0)
   {
     seriesData16.push(0);
   }

}
console.log(seriesData9);


for (let i in matchesWonPerYear) {
  var  a=matchesWonPerYear[i];
  var z=0;
  //console.log(a);
  for(let tea in a)
   {
  //console.log("pooja");
  //console.log(Object.keys(matchesWonPerYear).length);

   if(tea=="Royal Challengers Bangalore")
   {
     z++;
     //console.log(a[tea]);
    seriesData10.push(a[tea]);
   }
   
   }
   if(z==0)
   {
     seriesData10.push(0);
   }

}

for (let i in matchesWonPerYear) {
  var  a=matchesWonPerYear[i];
  var z=0;
  //console.log(a);
  for(let tea in a)
   {
  //console.log("pooja");
  //console.log(Object.keys(matchesWonPerYear).length);

   if(tea=="Gujarat Lions")
   {
     z++;
     //console.log(a[tea]);
    seriesData11.push(a[tea]);
   }
   
   }
   if(z==0)
   {
     seriesData11.push(0);
   }

}



for (let i in matchesWonPerYear) {
  var  a=matchesWonPerYear[i];
  var z=0;
  //console.log(a);
  for(let tea in a)
   {
  //console.log("pooja");
  //console.log(Object.keys(matchesWonPerYear).length);

   if(tea=="Rising Pune Supergiant")
   {
     z++;
     //console.log(a[tea]);
    seriesData12.push(a[tea]);
   }
   
   }
   if(z==0)
   {
     seriesData12.push(0);
   }

}

for (let i in matchesWonPerYear) {
  var  a=matchesWonPerYear[i];
  var z=0;
  //console.log(a);
  for(let tea in a)
   {
  //console.log("pooja");
  //console.log(Object.keys(matchesWonPerYear).length);

   if(tea=="Pune Warriors")
   {
     z++;
     //console.log(a[tea]);
    seriesData13.push(a[tea]);
   }
   
   }
   if(z==0)
   {
     seriesData13.push(0);
   }

}

for (let i in matchesWonPerYear) {
  var  a=matchesWonPerYear[i];
  var z=0;
  //console.log(a);
  for(let tea in a)
   {
  //console.log("pooja");
  //console.log(Object.keys(matchesWonPerYear).length);

   if(tea=="Deccan Chargers")
   {
     z++;
     //console.log(a[tea]);
    seriesData14.push(a[tea]);
   }
   
   }
   if(z==0)
   {
     seriesData14.push(0);
   }

}

for (let i in matchesWonPerYear) {
  var  a=matchesWonPerYear[i];
  var z=0;
  //console.log(a);
  for(let tea in a)
   {
  //console.log("pooja");
  //console.log(Object.keys(matchesWonPerYear).length);

   if(tea=="noResult")
   {
     z++;
     //console.log(a[tea]);
    seriesData15.push(a[tea]);
   }
   
   }
   if(z==0)
   {
     seriesData15.push(0);
   }

}
/*console.log(seriesData15.length);
console.log(seriesData4.length);
console.log(seriesData5.length);
console.log(seriesData6.length);
console.log(seriesData7.length);
console.log(seriesData8.length);
console.log(seriesData9.length);
console.log(seriesData10.length);
console.log(seriesData11.length);
console.log(seriesData12.length);
console.log(seriesData13.length);
console.log(seriesData14.length); */






Highcharts.chart('matches-played-per-year3', {
  chart: {
      type: 'column'
  },
  title: {
      text: 'matchesWonPerYear'
  },
  subtitle: {
      text: ""
  },
  xAxis: {
      categories: [
          '2008',
          '2009',
          '2010',
          '2011',
          '2012',
          '2013',
          '2014',
          '2015',
          '2016',
          '2017',
          '2018',
          '2019',
          
      ],
      crosshair: true
  },
  yAxis: {
      min: 0,
      title: {
          text: 'No of matches won per year'
      }
  },
  tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
  },
  plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0
      }
  },
  series: [{
      name: 'Chennai Super Kings',
      data: seriesData4,

  }, {
      name: 'Kolkata Knight Riders',
      data: seriesData5

  }, {
      name: 'Delhi Capitals',
      data: seriesData6

  }, {
      name: 'Mumbai Indians',
      data: seriesData8

  },
  {
    name: 'Kings XI Punjab',
    data: seriesData7

  },
  {
    name: 'Sunrisers Hyderabad',
    data: seriesData9

  },
  {
    name: 'Rajasthan Royals',
    data: seriesData16

  },
  {
    name: 'Royal Challengers Bangalore',
    data: seriesData10

  },
  {
    name: 'Gujarat Lions',
    data: seriesData11

  },
  {
    name: 'Rising Pune Supergiant',
    data: seriesData12

  },

  {
    name: 'Pune Warriors',
    data: seriesData13

  },
  {
    name: 'Deccan Chargers',
    data: seriesData14

  },
  {
    name: 'noResult',
    data: seriesData15

  }]

});
}







