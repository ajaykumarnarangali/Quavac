exports.generateAreaData = () => {
        const chartData = [];
        const times = ["02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"];
        const numPointsPerTime = 3; // sub-points per time slot
        const baseValue = 0;         // flat value for area
        const maxValue = 0.8;       // peak value less than 0.4

        // Define wave range indices
        const waveStartIndex = times.indexOf("10:00");
        const waveEndIndex = times.indexOf("12:00");
        const wavePoints = (waveEndIndex - waveStartIndex + 1) * numPointsPerTime;

        for (let i = 0; i < times.length; i++) {
            const timeString = times[i];

            for (let j = 0; j < numPointsPerTime; j++) {
                const name = j === 0 ? timeString : `${timeString}-${j}`;
                let value = baseValue;

                // Apply wave only in 10:00–12:00 range
                if (i >= waveStartIndex && i <= waveEndIndex) {
                    const subIndex = (i - waveStartIndex) * numPointsPerTime + j;

                    // Smooth sine wave (0 → π), scaled to maxValue
                    const sineFraction = Math.sin((subIndex / (wavePoints - 1)) * Math.PI);
                    value = parseFloat((baseValue + sineFraction * maxValue).toFixed(2));
                }

                chartData.push({ name, areaValue: value });
            }
        }

        return chartData;
}