"use client"

import { ptBR } from "date-fns/locale";
import { format, set } from "date-fns";
import { Calendar } from "./ui/calendar";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { ItemProps } from "../_lib/types";
import { createBooking } from "../_actions/create-booking";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

const TIME_LIST = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
]

const CalendarItem: React.FC<ItemProps> = ({ service, barbershop }) => {
    const {data} = useSession()
    const [selectedDay, setSelectedDay] = useState<Date | undefined>(undefined)
    const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined)

    const handleDateSelect = (date: Date | undefined) => {
        setSelectedDay(date)
    }

    const handleTimeSelect = (time : string) => {
        setSelectedTime(time)
    }

    const handleCreateBooking = async () => {
        try {
            if (!selectedDay || !selectedTime) return
            const hour = Number(selectedTime.split(":")[0])
            const  minute = Number(selectedTime.split(":")[1])
            const newDate = set(selectedDay, {
                minutes: minute,
                hours: hour,
            })

            await createBooking({
                serviceId: service.id,
                userId: (data?.user as any).id,
                date: newDate,
            })
            toast.success("Reserva Criada com Sucesso!")
        } catch (error) {
            console.error(error)
            toast.error("Erro ao Criar Reserva!")
        }
    }

    return ( 
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="secondary" size="sm">Reservar</Button>
            </SheetTrigger>
            <SheetContent className="px-0">
                <SheetHeader>
                    <SheetTitle>Fazer Reserva</SheetTitle>
                </SheetHeader>
                <div className="py-5 border-b border-solid">
                    <Calendar mode="single" locale={ptBR}
                    selected={selectedDay}
                    onSelect={handleDateSelect}
                    styles={{
                        head_cell: {
                            width: "100%",
                            textTransform: "capitalize",
                        }, cell: {
                                width: "100%",
                        }, button: {
                                width: "100%",
                        }, nav_button_previous: {
                            width: "32px",
                            height: "32px",
                        }, nav_button_next: {
                            width: "32px",
                            height: "32px",
                        }, caption: {
                            textTransform: "capitalize",
                        },
                    }}/>
                </div>

                {selectedDay && (
                    <div className="p-5 border-b border-solid overflow-x-auto flex gap-3 [&::-webkit-scrollbar]:hidden">
                    {TIME_LIST.map((time) => (
                        <Button 
                            key={time} 
                            variant={selectedTime == time ? "default" : "outline"} 
                            className="rounded-full" 
                            onClick={() => handleTimeSelect(time)}>
                            {time}
                        </Button>))}
                </div>
                )}

                {selectedTime && selectedDay &&(
                    <div className="p-5">
                        <Card>
                            <CardContent className="p-3 space-y-3">
                                <div className="flex justify-between items-center">
                                    <h2 className="font-bold">{service.name}</h2>
                                    <p className="text-sm font-bold">
                                        {Intl.NumberFormat("pt-BR",{
                                            style: "currency",
                                            currency: "BRL",
                                        }).format(Number(service.price))}
                                    </p>
                                </div>

                                <div className="flex justify-between items-center">
                                    <h2 className="text-sm text-gray-400">Data</h2>
                                    <p className="text-sm">
                                        {format(selectedDay, "d 'de' MMMM", {locale: ptBR})}
                                    </p>
                                </div>

                                <div className="flex justify-between items-center">
                                    <h2 className="text-sm text-gray-400">Horario</h2>
                                    <p className="text-sm">
                                        {selectedTime}
                                    </p>
                                </div>

                                <div className="flex justify-between items-center">
                                    <h2 className="text-sm text-gray-400">Barbearia</h2>
                                    <p className="text-sm">
                                        {barbershop.name}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )}
                <SheetFooter className="mt-5 px-5">
                    <SheetClose asChild>
                        <Button onClick={handleCreateBooking} disabled={!selectedDay || !selectedTime}>Confirmar</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
     );
}
 
export default CalendarItem;