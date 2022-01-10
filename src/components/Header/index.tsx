interface IHeaderProps {
  title: string;
}
export function Header({ title }: IHeaderProps): JSX.Element {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}
