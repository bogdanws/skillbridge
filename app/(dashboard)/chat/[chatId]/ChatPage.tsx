import ChatPageBarBottom from "./ChatPageBarBottom";
import ChatWindow from "./ChatWindow";

export default async function ChatPage({chatId} : {chatId: number}) {
	// const chat = await getChatMessages(chatId);
	// const messages = await chat.list({limit: 30});
	// const test = messages.map(message => {
	// 	return {
	// 		body: message.body,
	// 		sid: message.sid,
	// 		dateCreated: message.dateCreated.toDateString()
	// 	} as MessageType;
	// });

	return <div className={'flex-grow flex flex-col'}>
		<ChatWindow chatId={chatId}/>
		<ChatPageBarBottom chatId={chatId}/>
	</div>
}

