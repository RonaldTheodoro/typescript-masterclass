const elem = document.querySelector('.click');

function handleClick(this: HTMLAnchorElement, event: Event): void {
  event.preventDefault();
  console.log(this.href);
  console.log(this.className);
}

elem?.addEventListener('click', handleClick, false);