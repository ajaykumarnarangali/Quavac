import { useState, useEffect } from 'react';
import {
  ComposedChart, Line, Bar, Area, XAxis, YAxis, Legend, ResponsiveContainer, ReferenceLine
} from 'recharts'


function Graph() {

  const [combinedData, setCombinedData] = useState([]);

  useEffect(() => {
    const fetchGraphData = async () => {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/graph-data`);
      const data = await res.json();
      if (data?.combinedData) {
        setCombinedData(data?.combinedData)
      }
    };

    fetchGraphData();
  }, []);

  const refLines = [
    { y: 3, labels: [3, 2, 0.4] },
    { y: 6, labels: [6, 5, 0.48] },
    { y: 9, labels: [9, 8, 0.56] },
    { y: 12, labels: [12, 10, 0.64] },
    { y: 15, labels: [15, 12, 0.72] },
  ];
  const xData = ["02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"]


  return (
    <div className='px-4 py-12 w-full overflow-x-scroll h-[400px]'>
      <div className='px-4 py-2 lg:w-full bg-subHeadColor  w-[1000px]'>
        <h1 className='text-white text-sm font-semibold'>Valve activations</h1>
      </div>
      <div className='lg:w-full h-full px-4 bg-subHeadColor overflow-x-scroll w-[1000px]'>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={combinedData} barCategoryGap={0} margin={{ top: 50, right: 150, bottom: 20 }}>
            <XAxis dataKey="name" ticks={xData} />

            <YAxis yAxisId="bar" hide={true} domain={[2, 18]} />
            <YAxis yAxisId="area" hide={true} domain={[0, 1]} />
            <YAxis yAxisId="wave" hide={true} domain={[0, 14]} />

            {refLines.map((line, index) => (
              <ReferenceLine
                key={index}
                y={line.y}
                stroke="#616162"
                label={({ viewBox }) => (
                  <>
                    <text x={viewBox.x + viewBox.width + 10} y={viewBox.y - 5} fill="#d9d9d9" fontSize={12}>
                      +{line.labels[0]}
                    </text>
                    <text x={viewBox.x + viewBox.width + 50} y={viewBox.y - 5} fill="#d9d9d9" fontSize={12}>
                      {line.labels[1]} mm
                    </text>
                    <text x={viewBox.x + viewBox.width + 100} y={viewBox.y - 5} fill="#d9d9d9" fontSize={12}>
                      {line.labels[2]}
                    </text>
                  </>
                )}
              />
            ))}
            <Legend
              wrapperStyle={{
                fontSize: 10,
                fontWeight: 'semi-bold',
                padding: '2px'
              }}
            />
            <Bar dataKey="barValue" fill="#226b6c" fillOpacity={0.85} stroke="#226b6c" name="Overall activations" />
            <Area dataKey="areaValue" fill='#15aedb' stroke='#15aedb' name='Rainmeter(mm)' />
            <Line dataKey="tide" stroke='#978c30' name='Tide(ft)' dot={false} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Graph