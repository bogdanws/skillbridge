const AccessToken = require('twilio').jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;

export async function getTwilioToken(identity: string, roomName: string) {
	const videoGrant = new VideoGrant({ room: roomName });
	const token = new AccessToken(
		process.env.TWILIO_ACCOUNT_SID,
		process.env.TWILIO_API_KEY,
		process.env.TWILIO_API_KEY_SECRET,
		{identity: identity}
	);
	token.addGrant(videoGrant);
	return token.toJwt();
}
