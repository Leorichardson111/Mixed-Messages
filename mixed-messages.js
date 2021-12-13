

// creating 3 arrays with 3 different types of jokes good, bad and ugly

const good = ["What's the best thing about Switzerland? I don't know, but the flag is a big plus.",
"Did you hear about the claustrophobic astronaut? He just needed a little space.",
"Why don't scientists trust atoms? Because they make up everything.",
"Where are average things manufactured? The satisfactory.", 
"What sits at the bottom of the sea and twitches? A nervous wreck.",
"What does a nosy pepper do? Gets jalapeño business!",
"What kind of exercise do lazy people do? Diddly-squats.",
"What do you call a parade of rabbits hopping backwards? A receding hare-line.",
"What did the left eye say to the right eye? Between you and me, something smells.",
"What do you call a fake noodle? An impasta."]

const bad = ["I'm afraid for the calendar. Its days are numbered.",
"My wife said I should do lunges to stay in shape. That would be a big step forward.",
"Why do fathers take an extra pair of socks when they go golfing? In case they get a hole in one!",
"Singing in the shower is fun until you get soap in your mouth. Then it's a soap opera.",
"What do a tick and the Eiffel Tower have in common? They're both Paris sites.",
"What do you call a fish wearing a bowtie? Sofishticated.",
"How do you follow Will Smith in the snow? You follow the fresh prints.",
"Dear Math, grow up and solve your own problems.",
"What did the ocean say to the beach? Nothing, it just waved.",
"I only know 25 letters of the alphabet. I don't know y."]

const ugly = ["What did one butt cheek say to the other?  Together, we can stop this s**t.",
"What kind of Bees produce milk?  Boobees",
"What goes in hard and dry then comes out wet and soft? Chewing gum",
"What did the toaster say to the slice of bread? A. I want you inside me!",
"What did the poo say to the fart? You blow me away.",
"Who are the most dangerous farters in the world? Ninjas. They're silent but deadly.",
"Did you fart? No, that was my butt blowing you a kiss.",
"What do you get when a duchess farts? A noble gas.",
"Why did the toilet paper roll down the hill? To get to the bottom.",
"Why did Tigger stick his head in the toilet? To look for Pooh!"]

const randomJokes = (goodJkArr, badJkArr, uglyJkArr) => {
    let goodJokeIndex = (Math.floor(Math.random() * goodJkArr.length))
    let badJokeIndex = (Math.floor(Math.random()* badJkArr.length))
    let uglyJokeIndex = (Math.floor(Math.random()* uglyJkArr.length))

    console.log("Here is a good joke, a bad joke and an ugly joke:")
    console.log("Good Joke:" + good[goodJokeIndex])
    console.log("Bad Joke:" + bad[badJokeIndex])
    console.log("Good Joke:" + ugly[uglyJokeIndex])
}

randomJokes(good, bad, ugly)