let pronoun = ['the', 'our' ,'for', 'you', 'us'];
let adj = ['great', 'big','small', 'sticky','bad'];
let noun = ['jogger', 'racoon', 'baby', 'dad', 'dog'];

for (let pronombre = 0; pronombre < pronoun.length; pronombre++) {
  for (let adjetivo = 0; adjetivo < adj.length; adjetivo++) {
    for (let sustantivo = 0; sustantivo < noun.length; sustantivo++) {
      let dominio = pronoun[pronombre] + adj[adjetivo] + noun[sustantivo] + '.com' + '.ve';
      console.log(dominio);
    }
  }
};
