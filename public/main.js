const completedOrder = (e) => {
  const id = e.target.value;
  const awaiting = "true";
  const completed = "false";
  fetch('barista', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: id,
      completed: completed,
      awaiting: awaiting
    }),
  }).then(function (res) {
    console.log(res)
    console.log(res.body)
    return res.json()
  })
  .then(function (res) {
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(res.value.size +" "+ res.value.beverage + " for " + res.value.customer));
  })
  window.location.reload();
};

document.querySelectorAll('.complete-order').forEach((e) => {
  e.addEventListener('click', completedOrder);
});

const deleteAllCompleted = (e) => {
  fetch('barista', {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: 'all',
    }),
  }).then(function () {
    
    window.location.reload();
  });
};

document.querySelectorAll('.clear-all-completed').forEach((e) => {
  e.addEventListener('click', deleteAllCompleted);
});



const chooseOrder = (e) => {
  fetch('barista', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: id,
      one: one,
      two: two,
      three: three,
      four: four,
      five: five,
      six: six
    }),
  }).then(function () {
    window.location.reload();
  });
};

document.querySelectorAll('.one').forEach((e) => {
  e.addEventListener('click', chooseOrder);
});

document.querySelectorAll('.two').forEach((e) => {
  e.addEventListener('click', chooseOrder);
});

document.querySelectorAll('.three').forEach((e) => {
  e.addEventListener('click', chooseOrder);
});

document.querySelectorAll('.four').forEach((e) => {
  e.addEventListener('click', chooseOrder);
});

document.querySelectorAll('.five').forEach((e) => {
  e.addEventListener('click', chooseOrder);
});

document.querySelectorAll('.six').forEach((e) => {
  e.addEventListener('click', chooseOrder);
});