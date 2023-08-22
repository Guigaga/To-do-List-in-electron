const addTaskBtn = document.getElementById('addTaskBtn');
const taskModal = document.getElementById('taskModal');
const closeModal = document.querySelector('.close');
const saveTaskBtn = document.getElementById('saveTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
  taskModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  taskModal.style.display = 'none';
});

//-----------------------------

taskList.addEventListener('click', (event) => {
  const checkIcon = event.target;
  if (checkIcon.classList.contains('check-icon')) {
    const taskItem = checkIcon.closest('li');
    taskList.removeChild(taskItem);
  }
});

//-------------------------------------------------------------------------------------------

const taskNameInput = document.getElementById('taskName');

taskNameInput.addEventListener('input', () => {
  if (taskNameInput.value !== '') {
    saveTaskBtn.style.cursor = 'pointer';
    saveTaskBtn.style.touchAction = 'auto';
    saveTaskBtn.style.backgroundColor = '#3A97DD'
  } else {
    saveTaskBtn.style.cursor = 'no-drop';
  }
});
//--------------------------------------------------------------------------------------------
const iconAddTskBtn = document.querySelector('.icon-add-tsk-btn')
const iconAddTskBtnContainer = document.getElementById('icon-add-tsk-btn-container');
const addTaskBtnText = document.getElementById('add-task-btn-text');

addTaskBtn.addEventListener('mouseover', () => {
  iconAddTskBtn.src = './img/Add_Plus_white.png';
  iconAddTskBtnContainer.style.backgroundColor = '#0079D6';
  addTaskBtnText.style.color = '#0079D6';
});

addTaskBtn.addEventListener('mouseout', () => {
  iconAddTskBtn.src = './img/Add_Plus_blue.png';
  iconAddTskBtnContainer.style.backgroundColor = 'transparent';
  addTaskBtnText.style.color = 'rgba(255, 255, 255, 0.70)'
})

//---------------------------------------------------------------------------------------------------

saveTaskBtn.addEventListener('mouseover', () => {
  if (taskNameInput.value !== '') {
    saveTaskBtn.style.cursor = 'pointer';
  }
});

saveTaskBtn.addEventListener('mouseout', () => {
  if (taskNameInput.value !== '') {
    saveTaskBtn.style.cursor = 'cursor';
  } else {
    saveTaskBtn.style.cursor = 'no-drop';
  }
});



//---------------------------




saveTaskBtn.addEventListener('click', () => {
  const taskName = document.getElementById('taskName').value;

  const priorityRadioButtons = document.querySelectorAll('.radio-btn-priority');
  let priority = '';

  for (const radioButton of priorityRadioButtons) {
    if (radioButton.checked) {
      priority = radioButton.value;
      break;
    }
  }

  const priorityIcons = {
    'Low': './img/Union-2.png',  
    'Medium': './img/Union-1.png', 
    'High': './img/Union.png' 
  };


  const duration = document.getElementById('duration').value;


const dateinput = document.querySelectorAll('.date-input');
let deadline = '';

for (const radioButtonn of dateinput) {
  if (radioButtonn.checked) {
    deadline = radioButtonn.value;
    break;
  }
}

  if (taskName !== '') {

    saveTaskBtn.style.cursor = 'default';
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
    <div class="task-container-inbox">
      <div class="text-task-name-label">
        <img src="./img/check_circle.png" alt="check" class="check-icon">
        <span class="taskName-text">${taskName}</span>
      </div>
    <div class="task-rapid-info">
      <span>${priority !== 'ASAP' ? `<img src="${priorityIcons[priority]}" alt="${priority} Icon" class="icon-task">` : ''}</span>
     
      <div class="duration-container">
        <span class="duration-label-text"> ${duration}</span>
      </div>
      
      <span class="deadline-rapid-info">
        ${deadline !== 'No' ? `<img src="./img/Calendar_Close.png" alt="${deadline} Icon" class="deadline-icon"><span>${deadline}</span>` : ''}
      </span>
        </div>
    </div>
   
    `;
    taskList.appendChild(taskItem);

    taskModal.style.display = 'none';
    document.getElementById('taskName').value = '';
    document.getElementById('asap').checked = true;
    document.getElementById('duration').value = '';
    document.getElementById('noDate').checked = true;

    addTask(taskName, priority, duration, deadline)
  }
});





//-------------------------------------------------------------------------------------------
const cancelModalBtn = document.getElementById('cancelModalBtn');

cancelModalBtn.addEventListener('click', () => {
  taskModal.style.display = 'none';
  resetModalFields();
});

function resetModalFields() {
  document.getElementById('taskName').value = '';
  document.getElementById('asap').checked = true;
  document.getElementById('duration').value = '';
  document.getElementById('noDate').checked = true;
}

//---------------------------------------------



const buttonContainer1 = document.getElementById('buttonContainer1');
const buttonContainer2 = document.getElementById('buttonContainer2');

// Função para formatar a data
function formatDate(date) {
  const options = { weekday: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-Uk', options);
}

function formatDateTitle(date) {
  const options = { weekday: 'short', day: 'numeric', month: 'short' };
  return date.toLocaleDateString('en-UK', options);
}

const dateTodayTitle = document.getElementById('date-today-title');
const currentDate = new Date();
dateTodayTitle.textContent = formatDateTitle(currentDate).replace(',', '');




// Criação dos primeiros 7 botões de datas consecutivas
for (let i = 0; i < 7; i++) {
  const date = new Date();
  date.setDate(date.getDate() + i);

  const radioInput = document.createElement('input');
  radioInput.type = 'radio';
  radioInput.name = 'dateRadio'; // Mesmo nome para permitir seleção única
  radioInput.className = 'date-input';
  radioInput.id = `date${i + 1}`;
  radioInput.value = formatDate(date); // Certifique-se de que a função formatDate esteja definida

  const label = document.createElement('label');
  label.className = 'date-label';
  label.setAttribute('for', `date${i + 1}`);
  label.textContent = (i==0) ? 'Today': formatDate(date); // Use "Today" para o primeiro botão

  buttonContainer1.appendChild(radioInput);
  buttonContainer1.appendChild(label);
}




//--------------------------------------------------------
// Criação dos próximos 8 botões de datas consecutivas
for (let i = 7; i < 14; i++) {
  const date = new Date();
  date.setDate(date.getDate() + i);

  const radioInput = document.createElement('input');
  radioInput.type = 'radio';
  radioInput.name = 'dateRadio'; // Mesmo nome para permitir seleção única
  radioInput.className = 'date-input';
  radioInput.id = `date${i + 1}`;
  radioInput.value = formatDate(date);

  const label = document.createElement('label');
  label.className = 'date-label';
  label.setAttribute('for', `date${i + 1}`);
  label.textContent = formatDate(date);

  buttonContainer2.appendChild(radioInput);
  buttonContainer2.appendChild(label);
}

//--------------------------------------------------------------------------------------


