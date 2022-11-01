
// javascript
let buttonEl = document.getElementById("input-btn");
let clearEl = document.getElementById("clear-btn");
let deleteEl = document.getElementById("dlt-btn");
let ipel = document.getElementById("ip");
let list =  document.getElementById("ls"); 
let myleads = [];
let lead;


const leadsFromLocalStorage = JSON.parse( localStorage.getItem("lead") )
const tabBtn = document.getElementById("tab-btn")


//let tabs = [{url: "https://stackoverflow.com/questions/32126003/node-js-document-is-not-defined"}]





function render(variable){
  listitems = ""
  for (let i = 0; i < variable.length; i++) {
      listitems += `
          <li>
              <a target='_blank' href='${variable[i]}'>
                  ${variable[i]}
              </a>
          </li>
      `
  }
  list.innerHTML = listitems;
}


if (leadsFromLocalStorage) {
   myleads = leadsFromLocalStorage
   console.log(myleads)
    render(myleads);
}


if(buttonEl){
buttonEl.addEventListener("click", function() {
     lead = ipel.value;
     myleads.push(lead);
     localStorage.setItem("lead",JSON.stringify(myleads))
     render(myleads);
    
})
}


clearEl.addEventListener('click',function (){
  ipel.value = " ";
})

deleteEl.addEventListener('dblclick',function(){
    console.log("clicked")
   localStorage.clear();
    myleads = [];
   render(myleads);
}
)


tabBtn.addEventListener('click',function (){
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    console.log(tabs[0].url);
    myleads.push(tabs[0].url);
    localStorage.setItem("lead",JSON.stringify(myleads))
    render(myleads);
      });
})

