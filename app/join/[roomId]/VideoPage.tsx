"use client";
import ActionBar from "@/app/join/[roomId]/ActionBar";
import VideoChat from "@/app/join/[roomId]/VideoChat";
import {useState, useEffect, useCallback, useRef} from "react";
import * as Video from 'twilio-video';

export default function VideoPage({roomId}: {roomId: string}) {
	const [room, setRoom] = useState<Video.Room | null>(null);

	const videoChatRef = useRef<HTMLDivElement>(null);

	const getToken = useCallback(async () => {
		const response = await fetch(`/api/video/join?roomId=${roomId}`);
		const data = await response.json();

		const room = await Video.connect(data.token, {
			video: false
		});
		setRoom(room);

		// Add video for newly connected participants
		room.on('participantConnected', participant => {
			console.log(`Participant "${participant.identity}" connected`);

			participant.tracks.forEach(publication => {
				if (publication.isSubscribed && publication.track?.kind === 'video') {
					const track = publication.track;
					videoChatRef?.current?.appendChild(track.attach());
				}
			});

			participant.on('trackSubscribed', track => {
				if (track.kind === 'video') {
					videoChatRef?.current?.appendChild(track.attach());
				}
			});
		});

		// Add video for already connected participants
		room.participants.forEach(participant => {
			participant.tracks.forEach(publication => {
				if (publication.isSubscribed && publication.track?.kind === 'video') {
					const track = publication.track;
					videoChatRef?.current?.appendChild(track.attach());
				}
			});

			participant.on('trackSubscribed', track => {
				if (track.kind === 'video') {
					videoChatRef?.current?.appendChild(track.attach());
				}
			});
		});

		// TODO: Add local video
		// try {
		// 	Video.createLocalVideoTrack().then(track => {
		// 		videoChatRef.current?.appendChild(track.attach());
		// 	});
		// } catch (e) {
		// 	console.log(e);
		// }

		// TODO: Handle participant video disconnect

		// TODO: Handle participant disconnect
		room.on('participantDisconnected', participant => {
			console.log(participant);
		});
		room.on('disconnected', room => {
			console.log(room);
		});

		return () => {
			room.disconnect();
		}
	}, [roomId]);

	useEffect(() => {
		getToken();
	}, [getToken]);

	return <>
		<ActionBar room={room!}/>
		<VideoChat videoCharRef={videoChatRef}/>
	</>
}