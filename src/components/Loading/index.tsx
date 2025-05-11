import { Loading as XLoading } from '@alifd/next';

export function Loading({ className }: { className?: string }) {
  return (
    <XLoading
      className={className}
      style={{
        position: 'relative',
        width: '100vw',
        height: '60vh',
      }}
    />
  );
}
