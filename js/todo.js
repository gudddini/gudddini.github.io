
var isWindowCreate = document.getElementsByClassName("create");

var EditNote = false; 

function isCreate(p=false) {

EditNote =p;
    isWindowCreate[0].style.display = "block";
    
}

function isButtonCancel() {
  EditNote = false;
    isWindowCreate[0].style.display = "none";
}

 
function isNotePoste (isTitle, isDescription, isPriority, isNoteCreate) {
    
isNoteCreate.getElementsByClassName('note-name')[0].innerHTML = isTitle;
isNoteCreate.getElementsByClassName('note-description')[0].innerHTML = isDescription;
isNoteCreate.getElementsByClassName('note-priority')[0].innerHTML = isPriority;

}


var NoteDB = [];
      function isButtonSave() {
      let isTitle = document.getElementById('Title').value;
      let isDescription = document.getElementById('Description').value;
      let isPriority = document.getElementById('Priority').value;

      let isNote = {'Title':isTitle, 'Description':isDescription, 'Priority':isPriority, 'State':'open'};

        if (isTitle==''){
            alert( 'Inset title, please!' );
        }     
        else if (isDescription==''){
            alert( 'Inset description, please!' );
        }
          else {

                if (EditNote!=false){
                   for (var i = 0; i < NoteDB.length; i++) {
                    if (NoteDB[i]['Element']==EditNote ){
                    NoteDB[i]['Title']=isTitle;
                    NoteDB[i]['Description']=isDescription;
                    NoteDB[i]['Priority']=isPriority;
                  }
                }
                isNotePoste(isTitle, isDescription, isPriority,EditNote);
                EditNote = false;
                }

                else if (NoteDB.length == 0) {
                   var isNoteCreate = document.getElementsByClassName("note"); 
                   isNotePoste(isTitle, isDescription, isPriority,isNoteCreate[0]);
                   isNoteCreate[0].style.display = "block";
                   isNote['Element'] = isNoteCreate[0];
                    NoteDB.push(isNote);

                }

                else {
                  let CloneElement = NoteDB[0]['Element'].cloneNode(true);
                  isNote['Element'] = CloneElement;
                  document.getElementsByClassName("NoteList")[0].appendChild(CloneElement);
                  isNotePoste(isTitle, isDescription, isPriority,CloneElement);
                   NoteDB.push(isNote);
                  
                }

                  isWindowCreate[0].style.display = "none";
          }
}


function isSearchFunc() {
   var valueSearch = document.getElementById('valueSearch').value;
   var valueSelectState = document.getElementById('searchSelectState').value;
   var valueSelectPriority = document.getElementById('searchSelectPriority').value;

  for (var i = 0; i < NoteDB.length; i++) {
        if  ((valueSearch=="" || NoteDB[i]['Title'].indexOf(valueSearch)>=0)&&
            (valueSelectState =='all'|| NoteDB[i]['State']==valueSelectState )&&
            (valueSelectPriority=='all'  || NoteDB[i]['Priority']==valueSelectPriority)) {   

       NoteDB[i]['Element'].style.display = "block";
     }
    else {
    NoteDB[i]['Element'].style.display = "none";
    }
  }
}


function ChangeState(t) {
   let p = t.parentNode.parentNode.parentNode;
   let isState = p.getElementsByClassName('NoteStateSelect')[0].value;

  for (var i = 0; i < NoteDB.length; i++) {
    if (NoteDB[i]['Element']==p ){
      if (isState=='edit') {
        isCreate(p);
      }
      else {
            NoteDB[i]['State'] = isState;
            if (isState=='done') {
              NoteDB[i]['Element'].getElementsByClassName('NoteCheck')[0].checked="checked";
            }
      }
    }
    

  }
}










