import NavBar from "../Components/NavBar";
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
      <div className="fixed left-0 right-0 top-0 z-50">
        <NavBar />
      </div>

      <Section
        title="Explore sacred temples"
        heading="Explore sacred temples"
        description="Meet the places, traditions and mountain paths that make every pilgrimage personal."
      />

      <div className="mt-10 min-h-[1200px]">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row">
            <input
              type="text"
              aria-label="Search by temple or region"
              placeholder="Search by temple or region..."
              className="w-full rounded border-2 border-gray-200 p-3 text-sm sm:w-auto sm:min-w-[250px]"
            />

            <select
              name="destination"
              aria-label="Filter by destination"
              className="rounded border-2 border-gray-200 p-3"
            >
              <option value="all">All destinations</option>
              <option value="uttarakhand">Uttarakhand</option>
              <option value="uttar-pradesh">Uttar Pradesh</option>
              <option value="jammu-and-kashmir">Jammu &amp; Kashmir</option>
              <option value="odisha">Odisha</option>
            </select>
          </div>

          <p className="text-gray-500">8 sacred places</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1280px] grid-cols-1 gap-x-6 gap-y-10 px-4 md:grid-cols-2 xl:grid-cols-3">
          <TempleCard
            title="THE FIRST DHAM"
            heading="Yamunotri Temple"
            description="Dedicated to Goddess Yamuna"
            locations="Uttarkashi, Uttarakhand"
            imageUrl={YamunotriTemple}
          />
          <TempleCard
            title="THE SECOND DHAM"
            heading="Gangotri Temple"
            description="Dedicated to Goddess Gangotri"
            locations="Uttarkashi, Uttarakhand"
            imageUrl={GangotriTemple}
          />
          <TempleCard
            title="THE THIRD DHAM"
            heading="Kedarnath Temple"
            description="Dedicated to Lord Shiva"
            locations="Rudraprayag, Uttarakhand"
            imageUrl={KedarnathTemple}
          />
          <TempleCard
            title="THE FOURTH DHAM"
            heading="Badrinath Temple"
            description="Dedicated to Lord Vishnu"
            locations="Chamoli, Uttarakhand"
            imageUrl={BadrinathTemple}
          />
          <TempleCard
            title="A TIMELESS PILGRIMAGE"
            heading="Kashi Vishwanath"
            description="Dedicated to Lord Shiva"
            locations="Varanasi, Uttar Pradesh"
            imageUrl={Kashi}
          />
          <TempleCard
            title="HILL SHRINE"
            heading="Neelkanth Mahadev"
            description="Dedicated to Lord Shiva"
            locations="Pauri Garhwal, Uttarakhand"
            imageUrl={NeelKanth}
          />
          <TempleCard
            title="MOUNTAIN PILGRIMAGE"
            heading="Vaishno Devi"
            description="Dedicated to the Divine Mother"
            locations="Katra, Jammu & Kashmir"
            imageUrl={VaishnoDevi}
          />
          <TempleCard
            title="SACRED COAST"
            heading="Jagannath Temple"
            description="Dedicated to Lord Jagannath"
            locations="Puri, Odisha"
            imageUrl={Jagannath}
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ExploreTemple;