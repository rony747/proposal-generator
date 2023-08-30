"use client"
import ProposalWrapper from "@/components/proposals/ProposalWrapper";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import toast from "react-hot-toast";
import {useEffect, useState} from "react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {redirect} from "next/navigation";


const getClients = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/clients`, {
            cache: 'no-store'
        })
        if (!res.ok) {
            toast.error("Failed to get the clients data")
        }
        return res.json()
    } catch (error) {
        console.log("Error Getting the clients", error)
    }
}


export default function ClientDetails() {
    const [clients, setClients] = useState([])
    const [currentClientId, setCurrentClientId] = useState(null)
    const [clientDetails, setClientDetails] = useState({})

    useEffect(() => {
        const getAllUsers = async () => {
            const res= await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/clients`, {
                cache: 'no-store'
            })
            const newData = await res.json()
            setClients(newData.allUsers)
        }
        getAllUsers()
    }, [])


    useEffect(() => {
        if(currentClientId){
            const getClient = async () => {
                const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/clients/${currentClientId}`)
                const newData = await res.json()
                await setClientDetails(newData.client)
            }
            getClient()
        }

    }, [currentClientId])

    const handleClientSelect = (id)=>{
       const clientId = Number(id)
        setCurrentClientId(clientId)
    }

    return (
        <>

            <ProposalWrapper title={'Client Contact Details'} >
                <Select onValueChange={e=>handleClientSelect(e)} >
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select Client" />
                    </SelectTrigger>
                    <SelectContent>
                        {
                            clients?.map(client=>{
                                return(
                                    <SelectItem  key={client.id} value={client.id}>{client.first_name} {client.last_name}</SelectItem>
                                )
                            })
                        }

                    </SelectContent>
                </Select>
                <div className="flex justify-start  gap-8">
                    <div className={'w-1/2'}>
                        <div className="flex w-full justify-start items-center mb-2 pb-2 border-b">
                            <Label className={'font-medium text-[16px] w-1/4'}>Company Name:</Label>
                            <Input className={'w-3/4'} disabled type={'text'} value={clientDetails.company_name ? clientDetails.company_name :''}/>
                        </div>
                        <div className="flex w-full justify-start items-center mb-2 pb-2 border-b">
                            <Label className={'font-medium text-[16px] w-1/4'}>First Name:</Label>
                            <Input className={'w-3/4'} disabled type={'text'} value={clientDetails.first_name ? clientDetails.first_name :''}/>
                        </div>
                        <div className="flex w-full justify-start items-center mb-2 pb-2 border-b">
                            <Label className={'font-medium text-[16px] w-1/4'}>Last Name:</Label>
                            <Input className={'w-3/4'} disabled type={'text'} value={clientDetails.last_name ? clientDetails.last_name :''}/>
                        </div>
                        <div className="flex w-full justify-start items-center mb-2 pb-2 border-b">
                            <Label className={'font-medium text-[16px] w-1/4'}>Address:</Label>
                            <Input className={'w-3/4'} disabled type={'text'} value={clientDetails.address ? clientDetails.address :''}/>
                        </div>
                        <div className="flex w-full justify-start items-center mb-2 pb-2 border-b">
                            <Label className={'font-medium text-[16px] w-1/4'}>City:</Label>
                            <Input className={'w-3/4'} disabled type={'text'} value={clientDetails.city ? clientDetails.city :''}/>
                        </div>
                        <div className="flex w-full justify-start items-center mb-2 pb-2 border-b">
                            <Label className={'font-medium text-[16px] w-1/4'}>State:</Label>
                            <Input className={'w-3/4'} disabled type={'text'} value={clientDetails.state ? clientDetails.state :''}/>
                        </div>
                        <div className="flex w-full justify-start items-center mb-2 pb-2 border-b">
                            <Label className={'font-medium text-[16px] w-1/4'}>Zip:</Label>
                            <Input className={'w-3/4'} disabled type={'text'} value={clientDetails.zip ? clientDetails.zip :''}/>
                        </div>
                        <div className="flex w-full justify-start items-center mb-2 pb-2 border-b">
                            <Label className={'font-medium text-[16px] w-1/4'}>Phone:</Label>
                            <Input className={'w-3/4'} disabled type={'text'} value={clientDetails.phone ? clientDetails.phone :''}/>
                        </div>
                    </div>
                    <div className={'w-1/2'}>
                        <div className="flex w-full justify-start items-center mb-2 pb-2 border-b">
                            <Label className={'font-medium text-[16px] w-1/4'}>Fax:</Label>
                            <Input className={'w-3/4'} disabled type={'text'} value={clientDetails.fax ? clientDetails.fax :''}/>
                        </div>
                        <div className="flex w-full justify-start items-center mb-2 pb-2 border-b">
                            <Label className={'font-medium text-[16px] w-1/4'}>Email:</Label>
                            <Input className={'w-3/4'} disabled type={'text'} value={clientDetails.email ? clientDetails.email :''}/>
                        </div>
                        <div className="flex w-full justify-start items-center mb-2 pb-2 border-b">
                            <Label className={'font-medium text-[16px] w-1/4'}>Email 2:</Label>
                            <Input className={'w-3/4'} disabled type={'text'} value={clientDetails.email2 ? clientDetails.email2 :''}/>
                        </div>
                        <div className="flex w-full justify-start items-center mb-2 pb-2 border-b">
                            <Label className={'font-medium text-[16px] w-1/4'}>Email 3:</Label>
                            <Input className={'w-3/4'} disabled type={'text'} value={clientDetails.email3 ? clientDetails.email3 :''}/>
                        </div>
                        <div className="flex w-full justify-start items-center mb-2 pb-2 border-b">
                            <Label className={'font-medium text-[16px] w-1/4'}>Website:</Label>
                            <Input className={'w-3/4'} disabled type={'text'} value={clientDetails.website ? clientDetails.website :''}/>
                        </div>
                        <div className="flex w-full justify-start items-center mb-2 pb-2 border-b">
                            <Label className={'font-medium text-[16px] w-1/4'}>Website 2:</Label>
                            <Input className={'w-3/4'} disabled type={'text'} value={clientDetails.website2 ? clientDetails.website2 :''}/>
                        </div>
                        <div className="flex w-full justify-start items-center mb-2 pb-2 border-b">
                            <Label className={'font-medium text-[16px] w-1/4'}>Website 3:</Label>
                            <Input className={'w-3/4'} disabled type={'text'} value={clientDetails.website3 ? clientDetails.website3 :''}/>
                        </div>

                    </div>
                </div>
            </ProposalWrapper>
        </>
    )
}

