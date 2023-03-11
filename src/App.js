import './App.css';
import Board from './Board';


const BOARDS = [
  ['lion.jpg', 'tiger.jpg', 'gorilla.jpg', 'skunk.jpg', 'antelope.png', 'lamb.jpg', 'baldeagle.jpg', 'bat.jpg', 'oryx.jpg', 'pony.jpg', 'chicken.jpg', 'porcupine.jpg', 'alligator.jpg', 'coyote.jpeg', 'panda.jpg', 'rhino.jpg'],
  ['orca.jpg', 'pony.jpg', 'sloth.jpg', 'vulture.jpeg', 'elephant.png', 'zebra.png', 'skunk.jpg', 'hare.png', 'lamb.jpg', 'ant.jpg', 'robot.jpg', 'alligator.jpg', 'chicken.jpg', 'macaque.jpg', 'snake.jpg', 'coyote.jpeg'],
  ['pig.jpg', 'vulture.jpeg', 'sugar_glider.jpg', 'tiger.jpg', 'zebra.png', 'turtle.jpg', 'giraffe.jpg', 'seal.jpg', 'cat.jpg', 'gorilla.jpg', 'bat.jpg', 'monkey.jpg', 'pony.jpg', 'meerkat.jpg', 'macaque.jpg', 'duck.jpg'],
  ['elephant.png', 'gorilla.jpg', 'lion.jpg', 'ant.jpg', 'dolphin.jpg', 'tropicbird.jpg', 'fox.jpg', 'porcupine.jpg', 'meerkat.jpg', 'cheetah.jpg', 'hare.png', 'pig.jpg', 'bear.png', 'lamb.jpg', 'koala.jpg', 'robot.jpg'],
  ['lion.jpg', 'panda.jpg', 'chimpanzee.jpg', 'elephant.jpg', 'snake.jpg', 'dolphin.jpg', 'porcupine.jpg', 'zebra.png', 'fox.jpg', 'dog.jpg', 'sugar_glider.jpg', 'robot.jpg', 'lamb.jpg', 'pony.jpg', 'bat.jpg', 'rhino.jpg'],
  ['tiger.jpg', 'dolphin.jpg', 'antelope.png', 'sugar_glider.jpg', 'pig.jpg', 'gorilla.jpg', 'hare.png', 'tropicbird.jpg', 'yoda.webp', 'snake.jpg', 'pony.jpg', 'cheetah.jpg', 'porcupine.jpg', 'penguin.jpg', 'sloth.jpg', 'lamb.jpg'],
  ['bat.jpg', 'meerkat.jpg', 'sloth.jpg', 'robot.jpg', 'arcticwolf.jpg', 'coyote.jpeg', 'chicken.jpg', 'whale.jpg', 'alligator.jpg', 'orca.jpg', 'dolphin.jpg', 'fox.jpg', 'dog.jpg', 'angelfish.jpg', 'monkey.jpg', 'elephant.png'],
  ['baldeagle.jpg', 'lion.jpg', 'elephant.jpg', 'macaque.jpg', 'angelfish.jpg', 'cow.jpg', 'hippo.jpg', 'alligator.jpg', 'lamb.jpg', 'gorilla.jpg', 'yoda.webp', 'vulture.jpeg', 'fox.jpg', 'cheetah.jpg', 'kangaroo.jpg', 'turtle.jpg'],
  ['tropicbird.jpg', 'pig.jpg', 'arcticwolf.jpg', 'baldeagle.jpg', 'porcupine.jpg', 'zebra.png', 'macaque.jpg', 'cow.jpg', 'oryx.jpg', 'koala.jpg', 'cheetah.jpg', 'dog.jpg', 'pony.jpg', 'human.webp', 'lion.jpg', 'seal.jpg'],
  ['oryx.jpg', 'gorilla.jpg', 'alligator.jpg', 'meerkat.jpg', 'hippo.jpg', 'seal.jpg', 'whale.jpg', 'snake.jpg', 'panda.jpg', 'yoda.webp', 'monkey.jpg', 'dog.jpg', 'chicken.jpg', 'bear.png', 'cat.jpg', 'kangaroo.jpg'],
  ['koala.jpg', 'orca.jpg', 'tropicbird.jpg', 'elephant.jpg', 'penguin.jpg', 'pig.jpg', 'kangaroo.jpg', 'snake.jpg', 'arcticwolf.jpg', 'cat.jpg', 'antelope.png', 'monkey.jpg', 'chicken.jpg', 'dog.jpg', 'hare.png', 'seal.jpg'],
  ['cat.jpg', 'macaque.jpg', 'koala.jpg', 'fox.jpg', 'bear.png', 'angelfish.jpg', 'pony.jpg', 'panda.jpg', 'monkey.jpg', 'tiger.jpg', 'yoda.webp', 'penguin.jpg', 'lion.jpg', 'coyote.jpeg', 'chimpanzee.jpg', 'bat.jpg'],
  ['tiger.jpg', 'pig.jpg', 'skunk.jpg', 'hippo.jpg', 'yoda.webp', 'porcupine.jpg', 'antelope.png', 'hare.png', 'lion.jpg', 'kangaroo.jpg', 'human.webp', 'orca.jpg', 'gorilla.jpg', 'sloth.jpg', 'snake.jpg', 'whale.jpg'],
  ['whale.jpg', 'sloth.jpg', 'cat.jpg', 'skunk.jpg', 'monkey.jpg', 'gorilla.jpg', 'yoda.webp', 'koala.jpg', 'giraffe.jpg', 'sugar_glider.jpg', 'orca.jpg', 'porcupine.jpg', 'tropicbird.jpg', 'panda.jpg', 'fox.jpg', 'ant.jpg'],
  ['turtle.jpg', 'cat.jpg', 'cow.jpg', 'panda.jpg', 'chicken.jpg', 'elephant.jpg', 'coyote.jpeg', 'seal.jpg', 'robot.jpg', 'cheetah.jpg', 'duck.jpg', 'snake.jpg', 'kangaroo.jpg', 'meerkat.jpg', 'koala.jpg', 'elephant.png'],
  ['antelope.png', 'pig.jpg', 'vulture.jpeg', 'penguin.jpg', 'tiger.jpg', 'chicken.jpg', 'kangaroo.jpg', 'robot.jpg', 'chimpanzee.jpg', 'fox.jpg', 'orca.jpg', 'sugar_glider.jpg', 'skunk.jpg', 'alligator.jpg', 'cheetah.jpg', 'oryx.jpg'],
  ['human.webp', 'whale.jpg', 'gorilla.jpg', 'porcupine.jpg', 'baldeagle.jpg', 'panda.jpg', 'tiger.jpg', 'hare.png', 'lamb.jpg', 'dog.jpg', 'yoda.webp', 'ant.jpg', 'seal.jpg', 'antelope.png', 'elephant.jpg', 'koala.jpg'],
  ['alligator.jpg', 'porcupine.jpg', 'cow.jpg', 'raccoon.jpg', 'macaque.jpg', 'dog.jpg', 'angelfish.jpg', 'gorilla.jpg', 'oryx.jpg', 'vulture.jpeg', 'orca.jpg', 'chicken.jpg', 'zebra.png', 'coyote.jpeg', 'duck.jpg', 'ant.jpg'],
  ['whale.jpg', 'coyote.jpeg', 'bear.png', 'turtle.jpg', 'elephant.png', 'cow.jpg', 'chicken.jpg', 'orca.jpg', 'hare.png', 'giraffe.jpg', 'penguin.jpg', 'baldeagle.jpg', 'pig.jpg', 'gorilla.jpg', 'pony.jpg', 'hippo.jpg'],
  ['koala.jpg', 'coyote.jpeg', 'yoda.webp', 'giraffe.jpg', 'raccoon.jpg', 'meerkat.jpg', 'angelfish.jpg', 'hippo.jpg', 'orca.jpg', 'vulture.jpeg', 'oryx.jpg', 'baldeagle.jpg', 'cheetah.jpg', 'monkey.jpg', 'penguin.jpg', 'gorilla.jpg'],
]


function choose_index(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return index;
}


function getBoard() {
  let boardId = window?.sessionStorage?.getItem("boardId");
  if (!boardId) {
    boardId = choose_index(BOARDS);
    window?.sessionStorage?.setItem("boardId", boardId)
  } else {
    boardId = +boardId;
  }

  return BOARDS[boardId];
}


function App() {
  const board = getBoard()

  return (
    <Board images={board} />
  );
}

export default App;
