import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarImage } from "./ui/avatar";

// TODO RECIVED BOOKING WITH PROP
const BookingItem = () => {
    return ( 
        <>
            <h2 className="text-xs font-bold uppercase text-gray-400 mb-3 mt-6">agendamentos</h2>
            <Card>
                <CardContent className="flex justify-between p-0">
                {/*ESQUERDA*/}
                <div className="flex flex-col gap-2 py-5 pl-5">
                    <Badge className="w-fit">Confirmado</Badge>
                    <h3 className="font-semibold">Corte de Cabelo</h3>
                    <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                            <AvatarImage src="https://github.com/shadcn.png"></AvatarImage>
                        </Avatar>
                        <p className="text-sm">Barbearia FSW</p>
                    </div>
                </div>
                {/*DIREITA*/}
                <div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid">
                    <p className="text-sm">Agosto</p>
                    <p className="text-2xl">07</p>
                    <p className="text-sm">20:00</p>
                </div>
                </CardContent>
            </Card>
        </>
     );
}
 
export default BookingItem;