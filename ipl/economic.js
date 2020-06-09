function economic(matches,deliveries)
{
  const result={};
  const count={};
  const flag={};
  const over ={};
  for(var j=0;j<matches.length;j++)
  {
      if(matches[j].season=="2015")
      {
        var id=matches[j].id;
      for(var i=0;i<deliveries.length;i++)
        {
          var id2=deliveries[i].match_id;
          if(id2==id)
          {
          if(result[deliveries[i].bowler] && count[deliveries[i].bowler])
          {
            var k=parseInt(deliveries[i].total_runs);
            var m=parseInt(deliveries[i].extra_runs);
            result[deliveries[i].bowler] +=k; 
                 if(m==0)
                 {      
                  count[deliveries[i].bowler]+=1;
                 }
          }
          
          
          else
          {
            var k=parseInt(deliveries[i].total_runs);
            var m=parseInt(deliveries[i].extra_runs);
            result[deliveries[i].bowler]= k;

            if(count[deliveries[i].bowler])
            {
              if(m==0)
              {
              count[deliveries[i].bowler] +=1;
              }
            }
          else
          {
            
            if(m==0)
            {
            count[deliveries[i].bowler] =1;
            }
          }
        }
      }
  }
}
}



var arr1={}
var a=0;
for(var i in result)
{
a=result[i] * 6 /count[i];
a=a.toFixed(2)
arr1[i]=a;



}
var sortable=[];
for(let i in arr1)
{

sortable.push(arr1[i]);
}
sortable.sort(function(a,b)
{
return a-b;
});
var arr2={};
var k=0;
var i=0;
for(k=0;k<10;k++)
{
for(var i in arr1)
{

if(sortable[k]==arr1[i])
{
  arr2[i]=parseFloat(arr1[i]);
  
}
}
} 
  
return arr2;
}
module.exports = economic;