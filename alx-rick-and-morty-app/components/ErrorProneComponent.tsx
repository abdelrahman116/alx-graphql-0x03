const ErrorProneComponent: React.FC<{ shouldFail: boolean }> = ({ shouldFail }) => {
  if (shouldFail) {
    throw new Error('This is a test error!');
  }
  return <div>Component loaded successfully.</div>;
};
export default ErrorProneComponent;
