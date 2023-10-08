var input = document.getElementById("inp");
var li = document.getElementById('listtodo')
var todo = document.getElementById("edit");
var toDoData = [];

console.log(toDoData);

function todoadd(){
    toDoData.push(input.value);
    input.value="";
    back();

}

function back(delt){
    li.innerHTML ="";
    if(delt)
    return;
for(i=0 ; i < toDoData.length ;i++){
   li.innerHTML += `<li>${toDoData[i]}<button class="edit" onclick=todoadd(${i})">eidt </button> <button class="edit" onclick=back(${i})">dlt</button> </li>`;
}
console.log(toDoData);
}
function todo(e){
    toDoData[e] =prompt("")
    console.log(toDoData [e])
eidt.className=("editing");
back(); 
}

function dlt(e){
    toDoData.splice(e,1);
    back();
}


function todo(){
    var database = firebase.database().ref('todos')
    var key = database.push().key;
}
console.log(todo)



