// Resets 6co widget
function reset() {
	var checkboxes = document.getElementsByClassName('form-check-input')
	var selects = document.getElementsByClassName('custom-select')
	var filters = document.getElementsByClassName('image-filter');
	var colors = ['violet','blue','green','yellow','orange','red'];

	for (let i = 0; i<checkboxes.length; i++) {
		checkboxes[i].checked = false;
	}

	for (let i = 0; i<selects.length; i++) {
		selects[i].value = "";
	}

	colors.forEach(function(color, i) {
		Object.assign(filters[i].style,{display:'none', backgroundColor:'none'});
	})
}


// Turns filter on and off
function check(filter) {
	filter = document.getElementsByClassName(filter)[0];
	(filter.style.display != 'block') ? filter.style.display = 'block' : filter.style.display = 'none';
}



// gets the value selected on the dropdown and applies it to image class
function selectColor(e, id){
	document.getElementsByClassName(id)[0].style.backgroundColor = e;
}



// Update the brightness of the slider
function updateSlider(range, filter) {
	filter = document.getElementsByClassName(filter)[0];
	filter.style.WebkitFilter = 'brightness('+ range +')'; 
}



// 

function selectObject(selected) {

	let object = {
	  		m63: ['u', 'g', 'r', 'i', 'z', 'y'],
	  		m33: ['u', 'g', 'r', 'i', 'z', 'y'],
	  		m101: ['u', 'g', 'r', 'y', 'z'],
	  		ngc3718: ['u', 'g', 'r', 'z', 'y'],
	  		ngc6520: ['u', 'g', 'r', 'z', 'y'],
	  		ngc6946: ['u', 'g', 'r', 'y'],
	  		b163: ['g', 'r', 'i', 'y'],
	  		cg4: ['g', 'r', 'y', 'z'],
	  		m78: ['g', 'i', 'r', 'y'],
	  		m51: ['g', 'r', 'i', 'z', 'y']

		};

	for (let i = 0; i<object[selected].length; i++) {
		document.getElementsByClassName('image-filter')[i].style.backgroundImage = "url('assets/" + selected + "/" + selected + "-" + object[selected][i] + ".png')";
		document.getElementsByClassName('filter-label')[i+3].innerHTML = object[selected][i]
		document.getElementsByClassName('range')[i+1].style.backgroundColor = '#4b6cb7';
		document.getElementsByClassName('filter')[i+3].style.pointerEvents = 'auto';


		
	}
	for (let i = object[selected].length; i<6; i++) {
		document.getElementsByClassName('image-filter')[i].style.backgroundImage = 'none';
		document.getElementsByClassName('image-filter')[i].style.display = 'none';
		document.getElementsByClassName('filter-label')[i+3].innerHTML = "";
		document.getElementsByClassName('filter')[i+3].style.pointerEvents = 'none';
		document.getElementsByClassName('range')[i+1].style.backgroundColor = 'grey';
		document.getElementsByClassName('image-filter')[i].style.backgroundColor = 'transparent'
		document.getElementsByClassName('form-check-input')[i+3].checked = false;

	}			
}