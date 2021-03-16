var list = []
var string = ""
var initial = ''
var i=0
function add(){
    if(document.getElementById('input').value!=""){
        list.push(document.getElementById('input').value)
        string="<div class = 'card'>"+list[i]+"<button onclick='remove("+i+")'>delete</button></div>";
        document.getElementById('cards').innerHTML = document.getElementById('cards').innerHTML+(string)
        i = i+1
    }
}
function remove(n){
    document.getElementById('cards').innerHTML = initial
    console.log(list.length)
    list.splice(n,1) 
    console.log(list.length)
    for (i=0; i < list.length; i++){
        console.log(list)
        string="<div class = 'card'>"+list[i]+"<button onclick='remove("+i+")'>delete</button></div>";
        document.getElementById('cards').innerHTML = document.getElementById('cards').innerHTML+(string)
    }
}