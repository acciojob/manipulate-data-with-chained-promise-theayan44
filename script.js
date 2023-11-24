//your JS code here. If required.
const output = document.getElementById("output");
const arr = [1, 2, 3, 4];
async function test() {
	output.innerText = await new Promise((res, rej)=>{
		setTimeout(res, 1000, arr.filter(el => el % 2));
	});
	output.innerText = await new Promise((res, rej)=>{
		setTimeout(res, 2000, arr.map((el) => {
			if(el % 2 == 0) return el * 2;
			else return el;
		}));
	});
}
test();