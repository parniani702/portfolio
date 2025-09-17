"use server";
import { Resend } from 'resend'

export const sendEmail = async (formdata: FormData) => {
    try {
        const email = formdata.get("email")?.toString() ?? ''
        const message = formdata.get("message")?.toString() ?? 'emty'
        const resend = new Resend(process.env.RESEND_API_KEY)

        const lastSubmit = 0
        const timer = 60 * 1000

        if(Date.now() - lastSubmit < timer) {
            throw new Error("لطفا یک دقیقه صبر کنید")
        }

        await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: "parniani702@gmail.com",
            subject: `${email}`,
            html: `<p>${message}</p>`,
            replyTo: 'onboarding@resend.dev',
          });
    } catch (err) {
        if (err instanceof Error) {
            console.log(err)
        }
    }
}