async function handleFileUpload(event) {
    const loader = document.getElementById("loader-container");
    loader.style.display = "flex";

    const file = event.target.files[0];

    if (!file) {
        alert('Please select a PDF file.');
        return;
    }
    // This is a dummy api key 😎
    const apiKey = '8726d0e9c5b16722a784d7662cba921e793e7ae43f0ef0633976422885dc8fe0';

    const formData = new FormData();
    formData.append('file', file);

    const requestOptions = {
        method: 'POST',
        headers: {
            'API-Key': apiKey, 
        },
        body: formData,
    };

    try {
        const response = await fetch('http://127.0.0.1:5000/api/parse_resume', requestOptions);

        const result = await response.json(); 

        if (!response.ok) {
            loader.style.display = "none";
            alert(`error: ${result.error}`);
        }

        loader.style.display = "none";
        document.getElementById('name').value = result.name || '';
        document.getElementById('email').value = result.email || '';
        document.getElementById('phone').value = result.phone || '';
        document.getElementById('skills').value = result.skills || '';
        document.getElementById('city').value = result.city || '';

    } catch (error) {
        loader.style.display = "none";
        alert('Error uploading file:', error);
    }
}

document.getElementById('resumeFile').addEventListener('change', handleFileUpload);

document.getElementById('submitBtn').addEventListener('click', function() {
    document.getElementById('parseResume').style.display = 'none';
    document.getElementById('confirmationMessage').style.display = 'block';
});