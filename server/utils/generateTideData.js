exports.generatTideData = () => {
        const chartData = [];
        const times = ["02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"];
        const numPointsPerTime = 3; // sub-points per time slot

        const minValue = 2;
        const maxValue = 8;
        const amplitude = (maxValue - minValue) / 2; // amplitude of sine wave
        const offset = minValue + amplitude; // vertical offset to center wave

        const totalPoints = times.length * numPointsPerTime;

        for (let i = 0; i < times.length; i++) {
            const timeString = times[i];

            for (let j = 0; j < numPointsPerTime; j++) {
                const name = j === 0 ? timeString : `${timeString}-${j}`;
                const pointIndex = i * numPointsPerTime + j;

                // Sine wave calculation
                const tide = parseFloat((offset + amplitude * Math.sin((pointIndex / totalPoints) * 2 * Math.PI * 2)).toFixed(2));
                // The "* 2" makes 2 full waves across all points, adjust for frequency

                chartData.push({
                    name,
                    tide
                });
            }
        }

        return chartData;
}