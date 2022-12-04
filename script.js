let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnReset = $('#btnReset')
let btnCleanup = $('#btnCleanup')
let btnSort = $('#btnSort')
let inpNewTask = $('#inpNewTask')

let curTasks=JSON.parse(localStorage.getItem("tasks"));

if(curTasks){
    
    for(let t of curTasks){
      if(t.done===true){
        let listItem=$('<li>',{
            'class':'list-group-item done',
            text:t.task
        })
           listItem.click(() => {
        listItem.toggleClass('done');
         updateLS();
    })
        ulTasks.append(listItem);
       }
        else if(t.done===false){
         let listItem=$('<li>',{
            'class':'list-group-item',
            text:t.task
        })
           listItem.click(() => {
        listItem.toggleClass('done');
         updateLS();
    })
        ulTasks.append(listItem);
       }
    }
    toggleInputButtons();
}
//ADD ITEM TO LIST
function addItem() {
    let listItem = $('<li>', {
        'class': 'list-group-item',
        text: inpNewTask.val()
    })

    ulTasks.append(listItem);
    listItem.click(() => {
        listItem.toggleClass('done');
         updateLS();
    })
    inpNewTask.val('');
    toggleInputButtons();
   updateLS();
}

function clearDone() {
    $('#ulTasks .done').remove();
    toggleInputButtons();
    updateLS();
}

function sortTasks() {
    $('#ulTasks .done').appendTo(ulTasks);

    updateLS();
}
//ADDING ITEM ON PRESSING ENTER KEY
inpNewTask.keypress((e) => {
    if (e.which == 13) addItem();
})

function toggleInputButtons() {
    btnReset.prop('disabled', inpNewTask.val() == '');
    btnAdd.prop('disabled', inpNewTask.val() == '');
    btnSort.prop('disabled', ulTasks.children().length < 1);
    btnCleanup.prop('disabled', ulTasks.children().length < 1);
}

inpNewTask.on('input', toggleInputButtons);
//ADDING ITEM ON CLICKING ADD BUTTON
btnAdd.click(addItem);

//CLEAR INPUT FIELD ON CLICKING CLEAR BUTTON
btnReset.click(() => {
    inpNewTask.val('');
    toggleInputButtons();
})

btnCleanup.click(clearDone);

btnSort.click(sortTasks);

function updateLS(){
    let taskContainer=[];
    let tasks=document.querySelectorAll('li');
    for(t of tasks){
        taskContainer.push({
            task:t.innerText,
            done:t.classList.contains('done')
        })
    }
   localStorage.setItem("tasks",JSON.stringify(taskContainer));
}

/*
$('<li>',{
        'class': 'list - group - item',
        text: inpNewTask.val();
    })

    This will create <li class="list - group - item">text</li> element.
    here text will be equal to inpNewTask.val()
*/