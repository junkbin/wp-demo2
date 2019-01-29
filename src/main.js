
function addNewBlock() {
    console.log("Add New Block", document);

    let parent = document.querySelector(".container-fluid");
    let ref = parent.children[0];
    let newChild = ref.cloneNode(true);

    parent.appendChild(newChild);
}

export {addNewBlock}