import Image from "next/image";
import "./globals.css";
import NasaFooter from "./components/nasafooter";
import Link from "next/link";

export default function Home() {
  const isaacspage = "https://iluengas.github.io/isaacluengas/";
  const apodData = {
    url: "/samplepic.png",
    copyright: "John Sarkissian",
    date: "2024-03-01",
    explanation:
      "Murriyang, the CSIRO\u2019s Parkes Radio Telescope, points toward a nearly Full Moon in this image from New South Wales, Australia, planet Earth. Bathed in moonlight, the 64 meter dish is receiving weak radio signals from Odysseus, following the robotic lander's February 22 touch down some 300 kilometers north of the Moon's south pole. The landing of Odysseus represents the first U.S. landing on the Moon since the Apollo 17 mission in 1972. Odysseus' tilted orientation on the lunar surface prevents its high-gain antenna from pointing toward Earth. But the sensitivity of the large, steerable Parkes dish significantly improved the reception of data from the experiments delivered to the lunar surface by the robotic moon lander. Of course the Parkes Radio Telescope dish became famous for its superior lunar television reception during the Apollo 11 mission in 1969, allowing denizens of planet Earth to watch the first moonwalk.",
    title: "Odysseus and The Dish",
  };
  return (
    <main className="flex flex-col items-center justify-center w-screen">
      <div className="bg-white border border-black h-fit w-full text-black text-xl lg:text-3xl font-bold py-2 px-4">
        <h2>
          An unoffocial site for NASA&apos;s Astronomy Picture of the Day (APOD)
        </h2>
      </div>
      <div className="w-full">
        {apodData && (
          <div className="apodImage w-full bg-black">
            <img
              src={apodData.url}
              alt={apodData.title}
              className="w-full h-full"
            />
            <div className="description">
              <h2 className=" text-3xl md:text-4xl lg:text-6xl font-bold">
                {apodData.title}
              </h2>
              <p className=" mt-4 text-xs md:text-sm lg:text-base font-normal">
                {apodData.explanation}
              </p>
              <p className=" mt-4 text-base md:text-lg lg:text-xl font-bold bg-red-600 p-3 rounded-md w-fit flex justify-center text-center">
                {apodData.date}, {apodData.copyright}
              </p>
            </div>
          </div>
        )}
        <NasaFooter />
        <footer className="bg-black text-white h-32 flex items-start pt-8 pl-10">
          <p className="w-1/2">&copy; 2024 Isaac&apos;s Next.js App</p>
          <Link
            className=" w-1/2 flex justify-end pr-10 font-bold hover:text-gray-300"
            href={isaacspage}
          >
            Isaac&apos;s Portfolio Page
          </Link>
        </footer>
      </div>
    </main>
  );
}
