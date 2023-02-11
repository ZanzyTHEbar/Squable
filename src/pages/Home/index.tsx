import Counter from '@components/Counter'
import Navbar from '@components/Navbar'

const Home = () => {
    return (
        <div>
            <div class="flex">
                <Counter />
            </div>
            <Navbar />
        </div>
    )
}

export default Home
