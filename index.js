class ExternalLink extends HTMLAnchorElement {
    connectedCallback () {
        this.setAttribute('target', '_blank')
        this.setAttribute('rel', 'nofollow noopener noreferrer')        
    }
}

class LiveTimer extends HTMLElement {
    template = `
        <style>
            output:not(:empty) + span::before {
                display: inline;
                content: ' — ';
            }
        </style>

        <output role="timer" aria-atomic="false" aria-live="off"></output>
        <span>We are here</span>
    `

    getTime = () => {
        const dateString = new Date().toISOString()
        const date = dateString.slice(0, 10)
        const time = dateString.slice(11, 19)
        const clock = `${date}, ${time}`

        if (/\d\d\d\d\-\d\d\-\d\d, \d\d:\d\d:\d\d/gm.test(clock)) {
            return clock
        }
    }

    connectedCallback () {
        this.attachShadow({
            mode: 'open'
        })

        this.shadowRoot.innerHTML = this.template

        const output = this.shadowRoot.querySelector('output')

        const update = () => {
            if (!output) return
            const time = this.getTime()
            if (!time) return

            output.innerHTML = time
        }

        setInterval(update, 1000)
        update()
    }
}

customElements.define('external-link', ExternalLink, {
    extends: 'a'
})

customElements.define('live-timer', LiveTimer)
