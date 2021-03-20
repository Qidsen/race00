let input = document.querySelector('.input')
let history = document.querySelector('.history')
let counter = 0  // для локалстореджа

function insert(num) {
	if(num === '.'){
		let number = input.textContent
		for (let i = number.length; i >= 0; i--){
			if(number[i] == '+' || number[i] == '-' || number[i] == '*' || number[i] == '/')
				number = number.slice(i)
		}
		if(number.includes('.'))
			return

		if(input.textContent == 0){
			input.textContent = "0."
			return
		}
	}
	if(input.textContent == 0 || input.textContent == 'Infinity' || input.textContent == '-Infinity') {
		input.textContent = ""
		input.textContent = input.textContent + num
	} else{
		if(input.textContent.slice(-1) == num && Number(isNaN(input.textContent.slice(-1))))
			return
		else input.textContent = input.textContent + num
	}
}

function clean() {
	input.textContent = "0"
}

function back() {
	let exp = input.textContent
	input.textContent = exp.substring(0, exp.length - 1)
	if(input.textContent == 0)
		input.textContent = "0"
}

function equal() { 
    history.textContent = input.textContent 
    localStorage.setItem("id" + counter, history.textContent)
    counter++
    let exp = input.textContent 
    if (exp) { 
        input.textContent = eval(exp) 
        localStorage.setItem("id" + counter, input.textContent) 
        counter++
    } 
}

function percent() {
	history.textContent = input.textContent
	input.textContent = eval(input.textContent) / 100
}

function constant(name) {
	if(name == "pi") input.textContent = input.textContent + Math.PI.toFixed(8)
	if(name == "e") input.textContent = input.textContent + Math.E.toFixed(8)
}

function operation(name) {
	history.textContent = name + '(' + input.textContent + ')'
	if(name == "sqrt")
		input.textContent = Math.sqrt(eval(input.textContent))
	if(name == "sqr")
		input.textContent = Math.pow(eval(input.textContent), 2)
	if(name == "^-1")
		input.textContent = Math.pow(eval(input.textContent), -1)
}

function factorial(n) {
	history.textContent =  input.textContent + '!'
	return (n != 1) ? n * factorial(n - 1) : 1
}

function fact() {
	input.textContent = factorial(+eval(input.textContent))
}

function log() {
	history.textContent = 'lg(' + input.textContent + ')'
	input.textContent = Math.log10(eval(input.textContent)).toFixed(8)
}

document.querySelector('.type').addEventListener('click', function() {
	if(document.querySelector('.type').textContent == "deg")
		this.textContent = "rad"
	else if(document.querySelector('.type').textContent == "rad")
		this.textContent = "deg"
})

function f(name) {
	if(name == 'sin') {
		if(document.querySelector('.type').textContent == "deg")
			input.textContent = parseFloat(Math.sin(eval(input.textContent)/180*Math.PI).toFixed(8).toString())
		else
			input.textContent = parseFloat(Math.sin(eval(input.textContent)).toFixed(8).toString())
	}
	if(name == 'cos') {
		if(document.querySelector('.type').textContent == "deg")
			input.textContent = parseFloat(Math.cos(eval(input.textContent)/180*Math.PI).toFixed(8).toString())
		else
			input.textContent = parseFloat(Math.cos(eval(input.textContent)).toFixed(8).toString())
	}
	if(name == 'tan') {
		if(document.querySelector('.type').textContent == "deg")
			input.textContent = parseFloat(Math.tan(eval(input.textContent)/180*Math.PI).toFixed(8).toString())
		else
			input.textContent = parseFloat(Math.tan(eval(input.textContent)).toFixed(8).toString())
	}
	if(name == 'ctg') {
		if(document.querySelector('.type').textContent == "deg")
			input.textContent = parseFloat(1/Math.tan(eval(input.textContent)/180*Math.PI).toFixed(8).toString())
		else
			input.textContent = parseFloat(1/Math.tan(eval(input.textContent)).toFixed(8).toString())
	}
}

function invert() {
	input.textContent = -eval(input.textContent)
}

//for memory

let memory
let clipboard = []

function ms() {
    memory = parseFloat(input.textContent)
    return memory
}

function mr() {
	input.textContent = memory
}

function mc() {
    return memory = "0"
}

function madd() {
    const current = parseFloat(input.textContent)
    if (isNaN(memory) || memory == "") {
        console.error("Memory is empty")
    } else {
        history.textContent = current + "+" + memory
        let x = memory + current
        input.textContent = x
        clipboard.push(history.textContent)
        clipboard.push("= " + input.textContent + "\n")
    }
}

function msubtract() {
    const current = parseFloat(input.textContent)
    if (isNaN(memory) || memory == "") {
        console.error("Memory is empty")
    } else {
        history.textContent = current + "-" + memory
        let x = current - memory
        input.textContent = x
        clipboard.push(history.textContent)
        clipboard.push("= " + input.textContent + "\n")
    }
}

function conventer(){
	console.log(type)
	let items = document.querySelectorAll("div.item")

	for(let i of items){
		i.style = 'display: none'
	}
}

function weightConverterP(valNum) {
    document.getElementById("Grams").value = valNum / 0.0022046;
    document.getElementById("Kilograms").value = valNum / 2.2046;
    document.getElementById("Ton").value = valNum * 0.00045359237;

}

function weightConverterG(valNum) {
    document.getElementById("Pounds").value = valNum * 0.0022046;
    document.getElementById("Kilograms").value = valNum / 1000;

}

function weightConverterK(valNum) {
    document.getElementById("Pounds").value = valNum / 0.45359237;
    document.getElementById("Grams").value = valNum * 1000;
    document.getElementById("Ton").value = valNum / 1000;
}

function weightConverterT(valNum) {
    document.getElementById("Pounds").value = valNum / 0.00045359237;
    document.getElementById("Kilograms").value = valNum * 1000;
}

function lengthConverterC(valNum) {
    document.getElementById("Meters").value = valNum / 100;
    document.getElementById("Kilometers").value = valNum / 100000;
}

function lengthConverterM(valNum) {
    document.getElementById("cm").value = valNum / 0.01;
    document.getElementById("Kilometers").value = valNum / 1000;
}

function lengthConverterK(valNum) {
    document.getElementById("cm").value = valNum * 100000;
    document.getElementById("Meters").value = valNum * 1000;
}

function areaConverterK(valNum) {
    document.getElementById("m").value = valNum * 1000000;
    document.getElementById("acres").value = valNum * 247.105381;
}

function areaConverterA(valNum) {
    document.getElementById("km").value = valNum / 247.105381;
    document.getElementById("m").value = valNum / 0.00024711;

}
	
function areaConverterM(valNum) {
    document.getElementById("acres").value = valNum * 0.000247;
    document.getElementById("km").value = valNum / 1000000;
}
