export const fetchUser = async (apiUrl, searchTerm) => {
    const response = await fetch(apiUrl, { method: 'GET', headers: { Authorization: `Bearer ` }})
    const jsonData = await response.json();
    console.log(jsonData);
}