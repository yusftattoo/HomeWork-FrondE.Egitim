// Toast için fonksiyon
function showToast(message) {
    const toastEl = document.getElementById('toast');
    const toastBody = document.querySelector('.toast-body');
    toastBody.textContent = message;
  
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
  }
  
  // Listeye Ekleme
  document.getElementById('add-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      addTaskItem(taskText);
      showToast("Listeye eklendi!");
      taskInput.value = '';
    } else {
      showToast("Listeye boş ekleme yapmayınız!");
    }
  });
  
  function addTaskItem(taskText) {
    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
  
    li.innerHTML = `
      ${taskText}
      <button class="btn btn-danger btn-sm remove">Çıkar</button>
    `;
  
    // Yapıldı olayı
    li.addEventListener('click', function(e) {
      if (!e.target.classList.contains('remove')) {
        li.classList.toggle('done');
        showToast(li.classList.contains('done') ? "Yapıldı!" : "Görev geri alındı!");
      }
    });
  
    // Silme çıkart
    li.querySelector('.remove').addEventListener('click', function(e) {
      e.stopPropagation();
      li.remove();
      showToast("Listeden silindi!");
    });
  
    taskList.appendChild(li);
  }

  