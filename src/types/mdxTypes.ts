export interface CodeViewerProps {
  code: string;
  language: string; // Supports many languages: js, ts, python, java, ruby, c, cpp, go, rust, etc.
  fileName?: string;
  showLineNumbers?: boolean;
}

export interface MdxImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}
