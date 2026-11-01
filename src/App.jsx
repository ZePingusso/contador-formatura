
import Countdown from "./components/countdown.jsx";
import "./App.css";

function App() {
    return (
        <main className="container">
            <h1>Fim do Semestre</h1>

            <p>
                A contagem regressiva para as férias começou!
            </p>

            <Countdown />

            <footer>
                Desenvolvido com React
            </footer>
        </main>
    );
}

export default App;