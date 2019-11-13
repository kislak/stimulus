import { Controller } from "stimulus"

export default class extends Controller {
    connect() {
        this.load()
        if (this.data.has("refreshInterval")) {
            this.startRefreshing()
        }
    }

    load(){
        fetch(this.data.get("url"))
            .then(response => response.text())
            .then(html => {
                this.element.innerHTML = html
            })
    }

    disconnect() {
        this.stopRefreshing()
    }

    startRefreshing(){
        setInterval(() => {
            this.load()
        }, this.data.get("refreshInterval"))
    }

    stopRefreshing() {
        if (this.refreshTimer) {
            clearInterval(this.refreshTimer)
        }
    }
}