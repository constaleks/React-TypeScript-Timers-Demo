import TimersContextProvider from './store/TimersContext';
import Container from './components/Container';

function App() {
    return (
        <TimersContextProvider>
            <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink:500 p-4 sm:p-8">
                <Container />
            </div>
        </TimersContextProvider>
    );
}

export default App;
