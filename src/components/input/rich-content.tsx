import { useMemo } from "react";

import { sanitizeHtml } from "@/utils/sanitize";
import { cn } from "@/utils/style";

import styles from "./rich-input.module.css";

type TiptapInlineContentProps = React.ComponentProps<"span"> & {
  content: string;
};

export function TiptapInlineContent({ content, className, ...props }: TiptapInlineContentProps) {
  const sanitizedContent = useMemo(() => sanitizeHtml(content), [content]);

  return (
    <span
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      className={cn(styles.tiptap_content, styles.tiptap_inline_content, className)}
      {...props}
    />
  );
}
