let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnReset = $('#btnReset')
let btnCleanup = $('#btnCleanup')
let btnSort = $('#btnSort')
let inpNewTask = $('#inpNewTask')

//ADD ITEM TO LIST
function addItem() {
    let listItem = $('<li>', {
        'class': 'list-group-item',
        text: inpNewTask.val()
    })
    ulTasks.append(listItem);
    listItem.click(() => {
        listItem.toggleClass('done');
    })
    inpNewTask.val('');
    toggleInputButtons();
}

function clearDone() {
    $('#ulTasks .done').remove();
    toggleInputButtons();
}

function sortTasks() {
    $('#ulTasks .done').appendTo(ulTasks);
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


/*
$('<li>',{
        'class': 'list - group - item',
        text: inpNewTask.val();
    })

    This will create <li class="list - group - item">text</li> element.
    here text will be equal to inpNewTask.val()
*/