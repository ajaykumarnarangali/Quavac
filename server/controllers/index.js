exports.getLocation = (req, res, next) => {
    const locations = [
        { name: "New York, USA", lat: 40.7128, lng: -74.0060 },
        { name: "London, UK", lat: 51.5074, lng: -0.1278 },
        { name: "Paris, France", lat: 48.8566, lng: 2.3522 },
        { name: "Tokyo, Japan", lat: 35.6895, lng: 139.6917 },
        { name: "Sydney, Australia", lat: -33.8688, lng: 151.2093 },
        { name: "Dubai, UAE", lat: 25.276987, lng: 55.296249 },
        { name: "Rio de Janeiro, Brazil", lat: -22.9068, lng: -43.1729 },
        { name: "Cape Town, South Africa", lat: -33.9249, lng: 18.4241 },
        { name: "Toronto, Canada", lat: 43.65107, lng: -79.347015 },
        { name: "Singapore", lat: 1.3521, lng: 103.8198 },
    ];
    let n = locations.length;
    let randomIndex = Math.floor(Math.random() * n);
    let randomLocation = locations[randomIndex];

    res.status(200).json({
        success: true,
        message: 'location got successfully',
        location: randomLocation
    })
}

exports.generateWaveData = (req, res, next) => {
    const chartData = [];
    const times = ["02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"];
    const numPointsPerTime = 30; // mini-points per time slot

    // Base wave parameters for each line
    const waveParams = [
        { amplitude: 10, offset: -60, frequency: 3, phaseShift: 0 }, // Top line
        { amplitude: 8, offset: -55, frequency: 3, phaseShift: 1 },  // Middle line
        { amplitude: 6, offset: -50, frequency: 3, phaseShift: 2 }   // Bottom line
    ];

    const totalPoints = times.length * numPointsPerTime;

    // Generate independent random offsets for each line per time block
    const blockOffsetsTop = times.map(() => Math.random() * 6 - 3);    // ±3
    const blockOffsetsMiddle = times.map(() => Math.random() * 6 - 3); // ±3
    const blockOffsetsBottom = times.map(() => Math.random() * 6 - 3); // ±3

    for (let i = 0; i < totalPoints; i++) {
        const timeIndex = Math.floor(i / numPointsPerTime);
        const subPointIndex = i % numPointsPerTime;

        // X-axis label: show main time only at first mini-point
        let name = subPointIndex === 0 ? times[timeIndex] : `${times[timeIndex]}-${subPointIndex}`;

        // Calculate independent sine waves + random mini fluctuations
        const FStella3313 = waveParams[0].offset
            + waveParams[0].amplitude * Math.sin(i * Math.PI / waveParams[0].frequency + waveParams[0].phaseShift)
            + blockOffsetsTop[timeIndex]
            + (Math.random() * 2 - 1); // ±1 random per point

        const FStella2630 = waveParams[1].offset
            + waveParams[1].amplitude * Math.sin(i * Math.PI / waveParams[1].frequency + waveParams[1].phaseShift)
            + blockOffsetsMiddle[timeIndex]
            + (Math.random() * 2 - 1);

        const VacStation = waveParams[2].offset
            + waveParams[2].amplitude * Math.sin(i * Math.PI / waveParams[2].frequency + waveParams[2].phaseShift)
            + blockOffsetsBottom[timeIndex]
            + (Math.random() * 2 - 1);

        chartData.push({
            name: name,
            FStella3313: parseFloat(FStella3313.toFixed(2)),
            FStella2630: parseFloat(FStella2630.toFixed(2)),
            VacStation: parseFloat(VacStation.toFixed(2)),
        });
    }

    res.status(200).json({
        success: true,
        message: 'data got successfully',
        waveData: chartData
    })
}