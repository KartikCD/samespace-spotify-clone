import * as React from "react";

export const Image = React.memo(({ className, src, alt }) => {
  return <img src={src} alt={alt} className={className} />;
});
