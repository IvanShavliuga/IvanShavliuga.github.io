var string Select, RandStr;
function RandomString()
{
	RandStr=Math.Random(10000);
	Document.board.Find.Value=RandStr.ToString();
	return RandStr;
}