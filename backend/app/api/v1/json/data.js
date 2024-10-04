const ownerId = data.panel3Table2;
if (ownerId) {
  const url = `http://127.0.0.1:8000/api/v1/project1_1_vendor/${ownerId}`;
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const items = data.map((project) => ({
          label: project.name,
          value: project.id,
        }));
        resolve(items);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        reject(error);
      });
  });
} else {
  console.log("Owner ID is not selected yet");
  return [];
}
