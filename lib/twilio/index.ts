import twilio from "twilio";

const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_API_KEY_SECRET);
export default twilioClient;