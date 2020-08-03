const voteButtonEl = document.querySelectorAll('.vote-btn')

for (let i = 0; i < voteButtonEl.length; i++) {
    voteButtonEl[i].addEventListener('click', () => {
        window.location.href = '/'
    })
}


