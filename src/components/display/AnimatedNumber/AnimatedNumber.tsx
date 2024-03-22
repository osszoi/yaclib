import './style.css';

interface Props {
  fontSize?: string;
  n: number;
  maxDigits?: number;
}

export const AnimatedNumber = ({
  n,
  fontSize = '72px',
  maxDigits = 2
}: Props) => {
  const digits = n.toString().split('').map(Number);

  while (digits.length < maxDigits) {
    digits.unshift(0);
  }

  return (
    <div className="number-container">
      {digits.map((digit, k) => (
        <div
          className="digit"
          // @ts-expect-error: css var
          style={{ '--digit-size': fontSize }}>
          <div
            className="digit__track"
            style={{ transform: `translateY(-${digit}0%)` }}>
            {Array.from({ length: 10 }, (_, i) => (
              <div
                key={i}
                style={{
                  visibility:
                    i === 0
                      ? maxDigits - k <= n.toString().length
                        ? 'visible'
                        : 'hidden'
                      : 'visible',
                  // @ts-expect-error: css var
                  '--digit-size': fontSize
                }}>
                {i}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};