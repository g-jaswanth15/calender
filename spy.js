var d = new Date();
var month = d.getMonth()
var year = d.getFullYear()

document.getElementById('task-list').style.display = 'none'

document.getElementById('task-bar').style.display ='none'

document.querySelectorAll('.date').forEach(item =>{item.style.display = 'none'})

//document.getElementById('completed').style.display = "none";
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

    document.getElementById('31').style.display = 'none'
   
    var m = document.getElementById('month').value ;
    var y = document.getElementById('year').value ;
    var l =1
        switch(m){
            case "january":
                l = l+0;
                break;
            
            case "february":
                l = l+1;
                break;
            
            case "march": 
                l =l+2;
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
            
            case "september":
                l =l+8;
                break;
    
            case "october" :
                l= l+9;
                break;
    
            case "november" :
                l = l+10;
                break;
    
            case "december":
                l = l+11;
                break;
            default:
                alert('please enter the full name of the month');
                document.querySelectorAll('.date').forEach(item =>{item.style.display = 'none'})
                return false
        }
 
    console.log(l)
    document.getElementById('month2').innerText = l;
console.log(document.getElementById('month2').innerText)
    
    if(Boolean(m) ){
    if((l==1)||(l==3)||(l== 5)||(l== 7)||(l==8)||(l==10)||(l== 12)){
        document.getElementById('31').style.display = 'block'
        console.log('31')
    }
   else if((l== 2)||(l==4)||(l== 6)||(l== 9)||(l== 11) ){
        console.log('30')
        document.getElementById('31').style.display = 'none'
        if(l==2 && (y%4 ==0)){
            document.getElementById('29').style.display = 'block'
            document.getElementById('30').style.display = 'none'
            console.log('29')
        }
        else if(l==2 && (y%4 !=0)){
            document.getElementById('29').style.display = 'none'
            document.getElementById('30').style.display = 'none'
            console.log('28')
        }
    }
}
document.getElementById('year1').innerText = y;
document.getElementById('month1').innerText = m;

document.getElementById('month2').style.display = 'none'
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
    var n = document.getElementById('month2').innerText;
    console.log(n);
    
    var date = i + "/" + n +"/" + y;
    
    var tasks = localStorage.getItem(date)?JSON.parse(localStorage.getItem(date)):[];

    document.getElementById('task').addEventListener('click',addtask)

    // var storedtasks =JSON.parse(localStorage.getItem(date))
    // for(i=0;i<storedtasks.length;i++){
    // var li =document.createElement('li')
    //    li.appendChild(document.createTextNode(storedtasks[i]))
    //    document.getElementById('exsistingtasks').appendChild(li)
    //  }
    function addtask(event){
        
        document.getElementById('task-list').style.display = 'block'
        
        var text = document.getElementById('task-text').value;
        console.log(text)

        var taskelement =document.createElement('li');
        taskelement.className = 'matter'
        var taskelementtext = document.createTextNode(text);
        taskelement.appendChild(taskelementtext);
        document.getElementById('exsistingtasks').appendChild(taskelement);

    
        var deletetask =document.createElement('button')
        deletetask.className = 'delete'
        deletetask.appendChild(document.createTextNode('delete'));
        taskelement.appendChild(deletetask)

        // localStorage.setItem(date,JSON.stringify(tasks)); 
        tasks.push(text);
      
        localStorage.setItem(date,JSON.stringify(tasks)); 
        
        console.log(tasks)
        deletetask.addEventListener('click',function(event){
            var li = event.target.parentElement
            document.getElementById('exsistingtasks').removeChild(li);
            tasks.pop(text) 
            console.log(tasks)
            localStorage.setItem(date,JSON.stringify(tasks)); 
        })
     
        // document.getElementById('completed').style.display = "block";
        // document.getElementById('completed').addEventListener('click',()=>{
        //     window.location.reload(true);
        //     console.log('hello')
        //     alert('sucessfully saved')
        // })
    }
    var storedtasks =JSON.parse(localStorage.getItem(date))
    for(i=0;i<storedtasks.length;i++){
    var li =document.createElement('li')
       li.appendChild(document.createTextNode(storedtasks[i]))
       document.getElementById('exsistingtasks').appendChild(li)
    }
    //document.querySelector('.completed').styel.display = "block";
    
    
})})



