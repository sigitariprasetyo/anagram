const sortStringWord = word => {
  let arrWord = word.split('')

  for (let i = 0; i < arrWord.length; i++) {
    for (let j = 0; j < arrWord.length; j++) {
      if (arrWord[j] > arrWord[j + 1]) {
        let tmp = arrWord[j]
        arrWord[j] = arrWord[j + 1]
        arrWord[j + 1] = tmp
      }
    }
  }

  return arrWord.join('')
}

const getAnagram = array => {
  let obj = {}

  for (let i = 0; i < array.length; i++) {
    let sortedStringWord = sortStringWord(array[i])
    if (obj[sortedStringWord] == null) {
      obj[sortedStringWord] = [array[i]]
    } else {
      obj[sortedStringWord].push(array[i])
    }
  }
  return Object.values(obj)
}

console.log(getAnagram(['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']))