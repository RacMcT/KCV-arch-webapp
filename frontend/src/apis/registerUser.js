

fetch('/api/registerUser', { method: 'POST', 

body: JSON.stringify(data), // data can be `string` or {object}!

headers:{ 'Content-Type': 'application/json' } })

.then(res => res.json())

.catch(error => console.error('Error:', error))

.then(response => console.log('Success:', response));
