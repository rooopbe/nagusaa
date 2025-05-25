window.onload = function () {
  let timer = null;
  let current = null;

  const listContainer = document.getElementById('student-list');
  const selectedSpan = document.getElementById('selected-student');
  const startButton = document.getElementById('start');
  const stopButton = document.getElementById('stop');

  for (let i = 1; i <= 50; i++) {
    const div = document.createElement('div');
    div.textContent = i;
    div.classList.add('student');
    listContainer.appendChild(div);
  }

  const students = Array.from(listContainer.children);

  startButton.onclick = function () {
    if (timer) return;

    if (current !== null) {
      students[current].classList.remove('highlight', 'bounce');
    }

    timer = setInterval(() => {
      if (current !== null) {
        students[current].classList.remove('active');
      }

      const index = Math.floor(Math.random() * 50);
      current = index;
      students[current].classList.add('active');
    }, 100);
  };

  stopButton.onclick = function () {
    if (timer) {
      clearInterval(timer);
      timer = null;

      students[current].classList.remove('active');
      students[current].classList.add('highlight', 'bounce');
      selectedSpan.textContent = students[current].textContent;
    }
  };
};
