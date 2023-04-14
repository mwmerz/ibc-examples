import { Logger } from "../src/utils/logger";

describe("Logger utility", () => {
  let logger: Logger;
  let consoleLogSpy: jest.SpyInstance;
  let consoleErrorSpy: jest.SpyInstance;
  let consoleDebugSpy: jest.SpyInstance;
  let consoleWarnSpy: jest.SpyInstance;

  beforeEach(() => {
    logger = new Logger();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
    consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();
    consoleDebugSpy = jest.spyOn(console, "debug").mockImplementation();
    consoleWarnSpy = jest.spyOn(console, "warn").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
    consoleErrorSpy.mockRestore();
    consoleDebugSpy.mockRestore();
    consoleWarnSpy.mockRestore();
  });

  test("log() should call console.log with a formatted message", () => {
    const message = "Test log message";
    logger.log(message);

    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      expect.stringContaining(`[INFO] ${message}`)
    );
  });

  test("error() should call console.error with a formatted message", () => {
    const message = "Test error message";
    logger.error(message);

    expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      expect.stringContaining(`[ERROR] ${message}`)
    );
  });

  test("debug() should call console.debug with a formatted message", () => {
    const message = "Test debug message";
    logger.debug(message);

    expect(consoleDebugSpy).toHaveBeenCalledTimes(1);
    expect(consoleDebugSpy).toHaveBeenCalledWith(
      expect.stringContaining(`[DEBUG] ${message}`)
    );
  });

  test("warn() should call console.warn with a formatted message", () => {
    const message = "Test warning message";
    logger.warn(message);

    expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      expect.stringContaining(`[WARN] ${message}`)
    );
  });
});
