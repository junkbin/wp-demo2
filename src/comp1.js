import * as $ from 'jquery';

function addNewBlock1() {
    console.log("Add New Block", document);

    let parent = document.querySelector(".container-fluid");
    let ref = parent.children[0];
    let newChild = ref.cloneNode(true);

    parent.appendChild(newChild);
}


function addNewBlockUsingJQuery1() {
    
    $("#ref").clone().removeAttr("id").appendTo($("#parent"));
    $("#parent").append($("#ref").clone().removeAttr("id"));
}

export {addNewBlock, addNewBlockUsingJQuery}