document.addEventListener('DOMContentLoaded', function() {
    const currentDate = new Date();
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    document.getElementById('currentDate').textContent = currentDate.toLocaleDateString('en-US', options);
    
    const shortOptions = { month: 'numeric', day: 'numeric' };
    document.getElementById('currentShortDate').textContent = currentDate.toLocaleDateString('en-US', shortOptions);
    
    const randomLinks = [
        'Family Values',
        'Personal Growth',
        'Tech Insights',
        'Life Lessons'
    ];
    
    document.getElementById('randomLink').textContent = randomLinks[Math.floor(Math.random() * randomLinks.length)];
});