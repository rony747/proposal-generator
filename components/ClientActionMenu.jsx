import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {useRouter} from "next/navigation";
import toast from "react-hot-toast";
import {
    Building,
    Eye, Globe,
    Home, Mail, MailPlus,
    Milestone,
    MoreHorizontal, Phone,
    Printer,
    School2,
    Trash2,
    User,
    UserCog,
    UtilityPole
} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function ClientActionMenu({client}) {


    const router = useRouter()
    const handleDelete = async (id) => {

        const agreed = confirm(`Are you sure to delete the client ${id}`)
        if (agreed) {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/clients/?id=${id}`, {
                    method: "DELETE"
                })
                if (res.ok) {
                    toast.success(`Client Deleted`)
                    router.refresh()
                } else {
                    toast.error(`Failed to delete the client.`)
                }
            } catch (error) {
                console.log("Deleting Failed")
            }

        } else {
            alert('not confirmed')
        }
    }

    return (
        <>
            <Dialog>
                <DropdownMenu>
                    <DropdownMenuTrigger><MoreHorizontal/></DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Client Action</DropdownMenuLabel>
                        <DropdownMenuSeparator/>
                        <DialogTrigger asChild>
                            <DropdownMenuItem>
                                <Eye size={18} className={'mr-2'}/> View Client
                            </DropdownMenuItem>
                        </DialogTrigger>
                        <DropdownMenuItem >
                            <Button variant="ghost" asChild className={'m-0 p-0 '}>
                                <Link href={`/clients/edit/${client.id}`} className={'h-auto font-normal'}><UserCog size={18} className={'mr-2'}/> Edit Client</Link>
                            </Button>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => {
                            handleDelete(client.id)
                        }}>
                            <Trash2 size={18} className={'mr-2'}/> Delete Client
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <DialogContent>
                    <DialogHeader>
                        <DialogTitle
                            className={'pb-4 mb-2 border-b flex justify-start items-center'}>
                            <User size={36} className={'mr-2 p-2 block bg-gray-100 rounded-full text-gray-700'} />
                            {client.first_name} {client.last_name}</DialogTitle>
                        <DialogDescription className={'leading-8'}>
                            {client.company_name ? <div className={'flex justify-start items-center mb-2'}><Building className={'mr-2'} size={18} />Company Name: {client.company_name}</div> : ''}
                            {client.address ? <div className={'flex justify-start items-center mb-2'}><Home className={'mr-2'} size={18} />Address: {client.address}</div> : ''}
                            {client.city ? <div className={'flex justify-start items-center mb-2'}><UtilityPole className={'mr-2'} size={18} />City: {client.city}</div> : ''}
                            {client.state ? <div className={'flex justify-start items-center mb-2'}><School2 className={'mr-2'} size={18} />State: {client.state}</div> : ''}
                            {client.zip ? <div className={'flex justify-start items-center mb-2'}><Milestone className={'mr-2'} size={18} />Zip: {client.zip}</div> : ''}
                            {client.phone ? <div className={'flex justify-start items-center mb-2'}><Phone className={'mr-2'} size={18} />Phone: {client.phone}</div> : ''}
                            {client.fax ? <div className={'flex justify-start items-center mb-2'}><Printer className={'mr-2'} size={18} />Fax: {client.fax}</div> : ''}
                            {client.email ? <div className={'flex justify-start items-center mb-2'}><Mail className={'mr-2'} size={18} />Email: {client.email}</div> : ''}
                            {client.email2 ? <div className={'flex justify-start items-center mb-2'}><MailPlus className={'mr-2'} size={18} />Email 2: {client.email2}</div> : ''}
                            {client.email3 ? <div className={'flex justify-start items-center mb-2'}><MailPlus className={'mr-2'} size={18} />Email 3: {client.email3}</div> : ''}
                            {client.website ? <div className={'flex justify-start items-center mb-2'}><Globe className={'mr-2'} size={18} />Website: {client.website}</div> : ''}
                            {client.website2 ? <div className={'flex justify-start items-center mb-2'}><Globe className={'mr-2'} size={18} />Website 2: {client.website2}</div> : ''}
                            {client.website3 ? <div className={'flex justify-start items-center mb-2'}><Globe className={'mr-2'} size={18} />Website 3: {client.website3}</div> : ''}

                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    )
}

