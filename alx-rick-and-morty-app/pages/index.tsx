import ErrorBoundary from '@/components/ErrorBoundary';
import ErrorProneComponent from '@/components/ErrorProneComponent';

const Home: React.FC = () => {
  return (
    <ErrorBoundary>
      <ErrorProneComponent shouldFail={false} />
      <div>Welcome to the Rick and Morty App!</div>
    </ErrorBoundary>
  );
};

export default Home;