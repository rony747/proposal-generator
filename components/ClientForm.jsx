"use client"
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {BiUserPlus} from "react-icons/bi";
import {useState} from "react";
import {useRouter} from "next/navigation";
import toast, { Toaster } from 'react-hot-toast';

export default function ClientForm() {
    const [companyName, setCompanyName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')
    const [phone, setPhone] = useState('')
    const [fax, setFax] = useState('')
    const [email, setEmail] = useState('')
    const [email2, setEmail2] = useState('')
    const [email3, setEmail3] = useState('')
    const [website, setWebsite] = useState('')
    const [website2, setWebsite2] = useState('')
    const [website3, setWebsite3] = useState('')
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch("http://localhost:3000/api/clients", {
                method: 'POST',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({
                    "company_name": companyName,
                    "first_name": firstName,
                    "last_name": lastName,
                    "address": address,
                    "city": city,
                    "state": state,
                    "zip": zip,
                    "phone": phone,
                    "fax": fax,
                    "email": email,
                    "email2": email2,
                    "email3": email3,
                    "website": website,
                    "website2": website2,
                    "website3": website3
                })

            })

            if (res.ok) {
                setOpen(false)
                toast.success('Client added Successfully')
                router.refresh()

            } else {
                toast.error('Failed to add the Client')
            }

        } catch (error) {
            console.log("Adding new client failed ", error)
        }

    }
    return (
        <>

            <Dialog onOpenChange={setOpen} open={open} >
                <DialogTrigger
                    className={'bg-purple-900 text-white px-4 py-2 flex gap-1 justify-center items-center rounded-lg'}>
                    <BiUserPlus size={18} className={'mr-2'}/> Add New Client</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className={'mb-4'}>Client Details</DialogTitle>
                        <form onSubmit={handleSubmit}>
                            <Input onChange={(e) => {
                                setCompanyName(e.target.value)
                            }} value={companyName} type={'text'} className={'mb-2'} placeholder={'Company Name:'}
                                   name={'companyName'}/>
                            <div className="flex gap-2 justify-between items-center">
                                <Input type={'text'} onChange={(e) => {
                                    setFirstName(e.target.value)
                                }} value={firstName} className={'mb-2'} placeholder={'First Name:'} name={'firstName'}/>
                                <Input type={'text'} onChange={(e) => {
                                    setLastName(e.target.value)
                                }} value={lastName} className={'mb-2'} placeholder={'Last Name:'} name={'lastName'}/>
                            </div>
                            <Input type={'text'} onChange={(e) => {
                                setAddress(e.target.value)
                            }} value={address} className={'mb-2'} placeholder={'Address:'} name={'address'}/>
                            <div className="flex gap-2 justify-between items-center">
                                <Input type={'text'} onChange={(e) => {
                                    setCity(e.target.value)
                                }} value={city} className={'mb-2'} placeholder={'City:'} name={'city'}/>
                                <Input type={'text'} onChange={(e) => {
                                    setState(e.target.value)
                                }} value={state} className={'mb-2'} placeholder={'State:'} name={'state'}/>
                                <Input type={'text'} onChange={(e) => {
                                    setZip(e.target.value)
                                }} value={zip} className={'mb-2'} placeholder={'Zip:'} name={'zip'}/>
                            </div>
                            <div className="flex gap-2 justify-between items-center">
                                <Input type={'tel'} onChange={(e) => {
                                    setPhone(e.target.value)
                                }} value={phone} className={'mb-2'} placeholder={'Phone:'} name={'phone'}/>
                                <Input type={'text'} onChange={(e) => {
                                    setFax(e.target.value)
                                }} value={fax} className={'mb-2'} placeholder={'Fax:'} name={'fax'}/>
                            </div>
                            <Input type={'email'} onChange={(e) => {
                                setEmail(e.target.value)
                            }} value={email} className={'mb-2'} placeholder={'Email :'} name={'email'}/>
                            <div className="flex gap-2 justify-between items-center">
                                <Input type={'email'} onChange={(e) => {
                                    setEmail2(e.target.value)
                                }} value={email2} className={'mb-2'} placeholder={'Email 2:'} name={'email2'}/>
                                <Input type={'email'} onChange={(e) => {
                                    setEmail3(e.target.value)
                                }} value={email3} className={'mb-2'} placeholder={'Email 3:'} name={'email3'}/>
                            </div>
                            <Input type={'text'} onChange={(e) => {
                                setWebsite(e.target.value)
                            }} value={website} className={'mb-2'} placeholder={'Website 1:'} name={'website'}/>
                            <div className="flex gap-2 justify-between items-center">
                                <Input type={'text'} onChange={(e) => {
                                    setWebsite2(e.target.value)
                                }} value={website2} className={'mb-2'} placeholder={'Website 2:'} name={'website2'}/>
                                <Input type={'text'} onChange={(e) => {
                                    setWebsite3(e.target.value)
                                }} value={website3} className={'mb-2'} placeholder={'Website 3:'} name={'website3'}/>
                            </div>

                            <Button type='submit' className={'mt-2 min-w-[50%]'} size={'lg'}>Submit</Button>
                        </form>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    )
}

