import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

type Params = {
  params: Promise<{
    id: string;
  }>;
};

// GET BY ID
export async function GET(
  request: Request,
  { params }: Params
) {
  try {
    const { id } = await params;

    const company = await prisma.company.findUnique({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json({
      success: true,
      data: company,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Failed get company",
    });
  }
}

// UPDATE
export async function PUT(
  request: Request,
  { params }: Params
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const company = await prisma.company.update({
      where: {
        id: Number(id),
      },
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
      message: "Failed update company",
    });
  }
}

// DELETE
export async function DELETE(
  request: Request,
  { params }: Params
) {
  try {
    const { id } = await params;

    await prisma.company.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json({
      success: true,
      message: "Company deleted",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Failed delete company",
    });
  }
}