import React, {CSSProperties, PropsWithChildren, SyntheticEvent} from 'react';

type Props = PropsWithChildren<{
  onClick(evt: SyntheticEvent<HTMLDivElement>): void;
  style?: CSSProperties;
  className?: string;
}>;

export const Button = ({children, onClick, className, style}: Props) => {
  return (
    <div className={`button ${className || ''}`} style={style} onClick={onClick}>
      {children}
    </div>
  );
};
