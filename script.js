const price = document.querySelector(`#price`);
const people = document.querySelector(`#people`);
const tip = document.querySelector(`#tip`);
const error = document.querySelector(`.error`);
const countBtn = document.querySelector(`.count`);
const costInfo = document.querySelector(`.cost-info`);
const cost = document.querySelector(`.cost`);

// pobrane

const showBill = () => {
	if (price.value == '' || people.value == '') {
		// jeżeli sa puste pola kwota oraz ilość osób:
		error.textContent = `Uzupełnij wszystkie pola !`; // uruchamia error (paragraf) z treścią
		costInfo.style.display = 'none'; // usuwa informacje o łącznej kwocie - nie moze byc blad i koszt rachunku
	} else {
		error.textContent = ``; // usuwa error textContent
		countBill(); // uruchamia funkcje countBill
	}
};

const countBill = () => {
	const newPrice = parseFloat(price.value); // newPrice = PARSEFLOAT -> pokazuje liczbe z przecinkami
	const newPeople = parseInt(people.value); // newPeople - liczba całkowita - stąd parseInt
	const newTip = parseFloat(tip.value); // napiwek - parseFloat -> liczba z przecinkami, odnosimy sie do option value
	const sum = (newPrice + newPrice * newTip) / newPeople; // sum - suma łączna - wzór do wyliczenia

	costInfo.style.display = 'block'; // pokaz blokowo nasz paragraf z klasą .cost-info (cena)
	cost.textContent = sum.toFixed(2); // zaokrąglaj go do 2 miejsc po przecinku
};
// listener na button wywołujący funkcję showBill --> która wywołuje funkcje countBill
countBtn.addEventListener(`click`, showBill);

//voila ;)
