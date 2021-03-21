var list=[]
var i=0
var initial = ""
function add(){
    if(document.getElementById('input').value!=""){
        list.push(document.getElementById('input').value)
        document.getElementById('input').value = ""
        i = list.length-1
        console.log(list)
        string="<div class = 'card'>"+list[i]+"<button onclick='remove("+i+")'>delete</button></div>";
        document.getElementById('cards').innerHTML = document.getElementById('cards').innerHTML+(string)
    }
    localStorage.list= list
}
function remove(n){
    document.getElementById('cards').innerHTML = initial
    console.log(list.length)
    list.splice(n,1)
    localStorage.setItem('list',list) 
    for (i=0; i < list.length; i++){
        console.log(list)
        string="<div class = 'card'>"+list[i]+"<button onclick='remove("+i+")'>delete</button></div>";
        document.getElementById('cards').innerHTML = document.getElementById('cards').innerHTML+(string)
    }
    localStorage.list= list
}
function getData(){
    console.log(list)
    if(localStorage.list){
        console.log(localStorage.list.length)
        list = localStorage.list.split(",")
        for (i=0; i < list.length; i++){
            console.log(list)
            string="<div class = 'card'>"+list[i]+"<button onclick='remove("+i+")'>delete</button></div>";
            document.getElementById('cards').innerHTML = document.getElementById('cards').innerHTML+(string)
        }
    }
    else{
        localStorage.list= []
        list = []
    }
}
window.addEventListener("keydown", (a)=>{
  if (a.key=="Enter") {
    if(document.getElementById('input').value!=""){
        list.push(document.getElementById('input').value)
        document.getElementById('input').value = ""
        i = list.length-1
        console.log(list)
        string="<div class = 'card'>"+list[i]+"<button onclick='remove("+i+")'>delete</button></div>";
        document.getElementById('cards').innerHTML = document.getElementById('cards').innerHTML+(string)
    }
    localStorage.list= list    
  }  
})