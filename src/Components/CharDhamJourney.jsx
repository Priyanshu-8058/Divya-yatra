import Card from "./Card";
import YamunotriTemple from "../assets/Yamunotri-Temple.webp";
import GangotriTemple from "../assets/Gangotri-Temple.webp";
import KedarnathTemple from "../assets/Kedarnath-Temple.jpg";
import BadrinathTemple from "../assets/Badrinath-Temple.webp";

function CharDhamJourney() {
    return (
        <div className="mx-auto max-w-7xl min-h-[550px] px-6 flex flex-col text-center">
            <h2 className="text-gray-500 font-bold tracking-wide mt-5"><span className="text-orange-700 font-light">———</span> THE SACRED JOURNEY <span className="text-orange-700 font-light">———</span></h2>
            <h1 className="text-4xl font-bold " style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>Char Dham &amp; sacred temples</h1>
            <p className="text-gray-500 text-sm mt-2">Four divine destinations. One incredible journey. Explore the spiritual heart of India</p>

            <div className="flex flex-wrap justify-center gap-6 mt-10 ">
                <Card title="THE FIRST DHAM" heading="Yamunotri Temple" description="Dedicated to Goddess Yamuna" locations="Uttarkashi, Uttarakhand" imageUrl={YamunotriTemple} />
                <Card title="THE SECOND DHAM" heading="Gangotri Temple" description="Dedicated to Goddess Gangotri" locations="Uttarkashi, Uttarakhand" imageUrl={GangotriTemple} />
                <Card title="THE THIRD DHAM" heading="Kedarnath Temple" description="Dedicated to Lord Shiva" locations="Rudraprayag, Uttarakhand" imageUrl={KedarnathTemple} />
                <Card title="THE FOURTH DHAM" heading="Badrinath Temple" description="Dedicated to Lord Vishnu" locations="Chamoli, Uttarakhand" imageUrl={BadrinathTemple} />
            </div>
        </div>
    )
}

export default CharDhamJourney;