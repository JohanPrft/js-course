function selectMode(modeList)
{
	let userPrompt = "";
	while (userPrompt !== modeList[0] && userPrompt !== modeList[1])
	{
		userPrompt = prompt("Which mode do you want? 'words' or 'sentences' ?");
	}
	let	chosenList;
	if (userPrompt === modeList[0])
	{
		chosenList = wordList;
	}
	else
	{
		chosenList = sentenceList;
	}
	return chosenList;
}

function game(chosenList)
{
	let userPrompt;
	for (let i = 0; i < chosenList.length; i++)
	{
		userPrompt = prompt("Enter :'" + chosenList[i] + "'");
		if (userPrompt === chosenList[i])
		{
			score++;
		}
		console.log(score);
	}
}

function launchGame()
{
	console.log("hello word!");
	game(selectMode(modeList));
	console.log("Final score is " + score + " !");
}
