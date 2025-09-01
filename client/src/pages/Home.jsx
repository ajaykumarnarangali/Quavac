import Map from '../components/Map'
import Header from '../components/Header'
import LineChart from '../components/LineChart'

function Home() {
    return (
        <div className='w-full min-h-screen bg-[#303030]'>
            <Header />
            {/* <Map /> */}
            <LineChart />
        </div>
    )
}

export default Home