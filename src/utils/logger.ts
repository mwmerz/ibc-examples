export class Logger {
  private getTimeStamp(): string {
    return new Date().toISOString();
  }

  logObject(message: string, object: object | string, formatted = true): void {
    console.log(
      `[${this.getTimeStamp()}] [INFO] ${message} `,
      formatted ? JSON.stringify(object, null, 2) : object
    );
  }

  log(message: string): void {
    console.log(`[${this.getTimeStamp()}] [INFO] ${message}`);
  }

  error(message: string): void {
    console.error(`[${this.getTimeStamp()}] [ERROR] ${message}`);
  }

  debug(message: string): void {
    console.debug(`[${this.getTimeStamp()}] [DEBUG] ${message}`);
  }

  warn(message: string): void {
    console.warn(`[${this.getTimeStamp()}] [WARN] ${message}`);
  }
}
