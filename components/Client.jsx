"use client"
import {TableCell, TableRow} from "@/components/ui/table";
import ClientActionMenu from "@/components/ClientActionMenu";

export default function Client({client}) {
    return (
        <>
            <TableRow>
                <TableCell className="font-medium">{client.first_name} {client.last_name}</TableCell>
                <TableCell>{client.company_name}</TableCell>
                <TableCell>{client.phone}</TableCell>
                <TableCell>{client.email}</TableCell>
                <TableCell className="text-right">
                    <ClientActionMenu client={client} />
                </TableCell>
            </TableRow>
        </>
    )
}

