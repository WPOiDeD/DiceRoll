function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6MDXwzlSxUi":
        Script1();
        break;
  }
}

function Script1()
{
  var randomnumber = Math.floor((Math.random()*6)+1);
var player = GetPlayer();
player.SetVar("diceNumber",randomnumber);
}

