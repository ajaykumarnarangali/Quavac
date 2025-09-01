import { useState, useEffect } from 'react';
import {
    LineChart, Line, XAxis, YAxis, ReferenceLine, ResponsiveContainer
} from 'recharts'

function LineChartComp() {

    const [chartData, setChartdata] = useState([]);
    useEffect(() => {
        const fetchWaveData = async () => {
            const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/wave-data`);
            const data = await res.json();
            if (data?.waveData) {
                setChartdata(data?.waveData)
            }
        };

        fetchWaveData();
    }, []);

    const yData = [-80, -70, -60, -50, -40]
    const xData = ["02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"]

    return (
        <div className='px-4 py-12 w-full h-[400px]'>
            <div className='px-4 py-2 w-full bg-subHeadColor'>
                <h1 className='text-white text-sm font-semibold'>Vaccum In area</h1>
            </div>
            <div className='w-full h-full px-4 bg-subHeadColor'>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                        <XAxis dataKey="name" padding={{ left: 30, right: 30 }} ticks={xData} />
                        <YAxis domain={[-90, -30]} reversed={true} hide={true} />

                        {yData.map((y, index) => (
                            <ReferenceLine
                                key={index}
                                y={y}
                                stroke="#616162"
                                label={{
                                    value: `${y} kPa`,
                                    position: 'insideTopRight',
                                    fill: '#d9d9d9',
                                    fontSize: 12,
                                    fontWeight: 'semi-bold',
                                }}
                            />
                        ))}

                        <Line type="monotone" dataKey="FStella3313" stroke='#dc5859' dot={false} />
                        <Line type="monotone" dataKey="FStella2630" stroke='#85d675' dot={false} />
                        <Line type="monotone" dataKey="VacStation" stroke='#2f8d8c' dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default LineChartComp