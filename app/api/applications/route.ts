import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET ALL APPLICATIONS
export async function GET() {
  try {
    const applications = await prisma.application.findMany({
      include: {
        company: true,
      },
    });

    return NextResponse.json({
      success: true,
      data: applications,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Failed get applications",
      error,
    });
  }
}

// CREATE APPLICATION
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const application = await prisma.application.create({
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
      message: "Failed create application",
      error,
    });
  }
}