const app = {};

app.member = document.querySelector('input[name="member"]');
app.memberList = document.getElementById('memberList');
app.finalList = document.getElementById('finalList');

app.listeners = (e) => {
  e.preventDefault();

  if(e.target.id === 'add') {  
    const listItem = document.createElement('li');
    listItem.textContent = app.member.value;

    memberList.appendChild(listItem);
    app.member.value = '';
  } else if(e.target.id === 'generate') {
    const finalMatch = app.generate();

    app.finalList.innerHTML = '';
    app.finalList.innerHTML = finalMatch.map((match) => {
      return `<li> ${match.giver} gives a gift to ${match.receiver} </li>`;
    }).join('');
  } else if(e.target.id === 'reset') {
    app.member.value = '';
    app.memberList.innerHTML = '';
    app.finalList.innerHTML = '';
  }
};

app.generate = () => {
  const finalMatch = [];

  const finalMembers = Array.from(app.memberList.getElementsByTagName('li'), li => li.textContent);
  app.randomizer(finalMembers);

  for (let i = 0; i < finalMembers.length; i++) {
    const giver = finalMembers[i];
    let receiver = '';

    if(i !== finalMembers.length - 1) {
      receiver = finalMembers[i + 1];
    } else {
      receiver = finalMembers[0];
    }

    finalMatch.push({
      giver: giver,
      receiver: receiver
    })
  }

  return finalMatch;
}

app.randomizer = (members) => {
  let numberOfMembers = members.length;

  while(numberOfMembers) {
    let randomNumber = Math.floor(Math.random() * numberOfMembers--);

    let member = members[numberOfMembers];
    members[numberOfMembers] = members[randomNumber];
    members[randomNumber] = member;
  }
}

app.init = () => {
  document.onclick = app.listeners;
};

app.init();