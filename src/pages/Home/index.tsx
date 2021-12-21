import { Box } from 'components/Box';
import { Header } from 'components/Header';
import './style.css';

function Home() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <div className="flex files-content">
          <Box />
          <Box />
        </div>
        <div className="flex graphics-content">
          <Box />
          <Box />
        </div>
      </div>
    </div>
  );
}

export default Home;
