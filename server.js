const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
require('dotenv').config();

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

// Vercel URL
app.use(cors({
    origin: ['http://localhost:5173', 'https://phantom-ten-sepia.vercel.app/'],
    credentials: true
}));

app.use(express.json());

app.post('/api/send-email', async (req, res) => {
    console.log('API endpoint hit');

    try {
        const { name, email, phone, description } = req.body;
        console.log('Received form data:', { name, email, phone, description: '[REDACTED]' });

        if (!name || !email || !description) {
            return res.status(400).json({
                success: false,
                error: "Name, email, and message are required fields"
            });
        }

        const { data, error } = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "olasimboolajuwon@gmail.com",
            subject: "New Contact Form Message",
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                <p><strong>Message:</strong></p>
                <p>${description}</p>
            `,
        });

        if (error) {
            console.error('Resend API error:', error);
            return res.status(400).json({
                success: false,
                error: error.message || 'Failed to send email'
            });
        }

        console.log('Email sent successfully:', data);
        return res.status(200).json({
            success: true,
            message: "Email sent successfully"
        });

    } catch (error) {
        console.error('API handler error:', error);
        return res.status(500).json({
            success: false,
            error: error.message || 'Internal server error'
        });
    }
});

module.exports = app;

// for local development
if (require.main === module) {
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}