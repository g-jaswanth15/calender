var d = new Date();
var month = d.getMonth()
var year = d.getFullYear()

document.getElementById('task-list').style.display = 'none'

document.getElementById('task-bar').style.display ='none'

document.querySelectorAll('.date').forEach(item =>{item.style.display = 'none'})

function time(){
    var d = new Date();
    var t = d.toLocaleTimeString();
    var date = d.toLocaleDateString();
    document.getElementById('date1').innerText = date;
    document.getElementById('time').innerText = t;
}
setInterval(time,1000);



document.getElementById('click').addEventListener('click',function(){

   
   document.querySelectorAll('.date').forEach(item =>{item.style.display = 'block'})
    var m = document.getElementById('month').value ;

   
   document.getElementById('month1').innerText = m;

   var y = document.getElementById('year').value ;
   
   document.getElementById('year1').innerText = y;
})

document.querySelectorAll('.date').forEach(item =>{item.addEventListener('click',function(event){

    id = event.target.id;

    var i = parseInt(id);
    
    
    document.querySelectorAll('.date').forEach(item =>{item.style.display = 'none'})

    document.getElementById(i).style.display = 'block'
    document.getElementById('task-bar').style.display ='block'
     var m = document.getElementById('month').value;
    console.log( typeof(m) );
    var y = document.getElementById('year').value ;
    
    var l =1
    switch(m){
        case "january" :
            l = l+0;
            break;
        
        case "february" :
            l = l+1;
            break;
        
        case "march": 
            l =l+2;
            console.log('hi');
            break;

        case "april":
            l =l+3;
            break;

        case "may":
            l =l+4;
            break;

        case "june":
            l =l+5;
            break;
            
        case "july":
            l=l+6;
            break;

        case "august":
            l =l+7;
            break;

        case "october" :
            l= l+8;
            break;

        case "november" :
            l = l+9;
            break;

        case "december":
            l = l+10;
            break;
    }
         console.log(m);
         console.log(l);
    // var num;
    // var length;
    var date = i + "/" + l +"/" + y;
    // var storedtasks;
    // var value
    var tasks = []
    document.getElementById('task').addEventListener('click',addtask)
    
    var storedtasks =localStorage.getItem(date)
    document.getElementById('exsistingtasks').innerText = storedtasks;

    function addtask(event){
        
        document.getElementById('task-list').style.display = 'block'
        
        var text = document.getElementById('task-text').value;
        console.log(text)
        
        var taskelement =document.createElement('li');
        taskelement.className = 'matter'
        var taskelementtext = document.createTextNode(text);
        taskelement.appendChild(taskelementtext);
        document.getElementById('task-list').appendChild(taskelement);
    
        var deletetask =document.createElement('button')
        deletetask.className = 'delete'
        deletetask.appendChild(document.createTextNode('delete'));
        taskelement.appendChild(deletetask)

        deletetask.addEventListener('click',function(event){
            var li = event.target.parentElement
            document.getElementById('task-list').removeChild(li); 
        })
       
        
        localStorage.setItem(date,JSON.stringify(tasks)); 
        tasks.push(text);
      
        localStorage.setItem(date,JSON.stringify(tasks)); 
        
        
        console.log('hello')
       
        
        console.log(tasks)
        
        
        
    }
    
    // if(localStorage.getItem(date) != null){
    //     storedtasks = JSON.parse(localStorage.getItem(date))
    //      value = storedtasks.length
    //     console.log(value)
    //     localStorage.setItem(num,value)
    //     length = localStorage.getItem(num)
    //     }

    
})})