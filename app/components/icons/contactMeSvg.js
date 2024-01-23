import './icoAnim.css';
import { useInView } from 'react-intersection-observer'

export default function ContactMeSvg(props){
  const [ref, inView] = useInView({treshold: 0.5})
  return(
  <svg
    viewBox="0 0 181 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    ref={ref}
  >
    <path
      id={(inView ? 'animateHover' : 'basic')}
      d="M117 96V145C115.923 152.757 113.366 155.728 104.5 158H64L35.9803 182.623C34.042 184.327 31 182.95 31 180.37V161C31 159.343 29.6569 158 28 158H17.5C11.4859 155.933 8.43155 153.486 4 145V89C6.6682 81.1623 8.55391 77.063 17.5 74H64M117 96L144.503 120.541C146.436 122.266 149.5 120.894 149.5 118.302V99C149.5 97.3431 150.843 96 152.5 96H165C171.54 92.2056 174.543 89.4355 177 82.5V28C175.939 19.8493 173.109 16.5729 165 12.5H77.5C67.8612 17.7301 65.9368 21.29 64.5 28L64 74M117 96H82C69.9145 93.6581 64.9381 90.2511 64 74M36 131H82M36 110H64M98.5 42.5H144.5M98.5 65H144.5"
      stroke="#F3CBF3"
      strokeWidth={10}
      strokeLinecap="round"
    />
  </svg>
  )
}