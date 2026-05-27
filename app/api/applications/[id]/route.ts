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

    const application = await prisma.application.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        company: true,
      },
    });

    if (!application) {
      return NextResponse.json({
        success: false,
        message: "Data id tidak ada",
      });
    }

    return NextResponse.json({
      success: true,
      data: application,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Failed get application",
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

    const application = await prisma.application.update({
      where: {
        id: Number(id),
      },
      data: {
        studentName: body.studentName,
        className: body.className,
        companyId: Number(body.companyId),
        status: body.status,
      },
    });

    return NextResponse.json({
      success: true,
      data: application,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Failed update application",
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

    await prisma.application.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json({
      success: true,
      message: "Application deleted",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Failed delete application",
    });
  }
}