const Addnte = document.getElementById ('Addnte')
const notes = JSON.parse(localStorage.getItem("notes"))
    if(notes){
        notes.forEach((note)=>{
            addNewNote(note);
        })
    }
    function addNewNote(text = ""){
        
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `
        <div class="notes" id="notes">
            <div class="tools">
            <button class="edit">Add text</button>
            <button class="delete">Delete Text</button>
            </div>
            <div class="main ${text ? "" : "hidden"}" id="main"></div>
            <textarea name="notes" cols="30" rows="10" class="TextArea ${text ? "hidden" : ""}"></textarea>
    
         </div>
    `;
    
    
    // const notesEle = note.querySelector(".notes")
    const editBtn = note.querySelector(".edit")
    const dltBtn = note.querySelector(".delete")
    const textArea = note.querySelector(".TextArea")
    const main = note.querySelector(".main")
    // const notes = document.querySelector(".notes")
    textArea.value = text;
    main.innerHTML = marked(text);
    editBtn.addEventListener('click',()=>{
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
        
    })
    dltBtn.addEventListener('click',()=>{
        note.remove();
        updateLS()
    })
    textArea.addEventListener('input',(e)=>{
        const {value} = e.target
        main.innerHTML = marked(value);
        
        updateLS()
    })
    
    document.body.appendChild(note);
    }


Addnte.addEventListener('click',()=>{
        addNewNote();
})
function updateLS(){
    const notesText = document.querySelectorAll("textarea")
    const notes = []
    notesText.forEach((note)=>{
        notes.push(note.value);
    })
    localStorage.setItem("notes",JSON.stringify(notes));

}
