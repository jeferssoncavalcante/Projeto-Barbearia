import { ItemProps } from "../_lib/types";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import CalendarItem from "./calendario-item";


const ServiceItem: React.FC<ItemProps> = ({ service, barbershop }) => {
    return ( 
        <Card>
            <CardContent className="flex items-center gap-2 p-3">
                {/*IMAGE*/}
                <div className="relative max-h-[110px] min-w-[110px] min-h-[110px] max-w-[110px]">
                    <Image alt={service.name} src={service.imageUrl} fill className="object-cover rounded-lg"/>
                </div>
                {/*DIREITA*/}
                <div className="space-y-2">
                    <h3 className="font-semibold text-sm">{service.name}</h3>
                    <p className="text-sm text-gray-400">{service.description}</p>
                    {/*PRICE AND BUTTON*/}
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-bold text-primary">{Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            }).format(Number(service.price))}
                        </p>
                        <CalendarItem barbershop={barbershop} service={service}/>
                    </div>
                </div>
            </CardContent>
        </Card>
     );
}
 
export default ServiceItem;