abstract class QfuError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "QfuError"
  }
}

export class UnknownPlatformError extends QfuError {
  constructor() {
    super("Unknown platform. Supported platforms are: Node.js, Deno, Browser, and Bun")
  }
}
