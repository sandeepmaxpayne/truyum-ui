
function validation(){
    var name = document.getElementById('item-name').value;
    var price = document.getElementById('rs').value;
    if(name === ""){
        document.getElementById('name-error').innerHTML = "Title is required";
    }else if(!(name.length > 1 && name.length <= 65)){
      //  document.getElementById('name-error').innerHTML = "Title should have 2 to 65 characters!";
      alert("Title should have 2 to 65 characters!");
    }else if(!price.match(/^\d+$/)){
      alert("Price has to be a number");
    }

    return false;
}