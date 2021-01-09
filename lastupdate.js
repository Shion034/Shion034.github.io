let newdate=new Date();

   let year = lastup.getFullYear();
   document.getElementById("year").textContent=year;

   let lastupdate=document.lastModified;
   document.getElementById("date").textContent=lastupdate;

//document.write("Last update：" + document.lastModified);