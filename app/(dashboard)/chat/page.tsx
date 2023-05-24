import ChatPage from './ChatPage';
import PeopleList from './PeopleList';

export default function Chat() {
	return <div className={'h-full flex flex-row'}>
		<PeopleList/>
		<ChatPage/>
	</div>
}