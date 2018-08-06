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
		for(let i=0 ; i<m;i++) {
			this.rowArr[i] = [];
			for(let j=0;j<n;j++) {
				this.rowArr[i][j] = 0;
			}
		}
		for(let t=0; t<k; t++) {
			let row = Math.floor(Math.random(0,1)*m);
			let col = Math.floor(Math.random(0,1)*n);
			console.log(row,col)
			if(this.rowArr[row][col] == 0) {
				this.rowArr[row][col] = 1
			}else{
				k=k+1;
			}
			t++;
		}
		this.rowArr.forEach(item => {
			item.forEach(ceil => {
				console.log(ceil)
			})
		})
	};
	fillMine:function() {
		
	}
}

let my =new mineSweeper(5,5,1);
my.generateFrame();



// 2. Fill each none-mine cell with exact number based on the number of mines around it;