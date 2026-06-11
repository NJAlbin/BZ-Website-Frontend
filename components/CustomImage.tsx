import Image, { ImageProps } from "next/image";

export default function CustomImage(props: ImageProps | Record<string, unknown>) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const p = props as any;
  return (
    <Image 
      {...p} 
      alt={p.alt || ""}
      width={p.width || 0} 
      height={p.height || 0} 
      sizes={p.sizes || "100vw"}
      style={{ width: p.width ? undefined : '100%', height: p.height ? undefined : 'auto', ...p.style }}
      unoptimized={true}
    />
  );
}
