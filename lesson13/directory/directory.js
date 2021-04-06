const directs = "https://raw.githubusercontent.com/Shion034/Shion034.github.io/master/lesson13/json/directors.json";

fetch(directs)
.then(function (response) {
    return response.json();
  })
.then(function(arRay){
    const directers = arRay['directers'];
    console.log(directers);

    let length=directers.length;
    console.log(length);

for(let i=0;i<=length;i++){

    let logo=directers[i].logo;
    console.log(logo);
    document.getElementById(`logo${i+1}`).setAttribute('src', logo); 

    let comName=directers[i].comnyname;
    console.log(comName);
    document.getElementById(`name${i+1}`).textContent = comName;

    let site=directers[i].site;
    console.log(site);
    document.getElementById(`site${i+1}`).textContent = site;

    let conInfo=directers[i].contact;
    console.log(conInfo);
    document.getElementById(`con${i+1}`).textContent = conInfo;

}
});
