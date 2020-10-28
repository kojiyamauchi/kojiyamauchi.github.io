/*
  No Content.
*/

import styled from 'styled-components'

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
  'M139.8,22.6c-15.3,40.7-31.7,81.1-49,121c-2-29.1-4-58.2-6-87.3C84,43.1,82.7,29,74.2,19C60.1,57.3,41.8,94,19.7,128.3',
  'M163.4,157.1c-8.8-4.4-18-9.1-23.4-17.3s-5.5-20.8,2.6-26.4c4.9-3.4,11.3-3.4,17.3-3.3c5.8,0.1,11.6,0.3,17.4,0.4c1.6,0,3.2,0.1,4.4,1.1c1.6,1.3,1.8,3.7,1.9,5.8c0.2,8.2,0,16.4-0.5,24.6c-0.2,3.7-0.6,7.6-2.9,10.5c-4.4,5.7-13.2,4.6-20.2,3',
  'M94.2,198.5c-7.9-11.2-18.3-23.7-32-22.7c-12.1,0.9-20.6,12.5-24.9,23.8c-9.7,25.6-6.2,55.9,9.1,78.6c2.5,3.7,5.4,7.3,9.4,9.5c7.2,4,17.2,1.8,22.1-4.8',
  'M130.9,290.7c-8.3-2.1-16-6.4-22.2-12.3c-3.7-3.6-7-8.2-6.9-13.4c0.1-6.4,5.7-11.7,11.8-13.7c6.1-2,12.7-1.4,19.1-0.7c2.2,0.2,4.6,0.5,6.5,1.7c1.3,0.8,2.3,1.9,3.1,3.1c4.2,5.9,4.8,14.1,1.5,20.6c-3.3,6.4-10.4,10.7-17.6,10.7',
  'M162.9,237.9c-2.1,19.5-4.8,38.9-8,58.2c0.1-7.9,0.2-15.9,2.4-23.4c2.2-7.6,6.9-14.7,13.9-18.2c4.3-2.1,9.3-2.8,14.1-2.7c1.7,0,3.4,0.2,4.9,1c3.7,2,4.2,7.1,4.2,11.3c0,11.9,0,23.8,0.1,35.6',
  'M216.7,253.8c17,4.6,33.9,9.2,50.9,13.8',
  'M246.1,207.9c-4.8,37.4-8.8,74.9-11.9,112.5',
  'M288.3,289.8c5.2,0.7,10.6,1.5,15.6,0c5-1.5,9.6-5.8,9.6-11c0-4.8-3.8-8.9-8.2-10.7c-4.4-1.8-9.3-1.8-14.1-1.6c-2.9,0.1-6,0.4-8.4,2c-3.5,2.4-4.6,7-5.2,11.2c-1.3,9.2-1.6,18.6,0.8,27.5c2.4,8.9,7.9,17.3,16.1,21.7c7,3.8,17.3,3.4,21.1-3.5',
  'M338.1,271.3c-2.3,21.5-4.6,43-6.9,64.5c1.4-9.5,3.3-18.9,5.8-28.2c1.7-6.2,3.9-12.8,9-16.8s13.8-4,17,1.7c1.4,2.5,1.4,5.6,1.4,8.5c-0.1,12.3-0.1,24.6-0.2,36.8',
  'M384.9,275.5c13.7,1.1,27.5,2.3,41.2,3.4',
  'M403.8,234.8c0.4,40.2-1.2,80.5-4.9,120.5',
  'M122.1,358c7.2,5.9,13.9,12.4,20.2,19.3',
  'M158.2,347.2c-0.5,24.8-10.8,49.3-28.1,67.1',
  'M176.3,382.6c4.1,0.4,8.3,0.7,12.2-0.6c3.9-1.4,7.3-4.9,7.1-9c-0.3-6.7-10.1-9.5-15.6-5.6c-5.5,3.9-7.3,11.2-8,17.9c-0.6,6.8-0.4,14,3.3,19.7c3.7,5.7,11.8,9,17.6,5.4c0.7-3.1,1.4-6.1,2.1-9.2',
  'M210.5,384.6c10.5,0.4,21.1,0.7,31.6,1.1',
  'M226,361.7c0.6,21.1,1.2,42.1,1.9,63.2',
  'M257.9,413c0,0.9,0,1.8,0,2.6'
]

type Props = {
  className?: string
}

const NoContentComponent: React.FC<Props> = ({ className }): JSX.Element => (
  <svg
    className={`${className} svg-graffiti`}
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
      <path className="path" d={info} key={index} />
    ))}
  </svg>
)

const StyledComponent = styled(NoContentComponent)`
  width: 100%;

  .path {
    fill: none;
    stroke: #fff;
    stroke-width: 12;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
  }
`

export const NoContent = StyledComponent
