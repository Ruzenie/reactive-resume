import { TiptapInlineContent } from "@/components/input/rich-content";
import { cn } from "@/utils/style";

type LinkedTitleProps = {
  title: string;
  website?: { url: string; label: string };
  showLinkInTitle?: boolean;
  className?: string;
};

export function LinkedTitle({ title, website, showLinkInTitle, className }: LinkedTitleProps) {
  if (showLinkInTitle && website?.url) {
    return (
      <a href={website.url} target="_blank" rel="noopener" className={cn("inline", className)}>
        <strong>
          <TiptapInlineContent content={title} />
        </strong>
      </a>
    );
  }

  return (
    <strong className={className}>
      <TiptapInlineContent content={title} />
    </strong>
  );
}
