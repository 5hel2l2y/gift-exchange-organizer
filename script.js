// Instructions:

// You are tasked with organizing a gift exchange among friends; every member of the group has to both give, and receive, a gift randomly from among the others.

// The only rule is that one can not receive a gift from the same person to whom they give a gift.

// Write a solution for the above requirements for groups of varying sizes using Javascript.Remember to account for edge cases that would make the above rules impossible to follow.

// example input:
// ['Susan', 'Beth', 'Abe', 'Ardi', 'Quan']

// example output:
// Abe gives a gift to Quan
// Ardi gives a gift to Beth
// Susan gives a gift to Abe
// Quan gives a gift to Ardi
// Beth gives a gift to Susan

// Feel free to upload your solution as a gist on GitHub and respond to this email with the appropriate link.If you prefer, you can respond to this email with a screenshot of your solution too.

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
      console.log(match)
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
  console.log('we cool');
  document.onclick = app.listeners;
};

app.init();