var container=document.createElement("div");
container.setAttribute("class","container");
var row=document.createElement("div");

row.classList.add("row","m-3");
container.append(row);
var res=fetch("https://restcountries.com/v2/all")
res.then((data)=>data.json()).then((value)=>foo(value));






function foo(value,value1){
    for(var i=0;i<value.length;i++){
        row.innerHTML+=`
        <div class="col-md-4">
        <div class="card border-light mb-3" style="max-width: 18rem; text-align:center; background-color:#F8F9FA">
        <div class="card-header" style="background-color:">"${value[i].name}"</div>
        <img src="${value[i].flag}" class="card-img-top" style="padding:10px"><br>
       
        <p>capital:"${value[i].capital}"</p>
        <p>region:"${value[i].region}"</p>
        <p>country code:"${value[i].cioc}"</p>
        <button type="button" class="btn btn-primary" style="margin:20px">click for weather</button>
        
       
    </div>
</div>
      `;
      document.body.append(container);
    }
}
