import Map from '../components/Map'
import Header from '../components/Header'
import LineChart from '../components/LineChart'
import Graph from '../components/Graph'

function Home() {
    return (
        <div className='w-full min-h-screen bg-[#303030]'>
            <Header />
            <Map />
            <LineChart />
            <Graph />
        </div>
    )
}

export default Home