
import toast, {Toaster} from "react-hot-toast";

import TitleBar from "@/components/TitleBar";
import ClientEditForm from "@/components/ClientEditForm";
import {redirect} from "next/navigation";


export default async function ClientEdit({params}) {
    const userId = Number(params.id)
    const getClient = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/clients/${userId}`)
            console.log(res)
            if (!res.ok) {
                toast.error("Error Loading user")
                redirect('/clients')
            }
            console.log(res)
            return res.json()
        }catch (error){
            redirect('/clients')
        }
    }
    const {client} = await getClient()
if(client === null){
    redirect('/clients')
}
    return (
        <>
            <>
                <Toaster/>
                <TitleBar title={`${client?.first_name} ${client?.last_name}`}>
                </TitleBar>

                <div className="p-6">

                    <div>
                        <ClientEditForm/>
                    </div>

                </div>

            </>
        </>
    )
}

