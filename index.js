function updateDateTime() {
            const currentTimeUTCElement = document.querySelector('[data-testid="currentTimeUTC"] span');
            const currentDayElement = document.querySelector('[data-testid="currentDay"] span');

            const now = new Date();
            const utcTime = now.toUTCString().split(' ')[4]; // Extract the time part in UTC

            const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const currentDay = daysOfWeek[now.getUTCDay()];

            currentTimeUTCElement.textContent = utcTime;
            currentDayElement.textContent = currentDay;
        }

        // Update the date and time immediately when the page loads
        updateDateTime();

        // Update the date and time every second
        setInterval(updateDateTime, 1000);