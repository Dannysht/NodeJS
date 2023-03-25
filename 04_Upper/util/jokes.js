/*fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit")
.then(response => response.json())
.then(result => console.log(result))*/

import Sentiment from "sentiment"
const sentiment = new Sentiment()

async function getJoke()
{
    const URL = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit"
    const response = await fetch(URL);
    const result = await response.json()
    const jokeToAnalyze = result.joke || `${result.setup} ${result.delivery}`
    const {score} = sentiment.analyze(jokeToAnalyze)
    console.log(score);
    if(score < 0)
    {
        return await getJoke()
    }
    else
    {
        return result
    }
}

//getJoke()

export default {
    getJoke
}