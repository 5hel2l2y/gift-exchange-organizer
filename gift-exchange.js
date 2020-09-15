// input
// ['Susan', 'Beth', 'Abe', 'Ardi', 'Quan']
// output
// Abe gives a gift to Quan
// Ardi gives a gift to Beth
// Susan gives a gift to Abe
// Quan gives a gift to Ardi
// Beth gives a gift to Susan

const randomizer = members => {
  let numberOfMembers = members.length;

  while(numberOfMembers) {
    let randomNumber = Math.floor(Math.random() * numberOfMembers--);

    let member = members[numberOfMembers];
    members[numberOfMembers] = members[randomNumber];
    members[randomNumber] = member;
  }
}

const generate = memberList => {
  const finalMatch = [];  

  if (Array.isArray(memberList) && typeof (memberList) === 'object' && memberList.length > 2) {
    randomizer(memberList);

    for (let i = 0; i < memberList.length; i++) {
      const giver = memberList[i];
      let receiver = '';

      if (i !== memberList.length - 1) {
        receiver = memberList[i + 1];
      } else {
        receiver = memberList[0];
      }

      finalMatch.push({
        [i+1]: `${giver} gives a gift to ${receiver}`,
      })
    }
    return finalMatch;
  } else {
    console.error('TRY AGAIN: Please provide a list with more than two member.');
    return null;
  }
}

console.log('Case 1: ', generate("'Susan', 'Beth', 'Abe', 'Ardi', 'Quan'"));

for (let i = 1; i <= 5; i++) {
  console.log(`Case 2.${i}: `, generate(['Susan', 'Beth', 'Abe', 'Ardi', 'Quan']));
}

console.log('Case 3: ', generate('Susan', 'Beth', 'Abe', 'Ardi', 'Quan'));

console.log('Case 4: ', generate([1, 2, 3, 4, 5, 6]));

console.log('Case 5: ', generate(['Yang']));

console.log('Case 6: ', generate(['Li', 'Yang']));
