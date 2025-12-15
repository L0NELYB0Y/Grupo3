
if (targetEl.classiclist.contains("remove-todo")){
    parentEl.remove()
}   

if (targetE.classiclist.contains("edit-todo")){
    toggleforms();
    editInput.value=todoTitle
    oldinputvalue=todoTitle
});

canceleditbtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleforms();
});

editform.addEventListener("submit", (e) => {
    e.preventDefault();
    const editinputvalue = editInput.value; 

    if(editinputvalue){
       update(editinputvalue);

    }

    toggleforms();
});
