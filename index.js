document.getElementById('startButton').addEventListener('click', function() {
    const imageUrl = 'https://itechinfinite.com/internet-speed-img.png'; // Replace with a real image URL
    const fileSizeInBytes = 11402446; // Replace with the actual file size in bytes

    const startTime = new Date().getTime();

   
    fetch(imageUrl, { method: 'GET', cache: 'no-cache' })
        .then(response => response.blob())
        .then(blob => {
            console.log(blob)
            const endTime = new Date().getTime();
            const durationInSeconds = (endTime - startTime) / 1000;
            const bitsLoaded = fileSizeInBytes * 8;
            const speedBps = bitsLoaded / durationInSeconds;
            const speedMbps = (speedBps / (1024 * 1024)).toFixed(2);
            
            document.getElementById('downloadSpeed').innerText = `Download Speed: ${speedMbps} Mbps`;
        })
        .catch(error => {
            console.error('Error fetching the image:', error);
            document.getElementById('downloadSpeed').innerText = 'Error calculating speed';
        });
});

async function init() {
    
    const awaitData = await axios.get('https://itechinfinite.com/internet-speed-img.png')
    console.log('test', awaitData.blob())
}

init()
