function task(testo, data) {
    this.testo = testo;
    this.data = data;
}
let tasks = [];
let ul = document.getElementById('lista');

/* ------------------------------ AGGIUNTA TASK ----------------------------- */

document.querySelector('#add').addEventListener('click', () => {
    let inputTxt = document.querySelector('#item').value;
    let inputDate = document.querySelector('#date').value;
    if (inputTxt != "") {
        let toDo = new task(inputTxt, inputDate);
        tasks.push(toDo);
        let li = document.createElement('li');
        li.className = 'animate__animated animate__fadeInDown';
        ul.appendChild(li);
        li.innerHTML = '<div class = "checkWrapper"><input type="checkbox" title="Done!" class="check" onclick="onCheck()"></div><div class="testo-data"><div class="testo">' + toDo.testo + '</div><div class="data">' +
            toDo.data + '</div></div><div class="pulsantiEditDel"><button class="edit" title="Edit task"><i class="fa-solid fa-pen-nib"></i></button><button class="delete" title="Delete task"><i class="fa-solid fa-xmark"></i></button></div>';
        document.querySelector('#item').value = "";
        document.querySelector('#date').value = "";
    }
});

/* ----------------------------- TASK COMPLETATA ---------------------------- */

function onCheck() {
    let allInputs = document.querySelectorAll('.check');
    let countCheckedElements = 0;
    for (const item of allInputs) {
        let edit = item.parentElement.parentElement.querySelector('.edit');
        let del = item.parentElement.parentElement.querySelector('.delete');
        if (item.checked === true) {
            item.parentElement.parentElement.querySelector('.testo-data').classList.add('checked');
            edit.style.pointerEvents = 'none';
            edit.style.opacity = '0.5';
            del.style.pointerEvents = 'none';
            del.style.opacity = '0.5';
            document.querySelector('.del-checkWrapper').style.display = 'flex';
            countCheckedElements++;
        } else {
            item.parentElement.parentElement.querySelector('.testo-data').classList.remove('checked');
            edit.style.pointerEvents = 'all';
            edit.style.opacity = '1';
            del.style.pointerEvents = 'all';
            del.style.opacity = '1';
        }
    }
    if (countCheckedElements == 0) {
        document.querySelector('.del-checkWrapper').style.display = 'none';
    }
}

/* --------------------------- ELIMINA TUTTE TASK --------------------------- */

document.querySelector('.delete-checked').addEventListener('click', () => {
    let allInputs = document.querySelectorAll('.check');
    for (const item of allInputs) {
        if (item.checked === true) {
            item.parentElement.parentElement.classList.replace('animate__fadeInDown', 'animate__fadeOutUp');
            setTimeout(() => {
                item.parentElement.parentElement.remove();
            }, 500);
            document.querySelector('.del-checkWrapper').style.display = 'none';
        }
    }
});

/* ------------------------------ ELIMINA/MODIFICA SINGOLA TASK ------------------------------ */

ul.addEventListener('click', (e) => {
    let parenteButton = e.target.parentElement.parentElement;
    let parentI = e.target.parentElement.parentElement.parentElement;
    /* ---------------------------------- EDITA --------------------------------- */
    if (e.target.className === 'edit') {
        let txt = parenteButton.querySelector('.testo').textContent;
        let date = parenteButton.querySelector('.data').textContent;
        document.querySelector('#item').value = txt;
        document.querySelector('#date').value = date;
        parenteButton.classList.replace('animate__fadeInDown', 'animate__fadeOutUp');
        setTimeout(() => {
            parenteButton.remove();
        }, 500);
    }
    if (e.target.className === 'fa-solid fa-pen-nib') {
        let txt = parentI.querySelector('.testo').textContent;
        let date = parentI.querySelector('.data').textContent;
        document.querySelector('#item').value = txt;
        document.querySelector('#date').value = date;
        parentI.classList.replace('animate__fadeInDown', 'animate__fadeOutUp');
        setTimeout(() => {
            parentI.remove();
        }, 500);
    }
    /* -------------------------------- CANCELLA -------------------------------- */
    if (e.target.className === 'delete') {
        parenteButton.classList.replace('animate__fadeInDown', 'animate__fadeOutUp');
        setTimeout(() => {
            parenteButton.remove();
        }, 500);
    }
    if (e.target.className === 'fa-solid fa-xmark') {
        parentI.classList.replace('animate__fadeInDown', 'animate__fadeOutUp');
        setTimeout(() => {
            parentI.remove();
        }, 500);
    }
});

/* ---------------------------------- TEMI ---------------------------------- */

document.querySelector('h1 button').addEventListener('click', () => {
    if (document.querySelector('h1 button').className == 'arrow') {
        document.querySelector('h1 button').classList.replace('arrow', 'arrow-rotate');
    } else {
        document.querySelector('h1 button').classList.replace('arrow-rotate', 'arrow');
    }
    let temi = document.querySelector('.temi');

    if (temi.style.display == 'inline-block') {
        temi.classList.replace('animate__fadeInDown', 'animate__fadeOutUp');
        setTimeout(() => {
            temi.style.display = 'none';
        }, 500);
    } else {
        temi.classList.replace('animate__fadeOutUp', 'animate__fadeInDown');
        temi.style.display = 'inline-block';
    }
});
/* ---------------------------------- DARK ---------------------------------- */
document.querySelector('.dark').addEventListener('click', () => {
    document.documentElement.style.setProperty('--primary-color', '#2B303A');
    document.documentElement.style.setProperty('--secondary-color', '#ffd32c');

    document.querySelector('.dark').style.borderBottom = '1px solid var(--secondary-color)';
    document.querySelector('.classic').style.borderBottom = 'none';
    document.querySelector('.forest').style.borderBottom = 'none';
    document.querySelector('.ocean').style.borderBottom = 'none';
});
/* --------------------------------- CLASSIC -------------------------------- */
document.querySelector('.classic').addEventListener('click', () => {
    document.documentElement.style.setProperty('--primary-color', '#efe3d2');
    document.documentElement.style.setProperty('--secondary-color', '#5b2333');

    document.querySelector('.dark').style.borderBottom = 'none';
    document.querySelector('.classic').style.borderBottom = '1px solid var(--secondary-color)';
    document.querySelector('.forest').style.borderBottom = 'none';
    document.querySelector('.ocean').style.borderBottom = 'none';
});
/* --------------------------------- FOREST --------------------------------- */
document.querySelector('.forest').addEventListener('click', () => {
    document.documentElement.style.setProperty('--primary-color', '#19270d');
    document.documentElement.style.setProperty('--secondary-color', '#a7c957');

    document.querySelector('.dark').style.borderBottom = 'none';
    document.querySelector('.classic').style.borderBottom = 'none';
    document.querySelector('.forest').style.borderBottom = '1px solid var(--secondary-color)';
    document.querySelector('.ocean').style.borderBottom = 'none';
});
/* ---------------------------------- OCEAN --------------------------------- */
document.querySelector('.ocean').addEventListener('click', () => {
    document.documentElement.style.setProperty('--primary-color', '#064273');
    document.documentElement.style.setProperty('--secondary-color', '#def3f6');

    document.querySelector('.dark').style.borderBottom = 'none';
    document.querySelector('.classic').style.borderBottom = 'none';
    document.querySelector('.forest').style.borderBottom = 'none';
    document.querySelector('.ocean').style.borderBottom = '1px solid var(--secondary-color)';
});