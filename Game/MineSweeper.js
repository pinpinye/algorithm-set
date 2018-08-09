// Goal:Build a Mine-Sweeping game, in a m*n matrix;
// 
// 1. To generate a m*n game panel which includes k(number) mines;

function mineSweeper(m,n,k) {
	this.rowArr = [];
	this.m = m;
	this.n = n;
	this.k = k;
}

mineSweeper.prototype = {
	generateFrame:function(){
		let m = this.m;
		let n = this.n;
		let k = this.k;
		for(let i=0; i<m;i++) {
			this.rowArr[i] = [];
			for(let j=0;j<n;j++) {
				this.rowArr[i][j] = 0;
			}
		}
		for(let t=0; t<k; t++) {
			let row = Math.floor(Math.random(0,1)*m);
			let col = Math.floor(Math.random(0,1)*n);
			if(this.rowArr[row][col] == 0) {
				this.rowArr[row][col] = "boom";
			}else{
				k=k+1;
			}
		}
		this.rowArr.forEach(item => {
			item.forEach(ceil => {
				console.log(ceil)
			})
		})
	},
	fillMine:function() {
		// 遍历每个格子，避开雷，找出周围的8个空格有几个雷，填数
		let m = this.m;
		let n = this.n;
		for(let i=0; i<m;i++) {
			for(let j=0;j<n;j++) {
				let leftTop,toTop,rightTop,toLeft,toRight,leftBottom,rightBottom,toBottom;
				if(this.rowArr[i][j] == 0 ) {
					// 第一列
					if(i==0){
						leftTop =0;
						toLeft = 0;
						leftBottom = 0
					}
					// 第一行
					if(j==0) {
						leftTop =0;
						toTop = 0;
						rightTop = 0;
					}
					// 最后一列
					if(i == n-1) {
						rightTop = 0;
						toRight = 0;
						rightBottom = 0;
					}
					// 最后一行
					if(j == m-1) {
						leftBottom = 0;
						rightBottom = 0;
						toBottom = 0;
					}

					if(i>0 && j>0) {
						leftTop = this.rowArr[i-1][j-1];
					}

					if(i>0 && j<n-1) {
						leftBottom = this.rowArr[i-1][j+1];
					}

					if(j>0 && i<m-1) {
						rightTop = this.rowArr[i+1][j-1];
					}

					if(i<m-1 && i<n-1) {
						rightBottom = this.rowArr[i+1][j+1];
					}
	                // ----------------------------------
					if(i>0) {
						toLeft = this.rowArr[i-1][j]
					}
					if(j>0) {
						toTop = this.rowArr[i][j-1]
					}
					if(i<m-1) {
						toRight = this.rowArr[i+1][j]
					}
					if(j<n-1) {
						toBottom = this.rowArr[i][j+1]
					}
					let arr = [leftTop,toTop,rightTop,toLeft,toRight,leftBottom,rightBottom,toBottom];
					let boomNum =0;
					arr.forEach(function(value){
						if(value=="boom"){
							boomNum++;
						}
					})
					this.rowArr[i][j] = boomNum;
				}

			}
		}
		// 尝试打印
		this.rowArr.forEach(item => {
			item.forEach(ceil => {
				console.log(ceil)
			})
		})
	}
}

let my =new mineSweeper(3,3,1);
my.generateFrame();
console.log("-----------------")
my.fillMine();


// 2. Fill each none-mine cell with exact number based on the number of mines around it;