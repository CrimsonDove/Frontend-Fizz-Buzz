//dummy data given to me
//All of these references and no Solaris?
table_data = [ {first_name : 'Rose',
					last_name  : 'Tyler',
					home       : 'Earth' },
				{ first_name : 'Zoe',
					last_name  : 'Heriot',
					home       : 'Space Station W3'},
				{ first_name : 'Jo',
					last_name  : 'Grant',
					home       : 'Earth'},
				{ first_name : 'Leela',
					last_name  : null,
					home       : 'Unspecified'},
				{ first_name : 'Romana',
					last_name  : null,
					home       : 'Gallifrey'},
				{ first_name : 'Clara',
					last_name  : 'Oswald',
					home       : 'Earth'},
				{ first_name : 'Adric',
					last_name  : null,
					home       : 'Alzarius'},
				{ first_name : 'Susan',
					last_name  : 'Foreman',
					home       : 'Gallifrey'} ];

//create a simple class in order not to confuse functions
class tableLoader {

	static requestData(){
		//i felt pretending this was a network call made more sense
		return table_data;
	}

	static loadDataInto(tableID){
		var target = document.getElementById(tableID);

		if(target === null ){
			alert("Something Happened!");
			console.log("Error: Table ID Not Found!");
		} else {
			//table exists
			
			//"obtain data from server"
			var data = this.requestData();

			//check "valid"
			if( data === null || data.constructor !== Array || data.length < 1){
				alert("Something Happened!");
				console.log("Error: Invalid Table Data");
			} else {
				//valid data
				
				//Delete all rows except the header to prevent data duplication
				while(target.rows[1]) target.deleteRow(1);

				//itterate through data	set and drop into the table
				for(var user in data){
					var row 	= target.insertRow();

					var fName 	= row.insertCell(0); fName.innerHTML = data[user].first_name;
					var lName 	= row.insertCell(1); lName.innerHTML = data[user].last_name;
					var home 	= row.insertCell(2); home.innerHTML  = data[user].home;	
				}

				//make the table visible
				//pretty sure in this rare case it's faster for force block, rather than get id, check, compare, then modify		
				var tableParentId = document.getElementById(tableID).parentNode.id;
				document.getElementById(tableParentId).style.display = "block";
				
			}

		}

	}

}