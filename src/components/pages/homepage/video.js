import React, { useEffect, useState, useRef } from 'react'
import video from '../../../video/banner.mp4'
import styled from '@emotion/styled'

const VideoWrapper = styled.div`
  width: 100%;
`
const Video = styled.video`
  width: 100%;
`

const Replay = styled.button`
  position: absolute;
  right: 15px;
  bottom: 15px;
  z-index: 10;
  background: transparent;
  border: 0;
  font-weight: bold;
  font-size: 1.5rem;
  text-decoration: underline;
`

export default () => {
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef(false)
  useEffect(() => {
    videoRef.current.addEventListener('ended', () => {
      setIsPlaying(false)
    })
  }, [])
  return (
    <VideoWrapper>
      <Video ref={videoRef} autoPlay muted>
        <source src={video} type="video/mp4" />
      </Video>
      {!isPlaying && (
        <Replay
          type="button"
          onClick={event => {
            event.preventDefault()
            videoRef.current.play()
            setIsPlaying(true)
          }}
        >
          replay
        </Replay>
      )}
    </VideoWrapper>
  )
}
