function Ques5(matches)
  {
    result={};
    for(var i=0;i<matches.length;i++)
    {
      if(matches[i].venue=="Rajiv Gandhi International Stadium, Uppal" && matches[i].season=="2008")
      {
        if(result[matches[i].team1])
        {
          result[matches[i].team1]+=1;
          if(result[matches[i].team2])
          {
            result[matches[i].team2]+=1;
          }
          else
          {
            result[matches[i].team2]=1;
          }
        }
        else
        {
          result[matches[i].team1]=1;
        }
        
      }
    
    } 
    return result;
  }
  module.exports =Ques5;