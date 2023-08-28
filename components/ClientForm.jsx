import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {BiUserPlus} from "react-icons/bi";

export default function ClientForm() {
    return (
        <>
            <Dialog>
                <DialogTrigger className={'bg-purple-900 text-white px-4 py-2 flex gap-1 justify-center items-center rounded-lg'}> <BiUserPlus size={18} className={'mr-2'} /> Add New Client</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className={'mb-4'}>Client Details</DialogTitle>
                        <DialogDescription>
                            <form>
                                <Input type={'text'} className={'mb-2'} placeholder={'Company Name:'} name={'companyName'}/>
                                <div className="flex gap-2 justify-between items-center">
                                    <Input type={'text'} className={'mb-2'} placeholder={'First Name:'} name={'firstName'}/>
                                    <Input type={'text'} className={'mb-2'} placeholder={'Last Name:'} name={'lastName'}/>
                                </div>
                                <Input type={'text'} className={'mb-2'} placeholder={'Address:'} name={'address'}/>
                                <div className="flex gap-2 justify-between items-center">
                                    <Input type={'text'} className={'mb-2'} placeholder={'City:'} name={'city'}/>
                                    <Input type={'text'} className={'mb-2'} placeholder={'State:'} name={'state'}/>
                                    <Input type={'text'} className={'mb-2'} placeholder={'Zip:'} name={'zip'}/>
                                </div>
                                <div className="flex gap-2 justify-between items-center">
                                    <Input type={'tel'} className={'mb-2'} placeholder={'Phone:'} name={'phone'}/>
                                    <Input type={'text'} className={'mb-2'} placeholder={'Fax:'} name={'fax'}/>
                                </div>
                                <Input type={'email'} className={'mb-2'} placeholder={'Email 1:'} name={'email'}/>
                                <div className="flex gap-2 justify-between items-center">
                                    <Input type={'email'} className={'mb-2'} placeholder={'Email 2:'} name={'email2'}/>
                                    <Input type={'email'} className={'mb-2'} placeholder={'Email 3:'} name={'email3'}/>
                                </div>
                                <Input type={'text'} className={'mb-2'} placeholder={'Website 1:'} name={'website'}/>
                                <div className="flex gap-2 justify-between items-center">
                                    <Input type={'text'} className={'mb-2'} placeholder={'Website 2:'} name={'website2'}/>
                                    <Input type={'text'} className={'mb-2'} placeholder={'Website 3:'} name={'website3'}/>
                                </div>

                                <Button type='submit' className={'mt-2 min-w-[50%]'} size={'lg'} >Submit</Button>
                            </form>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    )
}

