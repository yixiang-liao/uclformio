let amount = ''; if (data.panel18Table3) { fetch(`http://127.0.0.1:8000/api/v1/project/${data.panel18Table3}`) .then(response => response.json()) .then(projectData => { amount = projectData.amount; data.panel22 = amount; }) .catch(error => console.error('Error fetching project data:', error));} value = amount; 
