import Button from './ActionButtons';
import {MdCallEnd} from 'react-icons/md';
import {BsFillMicFill, BsFillMicMuteFill, BsCameraVideoFill, BsCameraVideoOffFill} from 'react-icons/bs';
import * as Video from 'twilio-video';
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function ActionBar({room} : {room?: Video.Room}) {
	const [isMuted, setIsMuted] = useState<boolean>(false);
	const [isVideoOff, setIsVideoOff] = useState<boolean>(true);
	const router = useRouter();

	if (!room) {
		return null;
	}

	return <div className={'w-full mb-2 z-10 flex flex-row justify-center absolute bottom-0'}>
		<div>
			<Button
				onClick={() => {
					if (!isMuted) {
						room!.localParticipant.audioTracks.forEach(publication => {
							if (publication.track) {
								publication.track.disable();
							}
						});
						setIsMuted(true);
					} else {
						room!.localParticipant.audioTracks.forEach(publication => {
							if (publication.track) {
								publication.track.enable();
							}
						}
						);
						setIsMuted(false);
					}
				}}>
				{!isMuted && <BsFillMicFill/>}
				{isMuted && <BsFillMicMuteFill/>}
			</Button>
			<Button
				onClick={() => {
					console.log(room!.localParticipant.videoTracks);
					if (!isVideoOff) {
						room!.localParticipant.videoTracks.forEach(publication => {
							if (publication.track) {
								publication.track.stop();
								publication.unpublish();
							}}
						);
						setIsVideoOff(true);
					} else {
						Video.createLocalVideoTrack().then(track => {
							setIsVideoOff(false);
							room!.localParticipant.publishTrack(track);
						});
					}
				}}>
				{!isVideoOff && <BsCameraVideoFill/>}
				{isVideoOff && <BsCameraVideoOffFill/>}
			</Button>
			<Button
				onClick={() => {
					room!.disconnect();
					router.replace('/dashboard');
				}}
			><MdCallEnd/></Button>
		</div>
		{/*<Button><BsFillChatLeftTextFill/></Button>*/}
	</div>
}