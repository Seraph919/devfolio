import {
  Children,
  cloneElement,
  isValidElement,
  type ReactNode,
  type ReactElement,
  type CSSProperties,
} from 'react';
import { cn } from '@/lib/utils';

interface InfiniteScrollerProps {
  children: ReactNode;
  speed?: 'slow' | 'normal' | 'fast';
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
}

export function InfiniteScroller({
  children,
  speed = 'normal',
  direction = 'left',
  pauseOnHover = true,
}: InfiniteScrollerProps) {
  const items = Children.toArray(children);
  // Each repeated group must be wider than the viewport to avoid empty space
  // in categories containing just a few skills.
  const repeatsPerGroup = items.length ? Math.max(1, Math.ceil(9 / items.length)) : 1;
  const displayedItems = Array.from({ length: repeatsPerGroup }, (_, repeat) =>
    items.map((item, index) => ({ item, index, repeat }))
  ).flat();
  // Keep a consistent physical scroll velocity independent of group length.
  const secondsPerCard = { slow: 3.6, normal: 2.35, fast: 1.65 }[speed];
  const durationSeconds = Math.max(6, displayedItems.length * secondsPerCard);
  const style = {
    '--animation-duration': `${durationSeconds}s`,
    '--animation-direction': direction === 'left' ? 'normal' : 'reverse',
  } as CSSProperties;
  return (
    <div
      className={cn('skills-marquee', pauseOnHover && 'pause-on-hover')}
      style={style}
    >
      <div className="skill-track">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            className="skill-track-group"
            aria-hidden={copy === 1 || undefined}
          >
            {displayedItems.map(({ item, index, repeat }) => {
              const decorative = copy === 1 || repeat > 0;
              return (
                <li key={`${repeat}-${index}`} aria-hidden={decorative || undefined}>
                  {decorative && isValidElement(item)
                    ? cloneElement(item as ReactElement<{ tabIndex?: number }>, {
                        tabIndex: -1,
                      })
                    : item}
                </li>
              );
            })}
          </ul>
        ))}
      </div>
    </div>
  );
}
