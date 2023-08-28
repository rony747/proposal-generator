"use client"
import {TableCell, TableRow} from "@/components/ui/table";
import {FiEdit, FiEye, FiTrash2} from "react-icons/fi";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";

export default function Client({client}) {
    return (
        <>
            <TableRow>
                <TableCell className="font-medium">{client.first_name} {client.last_name}</TableCell>
                <TableCell>{client.company_name}</TableCell>
                <TableCell>{client.phone}</TableCell>
                <TableCell>{client.email}</TableCell>
                <TableCell className="text-right">
                    <div className={'flex justify-end items-center gap-2'}>

                        <Dialog>
                            <DialogTrigger><FiEye className={'text-gray-600'}/></DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle className={'pb-4 mb-2 border-b'}>{client.first_name} {client.last_name}</DialogTitle>
                                    <DialogDescription className={'leading-8'}>
                                         {client.company_name ? <p>Company Name: {client.company_name}</p> :''}
                                         {client.address ? <p>Address: {client.address}</p> :''}
                                         {client.city ? <p>City: {client.city}</p> :''}
                                         {client.state ? <p>State: {client.state}</p> :''}
                                         {client.zip ? <p>Zip: {client.zip}</p> :''}
                                         {client.phone ? <p>Phone: {client.phone}</p> :''}
                                         {client.fax ? <p>Fax: {client.fax}</p> :''}
                                         {client.email ? <p>Email: {client.email}</p> :''}
                                         {client.email2 ? <p>Email 2: {client.email2}</p> :''}
                                         {client.email3 ? <p>Email 3: {client.email3}</p> :''}
                                         {client.website ? <p>Website: {client.website}</p> :''}
                                         {client.website2 ? <p>Website 2: {client.website2}</p> :''}
                                         {client.website3 ? <p>Website 3: {client.website3}</p> :''}

                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>

                        <FiEdit className={'text-gray-600'}/>
                        <FiTrash2 className={'text-red-400'}/>
                    </div>
                </TableCell>
            </TableRow>
        </>
    )
}

