import '../styles/index.scss';

import Theatre from 'theatre';

const project = Theatre.getProject('Test project');

const timeline = project.getTimeline('Main timeline');

const nBall = document.querySelector('.ball');
const ball = timeline.getObject('Ball', nBall, {
  props: {
    y: {
      type: 'number'
    },
    stretch: {
      type: 'number'
    }
  }
});

ball.onValuesChange(newValues => {
  nBall.style.transform = `translateY(${-newValues.y}px) 
                           scaleY(${newValues.stretch}) 
                           scaleX(${1 / newValues.stretch})`;
});
