export default function VideoChat({videoCharRef} : {videoCharRef: React.RefObject<HTMLDivElement>}) {
	return <div ref={videoCharRef}
	            className={'w-full h-screen bg-gray-900 flex flex-row flex-wrap justify-center items-center'}
          >
	</div>
}