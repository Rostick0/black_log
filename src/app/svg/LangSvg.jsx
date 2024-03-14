export default function LangSvg({ className, width = 21, height = 20 }) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.89746 9.99999C3.89746 13.912 7.06878 17.0833 10.9808 17.0833C14.8928 17.0833 18.0641 13.912 18.0641 9.99999M3.89746 9.99999C3.89746 6.08797 7.06878 2.91666 10.9808 2.91666C14.8928 2.91666 18.0641 6.08797 18.0641 9.99999M3.89746 9.99999H18.0641M9.5387 3.75089C7.26426 7.54818 7.26426 12.452 9.5387 16.2493C10.2045 17.3613 11.7573 17.3613 12.4231 16.2493C14.6975 12.452 14.6975 7.54818 12.4231 3.75089C11.7565 2.63885 10.2045 2.63885 9.5387 3.75089Z"
        stroke="var(--third-color)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
