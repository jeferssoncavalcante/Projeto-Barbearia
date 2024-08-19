import Search from "./_components/search";
import Header from "./_components/header"
import Image from "next/image";
import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/barbershop-items";
import QuickSearch from "./_components/quicksearch";
import BookingItem from "./_components/booking-item";

const Home = async () => {
  
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    }
  })

  return (
    <div>
        <Header/>
        <div className="p-5">
          {/*TEXT*/}
          <h2 className="text-xl font-bold">Olá, Jeferson!</h2>
          <p>Quarta-Feira, 07 de Agosto.</p>

          {/*SEARCH*/}
          <div className="mt-6"><Search/></div>

          {/*QUICK SEARCH*/}
          <QuickSearch/>   

          {/*BANNER*/}
          <div className="relative h-[150px] w-full mt-6 ">
            <Image alt="Agende nos melhores com FSW Barber" src="/banner-01.png" fill className="object-cover rounded-xl"/>
          </div>

          {/*BOOKINGS*/}
          <BookingItem/>

          {/*BARBERS*/}
          <h2 className="text-xs font-bold uppercase text-gray-400 mb-3 mt-6">recomendados</h2>
          <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
            {barbershops.map((barbershop) => (
                <BarbershopItem key={barbershop.id} barbershop={barbershop}/>
              ))}
          </div>
          
          {/*BARBERS POPULAR*/}
          <h2 className="text-xs font-bold uppercase text-gray-400 mb-3 mt-6">populares</h2>
          <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
              {popularBarbershops.map((barbershop) => (
                <BarbershopItem key={barbershop.id} barbershop={barbershop}/>
              ))}
          </div>
        </div>
    </div>
  );
}

export default Home;
