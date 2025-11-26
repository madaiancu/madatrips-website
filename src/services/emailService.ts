// Email service for handling reservation emails
export interface ReservationData {
  name: string;
  email: string;
  phone: string;
  message: string;
  destination?: string;
  timestamp: string;
}

// Backend API URL
const API_URL = 'http://localhost:3001/api';

export const sendReservationEmail = async (data: ReservationData): Promise<boolean> => {
  try {
    // Send email using our backend API
    const response = await fetch(`${API_URL}/send-reservation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (response.ok && result.success) {
      console.log('✅ Email sent successfully:', result.message);
      return true;
    } else {
      console.error('❌ Error sending email:', result.error);
      return false;
    }
  } catch (error) {
    console.error('❌ Network error sending email:', error);
    return false;
  }
};

export const sendConfirmationEmail = async (data: ReservationData): Promise<boolean> => {
  try {
    // For now, we'll just return true as confirmation emails can be added later
    // This keeps the user experience smooth while focusing on the main reservation email
    console.log('Confirmation email would be sent to:', data.email);
    return true;
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    return false;
  }
};
