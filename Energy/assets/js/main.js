let counter = 3;
let round = 1;
let cMazo=18;
let cMano=6;
var axie1= 8;
var axie2= 8;
var axie3= 8;

document.getElementById("totalc").innerHTML = axie1+axie2+axie3;

const uncheckAll= () => {
	for (let i = 0; i < 24; i++) {
		document.getElementById(`${i}`).style.visibility = "hidden";		
	}
	axie1= 8;
	axie2= 8;
	axie3= 8;
	document.getElementById("totalc").innerHTML = axie1+axie2+axie3;
	document.getElementById("axie1").innerHTML = axie1;
	document.getElementById("axie2").innerHTML = axie2;
	document.getElementById("axie3").innerHTML = axie3;  
}

const toggle = n => {
	if(n.length > 0 )n = n.slice(1);
	console.log(n);
	let x = document.getElementById(`${n}`)
	if(x.style.visibility === 'hidden'){
		x.style.visibility = 'visible'
		subtract('car');
		axien(n,'v');
	}
	else{
		x.style.visibility  = 'hidden'
		add();
		axien(n);		
	}
}	

	const axien = (n,v) => {
		if(v=='v'){
			if(n >= 0 && n <= 7){
				axie1 -= 1
			}
		
			if(n >= 8 && n <= 15){
				axie2 -= 1
			}
		
			if(n >= 16 && n <= 23){
				axie3 -= 1
			}
		}
		else{
			if(n >= 0 && n <= 7){
				axie1 += 1
			}
		
			if(n >= 8 && n <= 15){
				axie2 += 1
			}
		
			if(n >= 16 && n <= 23){
				axie3 += 1
			}	
		}
	document.getElementById("axie1").innerHTML = axie1;
	document.getElementById("axie2").innerHTML = axie2;
	document.getElementById("axie3").innerHTML = axie3;
	document.getElementById("totalc").innerHTML = axie1+axie2+axie3;
	console.log(axie1,axie2,axie3);
}


const toggled = n => {
	if(n.length > 0 )n = n.slice(1);
	console.log(n);
	let x = document.getElementById(`${n}`)
	if(x.style.visibility === 'hidden'){
		x.style.visibility = 'visible'
		axien(n,'v');
	}
	else{
		x.style.visibility  = 'hidden'
		add();
		axien(n);		
	}
}	


const subtract = (type) => {
	if(type=='ene'){
		counter -= 1;
		if (counter <= 0)counter = 0;
		document.getElementById("energyQuantity").innerHTML = counter;
	}else if(type=='car'){
		cMano -= 1;
		if (cMano<= 0)cMano = 0;
		document.getElementById("cMano").innerHTML = cMano;
		document.getElementById("cMazo").innerHTML = cMazo;
		document.getElementById("totalc").innerHTML = axie1+axie2+axie3;

	}
	else{
		document.getElementById("cMano").innerHTML = cMano;
		document.getElementById("cMazo").innerHTML = cMazo;
		document.getElementById("totalc").innerHTML = axie1+axie2+axie3;
	};
}

const deleteaxie = id =>{

	id = id.slice(1);
	
	
	if(id == "axie1"){
		for (let i = 0; i < 8; i++) {
			toggled(i);
		}
	}
	else if(id=='axie2'){
		for (let i = 8; i < 16; i++) {
			toggled(i);
		}
	}else if(id=='axie3'){
		for (let i = 16; i < 24; i++) {
			toggled(i);
		}
	}


	document.getElementById(`${id}`).innerHTML = window[id];
	document.getElementById("totalc").innerHTML = axie1+axie2+axie3;
}



const add = (type) => {	
	if(type=='ene'){
		counter += 1;
		if (counter >= 10)counter = 10;
		document.getElementById("energyQuantity").innerHTML = counter;
	}
	else if(type=='car'){
		cMano += 1;
		cMazo -= 1;
		if (cMano >= 12)cMano = 12;
		if(cMazo<=0){
			cMazo=0;
			cMazo = axie1+axie2+axie3;
			cMazo=cMazo-cMano;
		}
			document.getElementById("cMano").innerHTML = cMano;
			document.getElementById("cMazo").innerHTML = cMazo;
			document.getElementById("totalc").innerHTML = axie1+axie2+axie3;
		}
		else{
			cMano += 1
			if (cMano >= 12)cMano = 12;
			document.getElementById("cMano").innerHTML = cMano;
			document.getElementById("totalc").innerHTML = axie1+axie2+axie3;
		};
}


const reset = () => {
	counter = 3;
	round = 1;
	cMazo=18;
	cMano=6;
	document.getElementById("energyQuantity").innerHTML = counter;
	document.getElementById("roundNumber").innerHTML = round;
	document.getElementById("cMazo").innerHTML = cMazo;
	document.getElementById("cMano").innerHTML = cMano;
	document.getElementById("totalc").innerHTML = axie1+axie2+axie3;
	uncheckAll();
}

const nextRound = () => {
	round += 1;
	counter += 2;
	cMano += 3;
	cMazo -= 3;
	if (counter >= 10)counter = 10;
	if (cMano >= 12)cMano = 12;
	if(cMazo<=0){
		cMazo=0
		cMazo = axie1+axie2+axie3;
		cMazo=cMazo-cMano;
	};

	
	document.getElementById("roundNumber").innerHTML = round;
	document.getElementById("energyQuantity").innerHTML = counter;
	document.getElementById("cMazo").innerHTML = cMazo;
	document.getElementById("cMano").innerHTML = cMano;
	document.getElementById("axie1").innerHTML = axie1;
	document.getElementById("axie2").innerHTML = axie2;
	document.getElementById("axie3").innerHTML = axie3;
	document.getElementById("totalc").innerHTML = axie1+axie2+axie3;
}





/*
<div>
	<tr>
			<td class="axie1">Boca</td>
			<td class="axie1" onclick="toggle(this.id)" id="a0"><i class=" fas fa-times" id="0"></i></td>
			<td class="axie1" onclick="toggleA1M2()"><i class="fas fa-times" id="1"></i></td>
	</tr>
	<tr>
			<td class="axie1">Cuerno</td>
			<td class="axie1" onclick="toggleA1H1()"><i class=" fas fa-times" id="2"></td>
			<td class="axie1" onclick="toggleA1H2()"><i class=" fas fa-times" id="3"></td>
	</tr>
	<tr>
			<td class="axie1">Espalda</td>
			<td class="axie1" onclick="toggleA1B1()"><i class=" fas fa-times" id="4"></td>
			<td class="axie1" onclick="toggleA1B2()"><i class=" fas fa-times" id="5"></td>
	</tr>
	<tr>
			<td class="axie1">Cola</td>
			<td class="axie1" onclick="toggleA1T1()"><i class=" fas fa-times" id="6"></td>
			<td class="axie1" onclick="toggleA1T2()"><i class=" fas fa-times" id="7"></td>
	</tr>
</div>




let c1 = 0;
let c2 = 0;
let c3 = 1;
const alpha = Array.from(Array(26)).map((e, y) => y + 65);
const a = alpha.map((x) => String.fromCharCode(x));
const parte= ["Boca","Cuerno","Espalda","Cola"];
let pagina = '';
for (let i = 0; i <12; i++) {

if(c1 == 0)pagina=pagina+`
<div>
`;

 pagina = pagina +
	`<tr>
			<td class="axie${c3}">${parte[c1]}</td>
			<td class="axie${c3}" onclick="toggle(this.id)" id="${a[c2]+c2}"><i class=" fas fa-times" id="${c2}"></i></td>
	`;

	++c2

	pagina = pagina +
	`	<td class="axie${c3}" onclick="toggle(this.id)" id="${a[c2]+c2}"><i class=" fas fa-times" id="${c2}"></i></td>
	</tr>`;
	if(c1 == 3)pagina=pagina+`
	</div>
	`;
	c2++
	c1++
	if(c1 == 4){
		c1=0;
		c3++;
	} 


	let

*/
