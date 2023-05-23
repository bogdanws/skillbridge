import Button from './ActionButtons';
import {MdCallEnd} from 'react-icons/md';
import {BsFillMicFill, BsFillMicMuteFill, BsCameraVideoFill, BsCameraVideoOffFill, BsFillChatLeftTextFill} from 'react-icons/bs';

export default function ActionBar() {
	return <div className={'w-full mb-2 z-10 flex flex-row justify-between absolute bottom-0'}>
		<div/>
		<div>
			<Button><BsFillMicFill/></Button>
			<Button><BsCameraVideoFill/></Button>
			<Button><MdCallEnd/></Button>
		</div>
		<Button><BsFillChatLeftTextFill/></Button>
	</div>
}