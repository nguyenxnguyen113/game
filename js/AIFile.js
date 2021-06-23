// var A_Atk = [0,2,4,20,100,105,110,115,120,130];
// var A_Def = [0,1,3,15,55,56,57,58,60,62];

// function AIMode()
// {
// 	if (!InGame) return;
// 	var vmax = -Infinity;
// 	var px = py = -1;
// 	var TBoard = GetBoard();
// 	for (y = 0; y < size; y++)
// 	{
// 		for (x = 0; x < size; x++)
// 		{
// 			if (TBoard[x+y*size] == -1)
// 			{
// 				TBoard[x+y*size] = 1;
// 				var mark = GetMark(x,y,TBoard);
// 				TBoard[x+y*size] = -1;
// 				if (mark > vmax)
// 				{
// 					px = x;py = y;
// 					vmax = mark;
// 				}
// 			}
// 		}
// 	}
// 	try
// 	{
// 		var sqr = document.getElementsByClassName("square");
// 		sqr.item(px + py*size).setAttribute("player","1");
// 		sqr.item(px + py*size).style.backgroundImage = "url('../Images/Xpng.png')";
// 		l_played.push(px+py*size);
// 	}
// 	catch(e) {alert(e.message)}
// }


