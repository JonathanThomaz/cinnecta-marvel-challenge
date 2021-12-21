import './style.css';

interface IBoxProps {
  title?: string;
}
export function Box({ title }: IBoxProps): JSX.Element {
  return (
    <section>
      <header>{title}</header>
    </section>
  );
}
