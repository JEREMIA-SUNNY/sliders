import Image from 'next/image'
import {Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function Clients() {

  const logos = [
    "/clients/aloweda.png",
    "/clients/Amrita.png",
    "/clients/ApolloPharmacy.png",
    "/clients/aramusk.png",
    "/clients/Bagrrys.png",
    "/clients/Birdsong.png",
    "/clients/Blulife.png",
    "/clients/Cavemannaturals.png",
    "/clients/CIPLA.png",
    "/clients/Clearica.png",
    "/clients/CortisMedtech.png",
    "/clients/CumberlandBiotherapeuticslogo.png",
    "/clients/Curlup.png",
    "/clients/Deconstruct.png",
    "/clients/DowntoEarth.png",
    "/clients/figaro.png",
    "/clients/herbcience.png",
    "/clients/Iluvia.png",
    "/clients/KAPL.png",
    "/clients/kweh.png",
    "/clients/menmoms.png",
    "/clients/Meyer.png",
    "/clients/Misters.png",
    "/clients/mvr.png",
    "/clients/Nutriplus.png",
    "/clients/Ogaan.png",
    "/clients/origo.png",
    "/clients/Piramal.png",
    "/clients/plix.png",
    "/clients/purplle.png",
    "/clients/Raeka.png",
    "/clients/RhettHealthcare.png",
    "/clients/roar.png",
    "/clients/SamiLabs.png",
    "/clients/ShatayuWellness.png",
    "/clients/Stempeutics.png",
    "/clients/StridesArcolab.png",
    "/clients/SudarshanChemicals.png",
    "/clients/TimelessBeautySecrets.png",
    "/clients/truefrog.png",
    "/clients/Vedaearth.png",
    "/clients/Wipro.png",
    "/clients/XoCurls.png"
  ]

  return (
    <section className="p-4 md:pt-12 border relative bg-white ">
      <h1 className="md:container mx-auto pb-12 text-4xl font-light tracking-wide text-green-900">OUR PARTNERS</h1>

      <div className="md:container mx-auto pt-12 pb-24">
        <Swiper
            modules={[Autoplay]}
            slidesPerView={4}
            spaceBetween={40}
            slidesPerGroup={4}
            breakpoints={{
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 60,
                slidesPerGroup: 6
              },
            }}
            autoplay={true}
            loop={true}
            speed={500}
        >
          {logos.map((x, index) => (
            <SwiperSlide key={index}>
              <div key={index} className='h-36 w-auto relative cursor-pointer'>
                <Image unoptimized={true} layout='fill' alt="" src={x} className='absolute inset-0 object-contain'/>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}