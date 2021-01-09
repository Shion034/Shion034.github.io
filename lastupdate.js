let newdate=new Date();

   let year = lastup.getFullYear();
   document.getElementById("year").textContent=year;

   let lastupdate=document.lastModified;
   document.getElementById("date").textContent=+"Last update:"+lastupdate;

//document.write("Last update：" + document.lastModified);