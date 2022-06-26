import Handler from "@/application/handler/handler"
import DomainEvent from "@/domain/event/domain-event"

export default class Mediator {
  handlers: Handler[]

  constructor () {
    this.handlers = []
  }

  register (handler: Handler) {
    this.handlers.push(handler)
  }

  publish (event: DomainEvent) {
    for (const handler of this.handlers) {
      if (handler.eventName === event.name) {
        handler.handle(event)
      }
    }
  }
}