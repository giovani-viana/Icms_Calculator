import Calculadora from './Components/Calculadora';

import { BrowserRouter as Route, Routes, Link} from "react-router-dom";
import { Container } from '@mui/system'

import { Home } from './Pages/Home'
import { Processos } from './Pages/Processos';
import { Sobre } from './Pages/Sobre';
import { TabICMS } from './Pages/TabICMS';

<Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/Processos' element={<Processos />}></Route>
    <Route path='/Sobre' element={<Sobre />}></Route>
    <Route path='/TabICMS' element={<TabICMS />}></Route>
</Routes>

function App() {
  return (
    <div className="App">
      <nav>
        <Container>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/Processos'>Processos</Link>
                </li>
                <li>
                    <Link to='/Sobre'>Sobre</Link>
                </li>
                <li>
                    <Link to='/TabICMS'>Tabela ICMS</Link>
                </li>
            </ul>
        </Container>
    </nav>
      <Calculadora />
    </div>
  );
}

export default App;
