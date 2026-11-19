import NavBar from "../components/NavBar";
import Section from "../Components/Section";
import TempleCard from "../Components/TempleCard";
import Footer from "./Footer";
import YamunotriTemple from "../assets/Yamunotri-Temple.webp";
import GangotriTemple from "../assets/Gangotri-Temple.webp";
import KedarnathTemple from "../assets/Kedarnath-Temple.jpg";
import BadrinathTemple from "../assets/Badrinath-Temple.webp"; 
import Kashi from "../assets/Kashi-Temple.webp";
import NeelKanth from "../assets/Neelkanth-Temple.jpg";
import VaishnoDevi from "../assets/Vaishno-devi.png";
import Jagannath from "../assets/Jagannath-Temple.jpg";

function ExploreTemple() {
    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-50 " >
                <NavBar />
            </div>

            <Section title="Explore sacred temples" heading="Explore sacred temples" description="Meet the places, traditions and mountain paths that make every pilgrimage personal." />

            <div className="min-h-[1200px] mt-10">
                <div className="flex flex-row justify-between max-w-[1200px] m-auto">
                    <div className="flex gap-10">
                        <input type="text" placeholder="Search by temple or region.." className="border-2 p-3 rounded border-gray-200 text-sm min-w-[250px]"/>
                        <select name="destination" className="border-2 border-gray-200 p-3 rounded">
                            <option value="All-Destination">All destinations</option>
                            <option value="uttarakhan">Uttarakhand</option>
                            <option value="uttar-pradesh">Uttar Pradesh</option>
                            <option value="J&K">Jammu & Kashmir</option>
                            <option value="odisha">Odisha</option>
                        </select>
                    </div>

                    <h1 className="text-gray-500">8 sacred places</h1>

                </div>
                <div className="grid grid-cols-3 mt-10 gap-y-10 mx-auto max-w-[1280px]"> 
                    <TempleCard title="THE FIRST DHAM" heading="Yamunotri Temple" description="Dedicated to Goddess Yamuna" locations="Uttarkashi, Uttarakhand" imageUrl={YamunotriTemple}/>
                    <TempleCard title="THE SECOND DHAM" heading="Gangotri Temple" description="Dedicated to Goddess Gangotri" locations="Uttarkashi, Uttarakhand" imageUrl={GangotriTemple}/>
                    <TempleCard title="THE THIRD DHAM" heading="Kedarnath Temple" description="Dedicated to Lord Shiva" locations="Rudraprayag, Uttarakhand" imageUrl={KedarnathTemple}/>
                    <TempleCard title="THE FOURTH DHAM" heading="Badrinath Temple" description="Dedicated to Lord Vishnu" locations="Chamoli, Uttarakhand" imageUrl={BadrinathTemple}/>
                    <TempleCard title="A TIMELESS PILGRIMAGE" heading="Kashi Vishwanath" description="Dedicated to Lord Shiva" locations="Varanasi, Uttar Pradesh" imageUrl={Kashi}/>
                    <TempleCard title="HILL SHRINE" heading="Neelkanth Mahadev" description="Dedicated to Lord Shiva" locations="Pauri Garhwal, Uttarakhand" imageUrl={NeelKanth}/>
                    <TempleCard title="MOUNTAIN PILGRIMAGE" heading="Vaishno Devi" description="Dedicated to the Divine Mother" locations="Katra, Jammu & Kashmir" imageUrl={VaishnoDevi}/>
                    <TempleCard title="SACRED COAST" heading="Jagannath Temple" description="Dedicated to Lord Jagannath" locations="Puri, Odisha" imageUrl={Jagannath}/>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ExploreTemple;