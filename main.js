//Exercise #1 - Taco Soup Harry Potter

var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];

for(var i = 0; i < harryPotterTitles.length; i++){
    console.log("Harry Potter and the " + harryPotterTitles[i]);
  }

//Exercise #2 - Taco Soup Grades

var numberOfAs = 0
var numberOfBs = 0
var numberOfCs = 0
var numberOfDs = 0
var numberOfFs = 0
var mostCommonLetterGroup = ""
var averagePercentageGrade = 0
var gradeSum = 0
var mostCommonGradeCount = 0

var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]

for(var i=0; i < grades.length; i++){
if (grades[i] >= 0 && grades[i] <= 69){
    numberOfFs++
} else if (grades[i] >= 70 && grades[i] <= 76){
    numberOfDs++
} else if (grades[i] >= 77 && grades[i] <= 84){
    numberOfCs++
} else if (grades[i] >= 85 && grades[i] <= 92){
    numberOfBs++
} else if (grades[i] >= 93 && grades[i] <= 100){
    numberOfAs++
}}

for(var i=0; i < grades.length; i++){
    if(mostCommonGradeCount < numberOfFs){
        mostCommonGradeCount = numberOfFs
        mostCommonLetterGrade = "F"
    } else if(mostCommonGradeCount < numberOfDs){
        mostCommonGradeCount = numberOfDs
        mostCommonLetterGrade = "D"
    } else if(mostCommonGradeCount < numberOfCs){
        mostCommonGradeCount = numberOfCs
        mostCommonLetterGrade = "C"
    } else if(mostCommonGradeCount < numberOfBs){
        mostCommonGradeCount = numberOfBs
        mostCommonLetterGrade = "B"
    } else if(mostCommonGradeCount < numberOfAs){
        mostCommonGradeCount = numberOfAs
        mostCommonLetterGrade = "A"
    }
    }

for(var i=0; i < grades.length; i++){
    gradeSum += grades[i]

    }
    averagePercentageGrade = gradeSum / grades.length 
console.log(gradeSum)
console.log(numberOfAs)
console.log(numberOfBs)
console.log(mostCommonLetterGrade)
console.log(averagePercentageGrade)

// Exercise #3 - Two, Four, Six, Eight

var x = ""
for(var i = 2; i <= 8; i = i + 2){
        x += i + " " + "";
    } 
    console.log([x] + " Who do we appreciate?!")

// Exercise #4 - Interrupting Cow

var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
let cowSentence = ""

for(var i = 0; i < sentenceArray.length; i++){
    if((i + 1) % 3 === 0){
        cowSentence = cowSentence + ` ${sentenceArray[i]} MOOOOOO `
    }
     else{   
    cowSentence = cowSentence + ` ${sentenceArray[i]}`
    }
}
console.log(cowSentence)


//Exercise #5 - The Beatles

const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

console.log(`${beatles.members[0].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[0].birth}. He contributed heavily to the "${beatles.albums[0]}" Album.`)
console.log(`${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[1].birth}. He contributed heavily to the "${beatles.albums[1]}" Album.`)
console.log(`${beatles.members[2].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[2].birth}. He contributed heavily to the "${beatles.albums[2]}" Album.`)
console.log(`${beatles.members[3].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[3].birth}. He contributed heavily to the "${beatles.albums[3]}" Album.`)