import React from 'react'

import ChairIcon from './assets/icons/chair.svg'
import GalleryIcon from './assets/icons/gallery.svg'
import MediaIcon from './assets/icons/media.svg'
import CubeIcon from './assets/icons/cube.svg'
import ArIcon from './assets/icons/ar.svg'
import FullScreenIcon from './assets/icons/fullScreen.svg'

import VideoSample from './assets/videos/sampleVideo.mp4'


export const ItemsMedia = () => {
	const [isPlaying , setIsPlaying] = React.useState(false)
	const [isFullScreen , setIsFullScreen] = React.useState(false)
	const videoRef = React.useRef<HTMLVideoElement | null>(null)

	const toggleFullScreen = () => {
		if (videoRef.current) {
			if (!isFullScreen) {
				if (videoRef.current.requestFullscreen) {
					videoRef.current.requestFullscreen()
			
				} else {
					if (document.exitFullscreen) {
						document.exitFullscreen()
			
					}
					setIsFullScreen(!isFullScreen)
				}
			}
		}
	}

	const handlePlayVideo = () => { 
		if (videoRef.current) {
			if (isPlaying) {
				videoRef.current.pause()
			} else {
				videoRef.current.play()
			}
			setIsPlaying(!isPlaying)
		}
	}

	const Icons = [
		{
			icon : ChairIcon
		},
		{
			icon : GalleryIcon
		},
		{
			icon : MediaIcon
		},
		{
			icon : CubeIcon
		},
		{
			icon : ArIcon
		},
	]



	return (
		<div className='flex relative justify-center  p-5 w-full lg:w-1/2 h-full'>
			<div className='relative min-h-full w-full flex justify-center items-center'> 
				
				<video
					ref={videoRef}
					className="max-h-[90vh] min-h-[70vh] min-h-1/2 w-full object-cover"
					src={VideoSample}
				/>

				<button className="absolute bottom-3 right-3" onClick={toggleFullScreen}>
					<img src={FullScreenIcon} />
				</button>
			
				<button className='absolute' onClick={handlePlayVideo} >
					{!isPlaying ? 
						<div className=" w-0 h-0 rounded-md
                        border-t-[40px] border-t-transparent
                        border-l-[65px] border-l-[#FB1010]
                        border-b-[40px] border-b-transparent">
						</div> :
						<div className='flex gap-4 hover:opacity-100 opacity-20 duration-500'>
							<span className='w-[20px] bg-[#FB1010] h-[60px]'></span>
							<span className='w-[20px] bg-[#FB1010] h-[60px]'></span>
						</div>
					}
				</button>
			
			
			</div>
			<div className='absolute flex mt-2 lg:relative right-2 h-full  flex-col gap-2 px-4 '>
				{Icons.map((icon, index)=> 
					<div key={index}><img src={icon.icon} className='hover:bg-green duration-300 h-[40px] p-2 w-auto hover:bg-gre bg-darkest-brown rounded-full'></img></div>        )
				}
			</div>
		</div>
	)
}
