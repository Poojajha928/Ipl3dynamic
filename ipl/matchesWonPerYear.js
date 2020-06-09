function matchesWonPerYear(matches) {

    var result={};
  
   for(var start=2008;start<=2019;start=start+1)
   {
    var ans={};
    for(var i=0;i<matches.length;i++)
    {
       if(matches[i].season==start)
       {
           if(matches[i].result!="no result")
           {
                 if(ans[matches[i].winner])
                {
                    ans[matches[i].winner]+=1;
                    result[start]=ans;

                 }
                 else{
                  ans[matches[i].winner]=1;
                  result[start]=ans;
                 }
           }
          else
          {
            if(ans["noResult"])
            {
                ans["noResult"]+=1;
                result[start]=ans;
            }
            else
            {
                ans["noResult"]=1;
                result[start]=ans;
            }
          } 
       }
    }
  }
    return result;
      
    }
    module.exports = matchesWonPerYear;