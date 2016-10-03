function calculateD(a, b, c)
{
	return (Math.pow(b,2)-4*a*c);
}

exports.solve = function(a, b, c)
{
	if (a == 0)
	{
		var x = c/b;
		var result = {};
		result.x = Number(x).toFixed(2);
		result.D = "NaN";
		return result;
	}
	else
	{
		var x1= "NaN"; 
		var x2= "NaN";
		
		var discrimanant = calculateD(a, b, c);
		
		if (discrimanant >=0)
		{
			x1 = (-b - Math.pow(discrimanant, 0.5))/(2*a);
			x2 = (-b + Math.pow(discrimanant, 0.5))/(2*a);
		}
		var result = {};
		result.x1 = Number(x1).toFixed(2);
		result.x2 = Number(x2).toFixed(2);
		result.D = discrimanant;
		return result;
		
	}
};



