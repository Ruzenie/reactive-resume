import { RichInput } from "./rich-input";

type TitleInputProps = Omit<React.ComponentProps<typeof RichInput>, "variant">;

export function TitleInput(props: TitleInputProps) {
  return <RichInput {...props} variant="inline" />;
}
