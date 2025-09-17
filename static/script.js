document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('prediction-form');
    const resultContainer = document.getElementById('result-container');
    const predictionResult = document.getElementById('prediction-result');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

    
        const data = {
            sleep_hours: document.getElementById('sleep-hours').value,
            age: document.getElementById('age').value,
            daily_usage_hours: document.getElementById('daily-usage-hours').value,
            academic_performance: document.getElementById('academic-performance').value,
            apps_used_daily: document.getElementById('apps-used-daily').value,
            time_on_social_media: document.getElementById('time-on-social-media').value,
            weekend_usage_hours: document.getElementById('weekend-usage-hours').value,
            phone_checks_per_day: document.getElementById('phone-checks-per-day').value,
            time_on_gaming: document.getElementById('time-on-gaming').value
        };

        try {
            const response = await fetch('http://127.0.0.1:5000/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Network response was not ok');
            }

            const result = await response.json();
            predictionResult.textContent = result.addiction_level;
            resultContainer.classList.remove('hidden');

        } catch (error) {
            console.error('Error:', error);
            predictionResult.textContent = `Error: ${error.message}`;
            resultContainer.classList.remove('hidden');
        }
    });
});