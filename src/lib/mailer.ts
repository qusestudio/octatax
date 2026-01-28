import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
    fullName: string;
    email: string;
    budget: string;
    message: string;
}

export async function sendContactFormEmail(formData: ContactFormData) {
    try {
        const { fullName, email, budget, message } = formData;
        
        const emailHtml = `
            <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #faf0e6;">
                <div style="background-color: white; border-radius: 12px; padding: 30px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    <div style="border-bottom: 2px solid #f97316; padding-bottom: 20px; margin-bottom: 30px;">
                        <h1 style="color: #222; margin: 0; font-size: 24px; font-weight: 300; letter-spacing: 2px;">Octatax</h1>
                        <p style="color: #777; margin: 5px 0 0 0; font-size: 14px;">New Contact Form Submission</p>
                    </div>
                    
                    <div style="margin-bottom: 25px;">
                        <h2 style="color: #333; font-size: 18px; margin-bottom: 15px; font-weight: normal;">Contact Details</h2>
                        <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid #f97316;">
                            <p style="margin: 0 0 10px 0; color: #333;"><strong>Name:</strong> ${fullName}</p>
                            <p style="margin: 0; color: #333;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #f97316; text-decoration: none;">${email}</a></p>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 25px;">
                    
                        <h2 style="color: #333; font-size: 20px; margin-bottom: 15px; font-weight: normal;">Enquery</h2>
                        <h3 style="color: #333; font-size: 18px; margin-bottom: 15px; font-weight: normal;">Message</h3>
                        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border: 1px solid #e9ecef;">
                            <p style="margin: 0; color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                        </div>
                    </div>
                    
                    <div style="border-top: 1px solid #e9ecef; padding-top: 20px; text-align: center;">
                        <p style="color: #777; font-size: 12px; margin: 0;">
                            This email was sent from the Octatax contact form at ${new Date().toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' })}
                        </p>
                    </div>
                </div>
            </div>
        `;

        const { data, error } = await resend.emails.send({
            from: 'Octatax <noreply@octatax.co.za>',
            to: ['enquiries@octatax.co.za'],
            replyTo: email, // This allows easy reply to the customer
            subject: `Lead contact from ${fullName}`,
            html: emailHtml,
        });

        if (error) {
            console.error('❌ Resend error:', error);
            throw new Error('Failed to send notification email');
        }

        console.log('✅ Email sent successfully:', data?.id);
        return { success: true, emailId: data?.id };

    } catch (error) {
        console.error('❌ Error in sendContactFormEmail:', error);
        throw error;
    }
}

// Optional: Send confirmation email to the customer
export async function sendCustomerConfirmationEmail(message: string, customerEmail:string, customerName: string) {
    try {
        const confirmEmail = `
      <div style="background:#0E0E0E;padding:24px;">
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width:640px;margin:0 auto;background:#181715;border:1px solid rgba(212,197,168,0.2);">
          <tr>
            <td style="padding:24px;text-align:center;">
                <h1 className="font-bold text-2xl max-md:text-sm border-[#05001B] text-[#0B0331] border-4 rounded-xl p-4 bg-[#038EF0]">OCTA</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:0 24px 24px 24px;font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#D4C5A8;">
              <h1 style="margin:0 0 12px 0;font-weight:300;font-size:24px;">Thanks for reaching out, ${customerName}</h1>
              <p style="margin:0 0 16px 0;opacity:0.9;">We’ve received your message and will get back to you within one business day.</p>
              <div style="margin:16px 0;padding:16px;background:#0E0E0E;border:1px solid rgba(212,197,168,0.2);">
                <p style="margin:0 0 8px 0;opacity:0.8;"><strong>Your message</strong></p>
                <p style="white-space:pre-wrap;margin:0;opacity:0.9;">${message}</p>
              </div>
              <p style="margin:0 0 24px 0;opacity:0.9;">If you have any additional details (timelines, budget, references), feel free to reply to this email.</p>
              <p style="margin:0;opacity:0.8;">— Octatax</p>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 24px;text-align:center;color:#D4C5A8;opacity:0.6;font-size:12px;">© 2025 OCTA - Oxen Chartered Tax Advisors</td>
          </tr>
        </table>
      </div>
    `

        const { data, error } = await resend.emails.send({
            from: 'Octatax <enquiries@octatax.co.za>',
            to: [customerEmail],
            subject: 'We\'ve received your message — Octatax',
            html: confirmEmail,
        });

        if (error) {
            console.error('❌ Resend confirmation error:', error);
            // Don't throw here - customer confirmation is nice-to-have, not critical
            return { success: false, error };
        }

        console.log('✅ Confirmation email sent:', data?.id);
        return { success: true, emailId: data?.id };

    } catch (error) {
        console.error('❌ Error in sendCustomerConfirmationEmail:', error);
        return { success: false, error };
    }
}
