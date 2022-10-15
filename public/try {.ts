try {
  const response = await fetch("https://youtube-v31.p.rapidapi.com/search?part=snippet&order=date&q=reactjs", {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e3c96572ecmshfc2ce730df37f1cp15eabcjsnc3010742d0fa',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  });

  if (response.ok) {
    const result = await response.json();
    console.log(result);
  }
} catch (err) {
  console.error(err);
}