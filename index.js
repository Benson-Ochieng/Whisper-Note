const { hash } = window.location;

const message = atob(hash.replace('#', ''));

if (message) {
    document.querySelector('#message').classList.add('hide');
    document.querySelector('#message-shown').classList.remove('hide');

    document.querySelector('h1').innerHTML = message;
}

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    document.querySelector('#message').classList.add('hide');
    document.querySelector('#link').classList.remove('hide');

    const input = document.querySelector('#message-input');
    const encrypted = btoa(input.value);

    const linkInput = document.querySelector('#link-input');
    linkInput.value = `${window.location}#${encrypted}`;
    linkInput.select();
});