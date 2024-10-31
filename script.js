let notes = [
    "Ranger ma chambre",
    "Faire la vaisselle",
    "Aller à la salle de sport"
]

function displayNotes(array) {
    const infoList = document.getElementById('infoList');
    infoList.innerHTML = '';

    array.forEach(note => {
    const noteDiv = document.createElement('div');
    noteDiv.className = 'note';
    noteDiv.textContent = note;

    infoList.appendChild(noteDiv);
    });
}

displayNotes(notes);
