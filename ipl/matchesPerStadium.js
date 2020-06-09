function matchesPerStadium(matches,deliveries)
 {
   const ans={};
     const flag={};
     for(var i=0;i<matches.length;i++)
     {
       flag[matches[i].venue]=0;
     }


     for(var j=0;j<matches.length;j++)
     {
        const result={}
         var a=matches[j].venue;
      for(var i=0;i<matches.length;i++)
      {
         var  a1=matches[i].venue;
         if(a1==a && flag[a]==0)
          { 
              if(result[matches[i].winner])
                {
                  result[matches[i].winner]+=1;
                  ans[a]=result;

                }
              else
                {
              result[matches[i].winner] = 1;
              ans[a]=result;
               }
          
              }
            
      }
        //flag[a]=1;
        //ans[a]=result;
        flag[a]=1;
  }

  

  return ans;
 }
 
module.exports = matchesPerStadium;