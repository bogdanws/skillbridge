import VideoPage from "@/app/join/[roomId]/VideoPage";

export default function Join({params}: {params: {roomId: string}}) {
	return <VideoPage roomId={params.roomId} />
}