import Search from "../_components/search"
import BarbershopItem from "../_components/barbershop-items"
import Header from "../_components/header"
import { db } from "../_lib/prisma"

interface BarbershopsPageProps {
    searchParams: {
        search?: string
    }
}

const BarbershopsPage = async ({ searchParams }: BarbershopsPageProps) => {
    const barbershops = await db.barbershop.findMany({
        where: {
            name: {
                contains: searchParams?.search,
                mode: "insensitive",
            }
        }
    })
    return (
        <div>
            <Header/>
            <div className="my-6 px-5"><Search/></div>
            <div className="px-5">
                <h2 className="text-xs font-bold uppercase text-gray-400 mb-3 mt-6">Resultados para &quot;{searchParams.search}&quot;</h2>
                <div className="grid grid-cols-2 gap-4">
                    {barbershops.map((barbershop) => (
                        <BarbershopItem key={barbershop.id} barbershop={barbershop}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
 
export default BarbershopsPage;