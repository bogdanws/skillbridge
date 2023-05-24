import ChatPageBarBottom from "./ChatPageBarBottom";
import ChatWindow from "./ChatWindow";

export default function ChatPage() {
	return <div className={'flex-grow flex flex-col'}>
		<ChatWindow/>
		<ChatPageBarBottom/>
	</div>
}