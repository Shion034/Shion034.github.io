let newdate=new Date();

   let year = lastup.getFullYear();
   document.getElementById("year").innerHTML=year;
   
   let lastupdate=document.lastModified;
   document.getElementById("date").innerHTML=+"Last update:"+lastupdate;

