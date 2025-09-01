exports.generateBarData = () => {
        const chartData = [];
        const baseValue = 2; // Minimum bar height
        const times = ["02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"];
        const numPointsPerTime = 3; // 5 sub-points per time slot

        for (let i = 0; i < times.length; i++) {
            const timeString = times[i];

            for (let j = 0; j < numPointsPerTime; j++) {
                let name;
                if (j === 0) {
                    // The first point uses only the main time label
                    name = timeString;
                } else {
                    // Subsequent points use the time label with a dash and index
                    name = `${timeString}-${j}`;
                }

                // Generate a random bar height
                const barValue = Math.round(baseValue + Math.random() * 9);

                chartData.push({
                    name: name,
                    "barValue": barValue,
                });
            }
        }

        return chartData;
    }