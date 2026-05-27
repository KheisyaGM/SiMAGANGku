import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const companies = await prisma.company.findMany();

    return NextResponse.json({
      success: true,
      data: companies,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Failed get companies",
    });
  }
}

// CREATE
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const company = await prisma.company.create({
      data: {
        name: body.name,
        address: body.address,
        field: body.field,
        quota: Number(body.quota),
      },
    });

    return NextResponse.json({
      success: true,
      data: company,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Failed create company",
    });
  }
}