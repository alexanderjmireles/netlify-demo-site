// Display the current date on the page
document.addEventListener('DOMContentLoaded', function() {
    const options = { 
        weekday: 'long',
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', options);
    
    document.getElementById('date').textContent = formattedDate;
});