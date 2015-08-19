var leslie = document.querySelectorAll(".buttons"); // go select all items in the HTML with class "buttons and shove them in the array "leslie"


for (var i =0 ; i < leslie.length; i++ ) { //cycle through everything in the leslie array
	leslie[i].addEventListener("click", //attach an event listener to each item
		function (){
			console.log(this.innerHTML); // console.log that item's inner HTML when clcked
		})
}
