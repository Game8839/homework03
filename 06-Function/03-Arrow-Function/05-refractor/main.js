// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }
//   ask('Do you agree?', 
//     function () { alert('You agreed.'); },
//     function () { alert('You canceled the execution.'); }
//   );

  let ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
  

  }

  let agree = () => alert(` you agree yoyo`)
  let disagree = () => alert(`you disagree`)
//     ask('Do you agree?', 
//      () => { alert('You agreed.'); },
//     () => { alert('You canceled the execution.'); }
//   );

  ask('Do you agree?', 
     agree,
    disagree
  );