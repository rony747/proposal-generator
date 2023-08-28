import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

export async function GET(request, {params}) {
    const id = Number(params.id)
    const client =  await prisma.clients.findUnique({
        where:{
            id
        }
    })
    return NextResponse.json({client})
}
export async function PUT(request, {params}) {
    const id = Number(params.id)
    const {
        company_name,
        first_name,
        last_name,
        address,
        city,
        state,
        zip,
        phone,
        fax,
        email,
        email2,
        email3,
        website,
        website2,
        website3
    } = await request.json()
    await prisma.clients.update({
        where: {
            id,
        },
        data: {
            company_name,
            first_name,
            last_name,
            address,
            city,
            state,
            zip,
            phone,
            fax,
            email,
            email2,
            email3,
            website,
            website2,
            website3
        },
    })
    return NextResponse.json({message: "Data updated"})
}

