const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config({ path: './config.env' });

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Gmail transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

// Test email configuration on startup
transporter.verify((error, success) => {
  if (error) {
    console.log('❌ Email configuration error:', error);
  } else {
    console.log('✅ Email server ready to send messages');
  }
});

// Send reservation email endpoint
app.post('/api/send-reservation', async (req, res) => {
  try {
    const { name, email, phone, message, destination, timestamp } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'Toate câmpurile sunt obligatorii' 
      });
    }

    // Email content
    const emailContent = `
🎯 NOUĂ CERERE DE REZERVARE

📋 Detalii Client:
👤 Nume: ${name}
📧 Email: ${email}
📱 Telefon: ${phone}
🕒 Data: ${timestamp || new Date().toLocaleString('ro-RO')}
🌍 Destinație: ${destination || 'Nu a fost specificată'}

💬 Mesaj:
${message}

🎉 Contactează clientul pentru confirmare!

---
Pentru a răspunde direct clientului, folosește Reply la acest email.
    `;

    // Email options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'madaiancu16@gmail.com',
      replyTo: email,
      subject: `🎯 Rezervare Nouă - ${name}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>')
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log(`✅ Email sent for reservation from ${name} (${email})`);
    
    res.json({ 
      success: true, 
      message: 'Email trimis cu succes!' 
    });

  } catch (error) {
    console.error('❌ Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Eroare la trimiterea email-ului' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'MadaTrips Email Server is running',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 MadaTrips Email Server running on port ${PORT}`);
  console.log(`📧 Ready to send emails to: madaiancu16@gmail.com`);
});
