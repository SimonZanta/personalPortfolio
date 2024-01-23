import './icoAnim.css';
import { useInView } from 'react-intersection-observer'

export default function ProjectSvg(props){
  const [ref, inView] = useInView({treshold: 0.5})
  return(
  <svg
    viewBox="0 0 190 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    ref={ref}
  >
    <path
      id={(inView ? 'animateHover' : 'basic')}
      d="M4 128V140C4 141.657 5.34315 143 7 143H72.5H117.5H183C184.657 143 186 141.657 186 140V128H4Z"
      fill="#F3CBF3"
    />
    <path
      id={(inView ? 'animateHover' : 'basic')}
      d="M4 128V18C4 16.3431 5.34315 15 7 15H183C184.657 15 186 16.3431 186 18V72V128M4 128V140C4 141.657 5.34315 143 7 143H72.5M4 128H186M186 128V140C186 141.657 184.657 143 183 143H117.5M72.5 143H117.5M72.5 143L52.3313 181.096C51.2736 183.094 52.722 185.5 54.9827 185.5H135.017C137.278 185.5 138.726 183.094 137.669 181.096L117.5 143"
      stroke="#F3CBF3"
      strokeWidth={10}
      strokeLinecap="round"
    />
  </svg>
  )
}
