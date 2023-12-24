// if user adds notes
shownotes();

let addbtn = document.getElementById('addbtn');
let clrbtn = document.getElementById('clrbtn');

addbtn.addEventListener('click', function (e) {
    let adddtxt = document.getElementById('addtext')
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes)
    }

    notesobj.push(addtxt.value)
    localStorage.setItem('notes', JSON.stringify(notesobj));
    addtxt.value = "";
    shownotes();
})

clrbtn.addEventListener('click', function (e){
    let adddtxt = document.getElementById('addtext');
    addtxt.value = "";
})

function shownotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes)
    }

    let html = "";

    notesobj.forEach(function (element, index) {
        html += `
<div class=" notecard card my-2 mx-2" style="width: 18rem;">

<div class="card-body">
    <h5 class="card-title">Note ${index+1}</h5>
    <p class="card-text">  ${element}</p>
    <button id="${index} " class="btn btn-primary" onclick="deletenotes(this.id)">Delete</button>
</div>
</div>`;
})

    let noteselem = document.getElementById('notes');
    if (notesobj.length != 0) {
        noteselem.innerHTML = html;
    }
    else{
        noteselem.innerHTML= `<h6> Nothing to show please Add notes </h6>`;
    }
}

// deleting
function deletenotes(index){

    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes)
    }

notesobj.splice(index,1);
localStorage.setItem('notes', JSON.stringify(notesobj));
shownotes();
}
let search=document.getElementById('searchtext');

search.addEventListener("input",function(){
    let inputval=search.value;

    console.log(inputval);
let notecards= document.getElementsByClassName('notecard');

Array.from(notecards).forEach(function(element){
    let cardtxt= element.getElementsByTagName('p')[0].innerText;
    if(cardtxt.includes(inputval)){
        element.style.display="block";
    }
    else{
        element.style.display="none";
    }
})
})