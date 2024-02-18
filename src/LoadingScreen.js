import './LoadingScreen.css';


function LoadingScreen(data) {
  return (
    <div className="Loading-screen">
      <header className="Loading-screen-header">
        <div class="Loading-screen-appearance-class">
          <p>
            {data.loading_phrase}
          </p>
        </div>
      </header>
    </div>
  );
}

export default LoadingScreen;
