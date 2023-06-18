var itemList = document.getElementById('list');

var form = document.getElementById('form');

form.addEventListener('submit',action);

function action(e){

    e.preventDefault();

    let myData = {

         Number : document.getElementById('number').value, 

         Description : document.getElementById('description').value,

         Item   : document.getElementById('items').value,
    }



    let myObj_value = `${myData.Number} ${myData.Description} ${myData.Item} `;

   
    
    localStorage.setItem(myData.Number,myObj_value);  




    
    
    var ui = localStorage.getItem(myData.Number);
    
    console.log(ui);

    var deleteBtn = document.createElement('button');

    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    deleteBtn.appendChild(document.createTextNode('X'));


    var editBtn = document.createElement('button');

    editBtn.className = 'btn btn-danger btn-sm float-right delete';

    editBtn.appendChild(document.createTextNode('Edit'));




    // Creation of list item and adding to the list

    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(myObj_value));
    

    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    itemList.appendChild(li);



    



    deleteBtn.onclick = () => {

        localStorage.removeItem(myData.Number);
        itemList.removeChild(li);
    }

    editBtn.onclick = () => {
        localStorage.removeItem(myData.Number);
        itemList.removeChild(li);
        document.getElementById('number').value = myData.Number;
        document.getElementById('description').value = myData.Description;
        document.getElementById('items').value = myData.Item;
    }


    


}


    
