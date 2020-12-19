

function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
  }
  
  const insert = {
    age: [generateRandomNumber(100)],
    wishes: ['wishes', 'desires', 'hopes', 'dreams', "needs"],
    epithets: ['beautiful', 'amazing', 'special', 'gorgeous', 'precious'],
    wishee: ['husbands', 'sons', 'daughters', 'wives', "fathers", "mothers", "brothers", "sisters"],
    sentiments: ["love", "admiration", "respect", "affection", "gratitude"],
    wisher: ['husband', 'son', 'daughter', 'wife', "father", "mother", "brother", "sister"]
  }
  
  // Array for all the values to be inserted
  let messages = []
  
  // Iterate over the object
  for (let ins in insert) {
    let optionIdx = generateRandomNumber(insert[ins].length)
    messages.push(insert[ins][optionIdx])  
   
  }

  console.log(`Happy ${messages[0]}th birthday! May all your ${messages[1]} come true!\n You are one of the most ${messages[2]} ${messages[3]} in the world!\n With ${messages[4]}, your ${messages[5]}!`)



  