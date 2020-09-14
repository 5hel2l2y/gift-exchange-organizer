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

app.member = document.querySelector('member');
app.memberList = document.getElementById('memberList');

app.listeners = (e) => {
  e.preventDefault();

  if(e.target.id === 'add') {  
    const listItem = document.createElement('li');
    listItem.textContent = member.value;

    memberList.appendChild(listItem);
  } else if(e.target.id === 'generate') {
    // generate random list
  } else if(e.target.id === 'reset') {
    // reset list
  }
};

app.init = () => {
  console.log('we cool');
  document.onclick = app.listeners;
};

app.init();