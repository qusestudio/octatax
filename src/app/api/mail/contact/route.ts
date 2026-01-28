import { sendContactFormEmail, sendCustomerConfirmationEmail } from '@/lib/mailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { fullName, email, budget, message } = body || {};

        // Basic validation
        if (
            typeof fullName !== 'string' ||
            typeof email !== 'string' ||
            typeof budget !== 'string' ||
            typeof message !== 'string' ||
            !fullName.trim() ||
            !email.trim() ||
            !budget.trim() ||
            !message.trim()
        ) {
            return Response.json({ error: 'All fields are required.' }, { status: 400 });
        }

        // Email format check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return Response.json({ error: 'Please provide a valid email address.' }, { status: 400 });
        }

        // Send to business inbox
        await sendContactFormEmail({ fullName: fullName.trim(), email: email.trim(), budget: budget.trim(), message: message.trim() });

        // Fire-and-forget confirmation to customer (non-blocking)
        // Intentionally not awaited to avoid slowing down response
        sendCustomerConfirmationEmail(message.trim(), email.trim(), fullName.trim()).catch(() => {});

        return Response.json({ success: true, message: "Thanks for reaching out! We'll get back to you shortly." }, { status: 201 });
    } catch (error) {
        console.error('❌ Contact API error:', error);
        return Response.json({ error: 'Something went wrong. Please try again later.' }, { status: 500 });
    }
}

export function GET() {
    return Response.json({ error: 'Method not allowed' }, { status: 405 });
}

