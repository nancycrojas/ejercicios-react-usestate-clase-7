import { Colors } from './components/colors/Colors';
import { SelectBox } from './components/selectBox/SelectBox';
import { ExerciseTheme } from './components/exerciseTheme/ExerciseTheme';

import './App.css';

function App() {

  return (
    <div>
      <div>
       <Colors />
      </div>
      <div>
       <SelectBox />
      </div>
      <div>
        <ExerciseTheme />
      </div>
    </div>
  );
};

export default App
