import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
return NextResponse.json({ message: 'Hello, world!' });
}

export async function POST(req: NextRequest) {
const body = await req.json(); // Parse the incoming JSON body
console.log('Received POST data:', body);

// Respond with the same data
return NextResponse.json({
message: 'POST request was successful',
receivedData: body,
});
}