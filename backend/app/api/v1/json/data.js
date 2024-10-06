if (data["panelTable13 "] === true) {
  const url = "http://127.0.0.1:8000/api/v1/project1_3_vendor/12 ";
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          console.error("Network response was not ok ", response);
          throw new Error("Network response was not ok ");
        }
        return response.json();
      })
      .then((data) => {
        if (data.length === 0) {
          console.warn("No vendor data found ");
        }
        const items = data.map((project) => ({
          label: project.name,
          value: project.id,
        }));
        resolve(items);
      })
      .catch((error) => {
        console.error("Error fetching vendors: ", error);
        reject(error);
      });
  });
} else {
  console.log("Owner ID is not selected yet ");
  return [];
}
if (data["panelTable13 "] === true) {
  const url = "http://127.0.0.1:8000/api/v1/project1_3_vendor/12 ";
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          console.error("Network response was not ok ", response);
          throw new Error("Network response was not ok ");
        }
        return response.json();
      })
      .then((data) => {
        if (data.length === 0) {
          console.warn("No vendor data found ");
        }
        const items = data.map((project) => ({
          label: project.name,
          value: project.id,
        }));
        resolve(items);
      })
      .catch((error) => {
        console.error("Error fetching vendors: ", error);
        reject(error);
      });
  });
} else {
  console.log("Clearing vendor field as checkbox is unchecked ");
  resolve([]);
  data["panelTable30 "] = " ";
}
