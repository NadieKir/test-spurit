const ANIMATION_DURATION = 200;

const ANIMATION_OPTIONS = {
  fill: 'forwards',
  duration: ANIMATION_DURATION
};

const collapsibleButton = document.querySelector('.collapsible__button'),
      collapsibleContent = document.querySelector('.collapsible__content'),
      buttonTitleVisible = document.querySelector('.collapsible__action--visible'),
      buttonTitleHidden = document.querySelector('.collapsible__action--hidden');

const hideContentKeyframes = [
        { opacity: 1 },
        { opacity: 0 }
      ],
      showContentKeyframes = [
        { opacity: 0 },
        { opacity: 1 }
      ];      


buttonTitleHidden.style.display = 'none';
let isContentVisible = true;

function hideContent() {
  collapsibleContent.style.display = 'none';
}

collapsibleButton.addEventListener('click', () => {
  if(isContentVisible) {
    buttonTitleVisible.style.display = 'none';
    buttonTitleHidden.style.display = 'block';

    const hideContentAnimation = collapsibleContent.animate(hideContentKeyframes, ANIMATION_OPTIONS);
    hideContentAnimation.onfinish = hideContent;

    isContentVisible = false;

    return;
  }

  buttonTitleVisible.style.display = 'block';
  buttonTitleHidden.style.display = 'none';

  collapsibleContent.style.display = 'block';
  collapsibleContent.animate(showContentKeyframes, ANIMATION_OPTIONS);
  
  isContentVisible = true;
})
