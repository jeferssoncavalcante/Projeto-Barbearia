import Search from "../_components/search"
import BarbershopItem from "../_components/barbershop-items"
import Header from "../_components/header"
import { db } from "../_lib/prisma"

interface BarbershopsPageProps {
    searchParams: {
        title?: string
        service?: string
    }
}

const BarbershopsPage = async ({ searchParams }: BarbershopsPageProps) => {
    const barbershops = await db.barbershop.findMany({
        where: {
            OR: [
                searchParams.title ? {
                    name: {
                        contains: searchParams?.title,
                        mode: "insensitive",
                    },
                }: {},
                searchParams.service ? {
                    services: {
                        some: {
                            name: {
                                contains: searchParams.service,
                                mode: "insensitive"
                            },
                        },
                    },
                }: {},
            ],
        },
    })
    return (
        <div>
            <Header/>
            <div className="my-6 px-5"><Search/></div>
            <div className="px-5">
                <h2 className="text-xs font-bold uppercase text-gray-400 mb-3 mt-6">Resultados para &quot;{searchParams.title || searchParams.service }&quot;</h2>
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