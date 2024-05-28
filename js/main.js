
document.getElementById('loadButton').addEventListener('click', loadPresidentsData);

function loadPresidentsData() {
	const xhr = new XMLHttpRequest();
	const url = 'https://raw.githubusercontent.com/hitch17/sample-data/master/presidents.json';

	xhr.open('GET', url, true);
	xhr.onload = function () {
		if (xhr.status === 200) {
			const presidents = JSON.parse(xhr.responseText);
			const tableBody = document.querySelector('#presidentsTable tbody');
			tableBody.innerHTML = '';

			presidents.forEach((president, index) => {
				const row = document.createElement('tr');
				row.innerHTML = `
					<td>${index + 1}</td>
					<td>${president.president}</td>
					<td>${president.birth_year}</td>
					<td>${president.death_year || 'N/A'}</td>
					<td>${president.took_office || 'N/A'}</td>
					<td>${president.left_office || 'N/A'}</td>
					<td>${president.party || 'N/A'}</td>
				`;
				tableBody.appendChild(row);
			});
		} else {
			console.error('Error loading data');
		}
	};
	xhr.onerror = function () {
		console.error('Request error');
	};
	xhr.send();
}