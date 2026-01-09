
import ErrorProneComponent from "@/components/ErrorProneComponent";
import ErrorBoundary from "@/components/ErrorBoundary";



export default function Home() {
    return (
    <ErrorBoundary>
      <ErrorProneComponent />
    </ErrorBoundary>
  );
}
