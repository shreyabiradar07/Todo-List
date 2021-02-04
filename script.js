let ulTasks = $("#ulTasks");
let btnAdd = $("#btnAdd");
let btnCleaup = $("#btnCleanup");
let inpNewtask = $("#inpNewTask");
let btnReset = $("#btnReset");
let btnSort = $("#btnSort")

function addItem(){
   let listItem = $("<li>", {
     'class': "list-group-item",
     text: inpNewtask.val(),
   });
   listItem.click(() => {
     listItem.toggleClass("done");
   });
   ulTasks.append(listItem);
   inpNewtask.val("");
}
function clearDone()
{
  $('#ulTasks .done').remove()
  toggleInputButtons()
}

function sortTasks(){
  $('#ulTasks .done').appendTo(ulTasks)
}
function toggleInputButtons(){
  $(btnReset).prop('disabled',inpNewtask.val()=='')
  $(btnAdd).prop("disabled", inpNewtask.val() == "")
  $(btnSort).prop("disabled", ulTasks.children().length <1)
  $(btnCleanup).prop("disabled", ulTasks.children().length < 1)
}

inpNewtask.keypress((e)=>{
     if(e.which==13) addItem()
})
inpNewtask.on('input',toggleInputButtons)

btnAdd.click(addItem)

btnReset.click(() => {
  inpNewtask.val('')
  toggleInputButtons()
})
btnCleaup.click(clearDone)
btnSort.click(sortTasks)
