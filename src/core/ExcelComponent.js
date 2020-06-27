import {DomListener} from "@core/DomListener";

export class ExcelComponent extends DomListener {

    constructor($root, options = {}) {
        super($root, options.listeners);
        this.name = options.name  || ''
        this.emitter = options.emitter
        this.unsubscribes = []

        this.prepare()
    }
    // Настраиваем наш компонент до init
    prepare() {
        console.log('prepare')
    }

    // Возвращает шаблон компонента
    toHTML() {
        return ''
    }
    // Инициализируем компонент
    init() {
        this.initDOMListeners()
        console.log('init')
    }

    //Уведомляем слушателей про событие event
    $emit(event, ...args) {
        this.emitter.emit(event, ...args)
    }
    // Подписываемcя на событие e
    $on(event, fn) {
        const unsub = this.emitter.subscribe(event, fn)
        this.unsubscribes.push(unsub)
    }


    destroy() {
        this.removeDOMListeners()
        this.unsubscribes.forEach(unsub => unsub())
    }
}