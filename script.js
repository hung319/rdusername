document.addEventListener('DOMContentLoaded', generateUsername);
document.getElementById('generate-btn').addEventListener('click', generateUsername);
document.getElementById('username-display').addEventListener('click', copyToClipboard);

function generateUsername() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let username = '';
    
    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        username += characters[randomIndex];
    }
    
    document.getElementById('username-display').innerText = username;
}

function copyToClipboard() {
    const username = document.getElementById('username-display').innerText;
    if (username) {
        navigator.clipboard.writeText(username).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    }
}
