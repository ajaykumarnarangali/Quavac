const utils = require('../utils/index');

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
    const chartData = utils.generateWave();
    res.status(200).json({
        success: true,
        message: 'data got successfully',
        waveData: chartData
    })
}

exports.generateGraphData = (req, res, next) => {
    const barData = utils.generateBarData();
    const tideData = utils.generatTideData();
    const areaData = utils.generateAreaData();

    const combinedData = [];

    const length = Math.min(barData.length, tideData.length, areaData.length);
    for (let i = 0; i < length; i++) {
        combinedData.push({
            name: barData[i].name,
            barValue: barData[i].barValue,
            tide: tideData[i].tide,
            areaValue: areaData[i].areaValue
        });
    }

    res.status(200).json({
        success: true,
        message: 'graphdata fetched successfully',
        combinedData
    });
}