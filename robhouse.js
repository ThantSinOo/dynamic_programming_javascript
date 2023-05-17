console.log("Rob House");

const rob_house = (houselist) =>{
	if(houselist.length === 0){
		return 0;
	}

	const dp = [];
	dp[0] = houselist[0];
	dp[1] = Math.max(houselist[0],houselist[1]);

	for (let i = 2; i < houselist.length; i++){
		dp[i] = Math.max(dp[i - 1], dp[i - 2] + houselist[i]);
	}

	return dp[houselist.length - 1];
}
// let answer = rob_house([2, 7, 9, 3, 1])
console.log("Answer",rob_house([2, 7, 9, 3, 1]))