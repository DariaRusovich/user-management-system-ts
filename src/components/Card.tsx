import { FC } from 'react';

export const enum CardVariant {
  primary = 'primary',
  secondary = 'secondary',
}

interface ICardProps {
  width?: string;
  height?: string;
  variant: CardVariant;
  onClick: () => void;
}

const Card: FC<ICardProps> = ({ width, height, children, variant, onClick }) => {
  return (
    <div
      style={{
        width,
        height,
        background: variant === CardVariant.primary ? '#ccc' : 'none',
        border: variant === CardVariant.secondary ? '2px solid #ccc' : '',
       
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
