	// function for money
		function willkommen(nameInput) {
			var a = document.getElementById('valueA').value;
			var b = document.getElementById('valueB').value;
			var x = a - b 
			var y = Math.abs(x)
			var v = y + 1
			var z = v * 13
			var round_z = z.toFixed(2)
			window.alert("Your Total is " + round_z + "₱!" + " Have a nice day!" );
			document.getElementById('area').innerHTML=' Total: '+ round_z + '₱';
		}
		function vater(nameInput) {
			var a = document.getElementById('valueA').value;
			var b = document.getElementById('valueB').value;
			var x = a - b 
			var y = Math.abs(x)
			var v = y + 1
			var z = v * 13 * 0.8
			var round_z = z.toFixed(2)
			window.alert("Your Discounted Total is " + round_z + "₱!" + " Have a nice day!");
			document.getElementById('area').innerHTML=' Total: '+ round_z + '₱';
		}