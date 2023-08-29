"use client"
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

import {useState} from "react";
import {useRouter} from "next/navigation";
import toast, {Toaster} from 'react-hot-toast';
import {User, UserPlus2} from "lucide-react";


const initialFormValue = {
    company_name: "",
    first_name: "",
    last_name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    fax: "",
    email: "",
    email2: "",
    email3: "",
    website: "",
    website2: "",
    website3: ""
}
export default function ClientForm() {
    const [open, setOpen] = useState(false)
    const [formData, setFormData] = useState(initialFormValue)

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (formData.company_name === '' || formData.first_name === '' || formData.last_name === '' || formData.address === '' || formData.city === '' || formData.state === '' || formData.zip === '' || formData.phone === '' || formData.email === '') {
            return toast.error("Required fields can not be empty")
        }
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/clients`, {
                method: 'POST',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({
                    "company_name": formData.company_name,
                    "first_name": formData.first_name,
                    "last_name": formData.last_name,
                    "address": formData.address,
                    "city": formData.city,
                    "state": formData.state,
                    "zip": formData.zip,
                    "phone": formData.phone,
                    "fax": formData.fax,
                    "email": formData.email,
                    "email2": formData.email2,
                    "email3": formData.email3,
                    "website": formData.website,
                    "website2": formData.website2,
                    "website3": formData.website3
                })

            })

            if (res.ok) {
                setOpen(false)
                toast.success('Client added Successfully')
                router.refresh()
                setFormData(initialFormValue)

            } else {
                toast.error('Failed to add the Client')
            }

        } catch (error) {
            console.log("Adding new client failed ", error)
        }

    }
    return (
        <>

            <Dialog onOpenChange={setOpen} open={open}>
                <DialogTrigger asChild>
                    <Button><UserPlus2 className={'mr-2'} /> Add New Client</Button></DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className={'mb-4 flex justify-start items-center'}>
                            <User size={36} className={'mr-2 p-2 block bg-gray-100 rounded-full text-gray-700'} />Client Details
                        </DialogTitle>
                        <form onSubmit={handleSubmit}>

                            <Input onChange={(e) => {
                                setFormData({...formData, company_name: e.target.value})
                            }} value={formData.company_name} type={'text'} className={'mb-2'} placeholder={'Company Name *'}
                                   name={'companyName'}/>

                            <div className="flex gap-2 justify-between items-center">
                                <Input type={'text'} onChange={(e) => {
                                    setFormData({...formData, first_name: e.target.value})
                                }} value={formData.first_name} className={'mb-2'} placeholder={'First Name *'}
                                       name={'firstName'}/>

                                <Input type={'text'} onChange={(e) => {
                                    setFormData({...formData, last_name: e.target.value})
                                }} value={formData.last_name} className={'mb-2'} placeholder={'Last Name *'}
                                       name={'lastName'}/>
                            </div>

                            <Input type={'text'} onChange={(e) => {
                                setFormData({...formData, address: e.target.value})
                            }} value={formData.address} className={'mb-2'} placeholder={'Address *'} name={'address'}/>

                            <div className="flex gap-2 justify-between items-center">
                                <Input type={'text'} onChange={(e) => {
                                    setFormData({...formData, city: e.target.value})
                                }} value={formData.city} className={'mb-2'} placeholder={'City *'} name={'city'}/>

                                <Input type={'text'} onChange={(e) => {
                                    setFormData({...formData, state: e.target.value})
                                }} value={formData.state} className={'mb-2'} placeholder={'State *'} name={'state'}/>

                                <Input type={'text'} onChange={(e) => {
                                    setFormData({...formData, zip: e.target.value})
                                }} value={formData.zip} className={'mb-2'} placeholder={'Zip *'} name={'zip'}/>
                            </div>
                            <div className="flex gap-2 justify-between items-center">
                                <Input type={'tel'} onChange={(e) => {
                                    setFormData({...formData, phone: e.target.value})
                                }} value={formData.phone} className={'mb-2'} placeholder={'Phone *'} name={'phone'}/>
                                <Input type={'text'} onChange={(e) => {
                                    setFormData({...formData, fax: e.target.value})
                                }} value={formData.fax} className={'mb-2'} placeholder={'Fax'} name={'fax'}/>
                            </div>
                            <Input type={'email'} onChange={(e) => {
                                setFormData({...formData, email: e.target.value})
                            }} value={formData.email} className={'mb-2'} placeholder={'Email *'} name={'email'}/>
                            <div className="flex gap-2 justify-between items-center">
                                <Input type={'email'} onChange={(e) => {
                                    setFormData({...formData, email2: e.target.value})
                                }} value={formData.email2} className={'mb-2'} placeholder={'Email 2'} name={'email2'}/>
                                <Input type={'email'} onChange={(e) => {
                                    setFormData({...formData, email3: e.target.value})
                                }} value={formData.email3} className={'mb-2'} placeholder={'Email 3'} name={'email3'}/>
                            </div>
                            <Input type={'text'} onChange={(e) => {
                                setFormData({...formData, website: e.target.value})
                            }} value={formData.website} className={'mb-2'} placeholder={'Website'} name={'website'}/>
                            <div className="flex gap-2 justify-between items-center">
                                <Input type={'text'} onChange={(e) => {
                                    setFormData({...formData, website2: e.target.value})
                                }} value={formData.website2} className={'mb-2'} placeholder={'Website 2'} name={'website2'}/>
                                <Input type={'text'} onChange={(e) => {
                                    setFormData({...formData, website3: e.target.value})
                                }} value={formData.website3} className={'mb-2'} placeholder={'Website 3'} name={'website3'}/>
                            </div>

                            <Button type='submit' className={'mt-2 min-w-[50%]'} size={'lg'}>Add New Client</Button>
                        </form>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    )
}

