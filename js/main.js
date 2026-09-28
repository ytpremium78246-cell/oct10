// JavaScript for the workshop landing page

document.addEventListener('DOMContentLoaded', () => {
    // We will add interactive logic here for things like the FAQ accordion, Countdown Timer, etc.
    console.log("CountryEdu Landing Page Initialized!");
    
    // FAQ Accordion Interaction
    const faqHeaders = document.querySelectorAll('.faq-header');
    
    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentItem = header.parentElement;
            const isActive = currentItem.classList.contains('active');
            
            // Close all items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Open clicked item if it wasn't already open
            if (!isActive) {
                currentItem.classList.add('active');
            }
        });
    });

    // Countdown Timer Logic
    const hoursEl = document.getElementById('hours');
    const minsEl = document.getElementById('mins');
    const secsEl = document.getElementById('secs');

    if (hoursEl && minsEl && secsEl) {
        // Parse initial time from HTML
        let hours = parseInt(hoursEl.innerText, 10) || 0;
        let mins = parseInt(minsEl.innerText, 10) || 0;
        let secs = parseInt(secsEl.innerText, 10) || 0;
        
        let totalSeconds = (hours * 3600) + (mins * 60) + secs;
        
        const updateTimer = () => {
            if (totalSeconds <= 0) {
                // Optional: What happens when it hits zero?
                return; 
            }
            totalSeconds--;
            
            const h = Math.floor(totalSeconds / 3600);
            const m = Math.floor((totalSeconds % 3600) / 60);
            const s = totalSeconds % 60;
            
            hoursEl.innerText = h.toString().padStart(2, '0');
            minsEl.innerText = m.toString().padStart(2, '0');
            secsEl.innerText = s.toString().padStart(2, '0');
        };
        
        setInterval(updateTimer, 1000);
    }
});
