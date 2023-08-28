import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";


const prisma = new PrismaClient()

export async function GET() {
    const allUsers = await prisma.clients.findMany()
    return NextResponse.json({allUsers})
}

export async function POST(request) {
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
    } = await request.json();
    await prisma.clients.create({
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
        }
    })

    return NextResponse.json({message: "data inserted"})

}

export async function DELETE(request) {
    const id = Number(request.nextUrl.searchParams.get("id"))
    await prisma.clients.delete({
        where: {
            id
        },
    })
    return NextResponse.json({message: "Item Deleted"})
}

