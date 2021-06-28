/*
  Thanks For Visiting Component.
*/

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

  'M11.6,16.4c18.8,0,37.6,0,56.4,0',
  'M43.1,23.5c-1.2,33.4-0.2,66.9,2.9,100.2',
  'M89,13.7c2.1,37.6,0,75.4-6.2,112.6c-0.4-9.8-0.3-19.9,3.4-29S98.2,80.4,108,79.7c3.4-0.2,6.9,0.4,9.6,2.5c4.7,3.5,5.9,9.9,6.4,15.8c1.2,13.7,0.7,27.5-1.6,41.1',
  'M144.7,86.4c8.6-3,18-3.9,27-2.4c1.4,0.2,2.8,0.5,3.7,1.6c1.1,1.2,1.1,3.1,1.1,4.7c-0.4,13.7-0.8,27.3-1.2,41c-0.1,2.5-0.1,5.1,0.9,7.3c2.1,4.6,7.6,6.2,12.5,7.3',
  'M170,110.4c-3.8-1.7-7.7-3.5-11.8-3.9s-8.7,0.7-11.4,3.8c-1.6,1.9-2.5,4.4-3.1,6.8c-1.4,5.6-1.8,11.4-1.2,17.2c0.4,3.6,1.2,7.3,3.5,10.1c5,6.2,14.3,5.9,22.2,5',
  'M216.1,83.5c-1.2,22.9-3.4,45.8-6.7,68.6c-0.3-7.8-0.1-15.6,0.6-23.4c0.4-4.5,1-9,3-13s5.7-7.5,10.1-8.1c3-0.4,6.1,0.4,9.2,0.3c1.8-0.1,3.7-0.6,5.4,0.2c2,1,2.8,3.4,3.3,5.6c3,13,4.1,26.4,3.3,39.7',
  'M269.3,52.2c1,34.9-0.5,69.9-4.4,104.6',
  'M305.2,79.2c-11.4,6.6-21.8,15-30.7,24.7',
  'M276.6,111.1c13.3,20.2,29.8,38.3,48.7,53.4',
  'M248.1,190.6c-1.6-1.3-3.7-1.7-5.8-2c-3.5-0.6-7-1.2-10.5-0.6s-6.9,2.6-8.3,5.8c-0.9,2.1-0.8,4.4-0.7,6.6c0.7,23.2,2.5,46.3,5.2,69.3',
  'M194.8,235.1c19-1.7,37.9-3.5,56.9-5.2',
  'M277.1,253c-2.8-7.1-5.1-14.3-6.8-21.8c-0.3-1.2-0.5-2.5,0-3.7c0.6-1.4,2.1-2.1,3.4-2.6c5.4-2.2,11.2-3.6,17-4.4c1.9-0.2,3.9-0.4,5.6,0.5c2,1,3.1,3,4.1,5c2.9,6.2,4.8,12.8,5.6,19.6c0.1,1.3,0.2,2.6-0.3,3.8c-0.4,1-1.3,1.7-2.1,2.3c-7,5.5-15.9,8.6-24.8,8.8',
  'M327.5,212.4c0.6,20.1-0.6,40.3-3.7,60.2c-1.7-10,4.2-19.5,9.7-28c4.1-6.2,8.5-12.6,15.1-15.8c4.6-2.2,9.8-2.6,14.8-2.9',
  'M364.9,108.9c-7.3-3.7-17.2-2.7-22.5,3.6c-4.8,5.7-4.5,15,0.6,20.4c4.1,4.3,10.6,6.2,13.5,11.3c2.3,4,1.9,9,0,13.2s-5,7.7-8,11.1c-2.5,2.7-4.9,5.5-7.4,8.2',
  'M16,321.3c23.7,40.7,49.2,80.5,76.4,119.2c16.5-38.5,28.5-78.5,35.7-118.9',
  'M155,335.3c6.2,26,12.4,52,18.6,78c-1.1-0.6-2.1-1.2-3.2-1.9',
  'M152.1,308.9c-1.1,0.3-2.2-1-1.7-2c1.8-1.4,4.8-1.4,6.4,0.1c-1.4,1.4-3.2,2.4-5.1,2.9',
  'M209.3,333.2c-9.3,1.2-20.6-2.8-27,3.7c-4.8,4.9-2.9,12.2-0.8,18.2c2.9,7.9,6.3,16.3,14.1,20.4c6.1,3.1,13.6,2.9,20.4,4.5c6.8,1.6,13.7,6.5,12.5,13c-1.1,6.2-8.6,9.6-15.1,11.9c-4.4,1.5-8.8,3.1-13.2,4.6',
  'M239.1,340.4c4.1,18.3,8.3,36.5,12.4,54.8',
  'M234.1,312.1c-0.6-2.3-1.2-4.6-1.8-6.9',
  'M255.7,326.9c11.4-0.7,22.7-2,34-3.8',
  'M272.5,295.8c6,31.9,15.3,63.1,27.5,93.2',
  'M320.9,335.7c1.9,15.1,4.4,30.1,7.3,45.1',
  'M319.5,309.8c0.2,1,0.4,2,0.7,3c-2.7,1.1-6.1-0.9-6-3.5',
  'M342.8,326.9c0.2,16.5,6.5,32.5,7,49.1c1.4-13.1-5.1-26.2-3.2-39.3c0.4-3.1,1.4-6.3,3.8-8.3c3.1-2.6,7.7-2.5,11.8-2.2c2.2,0.1,4.5,0.3,6.5,1.4c3.3,1.9,4.6,5.9,5.5,9.6c3.5,13.8,5.6,28,6.3,42.2',
  'M425,295.2c-8.8-1.4-18.5,0.8-25.9,5.8c-2.6,1.8-5,4-6.4,6.6c-4.2,7.8,1.2,16.7,7.9,22.3c4.3,3.6,9.7,6.7,15.6,5.9c8.4-1.1,13.9-9.5,14.5-17.1c0.6-7.6-2.1-15-3-22.5c10.6,15.3,15.4,33.4,20,51.1c1.1,4.3,2.2,9.1,0.3,13.3c-2.2,4.8-7.7,7.7-12.9,10.1c-10.3,4.7-20.9,8.7-31.8,12'
]

type Props = {
  openAboutMe: () => void
  copyrightHover: boolean
}

export const ThanksForVisiting: React.VFC<Props> = ({ openAboutMe, copyrightHover }): JSX.Element => {
  return (
    <div className={`${styles.wrapper} thanks-for-visiting ${copyrightHover ? 'is-deactive' : ''}`}>
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
        About Me 🏄‍♂️
      </button>
    </div>
  )
}
