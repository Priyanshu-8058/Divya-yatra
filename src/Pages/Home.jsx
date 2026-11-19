import NavBar from "../components/NavBar";
import hero from "../assets/home.avif";
import SearchYatra from "../Components/SearchYatra";
import CharDhamJourney from "../Components/CharDhamJourney";
import Package from "../Components/Package";
import Footer from "./Footer";


function Home() {
    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-50 " >
                <NavBar />
            </div>
            
            <section className="relative mb-20 min-h-[500px]  bg-cover bg-center" style={{ backgroundImage: `url(${hero})` }}>
                <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(to right, rgba(10, 35, 75, 0.78) 0%, rgba(10, 35, 75, 0.4) 40%, transparent 70%)",
                    }}
                />
                <div className="relative z-10 mx-auto flex min-h-[450px]  w-full max-w-7xl flex-col justify-center gap-5 px-6">
                    <p className="text-xl text-orange-300 mt-10 ">— ॐ नमः शिवाय —</p>
                    <h1 className="text-4xl font-bold   md:text-6xl text-white font-serif">Discover the Divine
                    <span className="block text-orange-300 "> Char Dham Yatra</span></h1>
                    <p className="max-w-xl text-xl text-white text-xl">Embark on a spiritual journey to the sacred temples of Yamunotri, Gangotri, Kedarnath and Badrinath.</p>
                    <ul className="flex text-white gap-10 ">
                        <li><em className="text-yellow-400">✧</em> Sacred temples</li>
                        <li><em className="text-yellow-400">✧</em> Thoughtful packages</li>
                        <li><em className="text-yellow-400">✧</em> Travel with care</li>
                    </ul>
                </div>
                <div className="absolute left-1/2 top-full z-20 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 -translate-y-1/2">
                    <SearchYatra />
                </div>
            </section>

            <CharDhamJourney/>

            <Package/>

            <Footer/>
            
        </>
    )
}

export default Home;