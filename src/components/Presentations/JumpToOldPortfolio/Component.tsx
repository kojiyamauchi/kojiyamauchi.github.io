/*
  Jump To Old Portfolio Component.
*/

import { useRef, useEffect } from 'react'
import styles from './style.module.scss'

const pathGraffitiArr = [
  'M461.7,621.7c4.1-87.7,21.6-174.7,51.5-257.1c6.6-18.2,14-36.5,25.6-51.9c11.5-15.2,26.9-27.3,44.4-34.8c10.1-4.3,21.2-7.1,32-5.4c14.6,2.3,27,12.7,35.2,25c8.2,12.4,12.7,26.7,17.2,40.8c4.2,13.3,8.5,26.7,12.7,40c10.3,32.4,20.6,64.9,27.9,98.1c12,54.2,16,110.1,11.9,165.5',
  'M624.8,523c12.4,1.7,26.4,5.5,31.6,16.9c2.6,5.6,2.5,12,2.4,18.1c-0.1,5.9-0.3,11.8-0.4,17.7c-0.2,10.8-0.8,22.5-7.8,30.8c-3.5,4.1-8.3,6.9-13.2,9c-14,5.9-29.6,6.7-44.7,7.1c-17.2,0.4-34.6,0.4-51.6-2.3c-8.5-1.3-17.7-3.9-22.4-11c-1.8-2.8-2.8-6.1-3.7-9.3c-4.8-18.4-6.4-37.7-4.6-56.6c0.3-3,0.7-6.1,1.8-8.9c6.8-17.7,34.2-13.9,49-14.2C582.4,519.7,603.7,520.1,624.8,523z',
  'M665.2,552.9c14.8-2.9,29.6-5.7,44.4-8.6',
  'M662.2,589.2c16.6-1.2,33.3-0.7,49.8,1.5',
  'M502.8,544.5c-9.6-3.8-19.6-6.9-29.7-9.2',
  'M505.9,592.1c-12-2.1-24.1-3.5-36.3-4.1',
  'M599.6,423.5c18.1-0.3,36.3-0.1,54.4,0.6',
  'M515.3,420.9c16.8,0.3,33.6,0.6,50.3,0.8',
  'M626,455.6c-0.3,6.2-0.2,12.5,0.2,18.7',
  'M544,455c-0.2,5.3-0.2,10.6,0.2,15.8',
  'M608.4,218c-1,15.8-1,31.6,0.1,47.4',
  'M614.3,268.9c8.9-16,19.9-30.8,32.6-44',
  'M601.5,270.5c-12.2-13.4-25.7-25.6-40.3-36.3',
  'M417.2,550.6c11.9,21.4,22.7,43.5,32.4,66',
  'M373.5,564c16.7,22.7,33.5,45.3,50.2,68',
  'M415.2,549.4c9.2-11.3,16.3-24.3,20.9-38.1c2.4-7.3,3-17.6-4.2-20.6c-4-1.7-8.7,0-11.9,3s-4.9,7.1-6.7,11c-2.3-13-8-25.5-16.4-35.7c-0.9-1.1-1.9-2.3-3.3-2.6c-2.6-0.5-4.7,2-5.9,4.3c-3.6,6.8-5.1,14.8-4.1,22.5c-1.7-4.6-3.4-9.3-6.4-13c-3.1-3.8-7.8-6.6-12.6-6.1c-0.7,10.2-0.1,20.5,1.8,30.5c-5-7.8-13.8-13-23.1-13.7c-1.2-0.1-2.6,0-3.3,0.9c-0.7,0.8-0.6,2-0.4,3.1c1.5,9.7,4.6,19.2,9.1,28c-5-1.1-10.1-1.6-15.2-1.3c-1.6,0.1-3.4,0.3-4.6,1.4c-1.3,1.2-1.5,3.2-1.4,5c0.8,9.8,9.6,16.8,17.6,22.5c5.9,4.3,11.9,8.5,17.8,12.8',
  'M432.9,473.4c5.8,2.5,10.6,7.3,13.2,13',
  'M445.3,461.7c4.7,3.1,8.7,7.4,11.4,12.3',
  'M313.6,514.4c-0.9,10.2,1.3,20.8,6.3,29.8',
  'M303,525c-1.8,8.2-0.8,17,2.7,24.6',
  'M555.6,552.4c16.8,9.4,32.7,20.6,47.3,33.1',
  'M599.5,547.1c-15.2,11-29.4,23.5-42.1,37.3',
  'M345.1,23.3c36.7,50.5,110,161.1,142.3,214.6',
  'M437.1,419.7c-68.5,7.1-252.2,53.2-315.9,79.4',
  'M36.6,17.8c20.1,2,40.4,2.8,60.6,2.3',
  'M64.6,27.3c3.9,21.6,4.7,43.8,2.1,65.6c-0.8,6.7-1.9,13.5-5.4,19.3c-3.5,5.8-9.8,10.2-16.5,9.7c-5-0.4-9.5-3.5-12.7-7.5s-5-8.8-6.7-13.5c-2.8-7.8-5.1-15.7-6.9-23.7',
  'M89.5,78.9c-0.7,9.8-0.6,19.7,0.5,29.5c0.6,5.7,1.6,11.5,5,16.1c3.7,5.1,10.2,7.9,16.5,7.3c1.7-0.2,3.4-0.6,4.5-1.8c0.8-0.9,1.3-2.1,1.6-3.3c4.1-13.1,2.6-27.2,1.1-40.8',
  'M138.5,89.5c0,14.4,0,28.8,0,43.2c0.3-10.1,0.6-20.2,0.9-30.3c0.1-3.4,0.3-7.1,2.6-9.7c2.9-3.3,7.8-3.4,12.1-3.3c1.4,0,2.9,0.1,3.8,1.2c0.6,0.7,0.8,1.6,0.9,2.5c2,12.4,3.2,24.9,3.5,37.5c-0.1-10.2-0.1-20.3-0.2-30.5c0-3.9,0-8,2-11.3c3.7-0.1,7.3-0.1,11-0.2c0.9,0,1.9,0,2.6,0.5c0.6,0.4,0.9,1.1,1.1,1.8c4.9,12.1,7.7,25.1,8.1,38.2',
  'M203.2,78.1c1,26.9,2,53.8,3,80.8',
  'M207.9,62.3c0.5-4.2,5.6-6,9.8-6.8c4.1-0.8,8.2-1.6,12.3-0.8c6.1,1.2,11.2,5.9,14,11.5c2.8,5.6,3.6,12,3.7,18.2c0,4.2-0.3,8.6-2.3,12.3c-2.1,4-5.8,6.8-9.5,9.3c-6.8,4.5-14.1,8.3-21.7,11.1',
  'M273.7,143.9c3.5,0,7,0,10.5,0c6.4,0,12.9,0,19.3,0',
  'M283.3,117.6c1.8,21.3,2.9,42.7,3.3,64.1',
  'M325.3,182c-4-3.4-7.1-8-8.7-13c-0.7-2.2-1.1-4.5-0.6-6.8c1.4-5.7,8.1-8.1,13.8-9.1c3.7-0.6,7.6-1,10.9,0.8c3.1,1.7,5,5.2,5.6,8.7c0.6,3.5,0.2,7.1-0.2,10.7c-0.3,2.5-0.8,5.3-2.8,6.7c-1.1,0.8-2.5,1-3.9,1.1c-4.6,0.5-9.3,0.7-13.9,0.6',
  'M41.6,203.5c1.5-0.7,3.1-1,4.7-1.3c12.8-2.2,26-4.1,38.7-1.6c3.1,0.6,6.3,1.6,8.7,3.6c4.2,3.6,5.2,9.6,6,15c1.7,12.4,8.8,32.2-3.6,40.5c-9,6.1-26.3,8.7-36.9,7c-11.2-1.7-18.7-8.6-22-19.3C34.4,238.1,30.5,209.2,41.6,203.5z',
  'M141.4,191.4c-5.4,25.3-7.1,51.5-5,77.3',
  'M211.7,187c-1,27.5-2.3,55.1-3.8,82.6',
  'M199.5,226.3c-5.9-2.3-12.4-4.7-18.5-2.8c-8.2,2.6-12,12-13.5,20.4c-1.5,8.7-1.4,18,2.8,25.7c4.2,7.7,13.5,13.1,21.9,10.7',
  'M59.6,327.3c-0.2,36.5-3.3,73-9.4,109',
  'M64.2,315.9c9.1-4.1,19.5-3.9,29.5-3.6c2.7,0.1,5.5,0.2,8,1.1c7.4,2.8,10.3,11.5,11.6,19.3c1,5.9,1.5,12,0.5,18c-1.1,5.9-3.9,11.7-8.7,15.4c-3.2,2.5-7.1,3.8-10.9,5.2c-7.4,2.6-14.8,5.2-22.2,7.8',
  'M116.8,403.8c0.2-5.4,0.5-11.4,4-15.5c4.4-5.2,12.2-5.7,19-5.8c2.9,0,5.9-0.1,8.6,1.2c4.6,2.2,6.7,7.6,8.1,12.5c2.3,7.8,4.2,15.9,3.5,23.9c-0.2,1.8-0.5,3.7-1.5,5.2c-1.8,2.6-5.2,3.5-8.3,4.2c-7.9,1.8-20.7,7.8-27.8,1.8C115.8,425.7,116.6,411.5,116.8,403.8z',
  'M171.9,379.2c2,17.1,3,34.3,3.1,51.5c0-10.3-0.1-20.6-0.1-30.8c0-3.3,0-6.8,1.7-9.7c3.2-5.5,10.5-6.4,16.8-6.7',
  'M199.5,358.9c10.2,1,20.5,1.9,30.7,2.9',
  'M213.8,329.2c2.7,31.6,6,63.2,10,94.7',
  'M290.5,345.9c-2.5-7.2-6.2-14-11-20c-4.7-5.9-12.3-11.3-19.2-8.4c-6.1,2.6-8.1,10.1-8.6,16.7c-2,27.3,8.8,54.5,6.1,81.8',
  'M236.3,385.8c12.3-0.5,24.6-1,36.9-1.6',
  'M300.4,401.5c-4.6-5.5-6.2-13.4-4-20.2c0.6-1.8,1.5-3.6,3-4.7c1.9-1.4,4.4-1.6,6.8-1.6c5.7-0.2,11.5-0.3,17.2-0.3c1.8,0,3.6,0,5.2,0.6c4.1,1.6,5.9,6.6,5.8,11.1C334.2,405,314,417.5,300.4,401.5z',
  'M349.9,302.8c3.4,30.6,6.1,61.3,8,92.1',
  'M381.3,360.7c-0.4,10.5-0.3,21.1,0.3,31.6',
  'M379.5,331.7c0-1.1,0.1-2.2,0.1-3.4c1.5-0.5,3.2-0.3,4.5,0.7c-0.8,1.3-3,1.3-3.8,0.1',
  'M405.9,372.1c-2.5-6-3.8-12.5-3.8-19c0-4.3,1-9.4,4.9-11.3c1.5-0.7,3.2-0.9,4.8-1.1c6.6-0.6,13.9-1.1,19.4,2.7c7.4,5.2,8.1,15.6,8.1,24.6c0,3-0.1,6.2-2.1,8.4c-1.9,2.1-14.6,7.3-17.6,7.4C412.8,384.1,408.4,378,405.9,372.1z'
]

type Props = {
  openAboutMe: () => void
  copyrightHover: boolean
}

export const JumpToOldPortfolio: React.VFC<Props> = ({ openAboutMe, copyrightHover }): JSX.Element => {
  const myComponent = useRef<HTMLDivElement>(null)

  useEffect(() => myComponent.current!.classList.add('is-display'))

  return (
    <div ref={myComponent} className={`${styles.wrapper} jump-to-old-portfolio  ${copyrightHover ? 'is-active' : ''}`}>
      <svg
        className={`${styles['svg-graffiti']} svg-graffiti`}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 760 650"
        enableBackground="new 0 0 760 650;"
        xmlSpace="preserve"
      >
        {pathGraffitiArr.map((info, index) => (
          <path className={`${styles.path} path`} d={info} key={index} />
        ))}
      </svg>
      <button className={`${styles['button-about-me']} button-about-me`} onClick={openAboutMe}>
        About Me 🏄‍♀️
      </button>
    </div>
  )
}
