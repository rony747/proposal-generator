import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import Client from "@/components/Client";

const getClients = async ()=>{
    try {
        const res = await fetch("http://localhost:3000/api/clients",{
            cache:'no-store'
        })
        if(!res.ok){
            throw new Error("Failed to fetch Clients")
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
            <Table>
                <TableCaption>A list of all clients.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead >Name</TableHead>
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

