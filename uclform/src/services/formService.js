export const fetchFormData = async (apiUrl) => {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch form data');
    }
    return await response.json();
  };
  