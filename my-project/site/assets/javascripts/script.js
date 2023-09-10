// document.getElementById('getData').addEventListener('click', getData);
document.getElementById('getData').addEventListener('click', getData);

function dummyImage(){
    const firstcard = document.getElementById('first-card');
    const secondcard = document.getElementById('second-card');
    const carddiv = document.getElementById('img-template');
    
    carddiv.style.width = 'auto';
    carddiv.style.background = 'none';
    firstcard.style.display = 'block';
    secondcard.style.display = 'block';
    firstcard.src ='../assets/images/flashcard1.png';
    secondcard.src = '../assets/images/flashcard2.png';
}

function getData() {
    // Define the API endpoint URL
    const apiUrl = 'https://0c37-128-205-33-18.ngrok-free.app/generate/';
    
    // Get the value from the input field
    const inputValue = document.getElementById('gradiotext').value;

    // Add the input value as a parameter in the URL
    const apiUrlWithParam = `${apiUrl}${inputValue}`;
    console.log('apiwithurl is ', apiUrlWithParam)

    // Define headers for the request
    const headers = new Headers({
        'Accept': 'application/json', // Specify that you expect JSON in the response
        'Content-Type': 'application/json', // Specify the content type of the request (if applicable)
        // Add any additional headers if needed
    });

    // Define options for the fetch request
    const options = {
        method: 'GET',
        headers: headers,
    };
    // Make a GET request using fetch
    fetch(apiUrlWithParam, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the response body as JSON
        })
        .then(data => {
            // Handle the data
            displayData(data);
        })
        .catch(error => {
            // Handle errors
            console.error('Error:', error);
        });
}

function displayData(data) {
    const firstcard = document.getElementById('first-card');
    const secondcard = document.getElementById('second-card');
    // item1Image.src = 'data:image/png;base64,' + data.pair.item1.b64_image;
    // item2Image.src = 'data:image/png;base64,' + data.pair.item2.b64_image;
    // Assuming data.base64Image contains the base64 encoded image
    const base64Image = data.base64Image;
    item1Image.src ='../images/flashcard1.png';
    item2Image.src = '../images/flashcard2.png';
    // Set the background image of the image container
    //imageContainer.style.backgroundImage = `url(data:image/jpeg;base64,${base64Image})`;

    resultElement.style.display = 'block';
}
