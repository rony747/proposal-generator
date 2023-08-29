import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import Client from "@/components/Client";
import toast from "react-hot-toast";

const getClients = async ()=>{
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/clients`,{
            cache:'no-store'
        })
        if(!res.ok){
            toast.error("Failed to get the clients data")
        }
        return res.json()
    }catch (error){
        console.log("Error Getting the clients",error)
    }
}
export default async function ClientList() {
    const {allUsers} = await getClients()

    return (
        <>
            <Table className={''}>
                <TableHeader className={'bg-gray-50'}>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Company Name</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        allUsers.map(client=>{
                           return <Client client={client}/>
                        })
                    }

                </TableBody>
            </Table>
        </>
    )
}

