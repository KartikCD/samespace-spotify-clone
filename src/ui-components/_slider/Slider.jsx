import * as React from "react";
import styles from './Slider.module.css';

export const Slider = React.memo(({ percentage = 0, onChange }) => {
  const [position, setPosition] = React.useState(0);
  const [marginLeft, setMarginLeft] = React.useState(0);
  const [progressBarWidth, setProgressBarWidth] = React.useState(0);

  const rangeRef = React.useRef();
  const thumbRef = React.useRef();

  React.useEffect(() => {
    const rangeWidth = rangeRef.current.getBoundingClientRect().width;
    const thumbWidth = thumbRef.current.getBoundingClientRect().width;
    const centerThumb = (thumbWidth / 100) * percentage * -1;
    const centerProgressBar =
      thumbWidth +
      (rangeWidth / 100) * percentage -
      (thumbWidth / 100) * percentage;
    setPosition(percentage);
    setMarginLeft(centerThumb);
    setProgressBarWidth(centerProgressBar);
  }, [percentage]);

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.progressBarCover} style={{ width: `${progressBarWidth}px` }}></div>
      <div
        className={styles.thumb}
        ref={thumbRef}
        style={{
          left: `${position}%`,
          marginLeft: `${marginLeft}px`,
        }}
      ></div>
      <input
        className={styles.range}
        type='range'
        value={position}
        ref={rangeRef}
        step='0.01'
        onChange={onChange}
      />
    </div>
  );
});
