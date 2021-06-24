
function update(){

    var date = new Date()
    var day = date.getDay()
    var mon = date.getMonth()
    var year = date.getFullYear()
    var dayn = date.getDate()
    var hrs = date.getHours()
    var min = date.getMinutes()
    var sec = date.getSeconds()
    var pe = "AM"
    
    if(hrs >12){
        pe = "PM";
    }
    
    var months = ["January","Febuary","Macrh","April","May","June","July","August","September","October","November","December"];
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var ids = ["dayname","month","date","year","hours","min","sec","period"];
    var values = [days[day],months[mon],dayn,year,hrs, min,sec,pe];
    

    for(let i=0;i<ids.length;i++){
        document.getElementById(ids[i]).innerText = values[i]
    }
    
 }
function clock(){
    setInterval("update()",1000)
}
clock()

var date = new Date()
var mon = date.getMonth()
var year = date.getFullYear()

var months = ["January","Febuary","Macrh","April","May","June","July","August","September","October","November","December"];

function calender(){
document.querySelector('.date h2').innerHTML = months[date.getMonth()]
document.querySelector('.date p').innerHTML = new Date().toDateString()


const lastday = new Date(year,date.getMonth()+1,0).getDate()


console.log(lastday)



date.setDate(1)
const firstdayvalue = date.getDay()

console.log(firstdayvalue)
let dayss = ""

for(let j=0;j<firstdayvalue;j++){
    dayss += `<div>${""}</div>`
    document.querySelector('.days').innerHTML=dayss
}

for(let i=1;i<=lastday;i++){
    dayss += `<div class = "daynm" id = "${i}" >${i}</div>`
    document.querySelector('.days').innerHTML=dayss
}
}

document.querySelector('.arrow1').addEventListener('click',(event)=>{
    date.setMonth(date.getMonth()-1);
    calender()
    document.querySelectorAll('.daynm').forEach(item => {item.addEventListener("click",addingTasks)})
})

document.querySelector('.arrow2').addEventListener('click',(event)=>{
    date.setMonth(date.getMonth()+1);
    calender()
    document.querySelectorAll('.daynm').forEach(item => {item.addEventListener("click",addingTasks)})
})

calender()
document.querySelectorAll('.daynm').forEach(item => {item.addEventListener("click",addingTasks)})

function addingTasks(event){
    var ml = event.target.id
    date.setDate(ml)
    var datestr = document.querySelector('.date p').innerHTML = date.toDateString()
    console.log(datestr)

    var tasks = localStorage.getItem(datestr)?JSON.parse(localStorage.getItem(datestr)):[];
    
    let tsks = ""
    let del = ""
    document.getElementById('click').addEventListener('click',something)
    
    function something(){
        var text = document.querySelector('#type').value;
        
        tasks.push(text);
        
        // tsks += `<li class="text">${text+`<button class="delete">${"X"}</button>`}</li>`
        // document.getElementById('addtask').innerHTML = tsks;

        var taskelement =document.createElement('li');
        taskelement.className = 'matter'
        var taskelementtext = document.createTextNode(text);
        taskelement.appendChild(taskelementtext);
        document.getElementById('addtask').appendChild(taskelement);

    
        var deletetask =document.createElement('button')
        deletetask.className = 'delete'
        deletetask.appendChild(document.createTextNode('X'));
        taskelement.appendChild(deletetask)

        deletetask.addEventListener('click',(event)=>{
            var li = event.target.parentElement
            document.getElementById('addtask').removeChild(li)
            tasks.pop(text);
            localStorage.setItem(datestr,JSON.stringify(tasks))
        })
        localStorage.setItem(datestr,JSON.stringify(tasks))
    }
    
        var stored = JSON.parse(localStorage.getItem(datestr))
        for(i=0;i<stored.length;i++){
            var li =document.createElement('li')
               li.appendChild(document.createTextNode(stored[i]))
               document.getElementById('oldtask').appendChild(li)

                var deletetask =document.createElement('button')
                deletetask.className = 'delete'
                deletetask.appendChild(document.createTextNode('X'));
                li.appendChild(deletetask)

                deletetask.addEventListener('click',(event)=>{
                var li = event.target.parentElement
                document.getElementById('oldtask').removeChild(li)
                stored.pop(stored[i]);
                localStorage.setItem(datestr,JSON.stringify(stored))
                console.log(stored)
        })
        localStorage.setItem(datestr,JSON.stringify(stored))
            }
}