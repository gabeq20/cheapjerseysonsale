const aut = "AUTHENTIC";
const rowLength = 30;
let initStatus = false;
let moving = true;
let paused = false;
let move1on = false;
let move2on = false;
let move3on = false;
let move4on = false;
let move5on = false;
let move6on = false;
let move7on = false;
let move8on = false;
let frontBottom1 = 39;
let frontBottom2 = 39;
let frontBottom3 = 39;
let frontBottom4 = 39;
let frontBottom5 = 39;
let frontBottom6 = 39;
let frontBottom7 = 39;
let frontBottom8 = 39;
let backBottom1 = 2;
let backBottom2 = 2;
let backBottom3 = 2;
let backBottom4 = 2;
let backBottom5 = 2;
let backBottom6 = 2;
let backBottom7 = 2;
let backBottom8 = 2;
let songState = true;
let bottomText = "AUTHENTIC AUTHENT";

function sleep(milliseconds) {
	const date = Date.now();
	let currentDate = null;
	do {
		currentDate = Date.now();
	} while (currentDate - date < milliseconds);
}

function displayDescription(description) {
//	document.getElementsByClassName("bottom-scroll").style.display = "none";
	$(".bottom-scroll").hide();
	document.getElementById("item-description").style.display = "block";
	document.getElementById("item-description").innerHTML = description;

}

function removeDescription() {
	document.getElementById("item-description").style.display = "none";
//	document.getElementsByClassName("bottom-scroll").style.display = "block";
	$(".bottom-scroll").show();
}


let $row1 = $("#row-1").children();
let $row2 = $("#row-2").children();
let $row3 = $("#row-3").children();
let $row4 = $("#row-4").children();
let $row5 = $("#row-5").children();
let $row6 = $("#row-6").children();
let $row7 = $("#row-7").children();
let $row8 = $("#row-8").children();
let $row9 = $("#row-9").children();
let $row10 = $("#row-10").children();
let $row11 = $("#row-11").children();
let $row12 = $("#row-12").children();
let $row13 = $("#row-13").children();
let $row14 = $("#row-14").children();
let $row15 = $("#row-15").children();
let $row16 = $("#row-16").children();
let $row17 = $("#row-17").children();
let $row18 = $("#row-18").children();
let $row19 = $("#row-19").children();
let $row20 = $("#row-20").children();
let $row21 = $("#row-21").children();
let $row22 = $("#row-22").children();
let $row23 = $("#row-23").children();
let $row24 = $("#row-24").children();
let $row25 = $("#row-25").children();
let $row26 = $("#row-26").children();
let $row27 = $("#row-27").children();
let $row28 = $("#row-28").children();
let $row29 = $("#row-29").children();
let $row30 = $("#row-30").children();
let $row31 = $("#row-31").children();
let $row32 = $("#row-32").children();
let $row33 = $("#row-33").children();
let $row34 = $("#row-34").children();
let $row35 = $("#row-35").children();


function intro() {
	if (!initStatus) {
			initStatus = true;

		//	$("#item-description").hide();
		//	let song = document.getElementById("song");
		//	song.autoplay = true;
		//	song.load();

			rowChange(0, $("#row-1").children(), 1);

			
			setTimeout(() => {
				rowChange(0, $("#row-2").children(), 1);
			}, 5);
			setTimeout(() => {
				rowChange(0, $("#row-3").children(), 2);
			}, 10);
			setTimeout(() => {
				rowChange(0, $("#row-4").children(), 3);
			}, 15);
			setTimeout(() => {
				rowChange(0, $("#row-5").children(), 4);
			}, 20);
			setTimeout(() => {
				rowChange(0, $("#row-6").children(), 5);
			}, 25);
			setTimeout(() => {
				rowChange(0, $("#row-7").children(), 6);
			}, 30);
			setTimeout(() => {
				rowChange(0, $("#row-8").children(), 7);
			}, 35);
			setTimeout(() => {
				rowChange(0, $("#row-9").children(), 8);
			}, 40);
			setTimeout(() => {
				rowChange(0, $("#row-10").children(), 9);
			}, 45);
			setTimeout(() => {
				rowChange(0, $("#row-11").children(), 10);
			}, 50);
			setTimeout(() => {
				rowChange(0, $("#row-12").children(), 11);
			}, 55);
			setTimeout(() => {
				rowChange(0, $("#row-13").children(), 12);
			}, 60);
			setTimeout(() => {
				rowChange(0, $("#row-14").children(), 13);
			}, 65);
			setTimeout(() => {
				rowChange(0, $("#row-15").children(), 14);
			}, 70);
			setTimeout(() => {
				rowChange(0, $("#row-16").children(), 15);
			}, 75);
			setTimeout(() => {
				rowChange(0, $("#row-17").children(), 16);
			}, 80);
			setTimeout(() => {
				rowChange(0, $("#row-18").children(), 17);
			}, 85);
			setTimeout(() => {
				rowChange(0, $("#row-19").children(), 18);
			}, 90);
			setTimeout(() => {
				rowChange(0, $("#row-20").children(), 19);
			}, 95);
			setTimeout(() => {
				rowChange(0, $("#row-21").children(), 20);
			}, 100);
			setTimeout(() => {
				rowChange(0, $("#row-22").children(), 21);
			}, 105);
			setTimeout(() => {
				rowChange(0, $("#row-23").children(), 22);
			}, 110);
			setTimeout(() => {
				rowChange(0, $("#row-24").children(), 23);
			}, 115);
			setTimeout(() => {
				rowChange(0, $("#row-25").children(), 24);
			}, 120);
			setTimeout(() => {
				rowChange(0, $("#row-26").children(), 25);
			}, 125);
			setTimeout(() => {
				rowChange(0, $("#row-27").children(), 26);
			}, 130);
			setTimeout(() => {
				rowChange(0, $("#row-28").children(), 27);
			}, 135);
			setTimeout(() => {
				rowChange(0, $("#row-29").children(), 28);
			}, 140);
			setTimeout(() => {
				rowChange(0, $("#row-30").children(), 29);
			}, 145);
			setTimeout(() => {
				rowChange(0, $("#row-31").children(), 30);
			}, 150);
			setTimeout(() => {
				rowChange(0, $("#row-32").children(), 31);
			}, 155);
			setTimeout(() => {
				rowChange(0, $("#row-33").children(), 32);
			}, 160);
	}
}


function rowChange(i, $row, rowNumber) {
	if (i == 0) {
		$row.eq(29).hide();
	}
	else if (i == 14) {
		$row.eq(28).hide();
	}
	$row.eq(i + 1).hide(1, () => {
		$row.eq(i).text(aut);
	});
	if (i < 26) {
		setTimeout(() => {
			rowChange(i + 2, $row, rowNumber);
		}, 5);
	}
	else {
		$row.hide();
		if (rowNumber == 32) {
			document.getElementById("item-description").style.display = "block";
			moveAll();
		}
	}
}



const front1 = document.getElementById("item1-front");
const back1 = document.getElementById("item1-back");
const hover1 = document.getElementById("item1-hover");
const prices1 = document.getElementById("item1-prices");
const front2 = document.getElementById("item2-front");
const back2 = document.getElementById("item2-back");
const hover2 = document.getElementById("item2-hover");
const prices2 = document.getElementById("item2-prices");
const front3 = document.getElementById("item3-front");
const back3 = document.getElementById("item3-back");
const hover3 = document.getElementById("item3-hover");
const prices3 = document.getElementById("item3-prices");
const front4 = document.getElementById("item4-front");
const back4 = document.getElementById("item4-back");
const hover4 = document.getElementById("item4-hover");
const prices4 = document.getElementById("item4-prices");
const front5 = document.getElementById("item5-front");
const back5 = document.getElementById("item5-back");
const hover5 = document.getElementById("item5-hover");
const prices5 = document.getElementById("item5-prices");
const front6 = document.getElementById("item6-front");
const back6 = document.getElementById("item6-back");
const hover6 = document.getElementById("item6-hover");
const prices6 = document.getElementById("item6-prices");
const front7 = document.getElementById("item7-front");
const back7 = document.getElementById("item7-back");
const hover7 = document.getElementById("item7-hover");
const prices7 = document.getElementById("item7-prices");
const front8 = document.getElementById("item8-front");
const back8 = document.getElementById("item8-back");
const hover8 = document.getElementById("item8-hover");
const prices8 = document.getElementById("item8-prices");

let item1Left = 15;
let item2Left = 36;
let item3Left = 57;
let item4Left = 78;
let item5Left = -69;
let item6Left = -48;
let item7Left = -27;
let item8Left = -6;

const let1 = document.getElementById("letter1");
const let2 = document.getElementById("letter2");
const let3 = document.getElementById("letter3");
const let4 = document.getElementById("letter4");
const let5 = document.getElementById("letter5");
const let6 = document.getElementById("letter6");
const let7 = document.getElementById("letter7");
const let8 = document.getElementById("letter8");
const let9 = document.getElementById("letter9");
const let10 = document.getElementById("letter10");
const let11 = document.getElementById("letter11");
const let12 = document.getElementById("letter12");
const let13 = document.getElementById("letter13");
const let14 = document.getElementById("letter14");
const let15 = document.getElementById("letter15");

let let1Left = 1;
let let2Left = 11.238;
let let3Left = 20.835;
let let4Left = 30.536;
let let5Left = 37.928;
let let6Left = 44.477;
let let7Left = 54.715;
let let8Left = 64.312;
let let9Left = 74.013;
let let10Left = 81.405;
let let11Left = 87.954;
let let12Left = -32.239;
let let13Left = -22.642;
let let14Left = -12.941;
let let15Left = -5.549;

// The distance between each letter group
let dist_1_2 = 5.117;
let dist_2_3 = 4.799;
let dist_3_4 = 4.8505;
let dist_4_5 = 3.6975;
let dist_5_6 = 3.271;


async function frame() {
	
	if (item1Left <= -90) {
		item1Left = 78;
	}
	else if (item2Left <= -90) {
		item2Left = 78;
	}
	else if (item3Left <= -90) {
		item3Left = 78;
	}
	else if (item4Left <= -90) {
		item4Left = 78;
	}
	else if (item5Left <= -90) {
		item5Left = 78;
	}
	else if (item6Left <= -90) {
		item6Left = 78;
	}
	else if (item7Left <= -90) {
		item7Left = 78;
	}
	else if (item8Left <= -90) {
		item8Left = 78;
	}

	item1Left-=.05;
	item2Left-=.05;
	item3Left-=.05;
	item4Left-=.05;
	item5Left-=.05;
	item6Left-=.05;
	item7Left-=.05;
	item8Left-=.05;
	

	if (let12Left <= -42) {
		let12Left = 88.432;
	}
	if (let13Left <= -42) {
		let13Left = 88.432;
	}
	if (let14Left <= -42) {
		let14Left = 88.432;
	}
	if (let15Left <= -42) {
		let15Left = 88.432;
	}
	if (let1Left <= -42) {
		let1Left = 88.432;
	}
	if (let2Left <= -42) {
		let2Left = 88.432;
	}
	if (let3Left <= -42) {
		let3Left = 88.432;
	}
	if (let4Left <= -42) {
		let4Left = 88.432;
	}
	if (let5Left <= -42) {
		let5Left = 88.432;
	}
	if (let6Left <= -42) {
		let6Left = 88.432;
	}
	if (let7Left <= -42) {
		let7Left = 88.432;
	}
	if (let8Left <= -42) {
		let8Left = 88.432;
	}
	if (let9Left <= -42) {
		let9Left = 88.432;
	}
	if (let10Left <= -42) {
		let10Left = 88.432;
	}
	if (let11Left <= -42) {
		let11Left = 88.432;
	}

	let1Left-=.05;
	let2Left-=.05;
	let3Left-=.05;
	let4Left-=.05;
	let5Left-=.05;
	let6Left-=.05;
	let7Left-=.05;
	let8Left-=.05;
	let9Left-=.05;
	let10Left-=.05;
	let11Left-=.05;
	let12Left-=.05;
	let13Left-=.05;
	let14Left-=.05;
	let15Left-=.05;

	front1.style.left = item1Left + '%';
	back1.style.left = item1Left + '%';
	hover1.style.left = item1Left + '%';
	prices1.style.left = item1Left + '%';
	front2.style.left = item2Left + '%';
	back2.style.left = item2Left + '%';
	hover2.style.left = item2Left + '%';
	prices2.style.left = item2Left + '%';
	front3.style.left = item3Left + '%';
	back3.style.left = item3Left + '%';
	hover3.style.left = item3Left + '%';
	prices3.style.left = item3Left + '%';
	front4.style.left = item4Left + '%';
	back4.style.left = item4Left + '%';
	hover4.style.left = item4Left + '%';
	prices4.style.left = item4Left + '%';
	front5.style.left = item5Left + '%';
	back5.style.left = item5Left + '%';
	hover5.style.left = item5Left + '%';
	prices5.style.left = item5Left + '%';
	front6.style.left = item6Left + '%';
	back6.style.left = item6Left + '%';
	hover6.style.left = item6Left + '%';
	prices6.style.left = item6Left + '%';
	front7.style.left = item7Left + '%';
	back7.style.left = item7Left + '%';
	hover7.style.left = item7Left + '%';
	prices7.style.left = item7Left + '%';
	front8.style.left = item8Left + '%';
	back8.style.left = item8Left + '%';
	hover8.style.left = item8Left + '%';
	prices8.style.left = item8Left + '%';
	

	
	let1.style.left = let1Left + '%';
	let2.style.left = let2Left + '%';
	let3.style.left = let3Left + '%';
	let4.style.left = let4Left + '%';
	let5.style.left = let5Left + '%';
	let6.style.left = let6Left + '%';
	let7.style.left = let7Left + '%';
	let8.style.left = let8Left + '%';
	let9.style.left = let9Left + '%';
	let10.style.left = let10Left + '%';
	let11.style.left = let11Left + '%';
	let12.style.left = let12Left + '%';
	let13.style.left = let13Left + '%';
	let14.style.left = let14Left + '%';
	let15.style.left = let15Left + '%';
	
}


async function moveAll() {
	if (moving) {
		frame();
		await frame();
		setTimeout(() => {
			moveAll();
		}, .0005);
	}
}


function playPause() {
	if (!paused) {
		moving = false;
		paused = true;
		document.getElementById("pause-play").innerHTML = "PLAY";
	}
	else {
		moving = true;
		paused = false;
		document.getElementById("pause-play").innerHTML = "PAUSE";
		moveAll();
	}
}

function tempPause() {
	if (!paused) {
		moving = false;
	}
}

function tempPlay() {
	if (!paused) {
		moving = true;
		moveAll();
	}
}

function move1() {
	tempPause();
	document.getElementById("list-item-1").style.color = "red";
	let id = null;
	const front = document.getElementById("item1-front");
	const back = document.getElementById("item1-back");
	let frontPos = frontBottom1;
	let backPos = backBottom1;
	clearInterval(id);
	id = setInterval(frame, 5);
	move1on = true;
	function frame() {
		if (move1on) {
			if (frontPos >= 80) {
				frontPos = 2;
				front.style.bottom = frontPos + '%';
			}
			else if (backPos >= 80) {
				backPos = 2;
				back.style.bottom = backPos + '%';
			}
			else {
				frontPos+=.15;
				backPos+=.15;
				front.style.bottom = frontPos + '%';
				back.style.bottom = backPos + '%';
			}
		}
		else {
			frontBottom1 = frontPos;
			backBottom1 = backPos;
			clearInterval(id);
		}
	}
}

function move2() {
	tempPause();
	document.getElementById("list-item-2").style.color = "red";
	let id = null;
	const front = document.getElementById("item2-front");
	const back = document.getElementById("item2-back");
	let frontPos = frontBottom2;
	let backPos = backBottom2;
	clearInterval(id);
	id = setInterval(frame, 5);
	move2on = true;
	function frame() {
		if (move2on) {
			if (frontPos >= 80) {
				frontPos = 2;
				front.style.bottom = frontPos + '%';
			}
			else if (backPos >= 80) {
				backPos = 2;
				back.style.bottom = backPos + '%';
			}
			else {
				frontPos+=.15;
				backPos+=.15;
				front.style.bottom = frontPos + '%';
				back.style.bottom = backPos + '%';
			}
		}
		else {
			frontBottom2 = frontPos;
			backBottom2 = backPos;
			clearInterval(id);
		}
	}
}

function move3() {
	tempPause();
	document.getElementById("list-item-3").style.color = "red";
	let id = null;
	const front = document.getElementById("item3-front");
	const back = document.getElementById("item3-back");
	let frontPos = frontBottom3;
	let backPos = backBottom3;
	clearInterval(id);
	id = setInterval(frame, 5);
	move3on = true;
	function frame() {
		if (move3on) {
			if (frontPos >= 80) {
				frontPos = 2;
				front.style.bottom = frontPos + '%';
			}
			else if (backPos >= 80) {
				backPos = 2;
				back.style.bottom = backPos + '%';
			}
			else {
				frontPos+=.15;
				backPos+=.15;
				front.style.bottom = frontPos + '%';
				back.style.bottom = backPos + '%';
			}
		}
		else {
			frontBottom3 = frontPos;
			backBottom3 = backPos;
			clearInterval(id);
		}
	}
}

function move4() {
	tempPause();
	document.getElementById("list-item-4").style.color = "red";
	let id = null;
	const front = document.getElementById("item4-front");
	const back = document.getElementById("item4-back");
	let frontPos = frontBottom4;
	let backPos = backBottom4;
	clearInterval(id);
	id = setInterval(frame, 5);
	move4on = true;
	function frame() {
		if (move4on) {
			if (frontPos >= 80) {
				frontPos = 2;
				front.style.bottom = frontPos + '%';
			}
			else if (backPos >= 80) {
				backPos = 2;
				back.style.bottom = backPos + '%';
			}
			else {
				frontPos+=.15;
				backPos+=.15;
				front.style.bottom = frontPos + '%';
				back.style.bottom = backPos + '%';
			}
		}
		else {
			frontBottom4 = frontPos;
			backBottom4 = backPos;
			clearInterval(id);
		}
	}
}

function move5() {
	tempPause();
	document.getElementById("list-item-5").style.color = "red";
	let id = null;
	const front = document.getElementById("item5-front");
	const back = document.getElementById("item5-back");
	let frontPos = frontBottom5;
	let backPos = backBottom5;
	clearInterval(id);
	id = setInterval(frame, 5);
	move5on = true;
	function frame() {
		if (move5on) {
			if (frontPos >= 80) {
				frontPos = 2;
				front.style.bottom = frontPos + '%';
			}
			else if (backPos >= 80) {
				backPos = 2;
				back.style.bottom = backPos + '%';
			}
			else {
				frontPos+=.15;
				backPos+=.15;
				front.style.bottom = frontPos + '%';
				back.style.bottom = backPos + '%';
			}
		}
		else {
			frontBottom5 = frontPos;
			backBottom5 = backPos;
			clearInterval(id);
		}
	}
}

function move6() {
	tempPause();
	document.getElementById("list-item-6").style.color = "red";
	let id = null;
	const front = document.getElementById("item6-front");
	const back = document.getElementById("item6-back");
	let frontPos = frontBottom6;
	let backPos = backBottom6;
	clearInterval(id);
	id = setInterval(frame, 5);
	move6on = true;
	function frame() {
		if (move6on) {
			if (frontPos >= 80) {
				frontPos = 2;
				front.style.bottom = frontPos + '%';
			}
			else if (backPos >= 80) {
				backPos = 2;
				back.style.bottom = backPos + '%';
			}
			else {
				frontPos+=.15;
				backPos+=.15;
				front.style.bottom = frontPos + '%';
				back.style.bottom = backPos + '%';
			}
		}
		else {
			frontBottom6 = frontPos;
			backBottom6 = backPos;
			clearInterval(id);
		}
	}
}

function move7() {
	tempPause();
	document.getElementById("list-item-7").style.color = "red";
	let id = null;
	const front = document.getElementById("item7-front");
	const back = document.getElementById("item7-back");
	let frontPos = frontBottom7;
	let backPos = backBottom7;
	clearInterval(id);
	id = setInterval(frame, 5);
	move7on = true;
	function frame() {
		if (move7on) {
			if (frontPos >= 80) {
				frontPos = 2;
				front.style.bottom = frontPos + '%';
			}
			else if (backPos >= 80) {
				backPos = 2;
				back.style.bottom = backPos + '%';
			}
			else {
				frontPos+=.15;
				backPos+=.15;
				front.style.bottom = frontPos + '%';
				back.style.bottom = backPos + '%';
			}
		}
		else {
			frontBottom7 = frontPos;
			backBottom7 = backPos;
			clearInterval(id);
		}
	}
}

function move8() {
	tempPause();
	document.getElementById("list-item-8").style.color = "red";
	let id = null;
	const front = document.getElementById("item8-front");
	const back = document.getElementById("item8-back");
	let frontPos = frontBottom8;
	let backPos = backBottom8;
	clearInterval(id);
	id = setInterval(frame, 5);
	move8on = true;
	function frame() {
		if (move8on) {
			if (frontPos >= 80) {
				frontPos = 2;
				front.style.bottom = frontPos + '%';
			}
			else if (backPos >= 80) {
				backPos = 2;
				back.style.bottom = backPos + '%';
			}
			else {
				frontPos+=.15;
				backPos+=.15;
				front.style.bottom = frontPos + '%';
				back.style.bottom = backPos + '%';
			}
		}
		else {
			frontBottom8 = frontPos;
			backBottom8 = backPos;
			clearInterval(id);
		}
	}
}

function stop1() {
	move1on = false;
	document.getElementById("list-item-1").style.color = "black";
	tempPlay();
}

function stop2() {
	move2on = false;
	document.getElementById("list-item-2").style.color = "black";
	tempPlay();
}

function stop3() {
	move3on = false;
	document.getElementById("list-item-3").style.color = "black";
	tempPlay();
}

function stop4() {
	move4on = false;
	document.getElementById("list-item-4").style.color = "black";
	tempPlay();
}

function stop5() {
	move5on = false;
	document.getElementById("list-item-5").style.color = "black";
	tempPlay();
}

function stop6() {
	move6on = false;
	document.getElementById("list-item-6").style.color = "black";
	tempPlay();
}

function stop7() {
	move7on = false;
	document.getElementById("list-item-7").style.color = "black";
	tempPlay();
}

function stop8() {
	move8on = false;
	document.getElementById("list-item-8").style.color = "black";
	tempPlay();
}
