var btn = document.getElementById('addBtn');
btn.addEventListener('click', function () {
    var item = document.getElementById('inputText').value;
    (item && item !== '') ? addItems(item) : alert('Please Enter Value');
});

function addItems(item) {
    var text = document.createTextNode(item);
    var addList = document.createElement('li');
    addList.appendChild(text);

    var crossSpan = document.createElement('span');
    crossSpan.style.color = "red";

    var cross = document.createTextNode("X");
    crossSpan.appendChild(cross);

    addList.appendChild(crossSpan);


    document.getElementById("toDoList").appendChild(addList);
    document.getElementById('inputText').value = '';
    cross.onclick = removeItem;
    crossSpan.addEventListener('click', (removeItem));
}
function removeItem(e) {
    e.target.parentElement.remove(e.target);
}