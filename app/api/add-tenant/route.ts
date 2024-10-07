import { NextRequest, NextResponse } from "next/server";
import { validateTenantData } from "@/app/utils/validation";

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const isValidTenantData = validateTenantData(body);
		if (!isValidTenantData) {
			return NextResponse.json(
				{ error: "Invalid tenant data" },
				{ status: 400 }
			);
		}

		// simulate a successful response from the database
		return NextResponse.json(
			{ message: "Tenant data submitted successfully" },
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
