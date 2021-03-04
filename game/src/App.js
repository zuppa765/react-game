import { React, useState, useEffect } from "react";
import './css/style.scss';
import useSound from 'use-sound';
import sprite from './sounds/sprite.mp3';

import { Header } from "./components/Header";
import { ButtonsStart } from "./components/ButtonsStart";
import { GameClassic } from "./components/GameClassic"
import { Result } from "./components/Result"
import { Footer } from "./components/Footer"


//hooks
import { useLevel } from './hooks/useLevel';
import { useOptions } from './hooks/useOptions';
import { useChoices } from './hooks/useChoices';
import { useOutcome } from './hooks/useOutcome';
import { useClicks } from './hooks/useClicks';
import { useName } from './hooks/useName';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

function App() {
  //hooks
  const levels = useLevel();
  const options = useOptions();
  const choices = useChoices();
  const outcome = useOutcome();
  const clicks = useClicks();
  const name = useName('Your name');
  const [play] = useSound(sprite, {
    sprite: {
      cl1: [0, 600],
      cl2: [600, 250],
      long: [850, 100],
    },
  });

  //refresh options according to level in LocalStorage
  useEffect(() => {
    options.chooseOptions(levels.level);
  }, [levels.level]);

  return (
    <Router>
      <div className="App" >
        <Header {...clicks}{...levels} play={play} />

        {levels.level &&
          <Route path='/game-classic' exact render={() => <GameClassic {...levels} {...options} {...choices} {...outcome} {...clicks} play={play} {...name} />}
          />}

        {levels.level &&
          <Route path='/game-hard' exact render={() => <GameClassic {...levels}  {...options} {...choices} {...outcome} {...clicks} play={play} {...name} />}
          />}

        {!choices.humanChoice ? <Redirect to={levels.level} /> :
          <Route path="/result" render={() =>
            <Result {...choices} {...outcome} {...levels} {...options} play={play} />} />}

        <Route path='/' exact render={() => <ButtonsStart {...levels} {...options} {...clicks}  {...choices} play={play} {...name} />} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;